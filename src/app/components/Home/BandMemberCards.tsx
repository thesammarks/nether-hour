import BandMemberCard from "./BandMemberCard";

const BandMemberCards = () => {
    return (
        <div className="flex max-lg:flex-col gap-4 justify-stretch rounded-xl text-nowrap">
            <BandMemberCard
                name="Bishop"
                handle="@loverboybishop"
                url="https://www.instagram.com/loverboybishop"
                img="/images/bishop.png"
            />
            <BandMemberCard
                name="Bobby Flaco"
                handle="@bobflaco13"
                url="https://www.instagram.com/bobflaco13"
                img="/images/bobby.png"
            />
            <BandMemberCard
                name="Bercy"
                handle="@_bercy"
                url="https://www.instagram.com/_bercy"
                img="/images/bercy.png"
            />
        </div>
    );
};

export default BandMemberCards;
