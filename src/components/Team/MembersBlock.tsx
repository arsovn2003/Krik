import { OurTeamProps } from "@/type";

export interface MembersItem {
    id: string;
    img: string;
    heading: string;
    subheading: string;
    text: string;
}

interface Props {
    membersItem: MembersItem[];
    membersBlockData: OurTeamProps;
}

const MembersBlock: React.FC<Props> = ({
    membersItem,
    membersBlockData
}) => {

    return (
        <div className="container-flud px-0">
            <div className="pt-5 pb-3">
                <div className="container-fluid px-0">
                    <div className="title text-center m-auto w-100 py-5">
                        <h2 className="headline-xl fw-800 pb-5">{membersBlockData.heading2}</h2>
                    </div>
                    <div className="container-fluid member-cards pb-5 px-0">
                        <div className="hr-line"></div>
                        {membersItem.map(item => (
                            <div key={item.id} className="member-card" >
                                <div className="member-item-row row my-5">
                                    <div className="col-6 d-flex justify-content-end pe-5">
                                        <img src={item.img} className="img-fluid" />
                                    </div>
                                    <div className="col-lg-6 col-3 pe-300">
                                        <h4 className="headline-m fw-700">{item.heading}</h4>
                                        <h5 className="mb-5 headline-s fw-700">{item.subheading}</h5>
                                        <p className="lh-40 body-l fw-400 text-justify">{item.text}</p>
                                    </div>
                                </div>
                                <div className="hr-line mb-5"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembersBlock;