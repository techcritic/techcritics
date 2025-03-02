import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';
import CategoryBadge from '../components/CategoryBadge';
import { getReviewById } from '../utils/reviewUtils';

export default function ReviewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const review = getReviewById(id || '');

  if (!review) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Review Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:text-blue-700"
          >
            ← Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={review.image} alt={review.title} className="w-full h-96 object-cover" />
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">{review.title}</h1>
            <CategoryBadge name={review.category} color={review.categoryColor} />
          </div>
          <Rating value={review.rating} />
          <div className="mt-8 prose prose-blue max-w-none">
            <p className="text-xl text-gray-600 mb-8">{review.description}</p>
            <div className="space-y-4">
              {review.fullReview?.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}