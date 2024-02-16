import { AboutusProps } from "@/type"
import { Collapsible } from "./Collapsible";

interface AboutBlockProps {
    props: AboutusProps;
}

export const AboutBlock = ({ props }: AboutBlockProps) => {
    return (
        <>
            <div className="About container-fluid my-5">
                <div className="d-flex justify-content-center">
                    <div className="col-5">
                        <img src={props.body.about_content.img} className="img-fluid black-white" />
                    </div>
                    <div className="col-5">
                        <p className="headline-m fw-700 lh-48">{props.body.about_content.content1}</p>
                        <p className="body-l lh-40">{props.body.about_content.content2}</p>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="title py-5">
                        <h2 className="headline-l fw-800">{props.body.about_content.heading1}</h2>
                    </div>

                </div>
                <div className="hr-line"></div>
                <div className="container d-flex py-4">
                    <div className="first-container d-flex align-items-center">
                        <div className="col-3">
                            <p className="me-5 headline-m orange fw-700">{props.body.about_content.subheading1}</p>
                        </div>
                        <div className="col-9">
                            <p className="ms-5 px-5 body-l">{props.body.about_content.content3}</p>
                        </div>
                    </div>
                </div>
                <div className="hr-line"></div>
                <div className="container py-4">
                    <div className="second-container d-flex align-items-center">
                        <div className="col-3">
                            <p className="me-5 headline-m orange fw-700">{props.body.about_content.subheading2}</p>
                        </div>
                        <div className="col-9">
                            <p className="ms-5 px-5 body-l">{props.body.about_content.content4}</p>
                        </div>
                    </div>
                </div>
                <div className="hr-line"></div>
                <div className="container py-4">
                    <div className="third-container d-flex align-items-center">
                        <div className="col-4">
                            <p className="me-4 headline-m orange fw-700">{props.body.about_content.subheading3}</p>
                        </div>
                        <div className="col-9 edited">
                            <p className="ms-5 body-l">{props.body.about_content.content5}</p>
                        </div>
                    </div>
                </div>
                <div className="hr-line"></div>
                <div className="container mt-10">
                    <div className="title w-100">
                        <h2 className="fw-800 headline-l">{props.body.about_content.heading2}</h2>
                    </div>
                    <Collapsible title="01 Lorem Ipsum" content="Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. " />
                    <Collapsible title="02 Lorem Ipsum" content="Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. " />
                    <Collapsible title="03 Lorem Ipsum" content="Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. " />
                    <Collapsible title="04 Lorem Ipsum" content="Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. " />
                    <Collapsible title="05 Lorem Ipsum" content="Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. " />
                </div>
            </div>
        </>
    )
}