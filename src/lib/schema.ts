// Comprehensive JSON-LD Schema Library for AK Racks Madurai
// Implements LocalBusiness, Product, FAQ, Breadcrumb, and Organization schemas

import { siteConfig, FAQItem } from './seo-config';

// LocalBusiness Schema (Primary)
export const generateLocalBusinessSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: siteConfig.foundingYear.toString(),
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Bank Transfer, Credit Card',
    address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.pincode,
        addressCountry: siteConfig.address.countryCode,
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
    },
    areaServed: siteConfig.serviceAreas.map(area => ({
        '@type': 'City',
        name: area,
        containedInPlace: {
            '@type': 'State',
            name: 'Tamil Nadu',
        },
    })),
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '22:00',
        },
    ],
    image: `${siteConfig.url}/images/logo.png`,
    logo: `${siteConfig.url}/images/logo.png`,
    sameAs: [],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Rack Products',
        itemListElement: [
            { '@type': 'OfferCatalog', name: 'Supermarket Racks', url: `${siteConfig.url}/supermarket-racks-madurai` },
            { '@type': 'OfferCatalog', name: 'Steel Racks', url: `${siteConfig.url}/steel-racks-manufacturer-madurai` },
            { '@type': 'OfferCatalog', name: 'Warehouse Racks', url: `${siteConfig.url}/warehouse-racks-madurai` },
            { '@type': 'OfferCatalog', name: 'Display Racks', url: `${siteConfig.url}/display-racks-madurai` },
            { '@type': 'OfferCatalog', name: 'Vegetable & Fruit Racks', url: `${siteConfig.url}/vegetable-fruit-racks` },
            { '@type': 'OfferCatalog', name: 'Pharmacy Racks', url: `${siteConfig.url}/pharmacy-racks` },
            { '@type': 'OfferCatalog', name: 'Garment Racks', url: `${siteConfig.url}/garment-racks` },
            { '@type': 'OfferCatalog', name: 'Heavy Duty Industrial Racks', url: `${siteConfig.url}/heavy-duty-industrial-racks` },
        ],
    },
});

// Organization Schema
export const generateOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#corporation`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    foundingDate: siteConfig.foundingYear.toString(),
    founders: [
        {
            '@type': 'Person',
            name: 'Krishnan',
        },
    ],
    address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.pincode,
        addressCountry: siteConfig.address.countryCode,
    },
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone,
        contactType: 'sales',
        email: siteConfig.email,
        areaServed: 'IN',
        availableLanguage: ['English', 'Tamil'],
    },
});

// Product Schema
export interface ProductSchemaInput {
    name: string;
    description: string;
    image: string;
    category: string;
    slug: string;
    material?: string;
    brand?: string;
}

export const generateProductSchema = (product: ProductSchemaInput) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image.startsWith('http') ? product.image : `${siteConfig.url}${product.image}`,
    brand: {
        '@type': 'Brand',
        name: product.brand || siteConfig.name,
    },
    manufacturer: {
        '@type': 'Organization',
        name: siteConfig.name,
        url: siteConfig.url,
    },
    category: product.category,
    material: product.material || 'High-Grade Mild Steel with Powder Coating',
    offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'INR',
        priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        seller: {
            '@type': 'Organization',
            name: siteConfig.name,
        },
        url: `${siteConfig.url}/${product.slug}`,
        hasMerchantReturnPolicy: {
            '@type': 'MerchantReturnPolicy',
            applicableCountry: 'IN',
            returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
            merchantReturnDays: 7,
        },
        shippingDetails: {
            '@type': 'OfferShippingDetails',
            shippingDestination: {
                '@type': 'DefinedRegion',
                addressCountry: 'IN',
                addressRegion: 'TN',
            },
            deliveryTime: {
                '@type': 'ShippingDeliveryTime',
                handlingTime: {
                    '@type': 'QuantitativeValue',
                    minValue: 7,
                    maxValue: 15,
                    unitCode: 'DAY',
                },
                transitTime: {
                    '@type': 'QuantitativeValue',
                    minValue: 1,
                    maxValue: 5,
                    unitCode: 'DAY',
                },
            },
        },
    },
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '150',
        bestRating: '5',
        worstRating: '1',
    },
});

// FAQ Schema
export const generateFAQSchema = (faqs: FAQItem[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
});

// Breadcrumb Schema
export interface BreadcrumbItem {
    name: string;
    url: string;
}

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
});

// WebPage Schema
export const generateWebPageSchema = ({
    title,
    description,
    url,
    datePublished,
    dateModified,
}: {
    title: string;
    description: string;
    url: string;
    datePublished?: string;
    dateModified?: string;
}) => ({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    name: title,
    description: description,
    url: url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    isPartOf: {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
    },
    about: {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
    },
    datePublished: datePublished || '2024-01-01',
    dateModified: dateModified || new Date().toISOString().split('T')[0],
    inLanguage: 'en-IN',
    potentialAction: {
        '@type': 'ReadAction',
        target: url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    },
});

// Service Schema
export const generateServiceSchema = ({
    serviceName,
    description,
    url,
    areaServed,
}: {
    serviceName: string;
    description: string;
    url: string;
    areaServed?: string[];
}) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
    },
    areaServed: (areaServed || siteConfig.serviceAreas).map(area => ({
        '@type': 'City',
        name: area,
    })),
    url: url.startsWith('http') ? url : `${siteConfig.url}${url}`,
    offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
    },
});

// Combined schema for pages
export const generatePageSchema = ({
    pageType,
    title,
    description,
    url,
    breadcrumbs,
    faqs,
    product,
}: {
    pageType: 'product' | 'service' | 'about' | 'contact' | 'home';
    title: string;
    description: string;
    url: string;
    breadcrumbs?: BreadcrumbItem[];
    faqs?: FAQItem[];
    product?: ProductSchemaInput;
}) => {
    const schemas: object[] = [generateLocalBusinessSchema()];

    if (breadcrumbs && breadcrumbs.length > 0) {
        schemas.push(generateBreadcrumbSchema(breadcrumbs));
    }

    schemas.push(generateWebPageSchema({ title, description, url }));

    if (faqs && faqs.length > 0) {
        schemas.push(generateFAQSchema(faqs));
    }

    if (product) {
        schemas.push(generateProductSchema(product));
    }

    return schemas;
};
