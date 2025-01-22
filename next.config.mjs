/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "",
    images: {
        unoptimized: true,
    },
    env: {
        nh_email: "netherhour@gmail.com",
        nh_link_spotify: "https://open.spotify.com/artist/7xFkiQ9B6WA6932TniPRGr",
        nh_link_apple_music: "https://music.apple.com/us/artist/nether-hour/1544082556",
        nh_link_instagram: "https://www.instagram.com/netherhour",
        nh_link_youtube: "https://www.youtube.com/@netherhour",
        nh_link_x: "https://x.com/NetherHour",
        nh_link_facebook: "https://www.facebook.com/thenetherhour",
        author_link: "https://www.justcallmesam.com/"
    },
};

export default nextConfig;
