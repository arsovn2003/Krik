import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { VolunteersBlock } from "@/components/Volunteers/VolunteersBlock";
import { AboutusProps, VolunteersItem, VolunteersProps } from "@/type";
import { GetStaticProps } from "next";

interface Props {
    dataVolunteers: VolunteersProps;
    volunteersItem: VolunteersItem[];
}

const About = ({
    dataVolunteers,
    volunteersItem
}: Props) => {

    return (
        <>
            <div className="Volunteers container-fluid my-lg-8 my-4">
                <div className="container">
                    <div className="title m-auto text-center">
                        <h1 className="headline-xl fw-800">{dataVolunteers.first_section.heading}</h1>
                    </div>
                    <nav className="mt-lg-5 mt-0">
                        <ul className="services-menu d-flex justify-content-evenly p-0">
                            <div className="index__div w-40 text-center">
                                <li className="fw-700 headline-s active">
                                    <a>Долг Рок</a>
                                </li>
                            </div>
                            <div className="index__div w-40 text-center">
                                <li className="fw-700 headline-s">
                                    <a>Краток Рок</a>
                                </li>
                            </div>
                        </ul>
                        <div className="menu-line"></div>
                    </nav>
                </div>
                <div className="col-12"></div>
                <div className="container-fluid p-0 mt-lg-7 mt-0 mb-5">
                    <VolunteersBlock volunteersItem={volunteersItem} />
                </div>
            </div>
        </>
    );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
    const VolunteersBlockRes = await fetch("https://json-server-for-krik.onrender.com/volunteers")
    const VolunteersData: AboutusProps = await VolunteersBlockRes.json()

    const volunteersRes = await fetch("https://json-server-for-krik.onrender.com/volunteers_cards")
    const volunteersData: VolunteersItem = await volunteersRes.json()

    return {
        props: {
            dataVolunteers: VolunteersData,
            volunteersItem: volunteersData,
        }
    }
}