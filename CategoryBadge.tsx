interface CategoryBadgeProps {
  name: string;
  color?: "blue" | "green" | "purple" | "red";
}

export default function CategoryBadge({ name, color = "blue" }: CategoryBadgeProps) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
    red: "bg-red-100 text-red-800",
  };

  // Ensure color is a valid key, fallback to "blue"
  const appliedColor = colorClasses[color] ? color : "blue";

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[appliedColor]}`}>
      {name}
    </span>
  );
}
