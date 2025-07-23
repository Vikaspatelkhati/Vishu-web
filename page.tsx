
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 md:py-6 space-y-4 md:space-y-0">
            <div className="flex items-center w-full md:w-auto justify-start pl-0 md:pl-4">
              <h1 className="text-xl md:text-2xl font-bold text-[#1B3A57] tracking-wide" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px, 4vw, 24px)', letterSpacing: '0.5px', fontWeight: '700' }}>
                Vishu Blinds and Curtains
              </h1>
            </div>

            {/* Mobile Navigation Button */}
            <div className="flex flex-col sm:flex-row items-center w-full md:w-auto space-y-3 sm:space-y-0 sm:space-x-4">
              <nav className="block">
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base">
                  <Link href="/" className="text-gray-700 hover:text-gray-900 cursor-pointer whitespace-nowrap">Home</Link>
                  <Link href="/products" className="text-gray-700 hover:text-gray-900 cursor-pointer whitespace-nowrap">Products</Link>
                  <Link href="/catalog" className="text-gray-700 hover:text-gray-900 cursor-pointer whitespace-nowrap">Catalog</Link>
                  <Link href="/services" className="text-gray-700 hover:text-gray-900 cursor-pointer whitespace-nowrap">Services</Link>
                  <Link href="/gallery" className="text-gray-700 hover:text-gray-900 cursor-pointer whitespace-nowrap">Gallery</Link>
                  <Link href="/contact" className="text-gray-700 hover:text-gray-900 cursor-pointer whitespace-nowrap">Contact</Link>
                </div>
              </nav>
              <a href="tel:9691177119" className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer whitespace-nowrap text-sm sm:text-base">
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=luxurious%20modern%20living%20room%20with%20elegant%20white%20and%20cream%20colored%20window%20treatments%2C%20beautiful%20custom%20blinds%20and%20curtains%2C%20soft%20natural%20lighting%20filtering%20through%20premium%20window%20coverings%2C%20sophisticated%20interior%20design%20with%20neutral%20tones%2C%20clean%20minimalist%20background%2C%20professional%20interior%20photography%20style&width=1920&height=1080&seq=hero-vishu-blinds&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-left max-w-full lg:max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              Transform Your Windows with Vishu Blinds & Curtains
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Discover Vishu's extensive collection of custom-made window treatments. From elegant curtains to modern blinds, we bring style and functionality to every room.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-0">
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 cursor-pointer whitespace-nowrap">
                Shop Now
              </button>
              <a href="tel:9691177119" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 cursor-pointer whitespace-nowrap inline-block text-center">
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">Why Choose Our Window Treatments?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              We provide premium quality blinds and curtains with professional installation and exceptional customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[ 
              {
                icon: 'ri-home-4-line',
                title: 'Custom Made',
                description: 'Every blind and curtain is made to your exact window measurements for a perfect fit.'
              },
              {
                icon: 'ri-shield-check-line',
                title: 'Premium Quality',
                description: 'We use only the finest materials and hardware to ensure long-lasting beauty and functionality.'
              },
              {
                icon: 'ri-tools-line',
                title: 'Professional Installation',
                description: 'Our expert team provides seamless installation with minimal disruption to your home.'
              },
              {
                icon: 'ri-palette-line',
                title: 'Wide Selection',
                description: 'Choose from hundreds of fabrics, colors, and styles to match your unique decor.'
              },
              {
                icon: 'ri-customer-service-2-line',
                title: '24/7 Support',
                description: 'Our dedicated customer service team is always ready to help with any questions or concerns.'
              },
              {
                icon: 'ri-money-dollar-circle-line',
                title: 'Best Value',
                description: 'Competitive pricing with no hidden fees. Get premium quality at affordable prices.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                  <i className={`${feature.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">Our Product Range</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              From classic to contemporary, we offer a complete range of window treatments to suit every style and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[ 
              {
                name: 'Venetian Blinds',
                image: 'https://readdy.ai/api/search-image?query=elegant%20venetian%20blinds%20in%20modern%20bedroom%2C%20horizontal%20aluminum%20slats%20in%20white%20color%2C%20clean%20contemporary%20design%2C%20soft%20natural%20lighting%2C%20minimalist%20bedroom%20interior%20with%20neutral%20colors%2C%20professional%20product%20photography&width=400&height=300&seq=venetian-blinds&orientation=landscape'
              },
              {
                name: 'Roller Blinds',
                image: 'https://readdy.ai/api/search-image?query=modern%20roller%20blinds%20in%20stylish%20living%20room%2C%20smooth%20fabric%20in%20light%20gray%20color%2C%20sleek%20minimalist%20design%2C%20contemporary%20interior%20setting%2C%20clean%20background%2C%20professional%20product%20photography&width=400&height=300&seq=roller-blinds&orientation=landscape'
              },
              {
                name: 'Roman Blinds',
                image: 'https://readdy.ai/api/search-image?query=luxurious%20roman%20blinds%20with%20elegant%20fabric%20folds%2C%20rich%20textured%20material%20in%20warm%20beige%20tones%2C%20sophisticated%20window%20treatment%2C%20classic%20interior%20design%2C%20professional%20product%20photography&width=400&height=300&seq=roman-blinds&orientation=landscape'
              },
              {
                name: 'Custom Curtains',
                image: 'https://readdy.ai/api/search-image?query=beautiful%20custom%20curtains%20with%20flowing%20fabric%2C%20elegant%20draping%20in%20soft%20cream%20colors%2C%20premium%20window%20treatment%20in%20sophisticated%20living%20room%2C%20luxurious%20interior%20design%2C%20professional%20product%20photography&width=400&height=300&seq=custom-curtains&orientation=landscape'
              }
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-3 sm:mb-4 aspect-[4/3)">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center px-2">{product.name}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12 px-2">
            <Link href="/products" className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 cursor-pointer whitespace-nowrap inline-block">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">Our Services</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              From consultation to installation, we provide comprehensive window treatment services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[ 
              {
                icon: 'ri-home-8-line',
                title: 'On-site Visit & Measurement',
                description: 'Our expert team visits your location to take precise measurements and assess your requirements for perfect fitting solutions.',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                icon: 'ri-scissors-cut-line',
                title: 'Customized Blinds & Curtains',
                description: 'Tailored window treatments crafted to your exact specifications, style preferences, and functional requirements.',
                color: 'bg-purple-100 text-purple-600'
              },
              {
                icon: 'ri-tools-line',
                title: 'Professional Installation',
                description: 'Skilled installation service ensuring your blinds and curtains are perfectly mounted with attention to detail.',
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: 'ri-hammer-line',
                title: 'Curtain Rod & Track Fitting',
                description: 'Complete rod and track installation services for smooth operation and optimal curtain performance.',
                color: 'bg-orange-100 text-orange-600'
              },
              {
                icon: 'ri-settings-5-line',
                title: 'Repair & Replacement Services',
                description: 'Comprehensive maintenance services to keep your window treatments functioning perfectly for years to come.',
                color: 'bg-red-100 text-red-600'
              },
              {
                icon: 'ri-lightbulb-line',
                title: 'Design Consultation Support',
                description: 'Expert design advice to help you choose the perfect styles, colors, and materials for your interior spaces.',
                color: 'bg-yellow-100 text-yellow-600'
              },
              {
                icon: 'ri-building-2-line',
                title: 'Bulk Order Handling for Offices & Hotels',
                description: 'Specialized services for commercial spaces with volume discounts and project management support.',
                color: 'bg-indigo-100 text-indigo-600'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-5 sm:mb-6`}>
                  <i className={`${service.icon} text-2xl sm:text-3xl`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16 px-2">
            <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Contact us today to schedule your consultation and discover how we can transform your windows with our premium services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:9691177119" className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 cursor-pointer whitespace-nowrap inline-block">
                  Schedule Consultation
                </a>
                <a href="https://wa.me/919691177119" className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 cursor-pointer whitespace-nowrap inline-flex items-center justify-center">
                  <i className="ri-whatsapp-line mr-2"></i>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">Ready to Transform Your Windows with Vishu?</h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
            Get a free consultation and quote today. Vishu's experts will help you choose the perfect window treatments for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
            <a href="tel:9691177119" className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 cursor-pointer whitespace-nowrap inline-block">
              Schedule Consultation
            </a>
            <a href="tel:9691177119" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-600 cursor-pointer whitespace-nowrap inline-block">
              Call Now: 9691177119
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#1B3A57] bg-white px-3 py-2 rounded inline-block" style={{ fontFamily: "'Playfair Display', serif" }}>Vishu Blinds and Curtains</h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                Vishu Blinds and Curtains - Your trusted partner for premium window treatments. Transform your windows with our custom-made solutions.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
                  <i className="ri-facebook-fill text-lg"></i>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
                  <i className="ri-instagram-line text-lg"></i>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
                  <i className="ri-twitter-line text-lg"></i>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Products</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
                <li><Link href="/products/venetian-blinds" className="hover:text-white cursor-pointer">Venetian Blinds</Link></li>
                <li><Link href="/products/roller-blinds" className="hover:text-white cursor-pointer">Roller Blinds</Link></li>
                <li><Link href="/products/roman-blinds" className="hover:text-white cursor-pointer">Roman Blinds</Link></li>
                <li><Link href="/products/curtains" className="hover:text-white cursor-pointer">Custom Curtains</Link></li>
                <li><Link href="/products/motorized" className="hover:text-white cursor-pointer">Motorized Options</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Services</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
                <li><Link href="/services/consultation" className="hover:text-white cursor-pointer">Free Consultation</Link></li>
                <li><Link href="/services/installation" className="hover:text-white cursor-pointer">Professional Installation</Link></li>
                <li><Link href="/services/repair" className="hover:text-white cursor-pointer">Repair Services</Link></li>
                <li><Link href="/services/cleaning" className="hover:text-white cursor-pointer">Cleaning Services</Link></li>
                <li><Link href="/services/warranty" className="hover:text-white cursor-pointer">Warranty</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact</h4>
              <div className="space-y-3 sm:space-y-4 text-gray-400">
                <div className="flex items-center text-base sm:text-lg">
                  <i className="ri-phone-line mr-3 text-xl"></i>
                  <div className="flex flex-wrap items-center gap-2">
                    <a href="tel:9691177119" className="hover:text-white cursor-pointer font-medium">9691177119</a>
                    <span className="text-gray-500">|</span>
                    <a href="tel:8889419507" className="hover:text-white cursor-pointer font-medium">8889419507</a>
                  </div>
                </div>
                <div className="flex items-center text-sm sm:text-base">
                  <i className="ri-mail-line mr-3 text-lg"></i>
                  <span>info@vishublinds.com</span>
                </div>
                <div className="flex items-start text-sm sm:text-base">
                  <i className="ri-map-pin-line mr-3 mt-1 text-lg"></i>
                  <span>123 Window Street<br />Interior City, IC 12345</span>
                </div>
                <div className="flex items-center text-sm sm:text-base">
                  <i className="ri-time-line mr-3 text-lg"></i>
                  <span>Mon-Sat: 9AM-6PM</span>
                </div>
                <div className="pt-2">
                  <a href="https://wa.me/919691177119" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 cursor-pointer whitespace-nowrap inline-flex items-center text-sm font-medium">
                    <i className="ri-whatsapp-line mr-2"></i>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-sm sm:text-base text-gray-400">
            <p>&copy; 2024 Vishu Blinds and Curtains. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
