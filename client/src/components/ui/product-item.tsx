import { Heart } from "lucide-react";
import { ProductBreadCrumb } from "./product-breadcrumb";
import { useState } from "react";

const Items =[
    {
        'img': 'https://example.com/images/handbag1.jpg',
        'alt': 'Elegant black leather handbag',
        'name': 'Classic Leather Handbag',
        'brand': 'LuxeCarry',
        'category': 'Handbags',
        'description': 'A sophisticated black leather handbag with gold-tone hardware, ideal for daily and formal occasions.',
        'price': 129.99,
        'discountPrice': 99.99
    },
    {
        'img': 'https://example.com/images/handbag2.jpg',
        'alt': 'Beige tote bag',
        'name': 'Minimalist Tote Bag',
        'brand': 'UrbanCraft',
        'category': 'Handbags',
        'description': 'A spacious beige tote bag made from eco-friendly materials, perfect for work or casual outings.',
        'price': 89.99,
        'discountPrice': 69.99
    },
    {
        'img': 'https://example.com/images/dress1.jpg',
        'alt': 'Floral print summer dress',
        'name': 'Floral Midi Dress',
        'brand': 'BlossomWear',
        'category': 'Dresses',
        'description': 'A flowy and comfortable dress with vibrant floral prints, designed for sunny days and casual events.',
        'price': 74.99,
        'discountPrice': 59.99
    },
    {
        'img': 'https://example.com/images/dress2.jpg',
        'alt': 'Red evening dress',
        'name': 'Elegant Evening Dress',
        'brand': 'GlamEssence',
        'category': 'Dresses',
        'description': 'A red evening dress with a flattering silhouette and soft satin finish, ideal for formal gatherings.',
        'price': 159.99,
        'discountPrice': 129.99
    },
    {
        'img': 'https://example.com/images/jacket1.jpg',
        'alt': 'Black leather biker jacket',
        'name': 'Biker Leather Jacket',
        'brand': 'UrbanEdge',
        'category': 'Jackets',
        'description': 'A bold and edgy biker jacket crafted from genuine leather with zip-up styling and snap lapels.',
        'price': 199.99,
        'discountPrice': 169.99
    },
    {
        'img': 'https://example.com/images/jacket2.jpg',
        'alt': 'Beige trench coat',
        'name': 'Classic Trench Coat',
        'brand': 'MetroStyle',
        'category': 'Jackets',
        'description': 'A timeless beige trench coat with a belted waist and water-resistant finish, perfect for city wear.',
        'price': 139.99,
        'discountPrice': 109.99
    },
    {
        'img': 'https://example.com/images/loafers1.jpg',
        'alt': 'Brown suede penny loafers',
        'name': 'Suede Penny Loafers',
        'brand': 'StepRight',
        'category': 'Loafers',
        'description': 'Comfortable brown suede loafers with cushioned insoles and a classic penny slot detail.',
        'price': 99.99,
        'discountPrice': 79.99
    },
    {
        'img': 'https://example.com/images/loafers2.jpg',
        'alt': 'Black leather tassel loafers',
        'name': 'Tassel Leather Loafers',
        'brand': 'Forman',
        'category': 'Loafers',
        'description': 'Polished black leather loafers with tassel accents, perfect for business and semi-formal looks.',
        'price': 119.99,
        'discountPrice': 94.99
    },
    {
        'img': 'https://example.com/images/sunglasses1.jpg',
        'alt': 'Round retro sunglasses',
        'name': 'Retro Round Sunglasses',
        'brand': 'SunRayz',
        'category': 'Sunglasses',
        'description': 'Timeless round-frame sunglasses with a vintage look and UV-protected lenses.',
        'price': 49.99,
        'discountPrice': 39.99
    },
    {
        'img': 'https://example.com/images/sunglasses2.jpg',
        'alt': 'Cat-eye sunglasses',
        'name': 'Cat-Eye Designer Shades',
        'brand': 'Visioné',
        'category': 'Sunglasses',
        'description': 'Stylish cat-eye sunglasses that offer both elegance and full sun protection for fashion-forward wearers.',
        'price': 64.99,
        'discountPrice': 51.99
    },
    {
        'img': 'https://example.com/images/longsleeve1.jpg',
        'alt': 'White cotton long sleeve tee',
        'name': 'Essential Long Sleeve Tee',
        'brand': 'CozyFit',
        'category': 'Longsleeves',
        'description': 'Soft cotton long sleeve shirt with a classic fit, great for layering or wearing on its own.',
        'price': 34.99,
        'discountPrice': 24.99
    },
    {
        'img': 'https://example.com/images/longsleeve2.jpg',
        'alt': 'Striped long sleeve shirt',
        'name': 'Striped Crew Neck Shirt',
        'brand': 'DailyLayer',
        'category': 'Longsleeves',
        'description': 'A casual striped long sleeve tee with a lightweight feel and a modern silhouette.',
        'price': 39.99,
        'discountPrice': 29.99
    }
]

export default function ProductCard({ productBox }) {
    
    const [Wishlist, setWishlist] = useState(false);
    
    
    return (
        <div className="group relative flex h-full flex-col overflow-hidden rounded-md shadow hover:shadow-lg transition-shadow bg-white">
            {/* Wishlist Button */}
            <button
                onClick={() => setWishlist(!Wishlist)}
                className={`absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow transition-colors ${
                Wishlist ? "text-black" : "text-gray-900 hover:text-gray-700"
                }`}
                aria-label="Add to Wishlist"
            >
                <Heart size={16} fill={Wishlist ? "black" : "none"} />
            </button>

            {/* Product Image */}
            <img
                src={productBox.img}
                alt={productBox.alt}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-72"
            />

            {/* Product Details */}
            <div className="p-4 border-t border-gray-200 space-y-2">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">{productBox.name}</h3>
                    <div className="text-right">
                        <p className="text-gray-900 font-semibold text-sm">${productBox.discountPrice}</p>
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
                        Add to Cart
                    </button>
                    <button className="w-full rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:scale-105">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}