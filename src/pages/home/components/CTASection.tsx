
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/cta-bg.jpg')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Klaar om beter gevonden te worden in <strong>Tilburg</strong>?
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Start vandaag nog met het verbeteren van uw <strong>lokale zichtbaarheid</strong>. 
          Ontvang een <strong>gratis SEO-analyse</strong> van uw huidige positie en ontdek de mogelijkheden.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="px-8 py-4 rounded-lg font-semibold text-lg cursor-pointer whitespace-nowrap transition-all text-black"
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
          <a
            href="tel:0852502834"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-colors cursor-pointer whitespace-nowrap"
          >
            Bel direct: 085 250 2834
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
