import ProjectsBlock from "@/components/Projects/ProjectsBlock";
import type { Projects } from "@/components/Projects/ProjectsBlock";
import { ProjectsProps } from "@/type";
import { GetStaticProps } from "next";

interface Props {
    data: ProjectsProps;
    projectsData: Projects[];
}

const Projects = ({ data, projectsData }: Props) => {
    return (
        <>
            <ProjectsBlock data={data} projectsData={projectsData} />
        </>
    )
}

export default Projects;

export const getStaticProps: GetStaticProps<Props> = async () => {
    const projectsRes = await fetch("http://localhost:5001/projects_items");
    const projectsData: Projects[] = await projectsRes.json();

    const projects = await fetch("http://localhost:5001/projects");
    const data: ProjectsProps = await projects.json();

    return {
        props: {
            projectsData: projectsData,
            data: data,
        },
    };
};