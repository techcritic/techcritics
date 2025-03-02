import { useParams } from 'react-router-dom';
import { reviews } from '../data/reviews';
import FeaturedReview from '../components/FeaturedReview';

export default function CategoryPage() {
  const { category } = useParams();
  const categoryReviews = reviews[category as keyof typeof reviews] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 capitalize">
        {category} Reviews
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryReviews.map((review) => (
          <FeaturedReview key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
}