import { Heart } from "lucide-react";
import { ProductBreadCrumb } from "./product-breadcrumb";
import { useState } from "react";

export default function ProductCard({ productBox, buttonAdd = "Add to Cart", buttonBuy = "Buy Now"  }) {
    
    const [Wishlist, setWishlist] = useState(false);
    
    
    return (
        <div className="group relative flex h-full flex-col overflow-hidden rounded-md shadow hover:shadow-lg transition-shadow bg-white">
            {/* Wishlist Button */}
            <button
                onClick={() => setWishlist(!Wishlist)}
                className={`absolute right-4 top-4 z-10 rounded-full bg-white p-2 cursor-pointer shadow transition-colors ${
                Wishlist ? "text-black" : "text-gray-900 hover:text-gray-700"
                }`}
                aria-label="Add to Wishlist"
            >
                <Heart size={16} fill={Wishlist ? "black" : "none"} />
            </button>

            {/* Product Image */}
            {productBox.img ? (
            <img className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-72" 
                src={productBox.img} 
                alt={productBox.alt || "Product Image"} 
            />
            ) : (
                <div className="bg-gray-200 w-full h-48 flex items-center justify-center text-sm text-gray-500 rounded-md">
                    No image uploaded
                </div>
            )}

            {/* Product Details */}
            <div className="p-4 border-t border-gray-200 space-y-2">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">{productBox.name}</h3>
                    <div className="text-right">
                        <p className="text-gray-900 font-semibold text-lg">${productBox.discountPrice}</p>
                        <p className="text-sm text-gray-400 line-through">${productBox.price}</p>
                    </div>
                </div>

                {/* Brand and Category */}
                <ProductBreadCrumb
                    category={productBox.category}
                    brand={productBox.brand}
                />

                {/* Description */}
                <p className="text-gray-700 text-sm line-clamp-3 mb-4">
                {productBox.description}
                </p>

                {/* Actions */}
                <div className="mt-auto grid grid-cols-2 gap-2 pt-2">
                    <button className="w-full rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition hover:scale-105">
                        {buttonAdd}
                    </button>
                    <button className="w-full rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:scale-105">
                        {buttonBuy}
                    </button>
                </div>
            </div>
        </div>
    );
}