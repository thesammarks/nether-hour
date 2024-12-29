'use client'

import { Card, CardBody, User } from "@nextui-org/react";

interface BandMemberCardProps {
    name: string;
    handle: string;
    url: string;
    img: string;
}

const BandMemberCard = (props: BandMemberCardProps) => {
    return (
        <Card
            className="
                px-1 rounded-xl drop-shadow-xl
                bg-neutral-800 hover:bg-neutral-900
                transition-all duration-300 ease-in-out
            "
            isPressable
            onPress={() => window.open(props.url, '_blank')}
            isHoverable
        >
            <CardBody>
                <User
                    className="self-start"
                    avatarProps={{
                        src: props.img,
                    }}
                    description={props.handle}
                    name={props.name}
                />
            </CardBody>
        </Card>
    );
  };
  
export default BandMemberCard;
