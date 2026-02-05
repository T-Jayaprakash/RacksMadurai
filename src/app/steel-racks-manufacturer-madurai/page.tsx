import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getSEOConfigBySlug, pageFAQs, siteConfig } from '@/lib/seo-config';
import { generatePageSchema } from '@/lib/schema';

const pageSlug = 'steel-racks-manufacturer-madurai';
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
        images: [{ url: '/images/heavy-duty-rack.png', width: 1200, height: 630, alt: 'Steel Racks Manufacturer in Madurai' }],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: seoConfig.metaTitle,
        description: seoConfig.metaDescription,
        images: ['/images/heavy-duty-rack.png'],
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
        { name: 'Steel Racks', url: `/${pageSlug}` },
    ],
    faqs: faqs,
    product: {
        name: 'Steel Storage Racks',
        description: 'Premium steel racks manufactured in Madurai. Industrial steel shelving, heavy-duty storage racks.',
        image: '/images/heavy-duty-rack.png',
        category: 'Steel Racks',
        slug: pageSlug,
        material: 'Heavy-Gauge Mild Steel with Anti-Corrosion Powder Coating',
    },
});

export default function SteelRacksManufacturerMaduraiPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, orange 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <nav className="mb-8" aria-label="Breadcrumb">
                        <ol className="flex items-center gap-2 text-sm text-slate-400">
                            <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
                            <li><span className="mx-2">/</span></li>
                            <li><Link href="/products" className="hover:text-orange-400 transition-colors">Products</Link></li>
                            <li><span className="mx-2">/</span></li>
                            <li className="text-orange-400">Steel Racks</li>
                        </ol>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">
                                Premium Quality Steel Racks
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                {seoConfig.h1}
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                We are the leading <strong>steel rack manufacturers in Madurai</strong>, producing high-quality industrial steel racks, storage shelving, and custom steel solutions. Our racks are built with premium-grade mild steel for maximum durability and strength.
                            </p>

                            <ul className="space-y-3 mb-8">
                                {['Heavy-gauge MS steel (1.2mm - 2.5mm)', 'Load capacity: 100 - 1000 kg per shelf', 'Anti-corrosion powder coating', 'Custom sizes available', '12+ color options'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-4">
                                <a href={`${siteConfig.social.whatsapp}?text=${encodeURIComponent('Hi! I need steel racks for my business. Please share details.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg">
                                    Get Free Quote
                                </a>
                                <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-lg">
                                    Call Now
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <Image src="/images/heavy-duty-rack.png" alt="Steel racks manufacturer in Madurai" width={600} height={500} className="rounded-2xl shadow-2xl" priority />
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Steel Racks */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Types of <span className="text-orange-400">Steel Racks</span> We Manufacture
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Slotted Angle Racks', desc: 'Versatile storage solution with adjustable shelves for warehouses and offices.', img: '/images/warehouse-racks.png' },
                            { title: 'Heavy Duty Pallet Racks', desc: 'Industrial-grade racks for palletized storage in warehouses and factories.', img: '/images/heavy-duty-rack.png' },
                            { title: 'Display Steel Racks', desc: 'Retail display racks with premium finish for supermarkets and stores.', img: '/images/supermarket-rack.png' },
                            { title: 'Multi-Tier Racking', desc: 'Space-optimizing multi-level storage systems for warehouses.', img: '/images/warehouse-racks.png' },
                            { title: 'Cantilever Racks', desc: 'Perfect for long items like pipes, lumber, and sheet materials.', img: '/images/heavy-duty-rack.png' },
                            { title: 'Mobile Racking Systems', desc: 'Space-saving movable rack systems for high-density storage.', img: '/images/warehouse-racks.png' },
                        ].map((rack, index) => (
                            <div key={index} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all group">
                                <div className="relative h-48 overflow-hidden">
                                    <Image src={rack.img} alt={rack.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{rack.title}</h3>
                                    <p className="text-slate-400">{rack.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Manufacturing Process */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Our <span className="text-orange-400">Manufacturing Process</span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Material Selection', desc: 'Premium MS steel sourced from certified suppliers' },
                            { step: '02', title: 'Precision Cutting', desc: 'CNC cutting for accurate dimensions' },
                            { step: '03', title: 'Welding & Assembly', desc: 'Expert welding for structural strength' },
                            { step: '04', title: 'Powder Coating', desc: 'Anti-rust coating in 12+ colors' },
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">{item.step}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                            Frequently Asked <span className="text-orange-400">Questions</span>
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details key={index} className="group bg-slate-900 rounded-xl border border-slate-700 overflow-hidden">
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

            {/* Related Pages */}
            <section className="py-16 bg-slate-900 border-t border-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Related <span className="text-orange-400">Products</span></h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {seoConfig.relatedPages.map((pageUrl) => {
                            const page = getSEOConfigBySlug(pageUrl.replace('/', ''));
                            return page ? (
                                <Link key={pageUrl} href={pageUrl} className="block p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors text-center">
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Custom Steel Racks?</h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">Get factory-direct pricing on premium steel racks. Any size, any specification.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-xl">WhatsApp Us</a>
                        <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-800 transition-all">Call {siteConfig.phone}</a>
                    </div>
                </div>
            </section>
        </>
    );
}
