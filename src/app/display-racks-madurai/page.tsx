import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getSEOConfigBySlug, siteConfig } from '@/lib/seo-config';
import { generatePageSchema } from '@/lib/schema';

const pageSlug = 'display-racks-madurai';
const seoConfig = getSEOConfigBySlug(pageSlug)!;

export const metadata: Metadata = {
    title: seoConfig.metaTitle,
    description: seoConfig.metaDescription,
    keywords: seoConfig.keywords,
    alternates: { canonical: seoConfig.canonicalUrl },
    openGraph: {
        title: seoConfig.metaTitle,
        description: seoConfig.metaDescription,
        url: seoConfig.canonicalUrl,
        siteName: siteConfig.name,
        images: [{ url: '/images/supermarket-rack-modern.png', width: 1200, height: 630, alt: 'Display Racks Manufacturer Madurai' }],
        locale: 'en_IN',
        type: 'website',
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
        { name: 'Display Racks', url: `/${pageSlug}` },
    ],
    product: {
        name: 'Display Racks',
        description: 'Premium display racks for retail stores, showrooms, and commercial spaces.',
        image: '/images/supermarket-rack-modern.png',
        category: 'Display Racks',
        slug: pageSlug,
    },
});

const displayTypes = [
    { title: 'Retail Display Racks', desc: 'Eye-catching display solutions for retail stores and shops.', image: '/images/supermarket-rack.png', link: '/supermarket-racks-madurai' },
    { title: 'Showroom Display', desc: 'Premium display fixtures for product showrooms.', image: '/images/electronic-rack.png', link: '/products/electronic-racks' },
    { title: 'Clothing Display', desc: 'Stylish racks for garment and textile stores.', image: '/images/garments-rack.png', link: '/garment-racks' },
    { title: 'Pharmacy Display', desc: 'Clean, organized display for medical stores.', image: '/images/pharmacy-rack.png', link: '/pharmacy-racks' },
    { title: 'Fresh Produce Display', desc: 'Specialized racks for fruits and vegetables.', image: '/images/fruit-vegetable-rack.png', link: '/vegetable-fruit-racks' },
    { title: 'Custom Display', desc: 'Bespoke display solutions for unique needs.', image: '/images/custom-racks.png', link: '/custom-rack-manufacturer' },
];

export default function DisplayRacksMaduraiPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-4">
                    <nav className="mb-8" aria-label="Breadcrumb">
                        <ol className="flex items-center gap-2 text-sm text-slate-400">
                            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
                            <li><span className="mx-2">/</span></li>
                            <li><Link href="/products" className="hover:text-orange-400">Products</Link></li>
                            <li><span className="mx-2">/</span></li>
                            <li className="text-orange-400">Display Racks</li>
                        </ol>
                    </nav>

                    <div className="max-w-4xl">
                        <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">Retail Display Solutions</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{seoConfig.h1}</h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Premium <strong>display racks</strong> designed to showcase your products beautifully. As the leading <strong>display rack manufacturer in Madurai</strong>, we offer a complete range of retail display solutions for supermarkets, showrooms, boutiques, pharmacies, and more. Transform your store&apos;s visual appeal with our custom display fixtures.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href={`${siteConfig.social.whatsapp}?text=${encodeURIComponent('Hi! I need display racks for my store. Please share details.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all">Get Free Quote</a>
                            <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all">Call Now</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Display Types */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                        Types of <span className="text-orange-400">Display Racks</span>
                    </h2>
                    <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
                        Explore our comprehensive range of display solutions for every industry
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayTypes.map((type, i) => (
                            <Link key={i} href={type.link} className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all">
                                <div className="relative h-48 overflow-hidden">
                                    <Image src={type.image} alt={type.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">{type.title}</h3>
                                    <p className="text-slate-400 mb-4">{type.desc}</p>
                                    <span className="inline-flex items-center gap-2 text-orange-400 font-semibold">
                                        View Details →
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our <span className="text-orange-400">Display Racks?</span></h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: '✨', title: 'Premium Finish', desc: '12+ colors with powder-coated finish' },
                            { icon: '📐', title: 'Custom Designs', desc: 'Tailored to your store layout' },
                            { icon: '💪', title: 'Built to Last', desc: 'High-quality MS steel construction' },
                            { icon: '🚚', title: 'Pan TN Delivery', desc: 'Delivery across all 38 districts' },
                        ].map((benefit, i) => (
                            <div key={i} className="bg-slate-800 rounded-2xl p-6 text-center border border-slate-700">
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-slate-400 text-sm">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Industries We <span className="text-orange-400">Serve</span></h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Supermarkets', 'Retail Stores', 'Boutiques', 'Pharmacies', 'Electronics', 'Grocery Stores', 'Showrooms', 'Department Stores', 'Gift Shops', 'Stationery', 'Sports Stores', 'Hardware'].map((ind) => (
                            <span key={ind} className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-slate-300 hover:border-orange-500/50 hover:text-orange-400 transition-colors">
                                {ind}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className="py-16 bg-slate-900 border-t border-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Related <span className="text-orange-400">Products</span></h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {seoConfig.relatedPages.map((url) => {
                            const page = getSEOConfigBySlug(url.replace('/', ''));
                            return page ? (
                                <Link key={url} href={url} className="block p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-orange-500/50 text-center">
                                    <span className="text-slate-300 hover:text-orange-400 font-medium">{page.title}</span>
                                </Link>
                            ) : null;
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Store?</h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">Get premium display racks that showcase your products beautifully. Free design consultation!</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg">WhatsApp Us</a>
                        <a href={`tel:${siteConfig.phone}`} className="bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg">Call {siteConfig.phone}</a>
                    </div>
                </div>
            </section>
        </>
    );
}
