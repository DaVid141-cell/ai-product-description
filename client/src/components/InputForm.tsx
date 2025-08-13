import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import axios from "axios";
import { Label } from "./ui/label";
import ProductCard from "./ui/product-item";
import { CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { toast, Toaster } from "sonner";
import { Textarea } from "./ui/textarea";

export default function InputForm() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [features, setFeatures] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("")
  const [discountPrice, setDiscountPrice] = useState("")
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imageURL, setImageURL] = useState("")

  useEffect(() => {
    if (!name.trim() || !brand.trim() || !features.trim() || !category.trim()) {
      setDescription("");
      return;
    }

    const timer = setTimeout(() => {
      generateDescription();
    }, 1500);

    return () => clearTimeout(timer);
  }, [name, brand, features, category]);

  const generateDescription = async () => {
    if (!name.trim() || !brand.trim() || !features.trim() || !category.trim()) {
      return;
  }
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/generate-description", {
        name,
        brand,
        features,
        category,
      });
      setDescription(res.data.description);
    } catch (err) {
      setDescription("An error occurred while generating the description.");
    } finally {
      setLoading(false);
    }
  };

  const parsedPrice = parseFloat(price) ||  0 
  const parsedDiscountPrice = parseFloat(discountPrice) || 0

  const productPreview = {
    img: imageURL,
    alt: name,
    name: name || "Product Name",
    brand: brand || "Brand Name",
    category: category || "Category",
    description: loading ? "Generating..." : description || "Product description will appear here.",
    price: parsedPrice,
    discountPrice: isNaN(parsedDiscountPrice) ? null : parsedDiscountPrice,
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mx-auto">
      <Toaster richColors position="top-right"/>
      {/* Left Section: Form */}
      <div className="flex-1 bg-background border rounded-lg shadow-sm p-6">
        <form className="flex flex-col gap-4">
          <div className="grid gap-2">
              <Label>Upload Image:</Label>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    setImageFile(file)
                    setImageURL(URL.createObjectURL(file))
                  }
                }}
              />
            </div>
          <div className="grid grid-cols-2 gap-4">

            <div className="grid gap-2">
              <Label>Product Name:</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Product Name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label>Brand:</Label>
              <Input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="Brand Name"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label>Price Tag:</Label>
              <Input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="79.99"
                required
                min="0"
                step="0.01"
              />
            </div>
            <div className="grid gap-2">
              <Label>Disccount Price: </Label>
              <Input
                type="text"
                value={discountPrice}
                onChange={(e) => setDiscountPrice(e.target.value)}
                placeholder="59.99"
                required
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label>Features:</Label>
            <Input
              type="text"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              placeholder="e.g. Smooth, Waterproof"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label>Category:</Label>
            <Input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Jackets, Dress"
              required
            />
          </div>

          <div className="grid gap-2">
            <Label>Product Description:</Label>
              <Textarea
                value={loading ? "Generating..." : (description) || "No description yet"}
                onChange={(e) => setDescription(e.target.value)}
                readOnly={loading}
                className="min-h-[100px]"
              />
          </div>
        </form>
        <div className="grid gap-2">
          <Button
          type="button"
          onClick={() => {
            toast.success('Product Created!')
            const productData = {
              name,
              brand,
              features,
              category,
              description,
              price: parseFloat(price),
              discountPrice: discountPrice ? parseFloat(discountPrice) : null,
              img: imageURL,
            }
            // Simulate API submission
            console.log("✅ Product Created:", productData)
          }}
          className="mt-4"
        >
          Create Product
        </Button>
        </div>
      </div>

      {/* Right Section: Preview Card */}
      <div className="w-full lg:max-w-sm">
            <CardContent className="flex h-full items-center justify-center p-2">
                <ProductCard productBox={productPreview} buttonAdd="Preview Only" buttonBuy="Buy Now" />
            </CardContent>
      </div>
    </div>
  );
}
