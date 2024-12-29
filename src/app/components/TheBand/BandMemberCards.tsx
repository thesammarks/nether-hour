import SocialCard from "./BandMemberCard";

const BandMemberCards = () => {
    return (
        <div className="
            flex max-sm:flex-col justify-stretch gap-5
            rounded-xl py-4 px-4
            bg-gradient-to-b from-neutral-700 to-neutral-600
        ">
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
};

export default BandMemberCards;
