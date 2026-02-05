import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getSEOConfigBySlug, pageFAQs, siteConfig } from '@/lib/seo-config';
import { generatePageSchema } from '@/lib/schema';
import { productCategories } from '@/lib/products';

const pageSlug = 'heavy-duty-industrial-racks';
const seoConfig = getSEOConfigBySlug(pageSlug)!;
const faqs = pageFAQs[pageSlug] || [];
const heavyCategory = productCategories.find(c => c.slug === 'heavy-duty-racks');
const products = heavyCategory?.products || [];

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
        images: [{ url: '/images/heavy-duty-rack.png', width: 1200, height: 630, alt: 'Heavy Duty Industrial Racks' }],
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
        { name: 'Heavy Duty Industrial Racks', url: `/${pageSlug}` },
    ],
    faqs: faqs,
    product: {
        name: 'Heavy Duty Industrial Racks',
        description: 'Industrial-grade storage racks for warehouses and factories. 500-1000kg load capacity.',
        image: '/images/heavy-duty-rack.png',
        category: 'Heavy Duty Racks',
        slug: pageSlug,
    },
});

export default function HeavyDutyIndustrialRacksPage() {
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
                            <li className="text-orange-400">Heavy Duty Industrial Racks</li>
                        </ol>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">Industrial Storage Solutions</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{seoConfig.h1}</h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Industrial-grade <strong>heavy duty racks</strong> designed for maximum load capacity and durability. Our <strong>industrial storage racks</strong> are built with heavy-gauge steel to withstand 500-1000+ kg per level, making them perfect for warehouses, factories, godowns, and manufacturing plants across Tamil Nadu.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { value: '1000+', label: 'kg Load Capacity' },
                                    { value: '3mm', label: 'Steel Thickness' },
                                    { value: '12ft+', label: 'Height Options' },
                                    { value: '5yr', label: 'Warranty' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700">
                                        <p className="text-2xl font-bold text-orange-400">{stat.value}</p>
                                        <p className="text-slate-400 text-sm">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a href={`${siteConfig.social.whatsapp}?text=${encodeURIComponent('Hi! I need heavy duty industrial racks. Please share details.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all">Get Free Quote</a>
                                <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all">Call Now</a>
                            </div>
                        </div>
                        <Image src="/images/heavy-duty-rack.png" alt="Heavy duty industrial rack manufacturer Madurai" width={600} height={500} className="rounded-2xl shadow-2xl" priority />
                    </div>
                </div>
            </section>

            {/* Types */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Heavy Duty Rack <span className="text-orange-400">Solutions</span></h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Heavy Duty Storage Racks', desc: 'Standard heavy-duty multi-tier storage for warehouses. Adjustable shelves, bolt-less assembly.', capacity: '500-1000 kg/level' },
                            { title: 'Industrial Pallet Racks', desc: 'Pallet racking systems for forklift operations. FIFO/LIFO configurations available.', capacity: '1000+ kg/pallet' },
                            { title: 'Warehouse Storage Systems', desc: 'Complete warehouse storage solutions with mezzanine floors and multi-tier systems.', capacity: 'Custom load specs' },
                        ].map((rack, i) => (
                            <div key={i} className="bg-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-orange-500/50 transition-all">
                                <h3 className="text-xl font-bold text-white mb-4">{rack.title}</h3>
                                <p className="text-slate-400 mb-4">{rack.desc}</p>
                                <div className="bg-orange-500/10 rounded-lg p-3 text-center">
                                    <span className="text-orange-400 font-semibold">Load: {rack.capacity}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products */}
            {products.length > 0 && (
                <section className="py-20 bg-slate-900">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">Our <span className="text-orange-400">Products</span></h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {products.map((product) => (
                                <div key={product.id} className="group bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all">
                                    <div className="relative h-56 overflow-hidden">
                                        <Image src={product.image} alt={`${product.name} - Heavy duty rack Madurai`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
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
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Industries We <span className="text-orange-400">Serve</span></h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {['Warehouses', 'Manufacturing', 'Logistics', 'Cold Storage', 'Automotive', 'Textiles', 'Pharmaceuticals', 'FMCG', 'E-commerce', 'Agriculture', 'Construction', 'Engineering'].map((ind) => (
                            <div key={ind} className="bg-slate-900 rounded-xl p-4 text-center border border-slate-700 hover:border-orange-500/50 transition-colors">
                                <span className="text-slate-300 text-sm">{ind}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            {faqs.length > 0 && (
                <section className="py-20 bg-slate-900">
                    <div className="container mx-auto px-4 max-w-4xl">
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
                </section>
            )}

            {/* Related */}
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Industrial Storage Solutions?</h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">Get heavy-duty racks that withstand extreme loads. Free consultation for warehouse layouts.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg">WhatsApp Us</a>
                        <a href={`tel:${siteConfig.phone}`} className="bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg">Call {siteConfig.phone}</a>
                    </div>
                </div>
            </section>
        </>
    );
}
