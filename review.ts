export interface Review {
  id: string;
  title: string;
  image: string;
  rating: number;
  category: string;
  categoryColor: 'blue' | 'green' | 'purple' | 'red';
  description: string;
  fullReview?: string;
}