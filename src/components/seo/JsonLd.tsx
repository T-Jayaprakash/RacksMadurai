import { structuredData } from '@/lib/seo';
import {
    generateLocalBusinessSchema,
    generateBreadcrumbSchema,
    generateFAQSchema,
    generateProductSchema,
    BreadcrumbItem as SchemaBreadcrumbItem,
    ProductSchemaInput
} from '@/lib/schema';
import { FAQItem } from '@/lib/seo-config';

interface JsonLdProps {
    data?: object;
}

// Generic JSON-LD component
export function JsonLd({ data = structuredData.organization }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

// Multiple JSON-LD schemas
export function JsonLdMultiple({ schemas }: { schemas: object[] }) {
    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbJsonLdProps {
    items: BreadcrumbItem[];
}

// Breadcrumb JSON-LD
export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
    const breadcrumbData = generateBreadcrumbSchema(items as SchemaBreadcrumbItem[]);
    return <JsonLd data={breadcrumbData} />;
}

// LocalBusiness JSON-LD (for layout.tsx)
export function LocalBusinessJsonLd() {
    const localBusinessData = generateLocalBusinessSchema();
    return <JsonLd data={localBusinessData} />;
}

// FAQ JSON-LD
export function FAQJsonLd({ faqs }: { faqs: FAQItem[] }) {
    if (!faqs || faqs.length === 0) return null;
    const faqData = generateFAQSchema(faqs);
    return <JsonLd data={faqData} />;
}

// Product JSON-LD
export function ProductJsonLd({ product }: { product: ProductSchemaInput }) {
    const productData = generateProductSchema(product);
    return <JsonLd data={productData} />;
}

