import { useState } from 'react'
import axios from 'axios'
import InputForm from './components/InputForm'

function App() {
  const [description, setDescription] = useState("")
  const handleGenerate = async (data: { name: string; features: string; category: string }) => {
    const res = await axios.post("http://localhost:5000/generate-description", data)
    setDescription(res.data.description)
  }

  return (
    <div className="p-8 font-sans flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">AI Product Description Generator</h1>
      <InputForm onGenerate={handleGenerate} />
      {description && (
        <div className="mt-6 p-4 border w-150 border-gray-300 rounded bg-gray-50">
          <h2 className="font-semibold mb-2">Generated Description:</h2>
          <p>{description}</p>
        </div>
      )}
    </div>
  )
}

export default App
