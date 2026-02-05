import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getSEOConfigBySlug, pageFAQs, siteConfig } from '@/lib/seo-config';
import { generatePageSchema } from '@/lib/schema';

const pageSlug = 'warehouse-racks-madurai';
const seoConfig = getSEOConfigBySlug(pageSlug)!;
const faqs = pageFAQs[pageSlug] || [];

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
        images: [{ url: '/images/warehouse-racks.png', width: 1200, height: 630, alt: 'Warehouse Racks Manufacturer Madurai' }],
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
        { name: 'Warehouse Racks', url: `/${pageSlug}` },
    ],
    faqs: faqs,
    product: {
        name: 'Warehouse Storage Racks',
        description: 'Heavy-duty warehouse racks for industrial storage. Pallet racks, slotted angle racks, and multi-tier racking systems.',
        image: '/images/warehouse-racks.png',
        category: 'Warehouse Racks',
        slug: pageSlug,
    },
});

export default function WarehouseRacksMaduraiPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-4">
                    <nav className="mb-8" aria-label="Breadcrumb">
                        <ol className="flex items-center gap-2 text-sm text-slate-400">
                            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
                            <li><span className="mx-2">/</span></li>
                            <li><Link href="/products" className="hover:text-orange-400">Products</Link></li>
                            <li><span className="mx-2">/</span></li>
                            <li className="text-orange-400">Warehouse Racks</li>
                        </ol>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">Industrial Storage Solutions</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{seoConfig.h1}</h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Looking for reliable <strong>warehouse racks in Madurai</strong>? We manufacture heavy-duty industrial storage racks designed for maximum load capacity and durability. Our warehouse racking solutions are perfect for factories, godowns, logistics centers, and distribution warehouses across Tamil Nadu.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { value: '1000+', label: 'kg Load Capacity' },
                                    { value: '100%', label: 'Customizable' },
                                    { value: '38', label: 'Districts Served' },
                                    { value: '5+', label: 'Year Warranty' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700">
                                        <p className="text-2xl font-bold text-orange-400">{stat.value}</p>
                                        <p className="text-slate-400 text-sm">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a href={`${siteConfig.social.whatsapp}?text=${encodeURIComponent('Hi! I need warehouse racks for my godown. Please share details.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all">Get Free Quote</a>
                                <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all">Call Now</a>
                            </div>
                        </div>
                        <div>
                            <Image src="/images/warehouse-racks.png" alt="Warehouse racks manufacturer Madurai" width={600} height={500} className="rounded-2xl shadow-2xl" priority />
                        </div>
                    </div>
                </div>
            </section>

            {/* Warehouse Rack Types */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                        Warehouse Rack <span className="text-orange-400">Solutions</span>
                    </h2>
                    <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
                        Comprehensive industrial storage solutions for warehouses, godowns, and factories
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Pallet Racking Systems', desc: 'Heavy-duty pallet storage for forklift operations. Ideal for large-scale warehousing with palletized goods.', features: ['500-1000 kg per level', 'Forklift accessible', 'Multiple beam levels'] },
                            { title: 'Slotted Angle Racks', desc: 'Versatile bolt-less shelving system for medium-weight storage. Easy to reconfigure.', features: ['200-400 kg per shelf', 'Adjustable heights', 'Easy assembly'] },
                            { title: 'Long Span Shelving', desc: 'Wide-span shelving for bulky items without center supports. Perfect for cartons and bins.', features: ['400-600 kg per level', 'No center support', 'Hand-loaded storage'] },
                            { title: 'Cantilever Racks', desc: 'Open-front racking for long materials like pipes, lumber, and sheet goods.', features: ['Heavy load capacity', 'No front columns', 'Adjustable arms'] },
                            { title: 'Multi-Tier Racking', desc: 'Maximize vertical space with multi-level walkway systems for small parts storage.', features: ['3-4 levels high', 'Staircase access', 'Modular design'] },
                            { title: 'Drive-In Racking', desc: 'High-density storage for homogeneous products. LIFO system for maximum space utilization.', features: ['High density', 'Forklift entry', 'Bulk storage'] },
                        ].map((rack, index) => (
                            <div key={index} className="bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all">
                                <h3 className="text-xl font-bold text-white mb-3">{rack.title}</h3>
                                <p className="text-slate-400 mb-4">{rack.desc}</p>
                                <ul className="space-y-2">
                                    {rack.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                                            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Served */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                        Industries We <span className="text-orange-400">Serve</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {['Warehouses', 'Manufacturing', 'Logistics', 'E-commerce', 'Cold Storage', 'Automotive', 'Textiles', 'Pharmaceuticals', 'FMCG', 'Electronics', 'Agriculture', 'Distribution'].map((industry) => (
                            <div key={industry} className="bg-slate-800 rounded-xl p-4 text-center border border-slate-700 hover:border-orange-500/50 transition-colors">
                                <span className="text-slate-300">{industry}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Technical <span className="text-orange-400">Specifications</span></h2>
                            <div className="space-y-4">
                                {[
                                    { label: 'Material', value: 'Heavy Gauge Mild Steel (2mm - 3mm)' },
                                    { label: 'Load Capacity', value: '500 - 1000+ kg per level' },
                                    { label: 'Height Options', value: '6ft, 8ft, 10ft, 12ft, 16ft+' },
                                    { label: 'Width Options', value: '3ft to 12ft (custom available)' },
                                    { label: 'Depth Options', value: '2ft to 4ft (standard)' },
                                    { label: 'Finish', value: 'Industrial powder coating' },
                                    { label: 'Compliance', value: 'Safety standards certified' },
                                ].map((spec, i) => (
                                    <div key={i} className="flex items-center gap-4 bg-slate-900/50 rounded-xl p-4">
                                        <div className="w-2 h-2 bg-orange-400 rounded-full" />
                                        <span className="text-slate-400">{spec.label}:</span>
                                        <span className="text-white font-medium">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Image src="/images/heavy-duty-rack.png" alt="Warehouse rack specifications" width={500} height={400} className="rounded-2xl shadow-2xl" />
                    </div>
                </div>
            </section>

            {/* FAQs */}
            {faqs.length > 0 && (
                <section className="py-20 bg-slate-900">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked <span className="text-orange-400">Questions</span></h2>
                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <details key={i} className="group bg-slate-800 rounded-xl border border-slate-700">
                                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                            <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
                                            <svg className="w-6 h-6 text-orange-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </summary>
                                        <div className="px-6 pb-6"><p className="text-slate-300">{faq.answer}</p></div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Related Pages */}
            <section className="py-16 bg-slate-800 border-t border-slate-700">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Related <span className="text-orange-400">Products</span></h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {seoConfig.relatedPages.map((url) => {
                            const page = getSEOConfigBySlug(url.replace('/', ''));
                            return page ? (
                                <Link key={url} href={url} className="block p-4 bg-slate-900 rounded-xl border border-slate-700 hover:border-orange-500/50 text-center">
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Optimize Your Warehouse?</h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">Get expert consultation and free warehouse layout planning with our industrial storage solutions.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-xl">WhatsApp Us</a>
                        <a href={`tel:${siteConfig.phone}`} className="bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-800 transition-all">Call {siteConfig.phone}</a>
                    </div>
                </div>
            </section>
        </>
    );
}
