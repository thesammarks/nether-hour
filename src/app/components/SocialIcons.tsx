'use client';

import React, {useEffect, useRef} from 'react';
import {SocialIcon} from 'react-social-icons';
import {Burger} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {
    IconBrandAppleFilled,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandSpotifyFilled,
    IconBrandX,
    IconBrandYoutubeFilled,
} from '@tabler/icons-react';
import styles from './SocialIcons.module.scss';

export default function SocialIcons() {
    const [opened, { toggle, close }] = useDisclosure();
    const navRef = useRef<HTMLDivElement | null>(null);

    const iconProps = {
        className: styles.icon,
        target: '_blank',
        rel: 'noopener noreferrer',
        bgColor: 'transparent',
        fgColor: 'currentColor',
    };

    useEffect(() => {
        const handleNavClose = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                close();
            }
        };

        document.addEventListener('mousedown', handleNavClose);

        return () => {
            document.removeEventListener('mousedown', handleNavClose);
        };
    }, [close]);

    return (
        <div ref={navRef} className={styles.container}>
            <div className={styles.socialBar}>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    aria-label="Toggle navigation"
                    className={styles.burger}
                />
                <SocialIcon url="https://open.spotify.com/artist/7xFkiQ9B6WA6932TniPRGr" {...iconProps} />
                <SocialIcon network="itunes" url="https://music.apple.com/us/artist/nether-hour/1544082556" {...iconProps} />
                <SocialIcon url="https://www.instagram.com/netherhour" {...iconProps} />
                <SocialIcon url="https://www.youtube.com/@netherhour" {...iconProps} />
                <SocialIcon url="https://x.com/NetherHour" {...iconProps} className={`${styles.hiddenSm} ${styles.icon}`} />
                <SocialIcon url="https://www.facebook.com/thenetherhour" {...iconProps} className={`${styles.hiddenSm} ${styles.icon}`} />
            </div>

            {/* Navigation Links */}
            <div className={`${styles.navLinks} ${opened ? styles.navOpen : styles.navClosed}`}>
                <div className={styles.navSection}>
                    <a className={styles.navLink} href="#about">ABOUT</a>
                    <a className={styles.navLink} href="#tour">TOUR</a>
                    <a className={styles.navLink} href="#watch">WATCH</a>
                    <a className={styles.navLink} href="#listen">LISTEN</a>
                    <a className={styles.navLink} href="mailto:netherhour@gmail.com" target="_blank" rel="noopener noreferrer">CONTACT</a>
                </div>

                <div className={styles.iconGroups}>
                    <div className={styles.iconGroup}>
                        <a href="https://open.spotify.com/artist/7xFkiQ9B6WA6932TniPRGr" target="_blank" rel="noopener noreferrer">
                            <IconBrandSpotifyFilled width={28} height={28} />
                        </a>
                        <a href="https://www.instagram.com/netherhour" target="_blank" rel="noopener noreferrer">
                            <IconBrandInstagram width={28} height={28} />
                        </a>
                        <a href="https://x.com/NetherHour" target="_blank" rel="noopener noreferrer">
                            <IconBrandX width={28} height={28} />
                        </a>
                    </div>
                    <div className={styles.iconGroup}>
                        <a href="https://music.apple.com/us/artist/nether-hour/1544082556" target="_blank" rel="noopener noreferrer">
                            <IconBrandAppleFilled width={28} height={28} />
                        </a>
                        <a href="https://www.youtube.com/@netherhour" target="_blank" rel="noopener noreferrer">
                            <IconBrandYoutubeFilled width={28} height={28} />
                        </a>
                        <a href="https://x.com/NetherHour" target="_blank" rel="noopener noreferrer">
                            <IconBrandFacebook width={28} height={28} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
