import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count < 20) setCount(count + 1);
  };

  const remValue = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient from-indigo-600 via-purple-600 to-pink-500 p-5 bg-gray-500 ">
      <div className="w-full max-w-md rounded-3xl  backdrop-blur-xl border border-white/30 shadow-2xl p-8 text-center bg-cyan-400">

        {/* Counter Logo */}
        <img
          src="https://img.icons8.com/fluency/96/counter.png"
          alt="Counter"
          className="w-24 h-24 mx-auto mb-5 drop-shadow-lg"
        />

        <h2 className="text-3xl font-bold text-white mb-2">
          Counter App
        </h2>

        <p className="text-white/80 mb-6">
          React + Tailwind CSS
        </p>

        {/* Counter Display */}
        <div className="bg-black/20 rounded-2xl py-6 mb-6">
          <h1 className="text-6xl font-extrabold text-yellow-300">
            {count}
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={addValue}
            className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-300 text-white font-semibold shadow-lg"
          >
            ➕ Add
          </button>

          <button
            onClick={remValue}
            className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 active:scale-95 transition-all duration-300 text-white font-semibold shadow-lg"
          >
            ➖ Remove
          </button>
        </div>

        {/* Limit Message */}
        <p className="text-white/80 mt-6">
          Counter Range: <span className="font-bold text-yellow-300">0 - 20</span>
        </p>

      </div>
    </div>
  );
}

export default Counter;