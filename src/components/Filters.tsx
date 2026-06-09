import { Search } from "lucide-react";

const categories = [
  "All Posts",
  "Destinations",
  "Travel Guides",
  "Experiences",
  "Tips & Advice"
];

export function Filters() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              index === 0
                ? "bg-[var(--color-brand)] text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:w-64 lg:w-80">
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full pl-5 pr-12 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:border-[var(--color-brand)] text-sm transition-colors"
        />
        <Search 
          size={18} 
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" 
        />
      </div>
    </section>
  );
}
