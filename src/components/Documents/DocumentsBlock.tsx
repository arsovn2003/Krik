import { DocumentsProps } from "@/type";
import Item from "./Item";
import { SconButton } from "../Buttons/SconButton";

interface Props {
    data: DocumentsProps;
}

const DocumentsBlock = ({ data }: Props) => {
    return (
        <>
            <div className="container-fluid my-8">
                <div className="container">
                    <nav>
                        <ul className="services-menu d-flex justify-content-evenly p-0">
                            <div className="index__div w-40 text-center">
                                <li className="fw-700 headline-s">
                                    <a>Годишни Извештаи</a>
                                </li>
                            </div>
                            <div className="index__div w-40 text-center">
                                <li className="fw-700 headline-s active">
                                    <a>Финансиски Извештаи</a>
                                </li>
                            </div>
                            <div className="index__div w-40 text-center">
                                <li className="fw-700 headline-s">
                                    <a>Политички Документи</a>
                                </li>
                            </div>
                        </ul>
                        <div className="menu-line"></div>
                    </nav>
                </div>
            </div>
            <div className="container-fluid my-8">
                <div className="cards__container mb-150">
                    <div className="title">
                        <h1 className="headline-l fw-800 mb-5">{data.body.first_section.year} година</h1>
                    </div>
                    <div className="body d-flex">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                    <div className="col-3 w-30 mt-5 me-7 flex-end">
                        <SconButton value="Види ги сите" />
                    </div>
                </div>
                <div className="cards__container mb-150">
                    <div className="title">
                        <h1 className="headline-l fw-800 mb-5">{data.body.second_section.year} година</h1>
                    </div>
                    <div className="body d-flex">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                    <div className="col-3 w-30 mt-5 me-7 flex-end">
                        <SconButton value="Види ги сите" />
                    </div>
                </div>
                <div className="cards__container mb-150">
                    <div className="title">
                        <h1 className="headline-l fw-800 mb-5">{data.body.third_section.year} година</h1>
                    </div>
                    <div className="body d-flex">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                    <div className="col-3 w-30 mt-5 me-7 flex-end">
                        <SconButton value="Види ги сите" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DocumentsBlock;