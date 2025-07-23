'use client';

import Link from 'next/link';
import { useState } from 'react';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const products = {
    'roller-blind': {
      name: 'Roller Blind',
      category: 'Blinds',
      price: 'Starting from ₹150/sq ft',
      description: 'Our premium roller blinds combine modern style with practical functionality. Made from high-quality fabrics, these blinds offer excellent light control and privacy while maintaining a sleek, minimalist appearance that complements any contemporary interior.',
      images: [
        'https://readdy.ai/api/search-image?query=modern%20roller%20blinds%20in%20stylish%20living%20room%2C%20smooth%20fabric%20in%20light%20gray%20color%2C%20sleek%20minimalist%20design%2C%20contemporary%20interior%20setting%2C%20clean%20background%2C%20professional%20product%20photography&width=800&height=600&seq=roller-blind-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=close%20up%20detail%20of%20roller%20blind%20mechanism%2C%20smooth%20operation%20system%2C%20quality%20fabric%20texture%2C%20professional%20product%20photography%20with%20clean%20background&width=800&height=600&seq=roller-blind-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=roller%20blinds%20in%20modern%20bedroom%20setting%2C%20various%20color%20options%20displayed%2C%20contemporary%20window%20treatment%20installation%2C%20professional%20interior%20photography&width=800&height=600&seq=roller-blind-room&orientation=landscape'
      ],
      features: [
        'Easy operation with smooth rolling mechanism',
        'Available in 50+ fabric options',
        'Light filtering and blackout options',
        'Child-safe cordless design',
        'UV protection for furniture',
        'Easy maintenance and cleaning',
        'Custom sizing available',
        'Professional installation included'
      ],
      specifications: [
        { label: 'Material', value: 'Premium polyester fabric' },
        { label: 'Width Range', value: '2 feet to 10 feet' },
        { label: 'Height Range', value: '3 feet to 12 feet' },
        { label: 'Operation', value: 'Chain control or motorized' },
        { label: 'Installation', value: 'Inside or outside mount' },
        { label: 'Warranty', value: '2 years manufacturer warranty' }
      ],
      variants: [
        'Light Filtering',
        'Room Darkening',
        'Blackout',
        'Solar Screen',
        'Decorative'
      ]
    },
    'roman-blind': {
      name: 'Roman Blind',
      category: 'Blinds',
      price: 'Starting from ₹200/sq ft',
      description: 'Elegant Roman blinds featuring luxurious fabric with sophisticated horizontal pleats that create a timeless, classic look. Perfect for formal living spaces, these blinds offer both style and functionality with excellent light control.',
      images: [
        'https://readdy.ai/api/search-image?query=luxurious%20roman%20blinds%20with%20elegant%20fabric%20folds%2C%20rich%20textured%20material%20in%20warm%20beige%20tones%2C%20sophisticated%20window%20treatment%2C%20classic%20interior%20design%2C%20professional%20product%20photography&width=800&height=600&seq=roman-blind-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=roman%20blind%20fabric%20detail%20showing%20elegant%20pleating%2C%20premium%20material%20texture%2C%20sophisticated%20craftsmanship%2C%20professional%20product%20photography&width=800&height=600&seq=roman-blind-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=roman%20blinds%20installed%20in%20elegant%20dining%20room%2C%20classic%20interior%20design%2C%20warm%20lighting%2C%20professional%20interior%20photography&width=800&height=600&seq=roman-blind-room&orientation=landscape'
      ],
      features: [
        'Luxurious fabric pleating design',
        'Premium quality materials',
        'Cordless lift system available',
        'Elegant horizontal fold pattern',
        'Thermal insulation properties',
        'Noise reduction benefits',
        'Available in various opacity levels',
        'Professional measuring and installation'
      ],
      specifications: [
        { label: 'Material', value: 'Cotton, Linen, or Polyester blends' },
        { label: 'Width Range', value: '2 feet to 8 feet' },
        { label: 'Height Range', value: '3 feet to 10 feet' },
        { label: 'Operation', value: 'Cord control or cordless' },
        { label: 'Mount Type', value: 'Inside or outside mount' },
        { label: 'Warranty', value: '3 years manufacturer warranty' }
      ],
      variants: [
        'Flat Roman',
        'Hobbled Roman',
        'Balloon Roman',
        'Relaxed Roman',
        'Classic Roman'
      ]
    },
    'vertical-blind': {
      name: 'Vertical Blind',
      category: 'Blinds',
      price: 'Starting from ₹120/sq ft',
      description: 'Ideal for large windows and sliding doors, our vertical blinds feature adjustable slats that provide excellent light control and privacy. Perfect for modern offices and contemporary homes with expansive window areas.',
      images: [
        'https://readdy.ai/api/search-image?query=vertical%20blinds%20in%20modern%20office%20setting%2C%20white%20fabric%20slats%20with%20clean%20lines%2C%20professional%20window%20treatment%20for%20large%20windows%2C%20contemporary%20interior%20design%2C%20clean%20background&width=800&height=600&seq=vertical-blind-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=vertical%20blind%20slats%20detail%20showing%20smooth%20operation%2C%20quality%20fabric%20material%2C%20professional%20product%20photography&width=800&height=600&seq=vertical-blind-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=vertical%20blinds%20covering%20sliding%20glass%20doors%2C%20modern%20living%20room%20interior%2C%20professional%20interior%20photography&width=800&height=600&seq=vertical-blind-room&orientation=landscape'
      ],
      features: [
        'Perfect for large windows and doors',
        '89mm or 127mm slat width options',
        'Smooth traverse operation',
        'Wand or cord control available',
        'Excellent privacy control',
        'Energy efficient design',
        'Easy to clean and maintain',
        'Suitable for humid environments'
      ],
      specifications: [
        { label: 'Material', value: 'PVC, Fabric, or Aluminum' },
        { label: 'Slat Width', value: '89mm or 127mm' },
        { label: 'Width Range', value: '4 feet to 20 feet' },
        { label: 'Height Range', value: '4 feet to 12 feet' },
        { label: 'Operation', value: 'Wand or cord control' },
        { label: 'Warranty', value: '2 years manufacturer warranty' }
      ],
      variants: [
        'Fabric Vertical',
        'PVC Vertical',
        'Aluminum Vertical',
        'Blackout Vertical',
        'Perforated Vertical'
      ]
    },
    'venetian-blind': {
      name: 'Venetian Blind',
      category: 'Blinds',
      price: 'Starting from ₹100/sq ft',
      description: 'Classic horizontal blinds with adjustable slats offering precise light control and timeless style. Available in various materials and finishes to complement any decor style from traditional to contemporary.',
      images: [
        'https://readdy.ai/api/search-image?query=elegant%20venetian%20blinds%20in%20modern%20bedroom%2C%20horizontal%20aluminum%20slats%20in%20white%20color%2C%20clean%20contemporary%20design%2C%20soft%20natural%20lighting%2C%20minimalist%20bedroom%20interior%20with%20neutral%20colors%2C%20professional%20product%20photography&width=800&height=600&seq=venetian-blind-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=venetian%20blind%20slats%20close%20up%20detail%2C%20aluminum%20material%20with%20smooth%20finish%2C%20precise%20craftsmanship%2C%20professional%20product%20photography&width=800&height=600&seq=venetian-blind-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=venetian%20blinds%20in%20modern%20kitchen%20window%2C%20clean%20interior%20design%2C%20natural%20lighting%2C%20professional%20interior%20photography&width=800&height=600&seq=venetian-blind-room&orientation=landscape'
      ],
      features: [
        'Precise light control with adjustable slats',
        'Durable aluminum construction',
        'Tilt and lift cord operation',
        'Easy to clean surface',
        'Moisture resistant',
        'Available in multiple colors',
        '25mm or 50mm slat options',
        'Professional installation service'
      ],
      specifications: [
        { label: 'Material', value: 'Aluminum or PVC' },
        { label: 'Slat Width', value: '25mm or 50mm' },
        { label: 'Width Range', value: '1 foot to 8 feet' },
        { label: 'Height Range', value: '2 feet to 8 feet' },
        { label: 'Operation', value: 'Cord tilt and lift' },
        { label: 'Warranty', value: '2 years manufacturer warranty' }
      ],
      variants: [
        'Aluminum Venetian',
        'Wood Venetian',
        'PVC Venetian',
        'Perforated Venetian',
        'Micro Venetian'
      ]
    },
    'sheer-curtain': {
      name: 'Sheer Curtain',
      category: 'Curtains',
      price: 'Starting from ₹80/sq ft',
      description: 'Delicate and airy sheer curtains that allow natural light to filter through while providing privacy. Perfect for creating a soft, romantic ambiance in living rooms and bedrooms.',
      images: [
        'https://readdy.ai/api/search-image?query=beautiful%20sheer%20curtains%20flowing%20in%20gentle%20breeze%2C%20translucent%20white%20fabric%20with%20soft%20natural%20light%2C%20elegant%20window%20treatment%20in%20bright%20living%20room%2C%20sophisticated%20interior%20design&width=800&height=600&seq=sheer-curtain-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=close%20up%20of%20sheer%20curtain%20fabric%20texture%2C%20delicate%20translucent%20material%2C%20professional%20product%20photography%20with%20soft%20lighting&width=800&height=600&seq=sheer-curtain-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=sheer%20curtains%20in%20elegant%20bedroom%20setting%2C%20soft%20natural%20lighting%2C%20romantic%20interior%20design%2C%20professional%20interior%20photography&width=800&height=600&seq=sheer-curtain-room&orientation=landscape'
      ],
      features: [
        'Light filtering with privacy',
        'Soft, flowing fabric texture',
        'Machine washable materials',
        'UV protection for interiors',
        'Available in multiple colors',
        'Rod pocket or grommet styles',
        'Layering compatible design',
        'Professional hemming included'
      ],
      specifications: [
        { label: 'Material', value: 'Polyester or Cotton blend' },
        { label: 'Width Range', value: '3 feet to 12 feet' },
        { label: 'Height Range', value: '4 feet to 12 feet' },
        { label: 'Header Style', value: 'Rod pocket or Grommet' },
        { label: 'Care', value: 'Machine washable' },
        { label: 'Warranty', value: '1 year fabric warranty' }
      ],
      variants: [
        'Plain Sheer',
        'Embroidered Sheer',
        'Printed Sheer',
        'Textured Sheer',
        'Metallic Sheer'
      ]
    },
    'blackout-curtain': {
      name: 'Blackout Curtain',
      category: 'Curtains',
      price: 'Starting from ₹180/sq ft',
      description: 'Premium blackout curtains designed to block 99% of light, perfect for bedrooms, media rooms, and shift workers. Features thermal insulation properties for energy efficiency.',
      images: [
        'https://readdy.ai/api/search-image?query=luxurious%20blackout%20curtains%20in%20deep%20navy%20blue%2C%20heavy%20fabric%20with%20light%20blocking%20properties%2C%20elegant%20bedroom%20setting%2C%20sophisticated%20window%20treatment%2C%20professional%20interior%20photography&width=800&height=600&seq=blackout-curtain-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=blackout%20curtain%20fabric%20detail%20showing%20dense%20weave%2C%20light%20blocking%20material%20texture%2C%20professional%20product%20photography&width=800&height=600&seq=blackout-curtain-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=blackout%20curtains%20in%20modern%20media%20room%2C%20complete%20darkness%2C%20home%20theater%20setting%2C%20professional%20interior%20photography&width=800&height=600&seq=blackout-curtain-room&orientation=landscape'
      ],
      features: [
        '99% light blocking capability',
        'Thermal insulation properties',
        'Noise reduction benefits',
        'Energy saving design',
        'Machine washable fabric',
        'Fade resistant materials',
        'Multiple hanging options',
        'Professional installation available'
      ],
      specifications: [
        { label: 'Material', value: 'Triple-weave polyester' },
        { label: 'Light Blocking', value: '99% blackout capability' },
        { label: 'Width Range', value: '3 feet to 15 feet' },
        { label: 'Height Range', value: '4 feet to 12 feet' },
        { label: 'Header Style', value: 'Grommet, Rod pocket, or Pinch pleat' },
        { label: 'Warranty', value: '2 years fabric warranty' }
      ],
      variants: [
        'Thermal Blackout',
        'Decorative Blackout',
        'Room Darkening',
        'Noise Reducing',
        'Energy Efficient'
      ]
    },
    'eyelet-curtain': {
      name: 'Eyelet Curtain',
      category: 'Curtains',
      price: 'Starting from ₹120/sq ft',
      description: 'Contemporary curtains featuring metal eyelet rings for smooth operation and modern aesthetic. Perfect for casual and contemporary interior designs.',
      images: [
        'https://readdy.ai/api/search-image?query=stylish%20eyelet%20curtains%20with%20metal%20rings%2C%20contemporary%20fabric%20in%20neutral%20tones%2C%20modern%20window%20treatment%2C%20clean%20interior%20design%2C%20professional%20product%20photography&width=800&height=600&seq=eyelet-curtain-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=eyelet%20curtain%20ring%20detail%2C%20metal%20grommets%20with%20smooth%20finish%2C%20professional%20product%20photography&width=800&height=600&seq=eyelet-curtain-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=eyelet%20curtains%20in%20modern%20living%20room%2C%20contemporary%20interior%20design%2C%20professional%20interior%20photography&width=800&height=600&seq=eyelet-curtain-room&orientation=landscape'
      ],
      features: [
        'Metal eyelet rings for durability',
        'Smooth gliding operation',
        'Contemporary styling',
        'Easy installation process',
        'Machine washable fabric',
        'Wrinkle resistant material',
        'Available in various colors',
        'Suitable for curtain rods'
      ],
      specifications: [
        { label: 'Material', value: 'Cotton or Polyester blend' },
        { label: 'Eyelet Size', value: '40mm diameter' },
        { label: 'Width Range', value: '3 feet to 12 feet' },
        { label: 'Height Range', value: '4 feet to 10 feet' },
        { label: 'Ring Material', value: 'Brass or Chrome finish' },
        { label: 'Warranty', value: '1 year fabric warranty' }
      ],
      variants: [
        'Plain Eyelet',
        'Printed Eyelet',
        'Textured Eyelet',
        'Thermal Eyelet',
        'Decorative Eyelet'
      ]
    },
    'silk-curtain': {
      name: 'Silk Curtain',
      category: 'Curtains',
      price: 'Starting from ₹300/sq ft',
      description: 'Luxurious silk curtains offering unmatched elegance and sophistication. Made from premium silk fabrics with natural sheen and draping qualities.',
      images: [
        'https://readdy.ai/api/search-image?query=luxurious%20silk%20curtains%20with%20rich%20golden%20color%2C%20premium%20fabric%20with%20elegant%20draping%2C%20sophisticated%20living%20room%20interior%2C%20high-end%20window%20treatment%2C%20professional%20photography&width=800&height=600&seq=silk-curtain-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=silk%20curtain%20fabric%20detail%20showing%20natural%20sheen%2C%20premium%20material%20texture%2C%20luxurious%20quality%2C%20professional%20product%20photography&width=800&height=600&seq=silk-curtain-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=silk%20curtains%20in%20elegant%20formal%20dining%20room%2C%20luxury%20interior%20design%2C%20sophisticated%20ambiance%2C%20professional%20interior%20photography&width=800&height=600&seq=silk-curtain-room&orientation=landscape'
      ],
      features: [
        'Premium 100% silk fabric',
        'Natural temperature regulation',
        'Elegant draping qualities',
        'Luxury appearance and feel',
        'Natural antimicrobial properties',
        'Fade resistant colors',
        'Custom tailoring available',
        'Professional dry cleaning recommended'
      ],
      specifications: [
        { label: 'Material', value: '100% Pure Silk' },
        { label: 'Weight', value: 'Medium to Heavy weight' },
        { label: 'Width Range', value: '3 feet to 10 feet' },
        { label: 'Height Range', value: '4 feet to 12 feet' },
        { label: 'Header Style', value: 'Pinch pleat or Rod pocket' },
        { label: 'Warranty', value: '2 years fabric warranty' }
      ],
      variants: [
        'Pure Silk',
        'Silk Blend',
        'Raw Silk',
        'Dupioni Silk',
        'Taffeta Silk'
      ]
    },
    'wooden-rod': {
      name: 'Wooden Rod',
      category: 'Rods',
      price: 'Starting from ₹50/ft',
      description: 'Premium wooden curtain rods crafted from quality hardwood with beautiful natural grain patterns. Available in various finishes to complement any interior style.',
      images: [
        'https://readdy.ai/api/search-image?query=elegant%20wooden%20curtain%20rods%20with%20decorative%20finials%2C%20natural%20wood%20finish%20in%20warm%20brown%20tones%2C%20premium%20curtain%20hardware%2C%20sophisticated%20window%20treatment%20accessories&width=800&height=600&seq=wooden-rod-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=wooden%20curtain%20rod%20detail%20showing%20natural%20wood%20grain%2C%20quality%20craftsmanship%2C%20decorative%20finial%20design%2C%20professional%20product%20photography&width=800&height=600&seq=wooden-rod-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=wooden%20curtain%20rods%20installed%20in%20traditional%20living%20room%2C%20classic%20interior%20design%2C%20professional%20interior%20photography&width=800&height=600&seq=wooden-rod-room&orientation=landscape'
      ],
      features: [
        'Premium hardwood construction',
        'Natural wood grain patterns',
        'Decorative finials included',
        'Multiple finish options',
        'Strong weight capacity',
        'Easy installation brackets',
        'Customizable lengths',
        'Eco-friendly materials'
      ],
      specifications: [
        { label: 'Material', value: 'Oak, Pine, or Mahogany' },
        { label: 'Diameter', value: '28mm or 35mm' },
        { label: 'Length Range', value: '3 feet to 12 feet' },
        { label: 'Weight Capacity', value: 'Up to 15 kg' },
        { label: 'Finish Options', value: 'Natural, Stained, or Painted' },
        { label: 'Warranty', value: '3 years manufacturer warranty' }
      ],
      variants: [
        'Natural Oak',
        'Dark Walnut',
        'Pine Wood',
        'Mahogany Finish',
        'Painted Wood'
      ]
    },
    'metal-rod': {
      name: 'Metal Rod',
      category: 'Rods',
      price: 'Starting from ₹40/ft',
      description: 'Durable metal curtain rods available in various finishes including chrome, brushed nickel, and antique brass. Perfect for modern and contemporary interiors.',
      images: [
        'https://readdy.ai/api/search-image?query=sleek%20metal%20curtain%20rods%20in%20brushed%20steel%20finish%2C%20contemporary%20curtain%20hardware%20with%20modern%20design%2C%20premium%20window%20treatment%20accessories%2C%20clean%20product%20photography&width=800&height=600&seq=metal-rod-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=metal%20curtain%20rod%20detail%20showing%20brushed%20finish%2C%20quality%20construction%2C%20modern%20finial%20design%2C%20professional%20product%20photography&width=800&height=600&seq=metal-rod-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=metal%20curtain%20rods%20in%20modern%20contemporary%20living%20room%2C%20sleek%20interior%20design%2C%20professional%20interior%20photography&width=800&height=600&seq=metal-rod-room&orientation=landscape'
      ],
      features: [
        'Corrosion resistant materials',
        'Multiple finish options',
        'Modern design aesthetics',
        'High weight capacity',
        'Easy maintenance',
        'Precision engineered brackets',
        'Smooth curtain operation',
        'Professional installation available'
      ],
      specifications: [
        { label: 'Material', value: 'Stainless Steel or Aluminum' },
        { label: 'Diameter', value: '16mm, 19mm, or 25mm' },
        { label: 'Length Range', value: '2 feet to 15 feet' },
        { label: 'Weight Capacity', value: 'Up to 20 kg' },
        { label: 'Finish Options', value: 'Chrome, Brushed Nickel, Antique Brass' },
        { label: 'Warranty', value: '5 years manufacturer warranty' }
      ],
      variants: [
        'Chrome Finish',
        'Brushed Nickel',
        'Antique Brass',
        'Matte Black',
        'Copper Finish'
      ]
    },
    'extendable-rod': {
      name: 'Extendable Rod',
      category: 'Rods',
      price: 'Starting from ₹60/ft',
      description: 'Versatile telescopic curtain rods that adjust to fit various window widths. Perfect for rental properties and flexible window treatments.',
      images: [
        'https://readdy.ai/api/search-image?query=adjustable%20extendable%20curtain%20rod%20system%2C%20telescopic%20metal%20rod%20with%20modern%20design%2C%20versatile%20window%20hardware%20for%20various%20window%20sizes%2C%20professional%20product%20photography&width=800&height=600&seq=extendable-rod-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=extendable%20curtain%20rod%20mechanism%20detail%2C%20telescopic%20adjustment%20system%2C%20quality%20construction%2C%20professional%20product%20photography&width=800&height=600&seq=extendable-rod-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=extendable%20curtain%20rod%20in%20modern%20apartment%20window%2C%20versatile%20installation%2C%20professional%20interior%20photography&width=800&height=600&seq=extendable-rod-room&orientation=landscape'
      ],
      features: [
        'Telescopic adjustment system',
        'No cutting required',
        'Easy installation process',
        'Multiple length options',
        'Sturdy locking mechanism',
        'Suitable for various window sizes',
        'Rental-friendly solution',
        'Professional finish quality'
      ],
      specifications: [
        { label: 'Material', value: 'Steel with powder coating' },
        { label: 'Diameter', value: '19mm or 25mm' },
        { label: 'Adjustable Range', value: '3-5 feet, 5-8 feet, 8-12 feet' },
        { label: 'Weight Capacity', value: 'Up to 12 kg' },
        { label: 'Installation', value: 'Bracket mount or tension mount' },
        { label: 'Warranty', value: '2 years manufacturer warranty' }
      ],
      variants: [
        'Standard Extendable',
        'Heavy Duty Extendable',
        'Tension Rod',
        'Bay Window Extendable',
        'Double Extendable'
      ]
    },
    'motorized-track': {
      name: 'Motorized Track',
      category: 'Rods',
      price: 'Starting from ₹200/ft',
      description: 'Smart automated curtain tracks with remote control and smartphone integration. Perfect for modern smart homes with convenience and luxury features.',
      images: [
        'https://readdy.ai/api/search-image?query=modern%20motorized%20curtain%20track%20system%2C%20smart%20home%20automation%20for%20window%20treatments%2C%20sleek%20white%20track%20with%20remote%20control%2C%20contemporary%20interior%20technology&width=800&height=600&seq=motorized-track-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=motorized%20curtain%20track%20mechanism%20detail%2C%20smart%20motor%20system%2C%20quality%20engineering%2C%20professional%20product%20photography&width=800&height=600&seq=motorized-track-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=motorized%20curtain%20tracks%20in%20luxury%20smart%20home%2C%20automated%20window%20treatments%2C%20modern%20interior%20technology%2C%20professional%20interior%20photography&width=800&height=600&seq=motorized-track-room&orientation=landscape'
      ],
      features: [
        'Remote control operation',
        'Smartphone app integration',
        'Timer and scheduling functions',
        'Voice control compatibility',
        'Quiet motor operation',
        'Battery backup option',
        'Professional installation required',
        'Smart home integration'
      ],
      specifications: [
        { label: 'Motor Type', value: 'DC Motor with encoder' },
        { label: 'Power Supply', value: '220V AC or 12V DC' },
        { label: 'Length Range', value: '6 feet to 20 feet' },
        { label: 'Weight Capacity', value: 'Up to 30 kg' },
        { label: 'Control Options', value: 'Remote, App, Voice, Wall switch' },
        { label: 'Warranty', value: '3 years motor warranty' }
      ],
      variants: [
        'WiFi Enabled',
        'Zigbee Compatible',
        'Battery Powered',
        'Solar Powered',
        'Heavy Duty Motor'
      ]
    },
    'curtain-tieback': {
      name: 'Curtain Tieback',
      category: 'Accessories',
      price: 'Starting from ₹25/piece',
      description: 'Decorative tiebacks to elegantly hold curtains in place while adding style to your window treatments. Available in various materials and designs.',
      images: [
        'https://readdy.ai/api/search-image?query=elegant%20curtain%20tiebacks%20in%20gold%20finish%2C%20decorative%20rope%20and%20tassel%20design%2C%20premium%20window%20treatment%20accessories%2C%20luxurious%20curtain%20hardware%20collection&width=800&height=600&seq=curtain-tieback-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=curtain%20tieback%20detail%20showing%20intricate%20craftsmanship%2C%20decorative%20tassel%20and%20rope%20design%2C%20professional%20product%20photography&width=800&height=600&seq=curtain-tieback-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=curtain%20tiebacks%20styling%20elegant%20curtains%20in%20formal%20living%20room%2C%20sophisticated%20interior%20design%2C%20professional%20interior%20photography&width=800&height=600&seq=curtain-tieback-room&orientation=landscape'
      ],
      features: [
        'Decorative and functional design',
        'Multiple material options',
        'Easy installation process',
        'Enhances curtain appearance',
        'Allows natural light control',
        'Prevents curtain damage',
        'Available in matching sets',
        'Professional styling advice included'
      ],
      specifications: [
        { label: 'Materials', value: 'Rope, Metal, Crystal, Fabric' },
        { label: 'Length', value: '12 to 18 inches' },
        { label: 'Style Options', value: 'Traditional, Modern, Decorative' },
        { label: 'Finish Options', value: 'Gold, Silver, Bronze, Natural' },
        { label: 'Installation', value: 'Wall hook required' },
        { label: 'Warranty', value: '1 year warranty' }
      ],
      variants: [
        'Rope Tieback',
        'Metal Tieback',
        'Crystal Tieback',
        'Fabric Tieback',
        'Magnetic Tieback'
      ]
    },
    'end-cap': {
      name: 'End Cap',
      category: 'Accessories',
      price: 'Starting from ₹15/piece',
      description: 'Stylish finials for curtain rod ends that add a finishing touch to your window treatments. Available in various designs and finishes.',
      images: [
        'https://readdy.ai/api/search-image?query=decorative%20curtain%20rod%20end%20caps%20and%20finials%2C%20various%20designs%20in%20metal%20finishes%2C%20elegant%20window%20hardware%20accessories%2C%20professional%20product%20photography&width=800&height=600&seq=end-cap-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=curtain%20rod%20finial%20detail%20showing%20decorative%20design%2C%20quality%20metal%20finish%2C%20craftsmanship%20detail%2C%20professional%20product%20photography&width=800&height=600&seq=end-cap-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=decorative%20curtain%20rod%20end%20caps%20installed%20on%20curtain%20rods%2C%20elegant%20window%20treatment%20finishing%2C%20professional%20interior%20photography&width=800&height=600&seq=end-cap-room&orientation=landscape'
      ],
      features: [
        'Decorative finishing touch',
        'Multiple design options',
        'Quality metal construction',
        'Easy installation process',
        'Prevents curtain rings falling off',
        'Enhances rod appearance',
        'Matching hardware available',
        'Universal compatibility'
      ],
      specifications: [
        { label: 'Materials', value: 'Brass, Chrome, Stainless Steel' },
        { label: 'Compatibility', value: '16mm, 19mm, 25mm, 28mm rods' },
        { label: 'Design Options', value: 'Ball, Spear, Decorative, Modern' },
        { label: 'Finish Options', value: 'Polished, Brushed, Antique' },
        { label: 'Installation', value: 'Screw-on or Push-fit' },
        { label: 'Warranty', value: '2 years warranty' }
      ],
      variants: [
        'Ball Finial',
        'Spear Finial',
        'Crystal Finial',
        'Decorative Finial',
        'Modern Finial'
      ]
    },
    'holdback': {
      name: 'Holdback',
      category: 'Accessories',
      price: 'Starting from ₹20/piece',
      description: 'Wall-mounted holders for curtain styling that keep curtains in place while maximizing natural light and creating elegant drapery arrangements.',
      images: [
        'https://readdy.ai/api/search-image?query=stylish%20curtain%20holdbacks%20mounted%20on%20wall%2C%20decorative%20metal%20hooks%20in%20brushed%20finish%2C%20elegant%20window%20treatment%20accessories%2C%20contemporary%20interior%20hardware&width=800&height=600&seq=holdback-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=curtain%20holdback%20detail%20showing%20wall%20mount%20design%2C%20quality%20metal%20construction%2C%20professional%20product%20photography&width=800&height=600&seq=holdback-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=curtain%20holdbacks%20styling%20elegant%20curtains%20against%20wall%2C%20sophisticated%20window%20treatment%20arrangement%2C%20professional%20interior%20photography&width=800&height=600&seq=holdback-room&orientation=landscape'
      ],
      features: [
        'Wall-mounted design',
        'Elegant curtain styling',
        'Maximizes natural light',
        'Durable metal construction',
        'Easy installation process',
        'Multiple finish options',
        'Space-saving solution',
        'Professional installation available'
      ],
      specifications: [
        { label: 'Materials', value: 'Brass, Chrome, Iron' },
        { label: 'Projection', value: '4 to 8 inches from wall' },
        { label: 'Weight Capacity', value: 'Up to 5 kg per holdback' },
        { label: 'Finish Options', value: 'Polished, Brushed, Antique' },
        { label: 'Installation', value: 'Wall screw mount' },
        { label: 'Warranty', value: '2 years warranty' }
      ],
      variants: [
        'Traditional Holdback',
        'Modern Holdback',
        'Decorative Holdback',
        'Minimalist Holdback',
        'Adjustable Holdback'
      ]
    },
    'curtain-ring': {
      name: 'Curtain Ring',
      category: 'Accessories',
      price: 'Starting from ₹5/piece',
      description: 'Quality curtain rings for smooth curtain operation. Available in various materials and finishes to match your curtain rod and interior style.',
      images: [
        'https://readdy.ai/api/search-image?query=premium%20curtain%20rings%20in%20various%20finishes%2C%20metal%20rings%20for%20smooth%20curtain%20operation%2C%20window%20treatment%20hardware%20accessories%2C%20professional%20product%20photography&width=800&height=600&seq=curtain-ring-main&orientation=landscape',
        'https://readdy.ai/api/search-image?query=curtain%20ring%20detail%20showing%20smooth%20finish%20and%20quality%20construction%2C%20professional%20product%20photography&width=800&height=600&seq=curtain-ring-detail&orientation=landscape',
        'https://readdy.ai/api/search-image?query=curtain%20rings%20on%20curtain%20rod%20with%20flowing%20curtains%2C%20smooth%20operation%20demonstration%2C%20professional%20interior%20photography&width=800&height=600&seq=curtain-ring-room&orientation=landscape'
      ],
      features: [
        'Smooth gliding operation',
        'Durable metal construction',
        'Quiet operation',
        'Easy curtain attachment',
        'Corrosion resistant finish',
        'Universal rod compatibility',
        'Available in bulk quantities',
        'Professional quality'
      ],
      specifications: [
        { label: 'Materials', value: 'Brass, Chrome, Plastic' },
        { label: 'Inner Diameter', value: '16mm, 19mm, 25mm, 28mm' },
        { label: 'Ring Type', value: 'Split ring or Solid ring' },
        { label: 'Finish Options', value: 'Polished, Brushed, Antique' },
        { label: 'Quantity', value: 'Sold in sets of 10-20 pieces' },
        { label: 'Warranty', value: '1 year warranty' }
      ],
      variants: [
        'Metal Rings',
        'Plastic Rings',
        'Eyelet Rings',
        'Clip Rings',
        'Silent Rings'
      ]
    }
  };

  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <i className="ri-error-warning-line text-6xl text-gray-300 mb-4"></i>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
          <p className="text-gray-600 mb-6">Sorry! This product is currently unavailable. Please check back soon.</p>
          <Link href="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer whitespace-nowrap inline-block">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

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

      {/* Breadcrumb */}
      <section className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 cursor-pointer">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <Link href="/products" className="hover:text-blue-600 cursor-pointer">Products</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                <img 
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-[4/3] overflow-hidden rounded-lg border-2 transition-colors cursor-pointer ${
                      selectedImage === index ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {product.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-2xl font-bold text-blue-600 mb-6">{product.price}</p>
                <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <i className="ri-check-line text-green-600 mr-3 mt-0.5 text-lg flex-shrink-0"></i>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Variants */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Available Variants</h3>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((variant, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-2 rounded-lg text-sm font-medium">
                      {variant}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a 
                  href="tel:9691177119"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 cursor-pointer whitespace-nowrap text-center inline-block flex-1"
                >
                  Get Quote Now
                </a>
                <a 
                  href="https://wa.me/919691177119"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white cursor-pointer whitespace-nowrap text-center inline-block flex-1"
                >
                  WhatsApp Us
                </a>
              </div>

              <div className="flex items-center space-x-6 pt-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <i className="ri-truck-line mr-2 text-lg"></i>
                  <span>Free Installation</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-shield-check-line mr-2 text-lg"></i>
                  <span>2+ Years Warranty</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-customer-service-2-line mr-2 text-lg"></i>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16 lg:mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Product Specifications</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    {product.specifications.map((spec, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50">{spec.label}</td>
                        <td className="px-6 py-4 text-gray-700">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h2>
          <div className="text-center">
            <Link href="/products" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 cursor-pointer whitespace-nowrap inline-block">
              View All Products
            </Link>
          </div>
          <div className="flex justify-center space-x-4 mt-8">
            <a href="tel:9691177119" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 cursor-pointer whitespace-nowrap inline-block">
              <i className="ri-phone-line mr-2"></i>
              Call: 9691177119
            </a>
            <a href="https://wa.me/919691177119" className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 cursor-pointer whitespace-nowrap inline-block">
              <i className="ri-whatsapp-line mr-2"></i>
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