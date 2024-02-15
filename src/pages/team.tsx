import MembersBlock, { MembersItem } from "@/components/Team/MembersBlock";
import TeamBlock, { TeamItem } from "@/components/Team/TeamBlock";
import { OurTeamProps } from "@/type";
import { GetStaticProps } from "next";

interface Props {
    team: OurTeamProps;
    teamItems: TeamItem[];
    membersItems: MembersItem[];
}

const Team = ({
    teamItems,
    team,
    membersItems
}: Props) => {
    return (
        <>
            <div className="container-fluid px-0">
                <div className="col-12">
                </div>
                <TeamBlock teamItem={teamItems} team={team} />
                <MembersBlock membersItem={membersItems} membersBlockData={team} />
            </div>
        </>
    );
};

export default Team;

export const getStaticProps: GetStaticProps = async () => {

    const ourTeamRes = await fetch("http://localhost:5001/team")
    const ourTeamData: OurTeamProps = await ourTeamRes.json()

    const teamRes = await fetch("http://localhost:5001/team_cards")
    const teamData: TeamItem = await teamRes.json()

    const membersRes = await fetch("http://localhost:5001/members_cards")
    const membersData: MembersItem = await membersRes.json()

    return {
        props: {
            teamItems: teamData,
            team: ourTeamData,
            membersItems: membersData
        }

    }
}