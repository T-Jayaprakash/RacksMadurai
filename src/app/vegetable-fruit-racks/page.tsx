import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getSEOConfigBySlug, pageFAQs, siteConfig } from '@/lib/seo-config';
import { generatePageSchema } from '@/lib/schema';
import { productCategories } from '@/lib/products';

const pageSlug = 'vegetable-fruit-racks';
const seoConfig = getSEOConfigBySlug(pageSlug)!;
const faqs = pageFAQs[pageSlug] || [];
const vegCategory = productCategories.find(c => c.slug === 'fruit-vegetable-racks');
const products = vegCategory?.products || [];

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
        images: [{ url: '/images/fruit-vegetable-rack.png', width: 1200, height: 630, alt: 'Vegetable Fruit Racks' }],
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
        { name: 'Vegetable & Fruit Racks', url: `/${pageSlug}` },
    ],
    faqs: faqs,
    product: {
        name: 'Vegetable & Fruit Display Racks',
        description: 'Fresh produce display racks with SS trays and ventilated design.',
        image: '/images/fruit-vegetable-rack.png',
        category: 'Vegetable & Fruit Racks',
        slug: pageSlug,
    },
});

export default function VegetableFruitRacksPage() {
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
                            <li className="text-orange-400">Vegetable & Fruit Racks</li>
                        </ol>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">Fresh Produce Display</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{seoConfig.h1}</h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Specialized <strong>vegetable and fruit racks</strong> designed for fresh produce display in supermarkets, grocery stores, and vegetable shops. Our <strong>produce display racks</strong> feature ventilated designs, tilted shelves, and premium SS/plastic trays for optimal freshness and visual appeal.
                            </p>

                            <ul className="space-y-3 mb-8">
                                {['Ventilated design for freshness', 'Tilted shelves for better visibility', 'SS & Plastic tray options', 'Easy drainage system', 'Mirror finish premium variants', 'Multi-tier configurations'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <svg className="w-5 h-5 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-4">
                                <a href={`${siteConfig.social.whatsapp}?text=${encodeURIComponent('Hi! I need vegetable and fruit racks for my store. Please share details.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all">Get Free Quote</a>
                                <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all">Call Now</a>
                            </div>
                        </div>
                        <Image src="/images/fruit-vegetable-rack.png" alt="Vegetable fruit rack manufacturer Madurai" width={600} height={500} className="rounded-2xl shadow-2xl" priority />
                    </div>
                </div>
            </section>

            {/* Types */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Types of <span className="text-orange-400">Produce Racks</span></h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: 'Frame & Plastic Tray Vegetable Rack', desc: 'Durable plastic tray system with metal frame. Easy to clean, lightweight trays ideal for daily use. Multiple tier options available.', features: ['Easy-clean plastic trays', 'Lightweight & durable', 'Multiple colors'] },
                            { title: 'Mirror & SS Tray Fruit Rack', desc: 'Premium stainless steel trays with mirror finish frame. Elegant design for high-end stores. Superior hygiene and durability.', features: ['Premium SS trays', 'Mirror finish frame', 'Luxury appearance'] },
                        ].map((rack, i) => (
                            <div key={i} className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 transition-all">
                                <h3 className="text-2xl font-bold text-white mb-4">{rack.title}</h3>
                                <p className="text-slate-400 mb-6">{rack.desc}</p>
                                <ul className="space-y-2">
                                    {rack.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-2 text-slate-300">
                                            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products */}
            {products.length > 0 && (
                <section className="py-20 bg-slate-900">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our <span className="text-orange-400">Collection</span></h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <div key={product.id} className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all">
                                    <div className="relative h-56 overflow-hidden">
                                        <Image src={product.image} alt={`${product.name} - Vegetable rack Madurai`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                                        <p className="text-slate-400 mb-4">{product.description}</p>
                                        <a href={`${siteConfig.social.whatsapp}?text=${encodeURIComponent(`Hi! I'm interested in ${product.name}.`)}`} className="text-orange-400 font-semibold">Enquire Now →</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Industries */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Ideal For</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Supermarkets', 'Grocery Stores', 'Vegetable Shops', 'Fruit Stalls', 'Hypermarkets', 'Fresh Markets', 'Organic Stores', 'Farm Shops'].map((industry) => (
                            <div key={industry} className="bg-slate-900 rounded-xl p-4 text-center border border-slate-700">
                                <span className="text-slate-300">{industry}</span>
                            </div>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Display Fresh Produce Beautifully</h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">Get premium vegetable and fruit racks that keep your produce fresh and attractive.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg">WhatsApp Us</a>
                        <a href={`tel:${siteConfig.phone}`} className="bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg">Call {siteConfig.phone}</a>
                    </div>
                </div>
            </section>
        </>
    );
}
