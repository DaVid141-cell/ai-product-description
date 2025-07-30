import { Label } from '@radix-ui/react-label';
import { useState } from 'react'
import { Input } from './ui/input';

interface Props {
  onGenerate: (data: { name: string; features: string; category: string }) => void
}

export default function InputForm({ onGenerate }: Props) {
  const [name, setName] = useState("UltraGlow Facial Cleanser")
  const [features, setFeatures] = useState("Aloe Vera, Paraben-free, 120ml tube")
  const [category, setCategory] = useState("Skincare product")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onGenerate({ name, features, category })
  }

  return (
    <div className="bg-background w-150 rounded-lg border p-6">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label>Product Name:</Label>
                <Input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded"
                    required
                />
            </div>
            <div className="grid gap-2">
            <Label>Brand:</Label>
                <Input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded"
                    required
                />
            </div>
        </div>
        <div className="grid gap-2">
          <Label>Features:</Label>
          <Input
            type="text"
            placeholder="Product Features"
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            className="border p-2 rounded"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label>Category:</Label>
          <Input
            type="text"
            placeholder="Product Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded"
            required
          />
        </div>
        <div className='grid gap-2'>
          <Label>Product Description:</Label>
        </div>
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Generate
      </button>
    </form>
    </div>
  )
}
