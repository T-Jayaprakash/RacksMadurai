import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getSEOConfigBySlug, pageFAQs, siteConfig } from '@/lib/seo-config';
import { generatePageSchema } from '@/lib/schema';
import { productCategories } from '@/lib/products';

const pageSlug = 'garment-racks';
const seoConfig = getSEOConfigBySlug(pageSlug)!;
const faqs = pageFAQs[pageSlug] || [];
const garmentCategory = productCategories.find(c => c.slug === 'garments-racks');
const products = garmentCategory?.products || [];

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
        images: [{ url: '/images/garments-rack.png', width: 1200, height: 630, alt: 'Garment Racks Manufacturer Madurai' }],
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
        { name: 'Garment Racks', url: `/${pageSlug}` },
    ],
    faqs: faqs,
    product: {
        name: 'Garment Display Racks',
        description: 'Stylish garment racks for clothing stores, boutiques, and textile showrooms.',
        image: '/images/garments-rack.png',
        category: 'Garment Racks',
        slug: pageSlug,
    },
});

export default function GarmentRacksPage() {
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
                            <li className="text-orange-400">Garment Racks</li>
                        </ol>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">Clothing Store Solutions</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{seoConfig.h1}</h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Premium <strong>garment racks</strong> for clothing stores, boutiques, and textile showrooms. Our <strong>clothing display racks</strong> combine style with functionality, featuring chrome-plated, wooden, and powder-coated finishes to match your store aesthetics.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {['Hanger Racks', 'Step Down Racks', 'Four-Way Stands', 'Glass Shelf Racks', 'Ladder Racks', 'Wall Mounted'].map((type, i) => (
                                    <div key={i} className="flex items-center gap-2 text-slate-300">
                                        <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {type}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a href={`${siteConfig.social.whatsapp}?text=${encodeURIComponent('Hi! I need garment racks for my clothing store. Please share details.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all">Get Free Quote</a>
                                <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all">Call Now</a>
                            </div>
                        </div>
                        <Image src="/images/garments-rack.png" alt="Garment racks manufacturer Madurai" width={600} height={500} className="rounded-2xl shadow-2xl" priority />
                    </div>
                </div>
            </section>

            {/* Products */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Garment Rack <span className="text-orange-400">Collection</span></h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all">
                                <div className="relative h-48 overflow-hidden">
                                    <Image src={product.image} alt={`${product.name} - Garment rack Madurai`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                                    <a href={`${siteConfig.social.whatsapp}?text=${encodeURIComponent(`Hi! I'm interested in ${product.name}.`)}`} className="text-orange-400 text-sm font-semibold">Enquire →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Perfect For Every <span className="text-orange-400">Clothing Store</span></h2>
                    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {['Boutiques', 'Textile Showrooms', 'Saree Shops', 'Kids Wear', 'Sports Stores', 'Fashion Outlets', 'Department Stores', 'Ethnic Wear', 'Menswear', 'Womenswear', 'Uniforms', 'Accessories'].map((type) => (
                            <div key={type} className="bg-slate-800 rounded-xl p-4 text-center border border-slate-700 hover:border-orange-500/50 transition-colors">
                                <span className="text-slate-300 text-sm">{type}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            {faqs.length > 0 && (
                <section className="py-20 bg-slate-800">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked <span className="text-orange-400">Questions</span></h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <details key={i} className="group bg-slate-900 rounded-xl border border-slate-700">
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transform Your Clothing Store</h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">Get stylish garment racks that enhance your store's visual appeal.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg">WhatsApp Us</a>
                        <a href={`tel:${siteConfig.phone}`} className="bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg">Call {siteConfig.phone}</a>
                    </div>
                </div>
            </section>
        </>
    );
}
