
const ProblemsSection = () => {
  const problems = [
    {
      icon: 'ri-search-line',
      title: 'Slecht vindbaar in Google',
      description: 'Uw bedrijf staat niet op de <em>eerste pagina</em> van <strong>Google zoekresultaten</strong>'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Geen zichtbaarheid in Google Maps',
      description: '<em>Lokale klanten</em> kunnen uw bedrijf niet vinden via <strong>Google Maps</strong>'
    },
    {
      icon: 'ri-star-line',
      title: 'Weinig of geen reviews',
      description: 'Gebrek aan positieve <strong>reviews</strong> schaadt uw <em>online reputatie</em>'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Geen duidelijke SEO-strategie',
      description: 'U weet niet hoe u uw <strong>online zichtbaarheid</strong> kunt verbeteren zonder een <strong>SEO-strategie</strong>'
    },
    {
      icon: 'ri-links-line',
      title: 'Zwakke backlink-profiel',
      description: 'Onvoldoende <em>kwalitatieve <strong>backlinks</strong></em> naar uw website'
    },
    {
      icon: 'ri-file-text-line',
      title: 'Gebrek aan lokale content',
      description: 'Uw website is niet <em>geoptimaliseerd</em> voor <strong>lokale zoektermen</strong>'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Herkent u deze{' '}
            <span style={{ color: '#dcc8c2' }}>SEO problemen?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Is uw bedrijf niet goed vindbaar in <strong>Google</strong>? Met <strong>techniek, content en linkbuilding</strong> zorgen wij ervoor 
            dat uw bedrijf op relevante zoektermen zichtbaar is in <strong>Google</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#dcc8c2' }}>
                <i className={`${problem.icon} text-2xl text-black`}></i>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: problem.description }}>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
