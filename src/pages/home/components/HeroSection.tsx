
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('/images/hero-bg.jpg')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Beter gevonden worden in{' '}
              <span style={{ color: '#dcc8c2' }}>Tilburg & omgeving</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Wij helpen <strong>lokale ondernemers</strong> zichtbaar te worden in <strong>Google Maps</strong> en <em>lokale zoekresultaten</em>. 
              <strong>Data-gedreven SEO strategieën</strong> die écht <em>resultaat opleveren</em>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-lg font-semibold text-lg text-center cursor-pointer whitespace-nowrap transition-all text-black"
                style={{ backgroundColor: '#dcc8c2' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#c9b3ab';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#dcc8c2';
                }}
              >
                Plan gratis kennismaking
              </Link>
              <Link
                to="/diensten"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors text-center cursor-pointer whitespace-nowrap"
              >
                Bekijk onze diensten
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            {/* Content area for image background */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
