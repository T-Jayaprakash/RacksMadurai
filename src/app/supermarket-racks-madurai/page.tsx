import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getSEOConfigBySlug, pageFAQs, siteConfig } from '@/lib/seo-config';
import { generatePageSchema } from '@/lib/schema';
import { productCategories } from '@/lib/products';

const pageSlug = 'supermarket-racks-madurai';
const seoConfig = getSEOConfigBySlug(pageSlug)!;
const faqs = pageFAQs[pageSlug] || [];

export const metadata: Metadata = {
    title: seoConfig.metaTitle,
    description: seoConfig.metaDescription,
    keywords: seoConfig.keywords,
    alternates: {
        canonical: seoConfig.canonicalUrl,
    },
    openGraph: {
        title: seoConfig.metaTitle,
        description: seoConfig.metaDescription,
        url: seoConfig.canonicalUrl,
        siteName: siteConfig.name,
        images: [
            {
                url: '/images/supermarket-rack-modern.png',
                width: 1200,
                height: 630,
                alt: 'Supermarket Racks Manufacturer in Madurai',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: seoConfig.metaTitle,
        description: seoConfig.metaDescription,
        images: ['/images/supermarket-rack-modern.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const schemas = generatePageSchema({
    pageType: 'product',
    title: seoConfig.metaTitle,
    description: seoConfig.metaDescription,
    url: `/${pageSlug}`,
    breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: 'Supermarket Racks', url: `/${pageSlug}` },
    ],
    faqs: faqs,
    product: {
        name: 'Supermarket Display Racks',
        description: 'Premium supermarket display racks manufactured in Madurai. Gondola shelving, wall racks, corner racks available in 12+ colors.',
        image: '/images/supermarket-rack-modern.png',
        category: 'Supermarket Racks',
        slug: pageSlug,
    },
});

// Get supermarket products
const supermarketCategory = productCategories.find(c => c.slug === 'supermarket-racks');
const products = supermarketCategory?.products || [];

export default function SupermarketRacksMaduraiPage() {
    return (
        <>
            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
            />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, orange 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }} />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    {/* Breadcrumb */}
                    <nav className="mb-8" aria-label="Breadcrumb">
                        <ol className="flex items-center gap-2 text-sm text-slate-400">
                            <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
                            <li><span className="mx-2">/</span></li>
                            <li><Link href="/products" className="hover:text-orange-400 transition-colors">Products</Link></li>
                            <li><span className="mx-2">/</span></li>
                            <li className="text-orange-400">Supermarket Racks</li>
                        </ol>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
                                #1 Rack Manufacturer in Madurai
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                {seoConfig.h1}
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Premium quality <strong>supermarket display racks</strong> designed for maximum product visibility and customer convenience. We are the leading <strong>supermarket rack manufacturers in Madurai</strong>, serving retail businesses across Tamil Nadu.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={`${siteConfig.social.whatsapp}?text=${encodeURIComponent('Hi! I am interested in supermarket racks. Please share details and pricing.')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:-translate-y-1"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Get Free Quote
                                </a>
                                <a
                                    href={`tel:${siteConfig.phone}`}
                                    className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:-translate-y-1"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Call Now
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/supermarket-rack-modern.png"
                                    alt="Supermarket racks manufacturer in Madurai - Premium display rack"
                                    width={600}
                                    height={500}
                                    className="w-full h-auto"
                                    priority
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 shadow-xl hidden md:block">
                                <p className="text-3xl font-bold text-white">500+</p>
                                <p className="text-orange-100">Stores Equipped</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="bg-slate-800 py-8 border-y border-slate-700">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center">
                        {[
                            { value: '10+', label: 'Years Experience' },
                            { value: '500+', label: 'Installations' },
                            { value: '38', label: 'Districts Served' },
                            { value: '12+', label: 'Color Options' },
                        ].map((stat, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                                    <p className="text-sm text-slate-400">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section - Why Choose Our Supermarket Racks */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Why Choose AK Racks Madurai for <span className="text-orange-400">Supermarket Racks?</span>
                        </h2>
                        <p className="text-lg text-slate-300">
                            As the leading supermarket racks manufacturer in Madurai, we combine quality materials, innovative design, and competitive pricing to deliver the best display solutions for your retail store.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: '🏭', title: 'Factory-Direct Pricing', desc: 'No middlemen. Get the best prices directly from our manufacturing unit.' },
                            { icon: '🎨', title: '12+ Color Options', desc: 'Choose from a wide range of powder-coated colors to match your store design.' },
                            { icon: '📐', title: 'Custom Sizes', desc: 'Any size, any configuration. We manufacture racks to your exact specifications.' },
                            { icon: '🔧', title: 'Professional Installation', desc: 'Expert team for installation across all 38 districts of Tamil Nadu.' },
                        ].map((benefit, index) => (
                            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 text-center hover:border-orange-500/50 transition-colors">
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-slate-400">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Our Supermarket Rack <span className="text-orange-400">Collection</span>
                        </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            Explore our range of supermarket display racks designed for maximum product visibility and shopper convenience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.slice(0, 6).map((product) => (
                            <div key={product.id} className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all">
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={`${product.name} - Supermarket rack manufacturer Madurai`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-slate-400 mb-4">{product.description}</p>
                                    <a
                                        href={`${siteConfig.social.whatsapp}?text=${encodeURIComponent(`Hi! I'm interested in ${product.name} for my supermarket. Please share details and pricing.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-orange-400 font-semibold hover:gap-3 transition-all"
                                    >
                                        Enquire Now
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/products/supermarket-racks"
                            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all"
                        >
                            View All Supermarket Racks
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Use Cases / Industries Section */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Industries We <span className="text-orange-400">Serve</span>
                        </h2>
                        <p className="text-lg text-slate-300">
                            Our supermarket racks are trusted by leading retail businesses across Tamil Nadu
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Supermarkets & Grocery Stores', desc: 'Complete retail display solutions for organized grocery shopping experience.' },
                            { title: 'Convenience Stores', desc: 'Compact and efficient racks for smaller retail spaces.' },
                            { title: 'Departmental Stores', desc: 'Multi-category display systems for diverse product ranges.' },
                            { title: 'Wholesale Outlets', desc: 'Heavy-duty racks for bulk product display and storage.' },
                            { title: 'FMCG Retail Chains', desc: 'Standardized rack systems for chain store expansions.' },
                            { title: 'General Stores', desc: 'Versatile racks for mixed merchandise display.' },
                        ].map((industry, index) => (
                            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-orange-500/30 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">{industry.title}</h3>
                                <p className="text-slate-400">{industry.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications Section */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Premium Quality <span className="text-orange-400">Specifications</span>
                            </h2>
                            <p className="text-lg text-slate-300 mb-8">
                                Every supermarket rack from AK Racks Madurai is built to last with premium materials and precision engineering.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { label: 'Material', value: 'High-Grade Mild Steel (1.2mm - 2mm thickness)' },
                                    { label: 'Finish', value: 'Powder Coated (12+ color options)' },
                                    { label: 'Load Capacity', value: '100-150 kg per shelf' },
                                    { label: 'Standard Heights', value: '5ft, 6ft, 7ft (Custom available)' },
                                    { label: 'Standard Widths', value: '3ft, 4ft, 5ft (Custom available)' },
                                    { label: 'Shelf Type', value: 'Adjustable with data strips' },
                                    { label: 'Accessories', value: 'Price strips, hooks, baskets included' },
                                ].map((spec, index) => (
                                    <div key={index} className="flex items-start gap-4 bg-slate-900/50 rounded-xl p-4">
                                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2" />
                                        <div>
                                            <span className="text-slate-400">{spec.label}:</span>
                                            <span className="text-white ml-2 font-medium">{spec.value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/corner-rack.png"
                                alt="Supermarket corner rack specifications - AK Racks Madurai"
                                width={500}
                                height={400}
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Frequently Asked <span className="text-orange-400">Questions</span>
                            </h2>
                            <p className="text-lg text-slate-300">
                                Common questions about our supermarket racks
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"
                                >
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                        <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
                                        <svg className="w-6 h-6 text-orange-400 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6">
                                        <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Serving <span className="text-orange-400">Madurai & Beyond</span>
                        </h2>
                        <p className="text-lg text-slate-300">
                            We deliver and install supermarket racks across all 38 districts of Tamil Nadu
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {siteConfig.serviceAreas.slice(0, 20).map((area) => (
                            <span
                                key={area}
                                className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-slate-300 hover:border-orange-500/50 hover:text-orange-400 transition-colors"
                            >
                                {area}
                            </span>
                        ))}
                        <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 font-medium">
                            + 18 more districts
                        </span>
                    </div>
                </div>
            </section>

            {/* Internal Links Section */}
            <section className="py-16 bg-slate-900 border-t border-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">
                        Explore Our Other <span className="text-orange-400">Rack Solutions</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {seoConfig.relatedPages.map((pageUrl) => {
                            const relatedPage = getSEOConfigBySlug(pageUrl.replace('/', ''));
                            return relatedPage ? (
                                <Link
                                    key={pageUrl}
                                    href={pageUrl}
                                    className="block p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors text-center"
                                >
                                    <span className="text-slate-300 hover:text-orange-400 transition-colors font-medium">
                                        {relatedPage.title}
                                    </span>
                                </Link>
                            ) : null;
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }} />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Set Up Your Supermarket?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Get factory-direct pricing on premium supermarket racks. Free consultation and site survey available!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={siteConfig.social.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-xl hover:-translate-y-1"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp Us Now
                        </a>
                        <a
                            href={`tel:${siteConfig.phone}`}
                            className="inline-flex items-center gap-2 bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-800 transition-all hover:-translate-y-1"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call {siteConfig.phone}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
