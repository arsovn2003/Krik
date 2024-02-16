import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import { VolunteersItem, VolunteersProjects } from '@/type';
import DateIcon from '../../../public/img/date-icon.png';
import ArrowRight from '../../../public/img/ArrowRight.png';
import Link from 'next/link';
import Image from 'next/image';

interface VolunteerDetailProps {
    volunteer: VolunteersItem;
    projects: VolunteersProjects[];
}

const VolunteerDetail = ({ volunteer, projects }: VolunteerDetailProps) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="container-fluid my-8">
                <div className="volunteer-card col-12 my-8" >
                    <div className="container">
                        <div className="row bordered__div">
                            <div className="col-5 p-0">
                                <img src={volunteer.body.img} className="img-fluid top-left top-right bottom-left bottom-right" />
                            </div>
                            <div className="col-7 d-flex flex-column justify-content-center px-5">
                                <h2 className='headline-l fw-800'>{volunteer.body.firstName} {volunteer.body.lastName}</h2>
                                <p className='body-l fw-400 lh-40 mt-4'>Hello! I’m {volunteer.body.firstName}. I am {volunteer.body.years}. I am studying in department of law in Turkey, Istanbul. This is my first experience in project like this one so I am pretty excited about working and spending time with other volunteers. I love team projects and doing something together. Also I liked Macedonia and Skopje. This city has great nature and statues. I wonder how we will work and spending amazing time with others when I meet with new people from other cultures.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="project-cards d-flex pb-5 justify-content-center">
                        {projects.map(project => (
                            <div key={project.body.id} >
                                <div className="row mb-4">
                                    <p className='outline w-20 text-center headline-s fw-700'>{project.body.status}</p>
                                </div>
                                <div className="projects text-white" style={{ backgroundImage: `url(${project.body.img})` }}>
                                    <div className="inner-container">
                                        <div className="inner d-flex">
                                            <div className="type-div">
                                                <p className="body-s bg-orange text-dark px-2 rounded-top-5 rounded-bottom-5">{project.body.type}</p>
                                            </div>
                                            <div className="dates-div ms-3">
                                                <p className="body-s">&nbsp;&nbsp;{project.body.date}</p>
                                            </div>
                                        </div>
                                        <div className="desc-div w-75">
                                            <p>{project.body.description}</p>
                                        </div>
                                        <Link href={"/newsletter"} className='text-white text-decoration-none'>
                                            <span>Види повеќе&nbsp;<Image src={ArrowRight} alt="" /></span>
                                        </Link>
                                    </div>
                                    <div className="news-gradient"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default VolunteerDetail;

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch('https://json-server-for-krik.onrender.com/volunteers_cards');
    const data = await res.json();

    const paths = data.map((item: VolunteersItem) => ({
        params: { id: item.body.id.toString() },
    }));

    return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id }: any = params;

    const res = await fetch(`https://json-server-for-krik.onrender.com/volunteers_cards/${id}`);
    const volunteer = await res.json();

    const volunteersProjectsRes = await fetch('https://json-server-for-krik.onrender.com/volunteers_projects');
    const volunteersProjectsData = await volunteersProjectsRes.json();

    return {
        props: {
            volunteer,
            projects: volunteersProjectsData,
        },
    };
};
