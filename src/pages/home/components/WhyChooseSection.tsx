
import { Link } from 'react-router-dom';

const WhyChooseSection = () => {
  const benefits = [
    {
      icon: 'ri-map-pin-2-fill',
      title: 'Lokale expertise',
      description: 'Wij kennen de <strong>Tilburgse markt</strong> en weten hoe <strong>lokale SEO</strong> werkt in de regio'
    },
    {
      icon: 'ri-line-chart-fill',
      title: 'Data-gedreven aanpak',
      description: 'Alle strategieën zijn gebaseerd op <strong>concrete data</strong> en <strong>meetbare resultaten</strong>'
    },
    {
      icon: 'ri-team-fill',
      title: 'Persoonlijke begeleiding',
      description: '<em>Direct contact</em> met ons team, <em>geen tussenpersonen of callcenters</em>'
    },
    {
      icon: 'ri-focus-3-fill',
      title: 'Toegewijd aan uw succes',
      description: '<strong>Resultaatgerichte aanpak</strong> met duidelijke doelen voor uw <strong>lokale zichtbaarheid</strong>'
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#f8f8f8' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Waarom kiezen voor{' '}
              <span style={{ color: '#dcc8c2' }}>Lokale SEO?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Als <strong>lokaal SEO-bureau</strong> in <strong>Tilburg</strong> begrijpen wij de uitdagingen van <strong>lokale ondernemers</strong>. 
              Wij combineren <em>technische expertise</em> met <strong>lokale marktkennis</strong> om uw bedrijf beter vindbaar te maken.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#dcc8c2' }}>
                    <i className={`${benefit.icon} text-xl text-black`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: benefit.description }}>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/over-ons"
                className="inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all cursor-pointer whitespace-nowrap text-white bg-black hover:bg-gray-800"
              >
                Meer over ons
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/workspace.jpg"
              alt="SEO team aan het werk"
              className="rounded-lg shadow-lg object-cover w-full h-96"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
