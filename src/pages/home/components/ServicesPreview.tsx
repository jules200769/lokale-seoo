
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    {
      icon: 'ri-google-fill',
      title: 'Google Business Profile',
      description: 'Optimalisatie van uw Google Bedrijfsprofiel voor maximale lokale zichtbaarheid',
      features: ['<strong>Profiel optimalisatie</strong>', '<strong>Foto\'s en content</strong>', '<strong>Review management</strong>']
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Lokale SEO',
      description: 'On-page optimalisatie en landingspagina\'s specifiek voor uw locatie',
      features: ['<strong>Zoekwoord onderzoek</strong>', '<strong>Content optimalisatie</strong>', '<strong>Technische SEO</strong>']
    },
    {
      icon: 'ri-links-fill',
      title: 'Citaties & Backlinks',
      description: 'Opbouw van sterke online autoriteit door kwalitatieve vermeldingen',
      features: ['<strong>Lokale directories</strong>', '<strong>Branche-specifieke sites</strong>', '<strong>Kwaliteitscontrole</strong>']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Onze{' '}
            <span style={{ color: '#dcc8c2' }}>SEO diensten</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wij bieden een compleet pakket aan lokale SEO diensten om uw bedrijf beter vindbaar te maken 
            in Tilburg en omgeving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#dcc8c2' }}>
                <i className={`${service.icon} text-3xl text-black`}></i>
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600" dangerouslySetInnerHTML={{ __html: `<i class="ri-check-line mr-2" style="color: #dcc8c2;"></i>${feature}` }}>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/diensten"
            className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg transition-all cursor-pointer whitespace-nowrap text-white bg-black hover:bg-gray-800"
          >
            Alle diensten bekijken
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
