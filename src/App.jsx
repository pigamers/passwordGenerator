import { useState } from 'react'

function App() {
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)


  return (
    <>
      <div className="mx-auto w-2/5 my-5">
        <h1 className="text-4xl text-center text-white my-5">Password Generator</h1>
        <div className="relative">
          <input type="text" className="flex flex-row w-full p-4 text-lg border border-gray-300 rounded-lg" />
          <button type="submit" className="text-white absolute right-0 bottom-0 top-0 bg-blue-700 hover:bg-blue-800 font-medium rounded-tr-lg rounded-br-lg text-lg px-6 py-2 ">copy</button>
        </div>
        <div className="flex flex-row items-center gap-5 justify-center">
          <input type="range" min={10} max={100} value={length} className="my-7" />
          <label className="text-white text-lg">Length:</label>
          <div>
            <input defaultChecked={numbersAllowed} id="numbers-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" onChange={() => setNumbersAllowed(!numbersAllowed)} />
            <label for="checked-checkbox" className="ms-2 text-lg font-medium text-white">Numbers</label>
          </div>
          <div>
            <input defaultChecked={charactersAllowed} id="characters-checkbox" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" onChange={() => setCharactersAllowed(!charactersAllowed)} />
            <label for="checked-checkbox" className="ms-2 text-lg font-medium text-white">Characters</label>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
