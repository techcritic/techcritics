import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
  max?: number;
}

export default function Rating({ value, max = 5 }: RatingProps) {
  return (
    <div className="flex items-center">
      {[...Array(max)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < value ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-2 text-gray-600">{value}/{max}</span>
    </div>
  );
}