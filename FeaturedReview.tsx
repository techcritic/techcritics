import { Link } from 'react-router-dom';
import Rating from './Rating';
import CategoryBadge from './CategoryBadge';

interface ReviewProps {
  id?: string;
  title: string;
  image: string;
  rating: number;
  description: string;
  category: string;
  categoryColor?: 'blue' | 'green' | 'purple' | 'red';
}

export default function FeaturedReview({ 
  id = '1',
  title, 
  image, 
  rating, 
  description, 
  category,
  categoryColor 
}: ReviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-4 right-4">
          <CategoryBadge name={category} color={categoryColor} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <Rating value={rating} />
        <p className="mt-4 text-gray-600 line-clamp-3">{description}</p>
        <Link 
          to={`/review/${id}`}
          className="mt-4 block w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-center"
        >
          Read Full Review
        </Link>
      </div>
    </div>
  );
}