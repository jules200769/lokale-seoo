
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import { supabase } from '../../lib/supabase';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
    websitePackage: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message?: string;
  }>({ type: 'idle' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Reset error status when user starts typing
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: 'idle' });
    }
  };

  // Email validation regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Form validation function
  const validateForm = (): string[] => {
    const errors: string[] = [];

    // Validate name
    if (!formData.name.trim()) {
      errors.push('Naam is verplicht');
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.push('E-mailadres is verplicht');
    } else if (!validateEmail(formData.email.trim())) {
      errors.push('E-mailadres is ongeldig. Controleer het formaat.');
    }

    // Validate message length
    if (formData.message.length > 500) {
      errors.push('Bericht is te lang (maximaal 500 karakters toegestaan)');
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      // Show first error or combine multiple errors
      const errorMessage = validationErrors.length === 1 
        ? validationErrors[0]
        : validationErrors.join(' • ');
      setSubmitStatus({ 
        type: 'error', 
        message: errorMessage 
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: 'idle' });

    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.message,
            service: formData.service,
            website_package: formData.websitePackage || null
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        console.error('Error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        // Toon specifieke foutmelding als beschikbaar, anders generieke melding
        const errorMessage = error.message || 'Er is een technische fout opgetreden. Probeer het later opnieuw.';
        setSubmitStatus({ 
          type: 'error', 
          message: errorMessage 
        });
      } else {
        setSubmitStatus({ type: 'success' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          service: '',
          websitePackage: ''
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Er is een technische fout opgetreden. Probeer het later opnieuw.';
      setSubmitStatus({ 
        type: 'error', 
        message: errorMessage 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneCall = () => {
    window.open('tel:0852502834', '_self');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hallo! Ik heb interesse in jullie lokale SEO diensten. Kunnen we een afspraak inplannen voor een kennismaking gesprek?');
    const phoneNumber = '31852502834';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-black mb-6">
              Neem <span style={{ color: '#dcc8c2' }}>Contact</span> Op
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Klaar om uw lokale online zichtbaarheid te verbeteren? Neem contact met ons op 
              voor een gratis SEO-check en persoonlijk adviesgesprek.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-black mb-6">
                Plan een gratis <span style={{ color: '#dcc8c2' }}>kennismaking</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Vul het formulier in en wij nemen binnen 24 uur contact met u op voor een 
                gratis SEO-check en persoonlijk adviesgesprek.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent text-sm"
                      style={{ 
                        focusRingColor: '#dcc8c2',
                        outlineColor: '#dcc8c2'
                      }}
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent text-sm"
                      placeholder="uw@email.nl"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent text-sm"
                      placeholder="06-12345678"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-black mb-2">
                      Bedrijfsnaam
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent text-sm"
                      placeholder="Uw bedrijfsnaam"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-black mb-2">
                    Kies uw pakket
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent text-sm appearance-none pr-8"
                    >
                      <option value="">Selecteer een pakket</option>
                      <option value="start-pakket">Start Pakket (€195 + €95/maand optioneel)</option>
                      <option value="groei-pakket">Groei Pakket (€295 + €145/maand)</option>
                      <option value="pro-pakket">Pro Pakket (€450 + €225/maand)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="websitePackage" className="block text-sm font-semibold text-black mb-2">
                    Kies een website pakket <span className="text-gray-500 font-normal">(optioneel)</span>
                  </label>
                  <div className="relative">
                    <select
                      id="websitePackage"
                      name="websitePackage"
                      value={formData.websitePackage}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent text-sm appearance-none pr-8"
                    >
                      <option value="">Selecteer een website pakket (optioneel)</option>
                      <option value="start-website">Start Website (€495 eenmalig / €595 start + €120/maand bundel)</option>
                      <option value="groei-website">Groei Website (€895 eenmalig / €1.015 start + €185/maand bundel)</option>
                      <option value="pro-website">Pro Website (€1.495 eenmalig / €1.645 start + €275/maand bundel)</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <i className="ri-arrow-down-s-line text-gray-400"></i>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent text-sm resize-none"
                    placeholder="Vertel ons over uw bedrijf en uw doelen met lokale SEO..."
                  ></textarea>
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.message.length}/500 karakters
                  </div>
                </div>

                {/* Status Messages */}
                {submitStatus.type === 'success' && (
                  <div className="rounded-lg p-4 border" style={{ backgroundColor: '#dcc8c2', borderColor: '#c9b3ab' }}>
                    <div className="flex items-center">
                      <i className="ri-check-circle-line text-black mr-2"></i>
                      <p className="text-black font-medium">
                        Bedankt! Uw aanvraag is succesvol verzonden. Wij nemen binnen 24 uur contact met u op.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus.type === 'error' && submitStatus.message && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <i className="ri-error-warning-line text-red-600 mr-2 mt-0.5"></i>
                      <div className="flex-1">
                        <p className="text-red-800 font-medium">
                          {submitStatus.message}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg font-semibold transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed bg-black text-white hover:bg-gray-800"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Bezig met verzenden...
                    </>
                  ) : (
                    'Verstuur aanvraag'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="rounded-2xl p-8 border border-gray-200" style={{ backgroundColor: '#f8f8f8' }}>
                <h3 className="text-2xl font-bold text-black mb-6">Contactgegevens</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#dcc8c2' }}>
                      <i className="ri-phone-line text-xl text-black"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Telefoon</h4>
                      <p className="text-gray-600">085 250 2834</p>
                      <p className="text-sm text-gray-500">Ma-di-vr-za-zo:
9:00 - 17:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#dcc8c2' }}>
                      <i className="ri-mail-line text-xl text-black"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">E-mail</h4>
                      <p className="text-gray-600">lokale.seo-013@outlook.com</p>
                      <p className="text-sm text-gray-500">Reactie binnen 24 uur</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#dcc8c2' }}>
                      <i className="ri-map-pin-line text-xl text-black"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Locatie</h4>
                      <p className="text-gray-600">Tilburg, Noord-Brabant</p>
                      <p className="text-sm text-gray-500">Lokale SEO specialist</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl p-8 border border-gray-200" style={{ backgroundColor: '#f8f8f8' }}>
                <h3 className="text-2xl font-bold text-black mb-6">Onze locatie</h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78234.89123456789!2d5.0647!3d51.5555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6ee6f8b5b5b5b%3A0x1234567890abcdef!2sTilburg%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1234567890123!5m2!1sen!2snl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Tilburg locatie"
                  ></iframe>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-black rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Direct contact</h3>
                <p className="text-gray-300 mb-6">
                  Heeft u een dringende vraag? Bel ons direct of stuur een WhatsApp bericht.
                </p>
                <div className="space-y-3">
                  <button 
                    onClick={handlePhoneCall}
                    className="w-full py-3 px-6 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer text-black"
                    style={{ backgroundColor: '#dcc8c2' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#c9b3ab';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#dcc8c2';
                    }}
                  >
                    <i className="ri-phone-line mr-2"></i>
                    Bel nu: 0852502834
                  </button>
                  <button 
                    onClick={handleWhatsApp}
                    className="w-full border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-whatsapp-line mr-2"></i>
                    WhatsApp ons
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ backgroundColor: '#f8f8f8' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">
                Veelgestelde <span style={{ color: '#dcc8c2' }}>Vragen</span>
              </h2>
              <p className="text-xl text-gray-600">
                Antwoorden op de meest gestelde vragen over onze diensten
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Hoe lang duurt het voordat ik resultaten zie?",
                  answer: "Lokale SEO resultaten zijn meestal binnen 3-6 maanden zichtbaar. Google Business Profile optimalisaties kunnen al binnen enkele weken effect hebben op uw zichtbaarheid in Google Maps."
                },
                {
                  question: "Wat kost een lokale SEO campagne?",
                  answer: "Onze prijzen zijn afhankelijk van uw specifieke behoeften en doelen. Wij bieden maatwerk pakketten vanaf €195 set-up fee en vervolgens €95pm. Neem contact op voor een persoonlijke offerte."
                },
                {
                  question: "Werken jullie alleen in Tilburg?",
                  answer: "Wij zijn op het moment vooral alleen gespecialiseerd in de omgeving Tilburg/013.Valt u er buiten? neem contact met ons op voor eventuele overeenkomsten."
                },
                {
                  question: "Krijg ik rapportages van de resultaten?",
                  answer: "Ja, u ontvangt maandelijkse rapportages met alle belangrijke metrics zoals rankings, website verkeer, Google Business Profile statistieken en conversies."
                },
                {
                  question: "Kan ik de samenwerking opzeggen?",
                  answer: "Onze contracten hebben een minimale looptijd van 3 maanden, daarna kunt u maandelijks opzeggen. Wij geloven in resultaten, niet in langdurige contracten."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-black mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
