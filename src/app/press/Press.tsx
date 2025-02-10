import React from "react";
import styles from "./Press.module.scss";
import LinkNewTab from "@/app/components/LinkNewTab";
import pageTemplateStyles from "@/app/PageTemplate.module.scss";

export default function Press() {
    return (
        <div id="press" className={styles.container}>
            <div className={pageTemplateStyles.title}>PRESS</div>

            <div className={styles.pressItem}>
                <LinkNewTab className={styles.pressTitle} url="https://www.fox7austin.com/video/1561978">
                    Nether Hour performs in FOX 7 Austin studios
                </LinkNewTab>
                <div className={styles.pressDetails}>
                    <div className={styles.pressOutlet}>FOX 7 Austin</div>
                    <div>December 13, 2024</div>
                </div>
                <blockquote className={styles.quote}>
                    <p className="line-clamp-5 md:line-clamp-none">
                        Nether Hour performs some brand new music and talks about upcoming shows.
                    </p>
                </blockquote>
            </div>

            <div className={styles.pressItem}>
                <LinkNewTab className={styles.pressTitle}
                            url="https://americansongwriter.com/austin-based-rockers-nether-hour-crank-up-heat-steamy-80s-inspired-new-single-look-my-way-exclusive-premiere/">
                    Austin-Based Rockers Nether Hour Crank Up the Heat [...]
                </LinkNewTab>
                <div className={styles.pressDetails}>
                    <div className={styles.pressOutlet}>American Songwriter</div>
                    <div>By Clayton Edwards | December 12, 2024</div>
                </div>
                <blockquote className={styles.quote}>
                    <p className="line-clamp-5 md:line-clamp-none">
                        If you find yourself enjoying “Look My Way” more than the rest of Nether Hour’s catalog. You’re
                        not alone. “‘Look My Way’ is my favorite song we’ve released to date,” Bishop said. “Little bit
                        of that 80’s pop rock energy and a guitar solo from Bobbo that sounds like a chainsaw growling
                        through the speakers trying to cut you like Texas Chain Saw Massacre,” he added, describing the
                        song’s sound.
                    </p>
                </blockquote>
            </div>

            <div className={styles.pressItem}>
                <LinkNewTab className={styles.pressTitle}
                            url="https://www.whiskeyriff.com/2024/12/09/16-must-listen-country-artists-i-discovered-in-2024/">
                    16 Must-Listen Country Artists I Discovered In 2024
                </LinkNewTab>
                <div className={styles.pressDetails}>
                    <div className={styles.pressOutlet}>Whiskey Riff</div>
                    <div>By Hill Douglas | December 9, 2024</div>
                </div>
                <blockquote className={styles.quote}>
                    <p className="line-clamp-5 md:line-clamp-none">
                        While their latest single “Long As I Ain’t Alone” is a full blown country tune, Nether Hour
                        admittedly might be the least country band on this list. But as they emerge from the Austin, TX
                        bar scene as one of the city’s premiere up and coming bands, in the same way that established
                        country acts like the Turnpike Troubadours, Shane Smith & the Saints, and many others have done
                        in the past, it’s difficult to completely disassociate Nether Hour from the city’s country music
                        scene. Their unique brand of rock and roll incorporates undeniable elements of funk, blues,
                        rock, and country, and their music will appeal to fans of any of those genres.
                    </p>
                </blockquote>
            </div>

            <div className={styles.pressItem}>
                <LinkNewTab className={styles.pressTitle}
                            url="https://www.rockandbluesmuse.com/2024/11/04/nether-hour-drops-new-single-long-as-i-aint-alone/">
                    Nether Hour Drops New Single 'Long As I Ain’t Alone'
                </LinkNewTab>
                <div className={styles.pressDetails}>
                    <div className={styles.pressOutlet}>Rock & Blues Muse</div>
                    <div>By Martine Ehrenclou | November 4th, 2024</div>
                </div>
                <blockquote className={styles.quote}>
                    <p className="line-clamp-5 md:line-clamp-none">
                        Nether Hour is a trio of unapologetic rebels, each one a powerhouse of sonic defiance. Bobby
                        Flaco delivers gritty vocals and razor-sharp guitar riffs, while Bishop unleashes searing lead
                        guitar and mandolin work, with Bercy laying down bass lines that slam right into your gut.
                        They’re a relentless sonic melting pot, fusing the swampy grooves of Louisiana with Texas-sized
                        doses of funk, blues, soul, and rock ‘n’ roll.
                    </p>
                </blockquote>
            </div>

            <div className={styles.inquiry}>
                <div className={styles.inquiryItem}>
                    <span>BOOKING:</span>
                    <LinkNewTab className={styles.link} url={`mailto:${process.env.nh_email}`}>
                        {process.env.nh_email}
                    </LinkNewTab>
                </div>
                <div className={styles.inquiryItem}>
                    <span>PRESS INQUIRIES:</span>
                    <LinkNewTab className={styles.link} url="mailto:jbonner@milestonepublicity.com">
                        jbonner@milestonepublicity.com
                    </LinkNewTab>
                </div>
            </div>
        </div>
    );
}
