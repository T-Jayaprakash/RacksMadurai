// Testimonials data - separated for server/client compatibility

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    location: string;
    content: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'A Janarthanan',
        role: 'Supermarket Owner',
        location: 'Madurai',
        content: 'I bought racks for my supermarket from here and honestly the quality is very good. The racks are strong and finishing also looks nice. They delivered little fast than I expected and staff also explained everything clearly. Price also reasonable compare to others. Fully satisfied, I will recommend for anyone who need supermarket racks',
        rating: 5,
    },
    {
        id: '2',
        name: 'Sanjai S',
        role: 'Supermarket Owner',
        location: 'Madurai',
        content: 'Purchased display racks for our supermarket from AK Racks Madurai. Strong material, neat finishing, and good load capacity. Installation was done properly and on time. Rates are fair compared to others. Overall, reliable service.',
        rating: 5,
    },
    {
        id: '3',
        name: 'Mohammed Ismail',
        role: 'Director, City Pharmacy',
        location: 'Madurai',
        content: 'The pharmacy racks are sturdy and perfectly designed for medicine display. AK Racks Madurai provided excellent after-sales service too.',
        rating: 5,
    },
    {
        id: '4',
        name: 'Lakshmi Narayanan',
        role: 'Owner, LN Textiles',
        location: 'Salem',
        content: 'We got garment racks for our showroom. The design is modern and the build quality is top-notch. Great value for money!',
        rating: 5,
    },
    {
        id: '5',
        name: 'Senthil Murugan',
        role: 'Warehouse Manager, MM Logistics',
        location: 'Trichy',
        content: 'Heavy duty racks from AK Racks Madurai are the best investment we made. They handle our industrial loads perfectly. Professional service!',
        rating: 5,
    },
    {
        id: '6',
        name: 'Anitha Raj',
        role: 'Owner, AR Electronics',
        location: 'Tiruppur',
        content: 'The electronic display racks are exactly what we needed. Clear visibility and sturdy construction. Thank you AK Racks Madurai!',
        rating: 5,
    },
];
