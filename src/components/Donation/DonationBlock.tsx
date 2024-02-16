import { AboutusProps, DonationProps } from "@/type"
import { OutlineButton } from "../Buttons/OutlineButton";
import { Input } from "../Inputs/Input";
import { InputBW } from "../Inputs/InputBW";
import { MainButton } from "../Buttons/MainButton";
import { OrneButton } from "../Buttons/OrneButton";

interface DonationBlockProps {
    props: DonationProps;
}

export const DonationBlock = ({ props }: DonationBlockProps) => {
    return (
        <>
            <div className="Donation container p-5 box-shadow m-auto w-65 my-5">
                <div className="inner p-5">
                    <p className="headline-s fw-700">{props.second_section.text1}</p>
                    <div className="buttons-div w-100 d-flex">
                        <div className="btn-div w-20 me-4">
                            <OutlineButton value="1000 Ден" />
                        </div>
                        <div className="btn-div w-20 me-4">
                            <OutlineButton value="3000 Ден" />
                        </div>
                        <div className="btn-div w-20 me-4">
                            <OutlineButton value="6000 Ден" />
                        </div>
                        <div className="btn-div w-20">
                            <OutlineButton value="Промени Валута" />
                        </div>
                    </div>
                    <div className="text-div mt-3">
                        <p className="body-l fw-400">{props.second_section.text2}</p>
                    </div>
                    <div className="col-4 mt-5">
                        <p className="body-s fw-400">Друг Износ:</p>
                        <InputBW placeholder="Input" />
                    </div>
                    <div className="btns-div d-flex mt-5">
                        <div className="col-4 d-flex">
                            <button className="btn-dark py-10 px-30 fw-700 headline-s">Донирај со</button>
                        </div>
                        <div className="col-2 w-20">
                            <MainButton value="PayPal" />
                        </div>
                    </div>
                </div>
            </div >

            <div className="container px-5 w-65 m-auto">
                <div className="inner d-flex px-5 justify-content-center">
                    <div className="col-6">
                        <span className="headline-s fw-700">Име на Донатор*</span>
                        <div className="col mb-3"></div>
                        <InputBW placeholder="Example Namington" />

                        <span className="headline-s fw-700">Email*</span>
                        <div className="col mb-3"></div>
                        <InputBW placeholder="example@email.com" />

                        <span className="headline-s fw-700">Телефонски број*</span>
                        <div className="col mb-3"></div>
                        <InputBW placeholder="+38900000000" />

                        <span className="headline-s fw-700">Сума за донирање*</span>
                        <div className="col mb-3"></div>
                        <InputBW placeholder="a million?" />
                    </div>
                    <div className="col-6 ms-5">
                        <span className="headline-s fw-700">Број на картичка*</span><br></br>
                        <div className="col mb-3"></div>
                        <InputBW placeholder="**** **** **** ****" />
                        <div className="row d-flex mt-5">
                            <div className="col-6">
                                <InputBW placeholder="MM/YY" />
                            </div>
                            <div className="col-6">
                                <InputBW placeholder="CVV" />
                            </div>
                        </div>
                        <span className="headline-s fw-700">Име на сопственик*</span>
                        <div className="col mb-3"></div>
                        <InputBW placeholder="Example Namington" />
                        <div className="col mt-5">
                            <OrneButton value="Донирај" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}