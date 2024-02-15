import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { TeamItem } from '@/components/Team/TeamBlock';

interface TeamMemberDetailProps {
    teamMember: TeamItem;
}

const VolunteerDetail = ({ teamMember }: TeamMemberDetailProps) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div className="team__member__card col-12 my-8" >
            <div className="container">
                <div className="row">
                    <div className="col-5 p-0">
                        <img src={teamMember.img} className="img-fluid top-left top-right bottom-left bottom-right" />
                    </div>
                    <div className="col-7 d-flex flex-column justify-content-center px-3">
                        <h2 className='headline-l fw-800'>{teamMember.firstName} {teamMember.lastName}</h2>
                        <p className='body-l fw-400 lh-40 mt-4'>Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut.Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('http://localhost:5001/team_cards');
    const data = await res.json();

    const paths = data.map((item: TeamItem) => ({
        params: { id: item.id.toString() },
    }));

    return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id }: any = params;

    const res = await fetch(`http://localhost:5001/team_cards/${id}`);
    const teamMem = await res.json();

    return {
        props: {
            teamMember: teamMem,
        },
    };

};
