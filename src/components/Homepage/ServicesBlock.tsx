import { HomepageProps } from "@/type"
import React, { useState } from 'react';
import { useRouter } from 'next/router';

export interface ServicesBlockData {
    servicesBlockData: HomepageProps;
}

export const ServicesBlock = ({ servicesBlockData }: ServicesBlockData) => {

    // const router = useRouter();
    // const { slug } = router.query;

    // const [activeComponent, setActiveComponent] = useState<string | null>(
    //     (slug as string) || 'Component1'
    // );

    // const handleLinkClick = (component: string) => {
    //     setActiveComponent(component === activeComponent ? null : component);
    //     router.push(`/[${encodeURIComponent('slug')}]`, `/${encodeURIComponent(component)}`);
    // };

    return (
        <div className="container py-5">
            <div className="row py-5">
                <div className="title mb-4">
                    <h2 className="fw-800 headline-xl">{servicesBlockData.services_block.heading}</h2>
                </div>
                <div className="col-12 d-lg-flex d-block align-items-center">
                    <div className="col-lg-5 col-12 me-4">
                        <img src={servicesBlockData.services_block.img} className="img-fluid black-white" />
                    </div>
                    <div className="col-lg-7 col-12 mt-lg-0 mt-4">
                        <div className="service-1">
                            <div className="d-flex justify-content-between">
                                <h2 className="headline-m">{servicesBlockData.services_block.subtitle1}</h2>
                                <img src={servicesBlockData.services_block.arrow_img} className="rounded-circle img-fluid bg-black p-3 arrow" />
                            </div>
                            <p className="body-l">{servicesBlockData.services_block.service1}</p>
                        </div>
                        <div className="hr-line"></div>
                        <div className="service-2">
                            <div className="d-flex justify-content-between mt-3">
                                <h2 className="headline-m">{servicesBlockData.services_block.subtitle2}</h2>
                                <img src={servicesBlockData.services_block.arrow_img} className="rounded-circle img-fluid bg-custom-orange p-3 arrow" />
                            </div>
                            <p className="body-l">{servicesBlockData.services_block.service2}</p>
                        </div>
                        <div className="hr-line"></div>
                        <div className="service-3">
                            <div className="d-flex justify-content-between mt-3">
                                <h2 className="headline-m">{servicesBlockData.services_block.subtitle3}</h2>
                                <img src={servicesBlockData.services_block.arrow_img} className="rounded-circle img-fluid bg-custom-orange p-3 arrow" />
                            </div>
                            <p className="body-l">{servicesBlockData.services_block.service3}</p>
                        </div>
                        <div className="hr-line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}