import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getSEOConfigBySlug, siteConfig } from '@/lib/seo-config';
import { generatePageSchema } from '@/lib/schema';

const pageSlug = 'custom-rack-manufacturer';
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
        images: [{ url: '/images/custom-racks.png', width: 1200, height: 630, alt: 'Custom Rack Manufacturer Madurai' }],
        locale: 'en_IN',
        type: 'website',
    },
};

const schemas = generatePageSchema({
    pageType: 'service',
    title: seoConfig.metaTitle,
    description: seoConfig.metaDescription,
    url: `/${pageSlug}`,
    breadcrumbs: [
        { name: 'Home', url: '/' },
        { name: 'Services', url: '/products' },
        { name: 'Custom Rack Manufacturing', url: `/${pageSlug}` },
    ],
});

export default function CustomRackManufacturerPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />

            <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-4">
                    <nav className="mb-8" aria-label="Breadcrumb">
                        <ol className="flex items-center gap-2 text-sm text-slate-400">
                            <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
                            <li><span className="mx-2">/</span></li>
                            <li><Link href="/products" className="hover:text-orange-400">Services</Link></li>
                            <li><span className="mx-2">/</span></li>
                            <li className="text-orange-400">Custom Rack Manufacturing</li>
                        </ol>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-wider mb-4">Bespoke Solutions</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{seoConfig.h1}</h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Can&apos;t find the perfect rack for your needs? Our <strong>custom rack manufacturing</strong> service creates bespoke storage and display solutions tailored to your exact specifications. From unique dimensions to specialized features, we manufacture racks that fit your space perfectly.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    'Any size, any dimension - fully customizable',
                                    'Choose from 12+ color options',
                                    'Specialized load capacities on request',
                                    'Free design consultation and 3D visualization',
                                    'Factory-direct pricing with no middlemen',
                                    'Professional installation included',
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-slate-300">
                                        <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a href={`${siteConfig.social.whatsapp}?text=${encodeURIComponent('Hi! I need custom racks for my business. Please share details about your custom manufacturing service.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all">Get Free Quote</a>
                                <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all">Call Now</a>
                            </div>
                        </div>
                        <Image src="/images/custom-racks.png" alt="Custom rack manufacturer Madurai" width={600} height={500} className="rounded-2xl shadow-2xl" priority />
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Custom Manufacturing <span className="text-orange-400">Process</span></h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: '1', title: 'Consultation', desc: 'Share your requirements via WhatsApp or call. We understand your space, products, and vision.', icon: '💬' },
                            { step: '2', title: 'Design & Quote', desc: 'Our team creates a custom design with specifications and provides a detailed quote.', icon: '📐' },
                            { step: '3', title: 'Manufacturing', desc: 'Your custom racks are manufactured in our facility with premium materials.', icon: '🏭' },
                            { step: '4', title: 'Delivery & Install', desc: 'We deliver and professionally install your racks across Tamil Nadu.', icon: '🚚' },
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-900 rounded-2xl p-8 text-center border border-slate-700 relative">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">{item.step}</div>
                                <div className="text-4xl mb-4 mt-2">{item.icon}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Solutions */}
            <section className="py-20 bg-slate-900">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">What We Can <span className="text-orange-400">Customize</span></h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Dimensions', items: ['Non-standard heights', 'Custom widths', 'Special depths', 'Modular configurations'] },
                            { title: 'Materials', items: ['Heavy-gauge steel', 'Stainless steel', 'Wood + metal combos', 'Glass shelving options'] },
                            { title: 'Load Capacity', items: ['Light-duty display', 'Medium load storage', 'Heavy-duty industrial', 'Extra-heavy warehouse'] },
                            { title: 'Features', items: ['Adjustable shelves', 'Wheel/caster additions', 'Locking mechanisms', 'Branding/signage spots'] },
                            { title: 'Finish', items: ['12+ powder coat colors', 'Chrome plating', 'Anti-rust treatment', 'Anti-bacterial coating'] },
                            { title: 'Accessories', items: ['Price tag holders', 'Hook attachments', 'Basket additions', 'LED lighting slots'] },
                        ].map((category, i) => (
                            <div key={i} className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                                <h3 className="text-xl font-bold text-orange-400 mb-4">{category.title}</h3>
                                <ul className="space-y-2">
                                    {category.items.map((item, j) => (
                                        <li key={j} className="flex items-center gap-2 text-slate-300">
                                            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Custom Racks For Every <span className="text-orange-400">Industry</span></h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['Unique Store Layouts', 'Corner Spaces', 'Under-Stair Storage', 'Odd-Shaped Rooms', 'Mobile Display Units', 'Exhibition Stands', 'Pop-Up Shops', 'Industrial Special Needs', 'Specialized Products', 'Brand-Themed Displays'].map((use) => (
                            <span key={use} className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-full text-slate-300 hover:border-orange-500/50 transition-colors">
                                {use}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className="py-16 bg-slate-900 border-t border-slate-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Explore Our <span className="text-orange-400">Standard Products</span></h2>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Have a Unique Requirement?</h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">No request is too complex. Share your vision and we&apos;ll make it happen.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg">WhatsApp Us</a>
                        <a href={`tel:${siteConfig.phone}`} className="bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg">Call {siteConfig.phone}</a>
                    </div>
                </div>
            </section>
        </>
    );
}
