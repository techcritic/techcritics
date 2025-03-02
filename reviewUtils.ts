import { reviews } from '../data/reviews';
import { Review } from '../types/review';

export function getFeaturedReviews(): Review[] {
  return [
    reviews.smartphones[0],
    reviews.laptops[0],
    reviews.audio[0],
  ];
}

export function getLatestReviews(): Review[] {
  return [
    reviews.smartphones[1],
    reviews.cameras[1],
  ];
}

export function getReviewById(id: string): Review | undefined {
  return Object.values(reviews)
    .flat()
    .find(review => review.id === id);
}

export function getReviewsByCategory(category: string): Review[] {
  const categoryKey = category.toLowerCase();
  return reviews[categoryKey as keyof typeof reviews] || [];
}

export function getCategoryCount(category: string): number {
  const categoryKey = category.toLowerCase();
  return reviews[categoryKey as keyof typeof reviews]?.length || 0;
}