import { useState } from 'react'

interface Props {
  onGenerate: (data: { name: string; features: string; category: string }) => void
}

function InputForm({ onGenerate }: Props) {
  const [name, setName] = useState("UltraGlow Facial Cleanser")
  const [features, setFeatures] = useState("Aloe Vera, Paraben-free, 120ml tube")
  const [category, setCategory] = useState("Skincare product")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onGenerate({ name, features, category })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Product Features"
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Product Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Generate
      </button>
    </form>
  )
}

export default InputForm
