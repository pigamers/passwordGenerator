// import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="max-w-xl mx-auto">
        <div className="flex flex-row justify-center items-center">
          <input type="text" id="small-input" className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-400 text-xs" />
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">copy</button>
        </div>
      </div>
    </>
  )
}

export default App
