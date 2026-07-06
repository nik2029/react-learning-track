import { useState, useRef } from "react";
import "tailwindcss";

export default function TimerUsingHooks() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient from-indigo-600 via-purple-600 to-pink-500 p-5 bg-gray-500">
      <div className="w-full max-w-md rounded-3xl  backdrop-blur-xl border border-white/30 shadow-2xl p-8 text-center bg-cyan-400">

        {/* Timer Logo */}
        <img
          src="https://img.icons8.com/fluency/96/stopwatch.png"
          alt="Timer Logo"
          className="w-24 h-24 mx-auto mb-5 drop-shadow-lg"
        />

        <h2 className="text-3xl font-bold text-white mb-2">
          Stopwatch Timer
        </h2>

        <p className="text-white/80 mb-6">
          React Hooks Timer
        </p>

        {/* Timer */}
        <div className="bg-black/20 rounded-2xl py-6 mb-6">
          <h1 className="text-5xl font-extrabold text-yellow-300 tracking-wider">
            {secondsPassed.toFixed(3)} s
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handleStart}
            className="px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 active:scale-95 transition-all duration-300 text-white font-semibold shadow-lg"
          >
            ▶ Start
          </button>

          <button
            onClick={handleStop}
            className="px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 active:scale-95 transition-all duration-300 text-white font-semibold shadow-lg"
          >
            ■ Stop
          </button>
        </div>

      </div>
    </div>
  );
}