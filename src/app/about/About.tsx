import React from "react";
import Image from 'next/image'
import styles from './About.module.scss';

export default function About() {
    return (
        <div id="about" className={styles.container}>

            <div className={styles.title}>ABOUT</div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Nether Hour: A Sonic Revival</div>
                <p>
                    <em>“We don’t play country music, but we’re good ole boys from the country.”</em>
                </p>
                <p>
                    Down in the heart of Austin, TX, where the music runs thicker than the heat, there’s a band that’s
                    been making some serious noise. They call themselves <strong>Nether Hour</strong>, and they’ve been
                    turning every dive bar and backroad juke joint into a full-blown musical revival. The band is a trio
                    of unapologetic rebels, each one a powerhouse of sonic defiance. <strong>Bobby Flaco</strong>{' '}
                    delivers gritty vocals and razor-sharp guitar riffs, while <strong>Bishop</strong> unleashes searing
                    lead guitar and mandolin work, with <strong>Bercy</strong> laying down bass lines that slam right
                    into your gut. Nether Hour is a relentless sonic melting pot, fusing the swampy grooves of Louisiana
                    with Texas-sized doses of funk, blues, soul, and rock ‘n’ roll.
                </p>
                <div className={styles.imageRow}>
                    <Image
                       className={styles.image}
                        width={1} height={1}
                        src={"/images/about/about_img01.jpeg"}
                        alt="About Image 01"
                    />
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/about/about_img02.jpeg"}
                        alt="About Image 02"
                    />
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>The Backstory</div>
                <p>
                    Before they evolved into the three-headed beast known as Nether Hour, Bercy and Bishop were stirring
                    up trouble in a band called Swamp Brew, while Bobby was raising hell in his own outfit. It was only
                    a matter of time before these wild spirits would collide, and when they did, the real madness began.
                    With a cosmic twist of fate involving <strong>JaRon Marshall</strong> of the Black Pumas and 2018’s
                    SXSW, Bobby, Bishop, and Bercy have been carving out a niche in Austin’s music scene, including a
                    stint as the <em>Kill Tony</em> after-party band for over a year.
                </p>
                <div className={styles.imageRow}>
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/about/about_img03.png"}
                        alt="About Image 03"
                    />
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/about/about_img04.png"}
                        alt="About Image 04"
                    />
                    <Image
                        className={`${styles.image} ${styles.hiddenLg}`}
                        width={1} height={1}
                        src={"/images/about/about_img05.jpeg"}
                        alt="About Image 05"
                    />
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>New Album: MOONSHINE</div>
                <p>
                    On <strong>Friday, March 14, 2025</strong>, brace yourself for the band’s next eruption
                    titled <strong>MOONSHINE</strong> — an eight-track album that promises to be the raucous,
                    intoxicating follow-up to their previous escapade, <strong>SUNSHINE</strong>. Released through
                    <em>Nether Family Records</em>, MOONSHINE bottles the unbridled energy of their live shows into a
                    sonic elixir so potent, it’ll make you tipsy just by listening. It’s a fierce concoction of deep
                    grooves, smooth vocals, and irresistible beats, crafted from late-night jam sessions and back-alley
                    dives where the whiskey flows as freely as the music.
                </p>
                <p>
                    MOONSHINE distills the very essence of Nether Hour: raw, untamed, and deeply rooted in Austin’s
                    vibrant music culture. This forthcoming record feels like a midnight drive with every twist
                    revealing something new — a searing solo, a thumping bassline, or an unstoppable beat. These guys
                    are the real deal, blending Southern grit with the ability to shift from bluesy riffs to swampy
                    grooves in a heartbeat.
                </p>
                <div className={styles.imageRow}>
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/about/about_img06.jpeg"}
                        alt="About Image 06"
                    />
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/about/about_img07.jpeg"}
                        alt="About Image 07"
                    />
                    <Image
                        className={`${styles.image} ${styles.hiddenLg}`}
                        width={1} height={1}
                        src={"/images/about/about_img08.jpeg"}
                        alt="About Image 08"
                    />
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Influences and Sound</div>
                <p>
                    Imagine a hell-bent voyage into the dizzying depths of musical madness, blending Little Dragon’s
                    anarchic funk, the unfiltered ferocity of the Rolling Stones, and D’Angelo’s sultry haze. Add Wayne
                    Toups’ bayou insanity, Freddy Fender’s outlaw twang, Santana’s trippy rock, and the polished
                    harmonies of the Eagles and Crosby, Stills & Nash. Sprinkle in AC/DC’s thunderous riffs, Thin
                    Lizzy’s swagger, and Jungle’s groove-driven mayhem, and you’ve got Nether Hour.
                </p>
                <div className={styles.imageRow}>
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/about/about_img09.jpeg"}
                        alt="About Image 09"
                    />
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/about/about_img10.jpeg"}
                        alt="About Image 10"
                    />
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Future Plans</div>
                <p>
                    As the band begins to garner some well-deserved recognition, they’re pushing their tenacious sound
                    beyond Austin’s borders and taking it across state lines. For the remainder of 2024 and throughout
                    2025, they’re crashing into new territories like Colorado and the Southeast, and even making waves
                    on the Fraternity circuit.
                </p>
                <p>
                    <strong>MOONSHINE</strong> is slated for release on <strong>Friday, March 14, 2025</strong>. Don’t
                    miss the opportunity to dive headfirst into the raw energy and sonic brilliance of Nether Hour!
                </p>
                <div className={styles.imageRow}>
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/about/about_img11.jpeg"}
                        alt="About Image 11"
                    />
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/about/about_img12.jpeg"}
                        alt="About Image 12"
                    />
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/about/about_img13.jpeg"}
                        alt="About Image 13"
                    />
                </div>
            </div>
        </div>
    );
}
