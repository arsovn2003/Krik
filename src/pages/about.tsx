import { AboutBlock } from "@/components/About/AboutBlock";
import { AboutusProps } from "@/type";
import { GetStaticProps } from "next";

interface Props {
    dataAboutus: AboutusProps;
}

const About = ({
    dataAboutus
}: Props) => {
    return (
        <>
            <AboutBlock props={dataAboutus} />
        </>
    );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
    const AboutBlockRes = await fetch("http://localhost:5001/about")
    const AboutData: AboutusProps = await AboutBlockRes.json()

    return {
        props: {
            dataAboutus: AboutData,
        }
    }
}