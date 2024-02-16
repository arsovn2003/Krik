import { HomepageProps } from "@/type";
import { OutlineButton } from "../Buttons/OutlineButton"
import { ButtonBW } from "../Buttons/ButtonBW";
import Link from "next/link";

export interface TutorialProps {
    tutorial: HomepageProps;
}

export const VideoBlock = ({ tutorial }: TutorialProps) => {
    return (
        <>
            <div className="container my-8">
                <div className="d-lg-flex d-block">
                    <div className="col-lg-8 col-12">
                        <img src={tutorial.body.tutorial_block.video} className="tutorial_div img-fluid top-right top-left bottom-right bottom-left" />
                    </div>
                    <div className="col-lg-4 col-12 mt-lg-0 mt-3 text-lg-start text-center bg-custom-black text-white top-right top-left bottom-left bottom-right px-5 py-5 d-flex flex-column justify-content-center ms-3">
                        <h3 className="fw-700 headline-m">{tutorial.body.tutorial_block.headline}</h3>
                        <p className="mt-5 fw-400 body-s">{tutorial.body.tutorial_block.text}</p>
                        <div className="col-12 mt-5">
                            <Link href={"/application"}>
                                <ButtonBW value="Придружи Ни Се" />
                            </Link>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}