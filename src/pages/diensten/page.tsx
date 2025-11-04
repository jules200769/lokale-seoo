
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';

const DienstenPage = () => {

  const packages = [
    {
      name: "Start",
      target: "Ondernemers die online beter vindbaar willen zijn op Google Maps",
      price: "€195",
      monthlyPrice: "€95",
      monthlyOptional: true,
      features: [
        "Google Business Profile (GBP) optimalisatie",
        "Reviewstrategie (handleiding + sjablonen)",
        "Citaties aanmaken (5–10 lokale vermeldingen)",
        "1 maand basisonderhoud (posts + foto's + rapportage)"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Groei",
      target: "Bedrijven die doorlopend willen bouwen aan hun lokale vindbaarheid",
      price: "€295",
      monthlyPrice: "€145",
      monthlyOptional: false,
      features: [
        "Alles uit het Startpakket",
        "Maandelijks onderhoud GBP (3 posts + 3 foto's + UTM-tracking)",
        "Extra citaties & backlinks",
        "1 lokale SEO-landingspagina (basisversie)",
        "Maandelijkse rapportage met inzichten"
      ],
      popular: true,
      color: "orange"
    },
    {
      name: "Pro",
      target: "Ambitieuze ondernemers of meerdere locaties",
      price: "€450",
      monthlyPrice: "€225",
      monthlyOptional: false,
      features: [
        "Alles uit het Groeipakket",
        "GBP-beheer voor 2 locaties",
        "Extra review-opvolging (automatisering mogelijk)",
        "2 SEO-landingspagina's (per locatie)",
        "Concurrentieanalyse"
      ],
      popular: false,
      color: "purple"
    }
  ];

  const websitePackages = [
    {
      name: "Start Website",
      target: "Voor ondernemers die eindelijk online zichtbaar willen zijn zonder ingewikkelde rommel.",
      description: "Een snelle, overzichtelijke website die vertrouwen wekt en klanten naar je toetrekt. Ideaal voor wie net begint en meteen professioneel wil overkomen.",
      oneTimePrice: "€495",
      startPrice: "€595",
      monthlyPrice: "€195",
      discount: "14%",
      features: [
        "Inclusief alle inbegrepen met het StartPakket als bundel:",
        "1 tot 3 pagina's (Home, Diensten, Contact)",
        "Mobielvriendelijk ontwerp",
        "Google Business-profiel koppeling",
        "SSL-beveiliging & contactformulier"
      ],
      perfectFor: "Perfect voor: zzp'ers, lokale winkels en kleine dienstverleners die hun eerste online klanten willen aantrekken.",
      popular: false,
      color: "blue"
    },
    {
      name: "Groei Website",
      target: "Voor bedrijven die hun lokale markt willen veroveren.",
      description: "Je krijgt een sterkere website die niet alleen mooi oogt, maar ook beter gevonden wordt. Gericht op groei, herkenbaarheid en vertrouwen.",
      oneTimePrice: "€895",
      startPrice: "€1.015",
      monthlyPrice: "€345",
      discount: "15%",
      features: [
        "Inclusief alle inbegrepen met het GroeiPakket als bundel:",
        "4 tot 6 pagina's (Home, Diensten, Over ons, Contact, Reviews, Blogoptie)",
        "Volledige lokale SEO-optimalisatie",
        "Snellere laadtijd en betere gebruikerservaring"
      ],
      perfectFor: "Perfect voor: groeiende bedrijven die meer aanvragen en zichtbaarheid willen in hun regio.",
      popular: false,
      color: "orange"
    },
    {
      name: "Pro Website",
      target: "Voor bedrijven die de lokale markt willen domineren en hun concurrenten willen verpulveren.",
      description: "Een op maat gemaakte website die is gebouwd op strategie, conversie en constante verbetering.",
      oneTimePrice: "€1.495",
      startPrice: "€1.645",
      monthlyPrice: "€525",
      discount: "15%",
      features: [
        "Inclusief alle inbegrepen met het ProPakket als bundel wordt gekocht:",
        "7+ pagina's (volledig maatwerk, inclusief landingspagina's en blogsectie)",
        "Geavanceerde SEO + maandelijkse optimalisatie",
        "Snelheid- en beveiligingsoptimalisatie",
        "Integratie met advertenties of externe tools"
      ],
      perfectFor: "Perfect voor: gevestigde bedrijven die een serieuze online autoriteit willen worden.",
      popular: false,
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-black mb-6">
              Onze <span style={{ color: '#dcc8c2' }}>Lokale SEO</span> Pakketten
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Kies het pakket dat het beste bij uw bedrijf past. Van startende ondernemers 
              tot ambitieuze bedrijven met meerdere locaties.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
                <span className="text-black font-semibold">✓ Geen verborgen kosten</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
                <span className="text-black font-semibold">✓ Maandelijks opzegbaar</span>
              </div>
              <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
                <span className="text-black font-semibold">✓ Resultaatgericht</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col ${
                  pkg.popular ? 'border-2 shadow-lg' : 'border border-gray-200 shadow-sm'
                }`}
                style={pkg.popular ? { borderColor: '#dcc8c2' } : {}}
              >
                {pkg.popular && (
                  <div className="text-center py-2 text-white font-semibold text-sm" style={{ backgroundColor: '#dcc8c2', color: '#000000' }}>
                    MEEST AANBEVOLEN
                  </div>
                )}
                <div className="p-8 flex flex-col h-full">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">{pkg.target}</p>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-black mb-2">
                        {pkg.price}
                        <span className="text-lg font-normal text-gray-600"> eerste maand</span>
                      </div>
                      {pkg.monthlyOptional ? (
                        <div className="text-lg text-gray-600">
                          (optioneel) <span className="font-bold italic">{pkg.monthlyPrice}</span> per maand
                        </div>
                      ) : (
                        <div className="text-lg text-gray-600">
                          vervolgens <span className="font-bold italic">{pkg.monthlyPrice}</span> per maand
                        </div>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 flex items-center justify-center rounded-full mt-0.5" style={{ backgroundColor: '#dcc8c2' }}>
                          <i className="ri-check-line text-black text-sm"></i>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link 
                      to="/contact" 
                      className="block w-full py-3 px-6 rounded-lg font-semibold transition-all whitespace-nowrap text-center bg-black text-white hover:bg-gray-800"
                    >
                      Pakket kiezen
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Packages Section */}
      <section className="py-20" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Onze <span style={{ color: '#dcc8c2' }}>Website</span> Pakketten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combineer een professionele website met lokale SEO voor maximale zichtbaarheid en resultaten
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {websitePackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col border border-gray-200 shadow-sm`}
              >
                {pkg.discount && (
                  <div className="text-center py-2 text-white font-semibold text-sm" style={{ backgroundColor: '#dcc8c2', color: '#000000' }}>
                    {pkg.discount} KORTING
                  </div>
                )}
                <div className="p-8 flex flex-col h-full">
                  <div className="text-center mb-8 flex flex-col" style={{ minHeight: '280px' }}>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-black mb-2">{pkg.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 font-semibold">{pkg.target}</p>
                      <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                    </div>
                    
                    <div className="mb-6" style={index === 0 ? { marginTop: '-1.5rem' } : {}}>
                      <div className="text-sm text-gray-500 mb-1">Eenmalig</div>
                      <div className="text-3xl font-bold text-black mb-2">
                        {pkg.oneTimePrice}
                      </div>
                      <div className="text-sm text-gray-500 mb-1">of</div>
                      <div className="text-lg font-semibold text-black mb-1">
                        Eerste maand {pkg.startPrice}
                      </div>
                      <div className="text-lg text-gray-600">
                        vervolgens <span className="font-bold italic">{pkg.monthlyPrice}</span> per maand
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-6 flex-grow">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 flex items-center justify-center rounded-full mt-0.5" style={{ backgroundColor: '#dcc8c2' }}>
                          <i className="ri-check-line text-black text-sm"></i>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <p className="text-gray-600 text-sm italic">{pkg.perfectFor}</p>
                  </div>

                  <div className="mt-auto">
                    <Link 
                      to="/contact" 
                      className="block w-full py-3 px-6 rounded-lg font-semibold transition-all whitespace-nowrap text-center bg-black text-white hover:bg-gray-800"
                    >
                      Pakket kiezen
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Hoe werkt het <span style={{ color: '#dcc8c2' }}>proces?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Van eerste contact tot meetbare resultaten in 4 eenvoudige stappen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Pakket Kiezen",
                description: "Kies het pakket dat het beste bij uw bedrijf en doelen past",
                icon: "ri-shopping-cart-line"
              },
              {
                step: "02",
                title: "Intake & Analyse",
                description: "Uitgebreide analyse van uw huidige online aanwezigheid en concurrentie",
                icon: "ri-search-2-line"
              },
              {
                step: "03",
                title: "Optimalisatie",
                description: "Systematische uitvoering van alle optimalisaties volgens uw gekozen pakket",
                icon: "ri-tools-line"
              },
              {
                step: "04",
                title: "Resultaten & Rapportage",
                description: "Maandelijkse rapportages en continue optimalisatie voor betere resultaten",
                icon: "ri-line-chart-line"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#dcc8c2' }}>
                    <i className={`${item.icon} text-2xl text-black`}></i>
                  </div>
                  <div className="text-3xl font-bold mb-4" style={{ color: '#dcc8c2' }}>{item.step}</div>
                  <h3 className="text-xl font-semibold text-black mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">
                Veelgestelde <span style={{ color: '#dcc8c2' }}>Vragen</span>
              </h2>
              <p className="text-xl text-gray-600">
                Antwoorden op de meest gestelde vragen over onze pakketten
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Kan ik mijn pakket later upgraden?",
                  answer: "Ja, u kunt altijd upgraden naar een hoger pakket. Het verschil wordt pro rata berekend."
                },
                {
                  question: "Hoe lang duurt het totdat ik resultaten zie?",
                  answer: "De eerste verbeteringen zijn vaak binnen 2-4 weken zichtbaar. Significante resultaten ziet u meestal na 2-3 maanden."
                },
                {
                  question: "Zijn er contractverplichtingen?",
                  answer: "Nee, alle pakketten zijn maandelijks opzegbaar. We geloven in resultaten, niet in contracten."
                },
                {
                  question: "Wat gebeurt er als ik stop met het pakket?",
                  answer: "Alle uitgevoerde optimalisaties blijven behouden. Alleen het maandelijkse onderhoud stopt."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-black mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-black relative"
        style={{
          backgroundImage: 'url(/images/cta-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Klaar om te starten?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Kies uw pakket en start vandaag nog met het verbeteren van uw lokale online zichtbaarheid.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-lg font-semibold transition-all whitespace-nowrap text-black"
              style={{ backgroundColor: '#dcc8c2' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#c9b3ab';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#dcc8c2';
              }}
            >
              Gratis adviesgesprek
            </Link>
            <a
              href="tel:0852502834"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
            >
              Bel ons: 085 250 28 34
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DienstenPage;
