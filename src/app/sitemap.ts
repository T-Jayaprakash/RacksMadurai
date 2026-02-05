import { MetadataRoute } from 'next';
import { seoPages, siteConfig } from '@/lib/seo-config';
import { productCategories } from '@/lib/products';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;
    const currentDate = new Date().toISOString();

    // Main SEO-optimized pages (highest priority)
    const seoPagesSitemap: MetadataRoute.Sitemap = seoPages.map(page => ({
        url: `${baseUrl}/${page.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    // Product category pages
    const categoryPages: MetadataRoute.Sitemap = productCategories.map(category => ({
        url: `${baseUrl}/products/${category.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    // Core pages
    const corePages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/gallery`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/testimonials`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
    ];

    // Location pages for local SEO
    const locationPages: MetadataRoute.Sitemap = siteConfig.serviceAreas.slice(0, 10).map(area => ({
        url: `${baseUrl}/locations/${area.toLowerCase().replace(/\s+/g, '-')}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [...corePages, ...seoPagesSitemap, ...categoryPages, ...locationPages];
}
