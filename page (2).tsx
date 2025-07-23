
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const products = [
    // Blinds Category
    {
      id: 'roller-blind',
      name: 'Roller Blind',
      category: 'Blinds',
      shortDescription: 'Modern and minimalist roller blinds for contemporary spaces',
      image: 'https://readdy.ai/api/search-image?query=modern%20roller%20blinds%20in%20stylish%20living%20room%2C%20smooth%20fabric%20in%20light%20gray%20color%2C%20sleek%20minimalist%20design%2C%20contemporary%20interior%20setting%2C%20clean%20background%2C%20professional%20product%20photography&width=600&height=400&seq=roller-blind-card&orientation=landscape',
      price: 'Starting from ₹150/sq ft'
    },
    {
      id: 'roman-blind',
      name: 'Roman Blind',
      category: 'Blinds',
      shortDescription: 'Elegant fabric blinds with sophisticated pleated design',
      image: 'https://readdy.ai/api/search-image?query=luxurious%20roman%20blinds%20with%20elegant%20fabric%20folds%2C%20rich%20textured%20material%20in%20warm%20beige%20tones%2C%20sophisticated%20window%20treatment%2C%20classic%20interior%20design%2C%20professional%20product%20photography&width=600&height=400&seq=roman-blind-card&orientation=landscape',
      price: 'Starting from ₹200/sq ft'
    },
    {
      id: 'vertical-blind',
      name: 'Vertical Blind',
      category: 'Blinds',
      shortDescription: 'Perfect for large windows and sliding doors',
      image: 'https://readdy.ai/api/search-image?query=vertical%20blinds%20in%20modern%20office%20setting%2C%20white%20fabric%20slats%20with%20clean%20lines%2C%20professional%20window%20treatment%20for%20large%20windows%2C%20contemporary%20interior%20design%2C%20clean%20background&width=600&height=400&seq=vertical-blind-card&orientation=landscape',
      price: 'Starting from ₹120/sq ft'
    },
    {
      id: 'venetian-blind',
      name: 'Venetian Blind',
      category: 'Blinds',
      shortDescription: 'Classic horizontal blinds with precise light control',
      image: 'https://readdy.ai/api/search-image?query=elegant%20venetian%20blinds%20in%20modern%20bedroom%2C%20horizontal%20aluminum%20slats%20in%20white%20color%2C%20clean%20contemporary%20design%2C%20soft%20natural%20lighting%2C%20minimalist%20bedroom%20interior%20with%20neutral%20colors%2C%20professional%20product%20photography&width=600&height=400&seq=venetian-blind-card&orientation=landscape',
      price: 'Starting from ₹100/sq ft'
    },

    // Curtains Category
    {
      id: 'sheer-curtain',
      name: 'Sheer Curtain',
      category: 'Curtains',
      shortDescription: 'Light and airy curtains for soft natural lighting',
      image: 'https://readdy.ai/api/search-image?query=beautiful%20sheer%20curtains%20flowing%20in%20gentle%20breeze%2C%20translucent%20white%20fabric%20with%20soft%20natural%20light%2C%20elegant%20window%20treatment%20in%20bright%20living%20room%2C%20sophisticated%20interior%20design&width=600&height=400&seq=sheer-curtain-card&orientation=landscape',
      price: 'Starting from ₹80/sq ft'
    },
    {
      id: 'blackout-curtain',
      name: 'Blackout Curtain',
      category: 'Curtains',
      shortDescription: 'Complete light blocking for bedrooms and media rooms',
      image: 'https://readdy.ai/api/search-image?query=luxurious%20blackout%20curtains%20in%20deep%20navy%20blue%2C%20heavy%20fabric%20with%20light%20blocking%20properties%2C%20elegant%20bedroom%20setting%2C%20sophisticated%20window%20treatment%2C%20professional%20interior%20photography&width=600&height=400&seq=blackout-curtain-card&orientation=landscape',
      price: 'Starting from ₹180/sq ft'
    },
    {
      id: 'eyelet-curtain',
      name: 'Eyelet Curtain',
      category: 'Curtains',
      shortDescription: 'Modern curtains with metal rings for easy operation',
      image: 'https://readdy.ai/api/search-image?query=stylish%20eyelet%20curtains%20with%20metal%20rings%2C%20contemporary%20fabric%20in%20neutral%20tones%2C%20modern%20window%20treatment%2C%20clean%20interior%20design%2C%20professional%20product%20photography&width=600&height=400&seq=eyelet-curtain-card&orientation=landscape',
      price: 'Starting from ₹120/sq ft'
    },
    {
      id: 'silk-curtain',
      name: 'Silk Curtain',
      category: 'Curtains',
      shortDescription: 'Luxurious silk curtains for premium elegance',
      image: 'https://readdy.ai/api/search-image?query=luxurious%20silk%20curtains%20with%20rich%20golden%20color%2C%20premium%20fabric%20with%20elegant%20draping%2C%20sophisticated%20living%20room%20interior%2C%20high-end%20window%20treatment%2C%20professional%20photography&width=600&height=400&seq=silk-curtain-card&orientation=landscape',
      price: 'Starting from ₹300/sq ft'
    },

    // Curtain Rods Category
    {
      id: 'wooden-rod',
      name: 'Wooden Rod',
      category: 'Rods',
      shortDescription: 'Natural wood curtain rods with decorative finials',
      image: 'https://readdy.ai/api/search-image?query=elegant%20wooden%20curtain%20rods%20with%20decorative%20finials%2C%20natural%20wood%20finish%20in%20warm%20brown%20tones%2C%20premium%20curtain%20hardware%2C%20sophisticated%20window%20treatment%20accessories&width=600&height=400&seq=wooden-rod-card&orientation=landscape',
      price: 'Starting from ₹50/ft'
    },
    {
      id: 'metal-rod',
      name: 'Metal Rod',
      category: 'Rods',
      shortDescription: 'Durable metal rods in various finishes',
      image: 'https://readdy.ai/api/search-image?query=sleek%20metal%20curtain%20rods%20in%20brushed%20steel%20finish%2C%20contemporary%20curtain%20hardware%20with%20modern%20design%2C%20premium%20window%20treatment%20accessories%2C%20clean%20product%20photography&width=600&height=400&seq=metal-rod-card&orientation=landscape',
      price: 'Starting from ₹40/ft'
    },
    {
      id: 'extendable-rod',
      name: 'Extendable Rod',
      category: 'Rods',
      shortDescription: 'Adjustable rods for flexible window sizing',
      image: 'https://readdy.ai/api/search-image?query=adjustable%20extendable%20curtain%20rod%20system%2C%20telescopic%20metal%20rod%20with%20modern%20design%2C%20versatile%20window%20hardware%20for%20various%20window%20sizes%2C%20professional%20product%20photography&width=600&height=400&seq=extendable-rod-card&orientation=landscape',
      price: 'Starting from ₹60/ft'
    },
    {
      id: 'motorized-track',
      name: 'Motorized Track',
      category: 'Rods',
      shortDescription: 'Smart automated curtain tracks with remote control',
      image: 'https://readdy.ai/api/search-image?query=modern%20motorized%20curtain%20track%20system%2C%20smart%20home%20automation%20for%20window%20treatments%2C%20sleek%20white%20track%20with%20remote%20control%2C%20contemporary%20interior%20technology&width=600&height=400&seq=motorized-track-card&orientation=landscape',
      price: 'Starting from ₹200/ft'
    },

    // Accessories Category
    {
      id: 'curtain-tieback',
      name: 'Curtain Tieback',
      category: 'Accessories',
      shortDescription: 'Decorative tiebacks to hold curtains elegantly',
      image: 'https://readdy.ai/api/search-image?query=elegant%20curtain%20tiebacks%20in%20gold%20finish%2C%20decorative%20rope%20and%20tassel%20design%2C%20premium%20window%20treatment%20accessories%2C%20luxurious%20curtain%20hardware%20collection&width=600&height=400&seq=curtain-tieback-card&orientation=landscape',
      price: 'Starting from ₹25/piece'
    },
    {
      id: 'end-cap',
      name: 'End Cap',
      category: 'Accessories',
      shortDescription: 'Stylish finials for curtain rod ends',
      image: 'https://readdy.ai/api/search-image?query=decorative%20curtain%20rod%20end%20caps%20and%20finials%2C%20various%20designs%20in%20metal%20finishes%2C%20elegant%20window%20hardware%20accessories%2C%20professional%20product%20photography&width=600&height=400&seq=end-cap-card&orientation=landscape',
      price: 'Starting from ₹15/piece'
    },
    {
      id: 'holdback',
      name: 'Holdback',
      category: 'Accessories',
      shortDescription: 'Wall-mounted holders for curtain styling',
      image: 'https://readdy.ai/api/search-image?query=stylish%20curtain%20holdbacks%20mounted%20on%20wall%2C%20decorative%20metal%20hooks%20in%20brushed%20finish%2C%20elegant%20window%20treatment%20accessories%2C%20contemporary%20interior%20hardware&width=600&height=400&seq=holdback-card&orientation=landscape',
      price: 'Starting from ₹20/piece'
    },
    {
      id: 'curtain-ring',
      name: 'Curtain Ring',
      category: 'Accessories',
      shortDescription: 'Quality rings for smooth curtain operation',
      image: 'https://readdy.ai/api/search-image?query=premium%20curtain%20rings%20in%20various%20finishes%2C%20metal%20rings%20for%20smooth%20curtain%20operation%2C%20window%20treatment%20hardware%20accessories%2C%20professional%20product%20photography&width=600&height=400&seq=curtain-ring-card&orientation=landscape',
      price: 'Starting from ₹5/piece'
    }
  ];

  const categories = ['All', 'Blinds', 'Curtains', 'Rods', 'Accessories'];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 md:py-6 space-y-4 md:space-y-0">
            <div className="flex items-center w-full md:w-auto justify-start pl-0 md:pl-4">
              <Link href="/">
                <h1 className="text-xl md:text-2xl font-bold text-[#1B3A57] tracking-wide cursor-pointer" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(20px, 4vw, 24px)', letterSpacing: '0.5px', fontWeight: '700' }}>
                  Vishu Blinds and Curtains
                </h1>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center w-full md:w-auto space-y-3 sm:space-y-0 sm:space-x-4">
              <nav className="block">
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base">
                  <Link href="/" className="text-gray-700 hover:text-gray-900 cursor-pointer whitespace-nowrap">Home</Link>
                  <Link href="/products" className="text-blue-600 hover:text-blue-800 cursor-pointer whitespace-nowrap font-semibold">Products</Link>
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

      {/* Page Header */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Our Products</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete range of premium window treatments designed to enhance your home's beauty and functionality.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
                      <i className="ri-heart-line text-gray-600 hover:text-red-500 transition-colors"></i>
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.shortDescription}</p>
                  <p className="text-blue-600 font-semibold mb-6">{product.price}</p>
                  
                  <div className="flex flex-col gap-3">
                    <Link 
                      href={`/products/${product.id}`}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap text-center inline-block"
                    >
                      View Details
                    </Link>
                    <a 
                      href="tel:9691177119"
                      className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-600 hover:text-white cursor-pointer whitespace-nowrap text-center inline-block"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Sorry! This product category is currently unavailable. Please check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Need Help Choosing?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Our experts are here to help you find the perfect window treatments for your home. Get a free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9691177119" className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 cursor-pointer whitespace-nowrap inline-block">
              Free Consultation
            </a>
            <a href="https://wa.me/919691177119" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white hover:text-blue-600 cursor-pointer whitespace-nowrap inline-block">
              WhatsApp Us
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
                <li><Link href="/products/roller-blind" className="hover:text-white cursor-pointer">Roller Blinds</Link></li>
                <li><Link href="/products/roman-blind" className="hover:text-white cursor-pointer">Roman Blinds</Link></li>
                <li><Link href="/products/sheer-curtain" className="hover:text-white cursor-pointer">Sheer Curtains</Link></li>
                <li><Link href="/products/blackout-curtain" className="hover:text-white cursor-pointer">Blackout Curtains</Link></li>
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
