import SocialCard from "./BandMemberCard";

const BandMemberCards = () => {
    return (
        <div className="
            flex max-xl:flex-col
            gap-4 justify-stretch
            px-4 py-4 rounded-xl
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
