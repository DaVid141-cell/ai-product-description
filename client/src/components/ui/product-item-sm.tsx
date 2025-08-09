export default function CompactProductCard({ productBox }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-1 p-2">
      <img
        src={productBox.img}
        alt={productBox.alt}
        className="w-30 h-30 object-cover rounded-full hover:scale-105 transition-transform duration-300"
      />
      <h3 className="text-md font-semibold truncate w-full">{productBox.name}</h3>
      <p className="text-[12px] text-gray-500 truncate w-full">{productBox.brand}</p>
      <span className="text-sm font-bold">${productBox.discountPrice}</span>
      <span className="text-xs text-gray-400 line-through">${productBox.price}</span>
    </div>
  );
}
