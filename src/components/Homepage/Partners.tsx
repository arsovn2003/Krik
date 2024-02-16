import { HomepageProps } from "@/type"

export interface PartnersProps {
    partners: HomepageProps;
}

export const Partners = ({ partners }: PartnersProps) => {
    return (
        <div className="container-fluid m-0 px-0 mt-5">
            <div className="container">
                <h2 className="headline-xl fw-bold mb-5">{partners.body.partners_block.heading}</h2>
            </div>
            <div className="section-6 container-fluid py-5">

                <div className="row">
                    <div className="col-12 d-flex justify-content-evenly">
                        <img src={partners.body.partners_block.partner1} className="img-fluid" />
                        <img src={partners.body.partners_block.partner4} className="img-fluid" />
                        <img src={partners.body.partners_block.partner2} className="img-fluid" />
                        <img src={partners.body.partners_block.partner3} className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}