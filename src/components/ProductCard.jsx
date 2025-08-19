// src/components/ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-[#653332]">{product.name}</h3>
        <p className="text-gray-700 text-sm">{product.category}</p>
        <p className="font-bold text-[#653332] mt-2">${product.price}</p>
      </div>
    </div>
  );
}
