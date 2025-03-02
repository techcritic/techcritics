import { Users, Award, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About TechCritic</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your trusted source for in-depth, unbiased technology reviews. We help you make informed decisions about your tech purchases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
          <p className="text-gray-600">Our reviewers have years of experience in tech journalism and product testing.</p>
        </div>
        <div className="text-center p-6">
          <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Unbiased Reviews</h3>
          <p className="text-gray-600">We purchase our review units independently to ensure honest, unbiased opinions.</p>
        </div>
        <div className="text-center p-6">
          <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Thorough Testing</h3>
          <p className="text-gray-600">Each product undergoes extensive testing before we publish our review.</p>
        </div>
      </div>
    </div>
  );
}