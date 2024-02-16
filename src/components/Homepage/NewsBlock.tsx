import { SconButton } from "../Buttons/SconButton";
import DateIcon from '../../../public/img/date-icon.png';
import ArrowRight from '../../../public/img/ArrowRight.png';
import Image from 'next/image';
import { HomepageProps } from "@/type";
import Link from "next/link";

export interface NewsItemInterface {
    id: string;
    img: string;
    type: string;
    date: string;
    description: string;
}

interface Props {
    news: NewsItemInterface[];
    newsBlockData: HomepageProps;
}

const NewsBlock: React.FC<Props> = ({ news, newsBlockData }) => {
    return (
        <div className="container-fluid">
            <div className="pt-5 pb-3">
                <div className="container-fluid">
                    <div className="container">
                        <div className="title mb-5">
                            <h1 className="headline-xl fw-800">{newsBlockData.body.news_block.heading}</h1>
                        </div>
                    </div>
                    <div className="row scroll-container">
                        <div className="news-cards d-lg-flex d-block pb-5">
                            {news.map(newsItem => (
                                <div key={newsItem.id} className="text-white">
                                    <div className="news img-fluid gray-filter" style={{ backgroundImage: `url(${newsItem.img})` }}>
                                        <div className="inner-container">
                                            <div className="inner d-flex">
                                                <div className="type-div">
                                                    <p className="body-s bg-orange text-dark px-2 rounded-top-5 rounded-top-5-mobile rounded-bottom-5 rounded-bottom-5-mobile fs-24">{newsItem.type}</p>
                                                </div>
                                                <div className="dates-div ms-3">
                                                    <p className="body-s fs-20"><Image src={DateIcon} alt="" />&nbsp;&nbsp;{newsItem.date}</p>
                                                </div>
                                            </div>
                                            <div className="desc-div w-75">
                                                <p>{newsItem.description}</p>
                                                <Link href={"/newsletter"} className="text-white text-decoration-none">
                                                    <span>Види повеќе&nbsp;<Image src={ArrowRight} alt="" /></span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="news-gradient"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="btn-div w-25 ms-auto mt-4">
                    <SconButton value="Види за цел Месец" />
                </div>
            </div>
        </div>
    );
};

export default NewsBlock;