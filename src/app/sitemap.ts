export default function sitemap() {
    const baseUrl = 'https://www.netherhour.com';

    return [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ];
}
