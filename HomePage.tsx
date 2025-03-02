import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedReview from '../components/FeaturedReview';
import { getFeaturedReviews, getLatestReviews } from '../utils/reviewUtils';

export default function HomePage() {
  const featuredReviews = getFeaturedReviews();
  const latestReviews = getLatestReviews();

  return (
    <>
      <Hero />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredReviews.map((review) => (
            <FeaturedReview key={review.id} {...review} />
          ))}
        </div>
        
        <section className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Reviews</h2>
            <Link to="/categories" className="text-blue-600 hover:text-blue-700">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestReviews.map((review) => (
              <FeaturedReview key={`latest-${review.id}`} {...review} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}