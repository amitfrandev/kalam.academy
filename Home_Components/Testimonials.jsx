export default function Testimonials() {
  return (
    <section id="testomonial" className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Our Journey & Events</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base md:text-lg">
          From 2016 to today, we have been empowering startups, launching initiatives, and transforming Ranchi’s digital ecosystem.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-bold text-xl sm:text-2xl mb-2">Startup Meet 1.0</h3>
            <p className="text-gray-600 text-sm md:text-base">Kalam Academy organised Ranchi Startup Meet in 2019 with aspiring entrepreneurs.</p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-bold text-xl sm:text-2xl mb-2">Creators Meet 1.0</h3>
            <p className="text-gray-600 text-sm md:text-base">In 2021, we gathered Ranchi’s digital creators to share experiences and build a creator ecosystem.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
