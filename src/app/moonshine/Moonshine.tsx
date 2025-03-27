import React from "react";
import Image from 'next/image'
import styles from './Moonshine.module.scss';
import pageTemplateStyles from '@/app/PageTemplate.module.scss';
import LinkNewTab from "@/app/components/LinkNewTab";

export default function Moonshine() {
    return (
        <div className={styles.container}>
            <div className={pageTemplateStyles.title}>MOONSHINE</div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>MOONSHINE: Nether Hour’s Baptism by Fire</div>
                <p>
                    There’s something dangerous about <b><em>MOONSHINE</em></b>. It rolls in thick, like the smell of spilled
                    whiskey. It doesn’t just drip from the speakers — it oozes, bleeds, kicks you in the teeth, then
                    picks you up and buys you a drink. The <b>Austin-bred, tequila-baptized band</b> from <b>Texas</b>,{' '}
                    <b>Louisiana</b>, and <b>Mississippi</b> has bottled that madness in <b><em>MOONSHINE</em></b>, a record
                    soaked in sin, sweat, and the ghosts of every dive bar in Austin. This isn’t just an album; it’s a
                    backroad sermon, a shotgun-wielding preacher hollering from the pulpit of a dive bar jukebox. Every
                    song sounds like it was recorded at the end of a long night — half drunk, fully alive, and teetering
                    between revelation and complete obliteration.
                </p>
                <p>
                    The album’s lead single, <b><em>Long As I Ain’t Alone</em></b> might pass as a country song if you squint
                    through a cloud of cigarette smoke, but that’s just the bait. As Nether Hour puts it themselves, “We
                    aren’t country music, just a bunch of country boys that make music.” <em>Long As I Ain’t Alone</em>{' '}
                    is a neon-lit pool hall at 2 AM — gritty, a little reckless, and always soaked in soul. Yet, as the
                    band has gained traction outside of Austin’s live music scene — just as The Black Pumas or Charley
                    Crockett, and others before them — it’s impossible to separate them completely from the city’s
                    unique musical roots. As{' '}
                    <LinkNewTab
                        url="https://www.whiskeyriff.com/2024/12/09/16-must-listen-country-artists-i-discovered-in-2024/"
                        className={styles.link}
                    >
                        Whiskey Riff
                    </LinkNewTab> put it, <b>“Their unique brand of rock and roll incorporates undeniable elements of funk, blues,
                    rock, and country,"</b> making them impossible to pin down but impossible to ignore.
                </p>
                <div className={styles.imageRow}>
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/moonshine/img01.jpg"}
                        alt="Moonshine Image 01"
                    />
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/moonshine/img02.jpg"}
                        alt="Moonshine Image 02"
                    />
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/moonshine/img03.jpg"}
                        alt="Moonshine Image 03"
                    />
                </div>
                <p>
                    Then there’s <b><em>Perdido (con el Diablo)</em></b> — a fever dream of Latin grooves and gypsy swagger,
                    narrated by a woman who dances to forget the weight of her past. “A coping mechanism,” says front
                    man Bob Flaco, who admits that much of Nether Hour’s songwriting boils down to just that: survival,
                    turning chaos into music. Similar to <b><em>Sex Ed</em></b> — a song that started back in 2017 with nothing
                    but a guitar lick and a feeling. “I showed an ex-bandmate and friend Maurice, and he just started
                    freestyling — that’s how we got that first verse,” <b>Bob recalls</b>. “The rest of the words were
                    already written, originally intended for another track, but when the groove started rolling, the
                    transition was effortless. Once we got going and began to build it, it was just an easy audible to
                    bring those words into that melody and groove. It’s the kind of song that feels inevitable, like it
                    was always meant to exist — just waiting for the right moment to come alive.”
                </p>
                <p>
                    That same spirit carried into <b><em>Stargazer</em></b>, a track that was once nothing more than an
                    intro to "Sex Ed" before it took on a life of its own. “Live, I’m always trying to do something
                    different in this section,” <b>Bercy says</b>. “In the studio, I can’t remember if it was Oliver
                    Ocean’s or Bishop’s idea to put the sub-bass pedal on the bass, but that flipped my head into the
                    world of Pino Palladino, J Dilla — kind of that D’Angelo world. I’d even say some Michael League
                    influence there. What came out was beautiful, and I’m super happy with how it turned out on the
                    album.” <b><em>Stargazer</em></b> floats in that space between groove and atmosphere, a moment of
                    hazy introspection before the band kicks the door back open and sets the room on fire again. It’s
                    the eye of the storm — a moment of heavy-lidded reflection before the band throws another log on the
                    fire.
                </p>
                <div className={styles.imageRow}>
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/moonshine/img04.jpg"}
                        alt="Moonshine Image 04"
                    />
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/moonshine/img05.jpg"}
                        alt="Moonshine Image 05"
                    />
                </div>
                <p>
                    Another fan favorite, <b><em>Look My Way</em></b> sounds like it was yanked from a lost ‘80s
                    mixtape, then runs through the grit and grind of a snarling fuzz pedal.{' '}
                    <LinkNewTab
                        url="https://americansongwriter.com/austin-based-rockers-nether-hour-crank-up-heat-steamy-80s-inspired-new-single-look-my-way-exclusive-premiere/"
                        className={styles.link}
                    >
                        American Songwriter
                    </LinkNewTab> raved, “Inspired by ‘80s rock, fuzzy riffs, and dive bar vibes, <em>Look My Way</em>{' '}
                    showcases the range of Nether Hour.”
                </p>
                <p>
                    "<em>Look My Way</em> is my favorite song we’ve released to date!” <b>says Bishop</b>. “Lil’ bit of
                    that ‘80s pop-rock energy and a guitar solo from Bobbo that sounds like a chainsaw growling through
                    the speakers trying to cut you like Texas Chainsaw Massacre. We used a vintage fuzz pedal that the
                    Stones used back in the day and we had to bang on it to get it to work — it was barely hanging on.
                    Eventually, we knocked it hard enough and it stayed on through a whole take. Took our tracks over to
                    the boys at 601 and we added some fun harmony layers, drops, and slowed it down like 4 BPM, so good
                    luck playing along!”
                </p>
                <p>
                    The result? A track that refuses to sit still, pulsing with reckless energy and arena-sized swagger.
                </p>
                <div className={styles.imageRow}>
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/moonshine/img06.jpg"}
                        alt="Moonshine Image 06"
                    />
                    <Image
                        className={styles.image}
                        width={1} height={1}
                        src={"/images/moonshine/img07.jpg"}
                        alt="Moonshine Image 07"
                    />
                </div>
                <p>
                    What <b><em>MOONSHINE</em></b> does best is capture the reckless, no-rules energy of a Nether Hour
                    live show — where riffs get deeper with every passing verse, and the music doesn’t just play, it
                    grabs you by the balls until you start questioning yourself and who you are. As{' '}
                    <LinkNewTab
                        url="https://www.gratefulweb.com/articles/nether-hours-long-i-aint-alone-texas-sized-lullaby-lonely"
                        className={styles.link}
                    >
                        Grateful Web
                    </LinkNewTab> said “This trio known for swapping instruments like outlaws exchanging shots in a
                    backroad bar, brings a reckless energy to their live performances, blending Louisiana swamp grooves,
                    Texas rock, and a whole lot of funk into a genre-bending experience.”
                </p>
                <p>
                    So, pour yourself something strong, turn the dial up, and let <b><em>MOONSHINE</em></b> take the
                    wheel. Just don’t expect it to take you anywhere safe.
                </p>
            </div>
        </div>
    );
}
