// src/components/Sidebar.jsx
export default function Sidebar({ categories, selected, onSelect }) {
  return (
    <div className="w-64 bg-white p-4 rounded-xl shadow-md">
      <h4 className="font-bold text-[#653332] mb-4">Categories</h4>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => onSelect(cat)}
            className={`cursor-pointer px-3 py-2 rounded-md hover:bg-[#653332]/10 ${
              selected === cat ? "bg-[#653332]/20 font-semibold" : ""
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}
