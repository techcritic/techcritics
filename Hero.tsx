
export default function Hero() {
  return (
    <div className="relative bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Honest Tech Reviews
            <span className="block text-blue-200">For Smart Decisions</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Unbiased reviews of the latest technology products. We help you make informed decisions about your next tech purchase.
          </p>
          <div className="mt-5 max-w-md mx-auto flex justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#featured" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10">
                Latest Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}