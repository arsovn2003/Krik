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
    const AppBlockRes = await fetch("https://json-server-for-krik.onrender.com/application")
    const AppData: ApplicationFormProps = await AppBlockRes.json()

    return {
        props: {
            data: AppData,
        }
    }
}