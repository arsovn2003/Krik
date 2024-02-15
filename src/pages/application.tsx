import AppForm from "@/components/ApplicationForm/AppForm";
import { AboutusProps, ApplicationFormProps } from "@/type";
import { GetStaticProps } from "next";

interface Props {
    data: ApplicationFormProps;
}

const ApplicationForm = ({ data }: Props) => {
    return (
        <>
            <AppForm data={data} />
        </>
    );
};

export default ApplicationForm;

export const getStaticProps: GetStaticProps = async () => {
    const AppBlockRes = await fetch("http://localhost:5001/application")
    const AppData: ApplicationFormProps = await AppBlockRes.json()

    return {
        props: {
            data: AppData,
        }
    }
}