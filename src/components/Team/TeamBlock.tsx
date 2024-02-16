import { OurTeamProps } from "@/type";
import { OrneButton } from "../Buttons/OrneButton";
import Link from "next/link";

export interface TeamItem {
    body: {
        id: string;
        img: string;
        firstName: string;
        lastName: string;
        role: string;
    }
}

interface Props {
    team: OurTeamProps;
    teamItem: TeamItem[];
}

const TeamBlock: React.FC<Props> = ({
    teamItem,
    team
}) => {

    return (
        <div className="container-flud">
            <div className="pt-5 pb-3">
                <div className="container-fluid">
                    <div className="title text-center m-auto w-50 py-5">
                        <h2 className="headline-xl fw-800 pb-5">{team.body.heading1}</h2>
                    </div>
                    <div className="container justify-content-center team-cards d-flex align-items-center">
                        {teamItem.map(item => (
                            <Link key={item.body.id} href={`/team/${item.body.id}`} className="team-card mx-2 text-decoration-none">
                                <div>
                                    <img src={item.body.img} className="img-fluid rounded-5" />
                                </div>
                                <div className="d-flex">
                                    <span className="headline-s fw-700 text-black">{item.body.firstName}&nbsp;{item.body.lastName}</span>
                                </div>
                                <div>
                                    <span className="role body-s fw-600 text-black">{item.body.role}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="col-lg-2 col-4 m-auto mt-5">
                        <OrneButton value="Linkedin >" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamBlock;