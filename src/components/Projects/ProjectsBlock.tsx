import { NewsletterProps, ProjectsProps } from "@/type";
import Link from "next/link";

export interface Projects {
    id: string;
    img: string;
    name: string;
    heading3: string;
}

interface Props {
    data: ProjectsProps;
    projectsData: Projects[];
}

const ProjectsBlock = ({ data, projectsData }: Props) => {
    return (
        <>
            <div className="container my-8">
                <div className="title text-center mw-50 m-auto mb-5">
                    <h1 className="headline-xl fw-800">Проекти</h1>
                </div>
                <div className="subtitle">
                    <h2 className="headline-l fw-800" id="#tekovni">{data.heading1}</h2>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-5 p-0 me-5">
                        <div className="row">
                            <Link href={`/projects/${projectsData[0].id}`} className="text-decoration-none">
                                <div className="card" style={{ backgroundImage: `url(${projectsData[0].img})` }}>
                                    <div className="cover bg-orange">
                                        <h3 className="headline-l fw-800 text-white">{projectsData[0].name}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="col mb-3">
                            <Link href={`/projects/${projectsData[1].id}`} className="text-decoration-none">
                                <div className="card height" style={{ backgroundImage: `url(${projectsData[1].img})` }}>
                                    <div className="cover bg-custom-purple">
                                        <h3 className="headline-m fw-700 text-white">{projectsData[0].name}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex">
                            <div className="col me-3">
                                <Link href={`/projects/${projectsData[2].id}`} className="text-decoration-none">
                                    <div className="card height" style={{ backgroundImage: `url(${projectsData[2].img})` }}>
                                        <div className="cover bg-custom-black">
                                            <h3 className="headline-s fw-700 text-white">{projectsData[0].name}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link href={`/projects/${projectsData[3].id}`} className="text-decoration-none">
                                    <div className="card height" style={{ backgroundImage: `url(${projectsData[3].img})` }}>
                                        <div className="cover-reverse bg-orange">
                                            <h3 className="headline-s fw-700 text-white">{projectsData[0].name}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-8"></div>
                <div className="subtitle mb-5">
                    <h2 className="headline-l fw-800" id="#zavrseni">{data.heading2}</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6 d-flex p-0 me-3">
                        <div className="col-6 me-3">
                            <Link href={`/projects/${projectsData[4].id}`} className="text-decoration-none">
                                <div className="card" style={{ backgroundImage: `url(${projectsData[4].img})` }}>
                                    <div className="cover bg-custom-purple">
                                        <h3 className="headline-s fw-700 text-white">{projectsData[0].name}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-6">
                            <div className="col">
                                <Link href={`/projects/${projectsData[5].id}`} className="text-decoration-none">
                                    <div className="card height" style={{ backgroundImage: `url(${projectsData[5].img})` }}>
                                        <div className="cover-reverse bg-orange">
                                            <h3 className="headline-s fw-700 text-white">{projectsData[0].name}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col mt-3">
                                <Link href={`/projects/${projectsData[6].id}`} className="text-decoration-none">
                                    <div className="card height" style={{ backgroundImage: `url(${projectsData[6].img})` }}>
                                        <div className="cover bg-custom-black">
                                            <h3 className="headline-s fw-700 text-white">{projectsData[0].name}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 p-0 ms-3">
                        <div className="row">
                            <Link href={`/projects/${projectsData[7].id}`} className="text-decoration-none">
                                <div className="card" style={{ backgroundImage: `url(${projectsData[7].img})` }}>
                                    <div className="cover-reverse bg-orange">
                                        <h3 className="headline-l fw-800 text-white">{projectsData[0].name}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-3">
                    <div className="col-5 p-0 me-5">
                        <div className="row">
                            <Link href={`/projects/${projectsData[8].id}`} className="text-decoration-none">
                                <div className="card" style={{ backgroundImage: `url(${projectsData[8].img})` }}>
                                    <div className="cover bg-orange">
                                        <h3 className="headline-l fw-800 text-white">{projectsData[0].name}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="col mb-3">
                            <Link href={`/projects/${projectsData[9].id}`} className="text-decoration-none">
                                <div className="card height" style={{ backgroundImage: `url(${projectsData[9].img})` }}>
                                    <div className="cover bg-custom-purple">
                                        <h3 className="headline-m fw-700 text-white">{projectsData[0].name}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="d-flex">
                            <div className="col me-3">
                                <Link href={`/projects/${projectsData[10].id}`} className="text-decoration-none">
                                    <div className="card height" style={{ backgroundImage: `url(${projectsData[10].img})` }}>
                                        <div className="cover bg-custom-black">
                                            <h3 className="headline-s fw-700 text-white">{projectsData[0].name}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link href={`/projects/${projectsData[11].id}`} className="text-decoration-none">
                                    <div className="card height" style={{ backgroundImage: `url(${projectsData[11].img})` }}>
                                        <div className="cover-reverse bg-orange">
                                            <h3 className="headline-s fw-700 text-white">{projectsData[0].name}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProjectsBlock;
