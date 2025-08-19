// src/components/SearchBar.jsx
export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#653332]"
      />
    </div>
  );
}
