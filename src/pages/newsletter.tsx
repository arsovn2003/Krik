import NewsletterBlock, { Dates } from "@/components/Newsletter/NewsletterBlock";
import { NewsletterProps } from "@/type";
import { GetStaticProps } from "next";

interface Props {
    data: NewsletterProps;
    datesData: Dates[];
}

const Newsletter = ({ data, datesData }: Props) => {
    return (
        <>
            <NewsletterBlock data={data} datesData={datesData} />
        </>
    )
}

export default Newsletter;

export const getStaticProps: GetStaticProps = async () => {
    const newsletterRes = await fetch("https://json-server-for-krik.onrender.com/newsletter");
    const newsletterData: NewsletterProps = await newsletterRes.json();

    const datesRes = await fetch("https://json-server-for-krik.onrender.com/newsletter_dates");
    const datesData: Dates[] = await datesRes.json();

    return {
        props: {
            data: newsletterData,
            datesData: datesData,
        },
    };
}