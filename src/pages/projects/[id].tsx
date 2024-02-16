import { ButtonBW } from '@/components/Buttons/ButtonBW';
import { DarkButton } from '@/components/Buttons/DarkButton';
import { OrneButton } from '@/components/Buttons/OrneButton';
import { ProjectsProps } from '@/type';
import Link from 'next/link';
import { useRouter } from 'next/router';



interface Props {
    detailsData: ProjectsProps;
    datesData: { id: string; name: string; img: string; }[];
}

const ProjectDetail = ({ detailsData, datesData }: Props) => {
    const router = useRouter();
    const { id } = router.query;

    const selectedDate = datesData.find(dateItem => dateItem.id === id);

    return (
        <>
            {selectedDate && (
                <div className="container my-17">
                    <div className="hero" style={{ backgroundImage: `url(${selectedDate.img})` }}></div>
                    <div className="section-2 my-8">
                        <div className="title w-100 m-auto text-center">
                            <h2 className='headline-xl fw-800'>{detailsData.heading3}</h2>
                            <p className='body-l fw-400 lh-40 px-80 mt-5'>{detailsData.text1}</p>
                        </div>
                    </div>
                    <div className="section-3-projects-details d-flex border-radius">
                        <div className="col-4 border-radius bg-custom-black text-white py-5">
                            <h2 className='headline-xl fw-800 px-5 pb-80'>{detailsData.text3}</h2>
                        </div>
                        <div className="col-8">
                            <div className="text">
                                <p className='px-80 pt-5 lh-40'>
                                    {detailsData.text2}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="section-4 my-8">
                        <div className="row">
                            <div className="col-8 left__container__section-4 d-flex flex-column justify-content-center px-5">
                                <h3 className='headline-xl fw-800'>{detailsData.text4}</h3>
                                <p className='body-l fw-400 lh-40'>{detailsData.text5}</p>
                            </div>
                            <div className="col-4">
                                <img src={detailsData.img1} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                    <div className="section-5">
                        <div className="progress-bar">
                            <div className="bar-line"></div>
                            <div className='progress-percent headline-m fw-700'>31%</div>
                        </div>
                        <div className='d-flex flex-column flex-end mt-4'>
                            <div className="col-12 d-flex mb-4">
                                <div className="col-6 me-4">
                                    <p>Заинтересиран/а си?</p>
                                </div>
                                <div className="col-6 ms-5">
                                    <DarkButton value='Пријави Се!' />
                                </div>
                            </div>
                            <div className="col-12 d-flex">
                                <div className="col-6 me-4">
                                    <p>Сакаш да не поддржиш?</p>
                                </div>
                                <div className="col-6 ms-5">
                                    <Link href={"/donation"}>
                                        <OrneButton value='Донирај' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export async function getServerSideProps(context: any) {
    const { id } = context.params;

    const projectDetailsRes = await fetch("http://localhost:5001/projects");
    const detailsData: ProjectsProps = await projectDetailsRes.json();

    const datesRes = await fetch("http://localhost:5001/projects_items");
    const datesData = await datesRes.json();

    console.log('data:', detailsData);
    console.log('datesData:', datesData);

    return {
        props: {
            datesData,
            detailsData,
        },
    };
}

export default ProjectDetail;
