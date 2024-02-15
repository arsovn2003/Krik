import { ApplicationFormProps } from "@/type";
import { InputBW } from "../Inputs/InputBW";
import { OutlineButton } from "../Buttons/OutlineButton";
import { OrneButton } from "../Buttons/OrneButton";

interface Props {
    data: ApplicationFormProps;
}

const AppForm = ({ data }: Props) => {
    return (
        <>
            <div className="container-fluid my-8">
                <div className="title text-center m-auto">
                    <h1 className="headline-xl fw-800">Волонтирај Сега!</h1>
                </div>
                <div className="container AppForm my-8">
                    <div className="inner d-flex py-5 ps-80">
                        <div className="col-6 me-3">
                            <span className="headline-s fw-700 lh-48">Име на Волонтер*</span>
                            <InputBW placeholder="Example Namington" />

                            <span className="headline-s fw-700 lh-48">Адреса*</span>
                            <InputBW placeholder="Example Street 24" />

                            <span className="headline-s fw-700 lh-48">Телефонски број*</span>
                            <InputBW placeholder="+38900000000" />

                            <span className="headline-s fw-700 lh-48">Email*</span>
                            <InputBW placeholder="example@email.com" />
                        </div>
                        <div className="col-7 ms-3">
                            <span className="headline-s fw-700 lh-48">Возраст*</span>
                            <div className="btns d-flex">
                                <div className="col-4 me-4">
                                    <OutlineButton value="Под 18 Години" />
                                </div>
                                <div className="col-4">
                                    <OutlineButton value="Над 18 Години" />
                                </div>
                            </div>
                            <div className="slide-container mt-5">
                                <span className="headline-s fw-700 lh-48">Искуство со волонтирање*</span>
                                <br></br>
                                <input type="range" min="1" max="10" value="4" className="slider" id="myRange" />
                                <div className="values mt-2 mb-4">
                                    <span>1</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>2</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>3</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>4</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>5</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>6</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>7</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>9</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>10</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div className="row">
                                    <span className="headline-s fw-700 lh-48">Волонтерски интереси*</span>
                                    <div className="col-4">
                                        <OutlineButton value="Lorem Ipsum" />&nbsp;
                                        <OutlineButton value="Lorem Ipsum" />
                                    </div>
                                    <div className="col-4">
                                        <OutlineButton value="Lorem Ipsum" />&nbsp;
                                        <OutlineButton value="Lorem Ipsum" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-2 w-15 m-auto pyx">
                        <OrneButton value="Пријави Се" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppForm;