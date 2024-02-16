import { NewsletterProps } from "@/type";
import Link from "next/link";

export interface Dates {
    id: string;
    month: string;
    date: string;
}

interface Props {
    data: NewsletterProps;
    datesData: Dates[];
}

const NewsletterBlock = ({ data, datesData }: Props) => {
    return (
        <>
            <div className="newsletter__header bg-custom-black py-5">
                <div className="container d-flex">
                    <div className="col-5 text-center">
                        <h1 className="fs-150 fw-800 text-white text-uppercase">Месечен</h1>
                    </div>
                    <div className="col-7 mt-10 text-center">
                        <h1 className="fs-200 fw-800 outline-text text-uppercase">Билтен</h1>
                    </div>
                </div>
            </div>
            <div className="container d-flex">
                <div className="left__container d-flex flex-column justify-content-evenly pe-8 my-8">
                    <div className="col-12">
                        <Link href={`/newsletter/${datesData[0].id}`} className="text-decoration-none text-black">
                            <h2 className="headline-l fw-800">{datesData[0].month}</h2>
                        </Link>
                        <span className="orange__dot"></span>
                        <p className="headline-s fw-700 lh-40">{data.body.content}</p>
                    </div>
                    <div className="img">
                        <img src={data.body.image1} className="img-fluid purple-filter" />
                    </div>
                    <div className="col-12">
                        <Link href={`/newsletter/${datesData[1].id}`} className="text-decoration-none text-black">
                            <h2 className="headline-l fw-800">{datesData[1].month}</h2>
                        </Link>
                        <span className="orange__dot"></span>
                        <p className="headline-s fw-700 lh-40">{data.body.content}</p>
                    </div>
                </div>
                <div className="middle__container">
                    <div className="vertical-line"></div>
                </div>
                <div className="right__container d-flex flex-column justify-content-evenly ps-8 my-8">
                    <div className="img">
                        <img src={data.body.image2} className="img-fluid purple-filter" />
                    </div>
                    <div className="col-12">
                        <Link href={`/newsletter/${datesData[2].id}`} className="text-decoration-none text-black">
                            <h2 className="headline-l fw-800">{datesData[2].month}</h2>
                        </Link>
                        <span className="orange__dot__right"></span>
                        <p className="headline-s fw-700 lh-40">{data.body.content}</p>
                    </div>
                    <div className="img">
                        <img src={data.body.image3} className="img-fluid purple-filter" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewsletterBlock;
