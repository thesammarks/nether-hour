import SocialCard from "./BandMemberCard";
import styles from "./BandMemberCards.module.scss";

export default function BandMemberCards() {
    return (
        <div className={styles.container}>
            <SocialCard
                name="Bercy"
                handle="@_bercy"
                url="https://www.instagram.com/_bercy"
                img="/images/bercy.png"
            />
            <SocialCard
                name="Bishop"
                handle="@loverboybishop"
                url="https://www.instagram.com/loverboybishop"
                img="/images/bishop.png"
            />
            <SocialCard
                name="Bobby Flaco"
                handle="@bobflaco13"
                url="https://www.instagram.com/bobflaco13"
                img="/images/bobby.png"
            />
        </div>
    );
}
