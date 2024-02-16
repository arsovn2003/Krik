import { DonationBlock } from "@/components/Donation/DonationBlock";
import { DonationProps } from "@/type";
import { GetStaticProps } from "next";

export interface Props {
    dataDonation: DonationProps;
}

const About = ({
    dataDonation
}: Props) => {
    return (
        <>
            <div className="container-fluid py-5 my-8">
                <div className="col-12">
                    <div className="title text-center m-auto">
                        <h1 className="fw-800 headline-l">{dataDonation.body.first_section.heading}</h1>
                    </div>
                    <div className="container">
                        <nav className="mt-5">
                            <ul className="services-menu d-flex justify-content-evenly p-0">
                                <div className="index__div w-40 text-center">
                                    <li className="fw-700 headline-s active">
                                        <a>Индивидуа</a>
                                    </li>
                                </div>
                                <div className="index__div w-40 text-center">
                                    <li className="fw-700 headline-s">
                                        <a>Организација/Претпријатие</a>
                                    </li>
                                </div>
                            </ul>
                            <div className="menu-line"></div>
                        </nav>
                    </div>
                </div>
                <DonationBlock props={dataDonation} />
            </div>
        </>
    );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
    const DonationBlockRes = await fetch("https://json-server-for-krik.onrender.com/donation")
    const DonationData: DonationProps = await DonationBlockRes.json()

    return {
        props: {
            dataDonation: DonationData
        }
    }
}