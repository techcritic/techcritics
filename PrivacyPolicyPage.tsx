
export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-blue max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-600">
            We collect information you provide directly to us, including when you create an account,
            subscribe to our newsletter, or contact us for support.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-gray-600">
            We use the information we collect to provide and improve our services,
            communicate with you, and ensure a better user experience.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
          <p className="text-gray-600">
            We do not sell or share your personal information with third parties
            except as described in this privacy policy.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="text-gray-600">
            We use cookies and similar technologies to collect information about your
            browsing behavior and preferences.
          </p>
        </section>
      </div>
    </div>
  );
}