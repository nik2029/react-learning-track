import { useCallback, useEffect, useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const createPassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "@#$%&";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    createPassword();
  }, [createPassword]);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  };

  return (
    <div className="min-h-screen bg-gray-400 flex justify-center items-center">
      <div className="w-4500px bg-cyan-400 rounded-xl shadow-2xl p-6">

        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Password Generator
        </h1>

        {/* Password */}
        <div className="flex mb-6">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="flex-1 p-3 rounded-l-md outline-none bg-white text-black"
          />

          <button
            onClick={copyPassword}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-r-md transition"
          >
            Copy
          </button>
        </div>

        {/* Length */}
        <div className="mb-5">
          <input
            type="range"
            min={8}
            max={32}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-orange-500"
          />

          <p className="text-white mt-2">
            Length: <span className="text-black">{length}</span>
          </p>
        </div>

        {/* Checkboxes */}
        <div className="flex justify-between">

          <div className="flex items-center gap-2">
            <input
              id="numberInput"
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput" className="text-white">
              Include Numbers
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              id="charInput"
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput" className="text-white">
              Include Symbols
            </label>
          </div>

        </div>

      </div>
    </div>
  );
}