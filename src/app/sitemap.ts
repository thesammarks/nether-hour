export const dynamic = "force-static"

export default function sitemap() {
    const baseUrl = 'https://www.netherhour.com';

    return [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 1,
            images: ['/images/nh_profile.jpg'],
        },
        {
            url: `${baseUrl}/tour`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/press`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}
