import { HomepageProps } from "@/type";
import { MainButton } from "../Buttons/MainButton";
import { SconButton } from "../Buttons/SconButton";
import Link from "next/link";

interface Props {
    floatContainerData: HomepageProps
}


const FloatContainer: React.FC<Props> = ({ floatContainerData }) => {
    return (
        <div className="float-container container text-white">
            <div className="row">
                <div className="col-12 d-lg-flex d-block">
                    <div className="col-lg-6 float-container__left col-12 bg-custom-black top-left bottom-left">
                        <div className="inner-div px-5 py-5">
                            <h2 className="mb--lg-5 mb-4 text-uppercase text-warning fw-bold">{floatContainerData.float_container.heading}</h2>
                            <h4 className='mb-lg-5 mb-4 fw-bold'>{floatContainerData.float_container.subtitle}</h4>
                            <p className="lh-40 lh-24">{floatContainerData.float_container.text}</p>
                            <div className="btns-div d-flex mt-5">
                                <div className="col-6 pe-3">
                                    <MainButton value="Види Повеќе" />
                                </div>
                                <div className="col-6 ps-3">
                                    <Link href={"/application"}>
                                        <SconButton value="Пријави се!" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="events-div col-lg-6 col-12 float-container__right top-right bottom-right">
                        <div className="date-div"><span className="fw-600 fs-56">23</span>
                            <br></br>
                            <span className="fw-600 headline-s">септ</span></div>
                        <img src={floatContainerData.float_container.img} className="img-fluid top-right bottom-right  bottom-left" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FloatContainer;