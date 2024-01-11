import React, { useState, useRef } from 'react';


// Main component
function App() {
  // State and ref initialization
  const [count, setCount] = useState(0);
  const previousCountsRef = useRef([]);

  // Handle increment function with animation
  const handleIncrement = () => {
    const newPreviousCounts = [...previousCountsRef.current, count];

    // Limit the array to a maximum of 8 numbers
    if (newPreviousCounts.length > 50) {
      newPreviousCounts.shift(); // Remove the oldest count
    }

    previousCountsRef.current = newPreviousCounts;
    setCount(count + 1);
  };

  // Handle reset function
  const handleReset = () => {
    previousCountsRef.current = [];
    setCount(0);
  };

  // Return the UI
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <p className="text-3xl font-bold mb-4">Counter App</p>
        <p className="text-lg mb-4">Current Count: {count} (max 25)</p>
        <p className="text-sm mb-4">Previous Counts: {previousCountsRef.current.join(', ')}</p>
        
        <button
          onClick={handleIncrement}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Increment
        </button>

        <button
          onClick={handleReset}
          className="ml-2  bg-white border border-gray-300 px-4 py-2 rounded hover:bg-red-500 transition duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

