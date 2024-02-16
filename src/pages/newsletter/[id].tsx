import { useRouter } from 'next/router';
import { NewsletterProps } from "@/type";
import { DarkButton } from '@/components/Buttons/DarkButton';
import Link from 'next/link';

interface NewsletterNewsProps {
    id: string;
    img1: string;
    img2: string;
    img3: string;
    title: string;
    subtitle: string;
}

interface NewsletterDetailProps {
    newsletterData: NewsletterProps;
    datesData: { id: string; date: string; }[];
    newsletterNews: NewsletterNewsProps;
}

const NewsletterDetail = ({ newsletterData, datesData, newsletterNews }: NewsletterDetailProps) => {
    const router = useRouter();
    const { id } = router.query;

    const selectedDate = datesData.find(dateItem => dateItem.id === id);

    return (
        <div>
            <div className="container my-8">
                <div className="title">
                    <h1 className='headline-xl fw-800 mb-5'>ТОП НОВОСТИ</h1>
                </div>
                <div className="d-flex justify-content-evenly">
                    <div className="col-6">
                        <img className='img-fluid' src={newsletterNews.img1} />
                        {selectedDate && (
                            <p className='button-l fw-700 outline w-20 text-center mt-3'>{selectedDate.date}</p>
                        )}
                        <p className='headline-xl fw-800'>{newsletterNews.title}</p>
                        <p className='body-l fw-400'>{newsletterNews.subtitle}</p>
                        <div className="col-4">
                            <DarkButton value='CTA' />
                        </div>
                    </div>
                    <div className="col-3 mx-3">
                        <img className='img-fluid' src={newsletterNews.img2} />
                        <p className='button-l fw-700 outline w-20 text-center mt-3'>30.07.2023</p>
                        <p className='headline-m fw-700'>{newsletterNews.title}</p>
                        <p className='body-l fw-400'>{newsletterNews.subtitle}</p>
                        <div className="col-8">
                            <DarkButton value='CTA' />
                        </div>
                    </div>
                    <div className="col-3">
                        <img className='img-fluid' src={newsletterNews.img3} />
                        <p className='button-l fw-700 outline w-20 text-center mt-3'>27.07.2023</p>
                        <p className='headline-m fw-700'>{newsletterNews.title}</p>
                        <p className='body-l fw-400'>{newsletterNews.subtitle}</p>
                        <div className="col-8">
                            <DarkButton value='CTA' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hr-line"></div>
            <div className="container my-8">
                <div className="title">
                    <h1 className='headline-xl fw-800 mb-5'>ОСТАНАТИ НОВОСТИ</h1>
                </div>
                <div className="d-flex">
                    <div className="col-4">
                        <p className='button-l fw-700 outline w-20 text-center'>02.10.2023</p>
                        <p className='headline-m fw-700'>{newsletterNews.title}</p>
                        <div className="col-5">
                            <DarkButton value='CTA' />
                        </div>
                    </div>
                    <div className="col-4 mb-5">
                        <p className='button-l fw-700 outline w-20 text-center'>29.09.2023</p>
                        <p className='headline-m fw-700'>{newsletterNews.title}</p>
                        <div className="col-5">
                            <DarkButton value='CTA' />
                        </div>
                    </div>
                    <div className="col-4 mb-5">
                        <p className='button-l fw-700 outline w-20 text-center'>29.09.2023</p>
                        <p className='headline-m fw-700'>{newsletterNews.title}</p>
                        <div className="col-5">
                            <DarkButton value='CTA' />
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="col-4 mb-5">
                        <p className='button-l fw-700 outline w-20 text-center'>25.09.2023</p>
                        <p className='headline-m fw-700'>{newsletterNews.title}</p>
                        <p className='body-l fw-400'>{newsletterNews.subtitle}</p>
                        <div className="col-5">
                            <DarkButton value='CTA' />
                        </div>
                    </div>
                    <div className="col-4">
                        <p className='button-l fw-700 outline w-20 text-center'>18.09.2023</p>
                        <p className='headline-m fw-700'>{newsletterNews.title}</p>
                        <p className='body-l fw-400'>{newsletterNews.subtitle}</p>
                        <div className="col-5">
                            <DarkButton value='CTA' />
                        </div>
                    </div>
                    <div className="col-4">
                        <p className='button-l fw-700 outline w-20 text-center'>02.10.2023</p>
                        <p className='headline-m fw-700'>{newsletterNews.title}</p>
                        <p className='body-l fw-400'>{newsletterNews.subtitle}</p>
                        <div className="col-5">
                            <DarkButton value='CTA' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function getServerSideProps(context: any) {
    const { id } = context.params;

    const newsletterRes = await fetch(`http://localhost:5001/newsletter/${id}`);
    const newsletterData: NewsletterProps = await newsletterRes.json();

    const datesRes = await fetch("http://localhost:5001/newsletter_dates");
    const datesData = await datesRes.json();

    const datesRes2 = await fetch("http://localhost:5001/newsletter_news");
    const newsletterNews = await datesRes2.json();

    return {
        props: {
            newsletterData,
            datesData,
            newsletterNews,
        },
    };
}

export default NewsletterDetail;
