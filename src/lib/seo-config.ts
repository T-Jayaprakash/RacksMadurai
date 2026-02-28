// Production-Grade SEO Configuration for Racks Madurai
// Optimized for Google-first ranking and Local SEO

export const siteConfig = {
    name: 'Racks Madurai',
    legalName: 'Racks Madurai - Next Step Display Solutions',
    tagline: 'Next Step Display Solutions',
    description: 'Supermarket & storage rack manufacturers in Madurai serving all Tamil Nadu. Factory-made racks for supermarkets and warehouses. Get quote now.',
    url: 'https://www.racksmadurai.com',
    phone: '+91 99946 12609',
    phoneClean: '919994612609',
    email: 'Sales@akracks.com',
    foundingYear: 2014,
    address: {
        street: 'No.3/176-R1 Neethi Nager, Otthakadai',
        area: 'Otthakadai',
        city: 'Madurai',
        state: 'Tamil Nadu',
        stateCode: 'TN',
        pincode: '625107',
        country: 'India',
        countryCode: 'IN',
        full: 'No.3/176-R1 Neethi Nager, Otthakadai, (High Court Back side) Madurai-625107',
    },
    geo: {
        latitude: 9.9547306,
        longitude: 78.188958,
    },
    services: ['Consulting', 'Designing', 'Manufacturing', 'Supply', 'Installation', 'After-Sales Service'],
    social: {
        whatsapp: 'https://wa.me/919994612609',
    },
    stats: {
        yearsExperience: 10,
        installations: 500,
        districts: 38,
        products: 50,
    },
    openingHours: {
        weekdays: '09:00-22:00',
        saturday: '09:00-22:00',
        sunday: 'Closed',
        formatted: 'Mon-Sat 9:00 AM - 10:00 PM',
    },
    serviceAreas: [
        'Madurai', 'Trichy', 'Coimbatore', 'Chennai', 'Salem', 'Tirunelveli',
        'Erode', 'Tirupur', 'Vellore', 'Thoothukudi', 'Dindigul', 'Thanjavur',
        'Sivaganga', 'Ramanathapuram', 'Virudhunagar', 'Theni', 'Karur',
        'Namakkal', 'Dharmapuri', 'Krishnagiri', 'Tiruvannamalai', 'Villupuram',
        'Cuddalore', 'Nagapattinam', 'Tiruvarur', 'Pudukkottai', 'Perambalur',
        'Ariyalur', 'Nilgiris', 'Kanchipuram', 'Tiruvallur', 'Chengalpattu',
        'Ranipet', 'Tirupattur', 'Kallakurichi', 'Tenkasi', 'Mayiladuthurai', 'Kanniyakumari'
    ],
};

// SEO-focused page configurations
export interface PageSEOConfig {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    h1: string;
    keywords: string[];
    canonicalUrl: string;
    relatedPages: string[];
    primaryKeyword: string;
    secondaryKeywords: string[];
}

export const seoPages: PageSEOConfig[] = [
    {
        slug: 'supermarket-racks-madurai',
        title: 'Supermarket Racks',
        metaTitle: 'Supermarket Racks Manufacturer in Madurai | Display Racks | Racksmadurai',
        metaDescription: 'Leading supermarket rack manufacturers in Madurai. Premium display racks, gondola shelving, wall racks & corner racks for retail stores. Factory-direct pricing. Call +91 99946 12609.',
        h1: 'Supermarket Racks Manufacturer in Madurai',
        primaryKeyword: 'supermarket racks madurai',
        keywords: [
            'supermarket racks madurai',
            'supermarket display racks',
            'gondola shelving madurai',
            'retail store racks',
            'supermarket rack manufacturer',
            'display racks tamil nadu',
            'supermarket shelving systems',
            'grocery store racks madurai',
        ],
        secondaryKeywords: ['display racks', 'retail shelving', 'store fixtures'],
        canonicalUrl: 'https://www.racksmadurai.com/supermarket-racks-madurai',
        relatedPages: ['/steel-racks-manufacturer-madurai', '/display-racks-madurai', '/warehouse-racks-madurai', '/vegetable-fruit-racks'],
    },
    {
        slug: 'steel-racks-manufacturer-madurai',
        title: 'Steel Racks Manufacturer',
        metaTitle: 'Steel Racks Manufacturer in Madurai | Industrial Storage Racks | Racksmadurai',
        metaDescription: 'Premium steel rack manufacturers in Madurai. Heavy-duty industrial steel racks, storage solutions & warehouse shelving. ISO certified quality. Get free quote today!',
        h1: 'Steel Racks Manufacturer in Madurai',
        primaryKeyword: 'steel racks manufacturer madurai',
        keywords: [
            'steel racks manufacturer madurai',
            'steel storage racks',
            'industrial steel racks',
            'metal racks madurai',
            'steel shelving systems',
            'ms racks manufacturer',
            'steel rack supplier tamil nadu',
            'heavy duty steel racks',
        ],
        secondaryKeywords: ['industrial racks', 'metal shelving', 'storage systems'],
        canonicalUrl: 'https://www.racksmadurai.com/steel-racks-manufacturer-madurai',
        relatedPages: ['/heavy-duty-industrial-racks', '/warehouse-racks-madurai', '/supermarket-racks-madurai', '/custom-rack-manufacturer'],
    },
    {
        slug: 'warehouse-racks-madurai',
        title: 'Warehouse Racks',
        metaTitle: 'Warehouse Racks Manufacturer in Madurai | Industrial Storage Solutions | Racksmadurai',
        metaDescription: 'Heavy-duty warehouse rack manufacturers in Madurai. Pallet racks, industrial shelving, warehouse storage solutions. High load capacity. Pan Tamil Nadu delivery.',
        h1: 'Warehouse Racks Manufacturer in Madurai',
        primaryKeyword: 'warehouse racks madurai',
        keywords: [
            'warehouse racks madurai',
            'warehouse storage racks',
            'pallet racks madurai',
            'industrial warehouse shelving',
            'warehouse rack manufacturer',
            'godown racks tamil nadu',
            'storage racks for warehouse',
            'heavy duty warehouse racks',
        ],
        secondaryKeywords: ['pallet racking', 'industrial storage', 'godown racks'],
        canonicalUrl: 'https://www.racksmadurai.com/warehouse-racks-madurai',
        relatedPages: ['/heavy-duty-industrial-racks', '/steel-racks-manufacturer-madurai', '/supermarket-racks-madurai', '/custom-rack-manufacturer'],
    },
    {
        slug: 'display-racks-madurai',
        title: 'Display Racks',
        metaTitle: 'Display Racks Manufacturer in Madurai | Retail Display Solutions | Racksmadurai',
        metaDescription: 'Premium display rack manufacturers in Madurai. Retail display racks, showroom displays, product showcases. Custom designs available. 12+ color options.',
        h1: 'Display Racks Manufacturer in Madurai',
        primaryKeyword: 'display racks madurai',
        keywords: [
            'display racks madurai',
            'retail display racks',
            'product display racks',
            'showroom display racks',
            'display rack manufacturer',
            'store display solutions',
            'commercial display racks',
            'display shelving madurai',
        ],
        secondaryKeywords: ['retail fixtures', 'product displays', 'store shelving'],
        canonicalUrl: 'https://www.racksmadurai.com/display-racks-madurai',
        relatedPages: ['/supermarket-racks-madurai', '/garment-racks', '/pharmacy-racks', '/fancy-store-racks'],
    },
    {
        slug: 'vegetable-fruit-racks',
        title: 'Vegetable & Fruit Racks',
        metaTitle: 'Vegetable & Fruit Racks Manufacturer | Fresh Produce Display | Racksmadurai',
        metaDescription: 'Specialized vegetable and fruit rack manufacturers in Madurai. Fresh produce display racks with SS trays, ventilated design. Perfect for supermarkets & grocery stores.',
        h1: 'Vegetable & Fruit Racks Manufacturer in Madurai',
        primaryKeyword: 'vegetable fruit racks',
        keywords: [
            'vegetable racks madurai',
            'fruit display racks',
            'fresh produce racks',
            'vegetable display stands',
            'fruit and vegetable racks',
            'ss tray vegetable racks',
            'supermarket vegetable racks',
            'grocery store produce racks',
        ],
        secondaryKeywords: ['produce displays', 'fresh food racks', 'grocery displays'],
        canonicalUrl: 'https://www.racksmadurai.com/vegetable-fruit-racks',
        relatedPages: ['/supermarket-racks-madurai', '/display-racks-madurai', '/steel-racks-manufacturer-madurai', '/custom-rack-manufacturer'],
    },
    {
        slug: 'pharmacy-racks',
        title: 'Pharmacy Racks',
        metaTitle: 'Pharmacy Racks Manufacturer in Madurai | Medical Store Display | Racksmadurai',
        metaDescription: 'Professional pharmacy rack manufacturers in Madurai. Medical store display racks with label strips, clean design. Anti-bacterial coating. Perfect for pharmacies & clinics.',
        h1: 'Pharmacy Racks Manufacturer in Madurai',
        primaryKeyword: 'pharmacy racks madurai',
        keywords: [
            'pharmacy racks madurai',
            'medical store racks',
            'pharmacy display racks',
            'medicine rack manufacturer',
            'pharmacy shelving',
            'drug store racks',
            'chemist shop racks',
            'pharmacy storage solutions',
        ],
        secondaryKeywords: ['medical displays', 'chemist racks', 'drugstore shelving'],
        canonicalUrl: 'https://www.racksmadurai.com/pharmacy-racks',
        relatedPages: ['/display-racks-madurai', '/steel-racks-manufacturer-madurai', '/supermarket-racks-madurai', '/custom-rack-manufacturer'],
    },
    {
        slug: 'garment-racks',
        title: 'Garment Racks',
        metaTitle: 'Garment Racks Manufacturer in Madurai | Clothing Display Racks | Racksmadurai',
        metaDescription: 'Stylish garment rack manufacturers in Madurai. Clothing store display racks, hanger systems, boutique fixtures. Chrome & wooden finish options available.',
        h1: 'Garment Racks Manufacturer in Madurai',
        primaryKeyword: 'garment racks madurai',
        keywords: [
            'garment racks madurai',
            'clothing display racks',
            'garment store racks',
            'textile shop racks',
            'boutique display racks',
            'saree display racks',
            'clothes hanger rack',
            'garment showroom racks',
        ],
        secondaryKeywords: ['clothing fixtures', 'boutique displays', 'textile racks'],
        canonicalUrl: 'https://www.racksmadurai.com/garment-racks',
        relatedPages: ['/display-racks-madurai', '/fancy-store-racks', '/steel-racks-manufacturer-madurai', '/custom-rack-manufacturer'],
    },
    {
        slug: 'heavy-duty-industrial-racks',
        title: 'Heavy Duty Industrial Racks',
        metaTitle: 'Heavy Duty Industrial Racks Manufacturer | Warehouse Storage | Racksmadurai',
        metaDescription: 'Industrial-grade heavy duty rack manufacturers in Madurai. High load capacity racks for warehouses, factories & godowns. Pallet racking compatible. 500-1000 kg per shelf.',
        h1: 'Heavy Duty Industrial Racks Manufacturer in Madurai',
        primaryKeyword: 'heavy duty industrial racks',
        keywords: [
            'heavy duty racks madurai',
            'industrial storage racks',
            'heavy duty industrial racks',
            'factory storage racks',
            'godown racks madurai',
            'pallet racks manufacturer',
            'industrial shelving systems',
            'heavy load racks tamil nadu',
        ],
        secondaryKeywords: ['warehouse racks', 'industrial shelving', 'pallet storage'],
        canonicalUrl: 'https://www.racksmadurai.com/heavy-duty-industrial-racks',
        relatedPages: ['/warehouse-racks-madurai', '/steel-racks-manufacturer-madurai', '/supermarket-racks-madurai', '/custom-rack-manufacturer'],
    },
    {
        slug: 'custom-rack-manufacturer',
        title: 'Custom Rack Manufacturer',
        metaTitle: 'Custom Rack Manufacturer in Madurai | Bespoke Storage Solutions | Racksmadurai',
        metaDescription: 'Custom rack manufacturing in Madurai. Bespoke storage solutions tailored to your needs. Any size, any design, any color. Free consultation & design service.',
        h1: 'Custom Rack Manufacturer in Madurai',
        primaryKeyword: 'custom rack manufacturer madurai',
        keywords: [
            'custom rack manufacturer',
            'bespoke racks madurai',
            'custom storage solutions',
            'made to order racks',
            'custom display racks',
            'tailor made racks',
            'custom retail fixtures',
            'special racks manufacturer',
        ],
        secondaryKeywords: ['bespoke storage', 'custom solutions', 'tailored racks'],
        canonicalUrl: 'https://www.racksmadurai.com/custom-rack-manufacturer',
        relatedPages: ['/steel-racks-manufacturer-madurai', '/supermarket-racks-madurai', '/warehouse-racks-madurai', '/display-racks-madurai'],
    },
    {
        slug: 'about-racks-madurai',
        title: 'About Us',
        metaTitle: 'About Racks Madurai | Leading Rack Manufacturers in Tamil Nadu',
        metaDescription: 'Learn about Racks Madurai - 10+ years of expertise in rack manufacturing. Serving all 38 districts of Tamil Nadu with premium display and storage rack solutions.',
        h1: 'About Racks Madurai - Your Trusted Rack Manufacturer',
        primaryKeyword: 'rack manufacturers tamil nadu',
        keywords: [
            'about racks madurai',
            'rack manufacturer tamil nadu',
            'display rack company',
            'storage rack manufacturer',
            'rack manufacturing company',
            'madurai rack company',
            'tamil nadu rack supplier',
        ],
        secondaryKeywords: ['about us', 'our company', 'rack manufacturer'],
        canonicalUrl: 'https://www.racksmadurai.com/about-racks-madurai',
        relatedPages: ['/contact-racks-madurai', '/supermarket-racks-madurai', '/steel-racks-manufacturer-madurai'],
    },
    {
        slug: 'contact-racks-madurai',
        title: 'Contact Us',
        metaTitle: 'Contact Racks Madurai | Get Free Quote | Rack Manufacturer Madurai',
        metaDescription: 'Contact Racks Madurai for premium rack solutions. Call +91 99946 12609 or WhatsApp for free quotes. Factory-direct pricing. Pan Tamil Nadu delivery & installation.',
        h1: 'Contact Racks Madurai',
        primaryKeyword: 'contact rack manufacturer madurai',
        keywords: [
            'contact racks madurai',
            'rack manufacturer contact',
            'rack quote madurai',
            'rack supplier contact',
            'display rack enquiry',
            'storage rack quote',
        ],
        secondaryKeywords: ['get quote', 'contact us', 'enquiry'],
        canonicalUrl: 'https://www.racksmadurai.com/contact-racks-madurai',
        relatedPages: ['/about-racks-madurai', '/supermarket-racks-madurai', '/steel-racks-manufacturer-madurai'],
    },
];

// Get SEO config by slug
export const getSEOConfigBySlug = (slug: string): PageSEOConfig | undefined => {
    return seoPages.find(page => page.slug === slug);
};

// Generate FAQ schema for a page
export interface FAQItem {
    question: string;
    answer: string;
}

export const pageFAQs: Record<string, FAQItem[]> = {
    'supermarket-racks-madurai': [
        {
            question: 'What types of supermarket racks do you manufacture?',
            answer: 'We manufacture a complete range of supermarket racks including wall racks, center racks, corner racks, gondola shelving, end cap displays, checkout counters, and promotional display units. All racks are available in 12+ colors with powder-coated finish.',
        },
        {
            question: 'What is the price range for supermarket racks?',
            answer: 'Our supermarket rack prices vary based on size, material, and customization. Basic wall racks start from ₹3,500 per unit, while complete store setups are customized based on your store layout. Contact us for a free quote and site survey.',
        },
        {
            question: 'Do you provide installation services for supermarket racks?',
            answer: 'Yes, we provide complete installation services across Tamil Nadu. Our professional team handles everything from delivery to installation, ensuring perfect setup every time. Installation is included in our package pricing.',
        },
        {
            question: 'What is the delivery time for supermarket racks?',
            answer: 'Standard supermarket racks are typically ready within 7-10 working days. Custom orders may take 15-20 days depending on specifications. We offer express delivery options for urgent requirements.',
        },
        {
            question: 'Do you serve areas outside Madurai?',
            answer: 'Yes! We serve all 38 districts of Tamil Nadu including Chennai, Coimbatore, Trichy, Salem, Tirunelveli, and more. We also undertake projects in neighboring states on request.',
        },
    ],
    'steel-racks-manufacturer-madurai': [
        {
            question: 'What grade of steel do you use for manufacturing racks?',
            answer: 'We use high-grade mild steel (MS) with thickness ranging from 1.2mm to 2.5mm depending on the rack type. All our racks undergo anti-rust treatment and powder coating for durability.',
        },
        {
            question: 'What is the load capacity of your steel racks?',
            answer: 'Our steel racks have varying load capacities: Standard display racks handle 100-150 kg per shelf, heavy-duty racks support 200-500 kg per shelf, and industrial racks can handle up to 1000 kg per level.',
        },
        {
            question: 'Do you provide warranty on steel racks?',
            answer: 'Yes, we provide a 1-year warranty on manufacturing defects. Our powder-coated finish is guaranteed to resist rust for 5+ years with normal use. Extended warranty options are available.',
        },
        {
            question: 'Can you manufacture custom-sized steel racks?',
            answer: 'Absolutely! We specialize in custom manufacturing. Share your requirements (dimensions, load capacity, design) and we\'ll create a tailored solution. Custom racks are our specialty.',
        },
    ],
    'warehouse-racks-madurai': [
        {
            question: 'What types of warehouse racks do you manufacture?',
            answer: 'We manufacture pallet racks, cantilever racks, slotted angle racks, mezzanine floors, mobile racking systems, and long-span shelving. All designed for maximum storage efficiency and safety.',
        },
        {
            question: 'What is the maximum load capacity of warehouse racks?',
            answer: 'Our heavy-duty warehouse racks can handle 500 kg to 1000+ kg per level. Pallet racking systems are designed for forklift operations with proper safety certifications.',
        },
        {
            question: 'Do you provide warehouse layout planning services?',
            answer: 'Yes, our team provides free warehouse layout planning and consultation. We analyze your space, inventory patterns, and workflow to design the most efficient storage solution.',
        },
    ],
    'pharmacy-racks': [
        {
            question: 'Are your pharmacy racks suitable for medicine storage?',
            answer: 'Yes, our pharmacy racks are specifically designed for medicine storage with anti-bacterial powder coating, proper ventilation, and label strip holders for organized display.',
        },
        {
            question: 'What sizes of pharmacy racks are available?',
            answer: 'We offer pharmacy racks in various sizes from 2ft to 6ft width and heights up to 7ft. Custom sizes are available to fit your pharmacy layout perfectly.',
        },
    ],
    'garment-racks': [
        {
            question: 'What types of garment racks do you offer?',
            answer: 'We offer wall-mounted hanger racks, four-way stands, step-down racks, ladder racks, glass shelf displays, and complete boutique fixtures. Available in chrome, wooden, and powder-coated finishes.',
        },
        {
            question: 'Can garment racks be customized for different clothing types?',
            answer: 'Yes, we customize racks for sarees, shirts, jeans, kids wear, ethnic wear, and more. Each design optimizes display based on the garment type and store layout.',
        },
    ],
    'heavy-duty-industrial-racks': [
        {
            question: 'What industries do you serve with heavy-duty racks?',
            answer: 'We serve warehouses, manufacturing plants, automobile workshops, textile mills, food processing units, cold storage, and logistics companies across Tamil Nadu.',
        },
        {
            question: 'Are your industrial racks certified for safety?',
            answer: 'Yes, our industrial racks meet safety standards with proper load testing. We provide load capacity documentation and can arrange third-party certification on request.',
        },
    ],
};

// Internal linking structure
export const internalLinks = {
    footer: [
        { text: 'Supermarket Racks Manufacturer Madurai', href: '/supermarket-racks-madurai' },
        { text: 'Steel Racks Manufacturer Madurai', href: '/steel-racks-manufacturer-madurai' },
        { text: 'Warehouse Storage Racks', href: '/warehouse-racks-madurai' },
        { text: 'Display Racks Madurai', href: '/display-racks-madurai' },
        { text: 'Vegetable & Fruit Racks', href: '/vegetable-fruit-racks' },
        { text: 'Pharmacy Display Racks', href: '/pharmacy-racks' },
        { text: 'Garment Store Racks', href: '/garment-racks' },
        { text: 'Heavy Duty Industrial Racks', href: '/heavy-duty-industrial-racks' },
        { text: 'Custom Rack Manufacturer', href: '/custom-rack-manufacturer' },
        { text: 'About Racks Madurai', href: '/about-racks-madurai' },
        { text: 'Contact Us', href: '/contact-racks-madurai' },
    ],
    products: [
        { text: 'Supermarket Racks', href: '/supermarket-racks-madurai' },
        { text: 'Steel Racks', href: '/steel-racks-manufacturer-madurai' },
        { text: 'Warehouse Racks', href: '/warehouse-racks-madurai' },
        { text: 'Display Racks', href: '/display-racks-madurai' },
        { text: 'Vegetable Racks', href: '/vegetable-fruit-racks' },
        { text: 'Pharmacy Racks', href: '/pharmacy-racks' },
        { text: 'Garment Racks', href: '/garment-racks' },
        { text: 'Heavy Duty Racks', href: '/heavy-duty-industrial-racks' },
    ],
    services: [
        { text: 'Rack Design & Consulting', href: '/custom-rack-manufacturer' },
        { text: 'Manufacturing', href: '/steel-racks-manufacturer-madurai' },
        { text: 'Supply & Delivery', href: '/contact-racks-madurai' },
        { text: 'Installation Services', href: '/contact-racks-madurai' },
    ],
};
