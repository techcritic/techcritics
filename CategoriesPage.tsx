import { Link } from "react-router-dom";
import CategoryBadge from "../components/CategoryBadge";
import { getCategoryCount } from "../utils/reviewUtils";

const categories: { name: string; color: "blue" | "green" | "purple" | "red" }[] = [
  { name: "Smartphones", color: "blue" },
  { name: "Laptops", color: "green" },
  { name: "Audio", color: "purple" },
  { name: "Cameras", color: "red" },
];

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const count = getCategoryCount(category.name);
          return (
            <Link
              key={category.name}
              to={`/category/${category.name.toLowerCase()}`}
              className="block group"
            >
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <CategoryBadge name={category.name} color={category.color} />
                  <span className="text-gray-600">{count} reviews</span>
                </div>
                <p className="text-gray-600 group-hover:text-blue-600 transition-colors">
                  Browse all {category.name.toLowerCase()} reviews →
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
