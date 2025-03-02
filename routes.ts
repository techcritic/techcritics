import HomePage from './pages/HomePage';
import ReviewPage from './pages/ReviewPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/review/:id', component: ReviewPage },
  { path: '/categories', component: CategoriesPage },
  { path: '/category/:category', component: CategoryPage },
  { path: '/about', component: AboutPage },
  { path: '/contact', component: ContactPage },
  { path: '/privacy-policy', component: PrivacyPolicyPage },
];