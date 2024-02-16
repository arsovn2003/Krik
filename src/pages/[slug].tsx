import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Component1 from './services/Component1';
import Component2 from './services/Component2';
import Component3 from './services/Component3';
import { ServicesGalleryProps, ServicesProps } from '@/type';
import { GetStaticProps, GetStaticPaths } from 'next';

interface Props {
    data: ServicesProps;
    gallery: ServicesGalleryProps;
}

const DynamicPage = ({ data, gallery }: Props) => {
    const router = useRouter();
    const { slug } = router.query;

    const [activeComponent, setActiveComponent] = useState<string | null>(
        slug === 'Component1' || slug === 'Component2' || slug === 'Component3' ? (slug as string) : 'Component1'
    );

    const handleLinkClick = (component: string) => {
        setActiveComponent(component === activeComponent ? null : component);
        router.push(`/[${encodeURIComponent('slug')}]`, `/${encodeURIComponent(component)}`);
    };

    const { asPath } = useRouter();

    return (
        <div className='my-5 py-5'>
            <div className="container">
                <nav>
                    <ul className="services-menu d-flex justify-content-evenly p-0">
                        <div className="index__div w-40 text-center">
                            <li onClick={() => handleLinkClick('Component1')} className={`fw-700 headline-s ${activeComponent === 'Component1' ? 'active' : ''}`}>
                                <a>Центар Крикни</a>
                            </li>
                        </div>
                        <div className="index__div w-40 text-center">
                            <li onClick={() => handleLinkClick('Component2')} className={`fw-700 headline-s ${activeComponent === 'Component2' ? 'active' : ''}`}>
                                <a>Независни станбени единици</a>
                            </li>
                        </div>
                        <div className="index__div w-40 text-center">
                            <li onClick={() => handleLinkClick('Component3')} className={`fw-700 headline-s ${activeComponent === 'Component3' ? 'active' : ''}`}>
                                <a>Советувалиште</a>
                            </li>
                        </div>
                    </ul>
                    <div className="menu-line"></div>
                </nav>
            </div>

            <div>
                {activeComponent === 'Component1' && <Component1 data={data} gallery={gallery} />}
                {activeComponent === 'Component2' && <Component2 data={data} gallery={gallery} />}
                {activeComponent === 'Component3' && <Component3 data={data} gallery={gallery} />}
            </div>
        </div>
    );
};

export default DynamicPage;
export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const res = await fetch("https://json-server-for-krik.onrender.com/services");
        const servicesData: ServicesProps[] = await res.json();

        if (!Array.isArray(servicesData)) {
            throw new Error("Invalid data format received from the API");
        }

        const paths = servicesData.map((service) => {
            if (!service.slug || typeof service.slug !== "string") {
                throw new Error("Invalid slug format for a service");
            }

            return {
                params: { slug: service.slug },
            };
        });

        return {
            paths,
            fallback: false,
            servicesData: servicesData,
        };
    } catch (error) {
        console.error("Error fetching or processing data:", error);
        return {
            paths: [],
            fallback: false,
        };
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params || !params.slug) {
        return {
            notFound: true,
        };
    }

    const res = await fetch(`https://json-server-for-krik.onrender.com/services/${params.slug}`);
    const serviceData: ServicesProps = await res.json();

    const resGallery = await fetch(`https://json-server-for-krik.onrender.com/services_gallery`);
    const serviceGalleryData: ServicesGalleryProps = await resGallery.json();

    return {
        props: {
            data: serviceData,
            gallery: serviceGalleryData,
        },
    };
};


