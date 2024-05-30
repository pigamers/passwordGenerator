import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numbersAllowed) str += "0123456789"
    if (charactersAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let charPos = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charPos);

    }

    setPassword(pass);

  }, [length, numbersAllowed, charactersAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);

  }, [password])

  useEffect(() => {
    generatePassword();
  }, [length, numbersAllowed, charactersAllowed, generatePassword])

  return (
    <>
      <div className="mx-auto w-2/5 my-5">
        <h1 className="text-4xl text-center text-white my-5">Password Generator</h1>
        <div className="relative">
          <input
            type="text"
            value={password}
            placeholder='Password'
            className="flex flex-row w-full p-4 text-lg border border-gray-300 rounded-lg"
            readOnly
            ref={passwordRef}
          />
          <button 
          type="submit" 
          className="text-white absolute right-0 bottom-0 top-0 bg-blue-700 hover:bg-blue-800 font-medium rounded-tr-lg rounded-br-lg text-lg px-6 py-2"
          onClick={copyPasswordToClipboard}
          >copy</button>
        </div>
        <div className="flex flex-row items-center gap-5 justify-center">
          <input
            type="range"
            min={5}
            max={100}
            value={length}
            className="my-7"
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label className="text-white text-lg">Length: {length}</label>
          <div>
            <input
              defaultChecked={numbersAllowed}
              id="numbers-checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              onChange={() => setNumbersAllowed(!numbersAllowed)} />
            <label htmlFor="checked-checkbox" className="ms-2 text-lg font-medium text-white">Numbers</label>
          </div>
          <div>
            <input
              defaultChecked={charactersAllowed}
              id="characters-checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
              onChange={() => setCharactersAllowed(!charactersAllowed)} />
            <label htmlFor="checked-checkbox" className="ms-2 text-lg font-medium text-white">Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
