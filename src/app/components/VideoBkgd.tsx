import React from 'react';
import styles from './VideoBkgd.module.scss';

export default function VideoBkgd() {
    return (
        <div>
            <div className={styles.overlay}></div>
            <video
                className={styles.video}
                autoPlay
                loop
                muted
                playsInline
                preload="none"
            >
                <source src="/videos/nh.mp4" type="video/mp4" />
                <source src="/videos/nh.webm" type="video/webm" />
            </video>
        </div>
    );
}
