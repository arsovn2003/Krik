import { AboutusProps } from '@/type';
import React, { useState } from 'react';
import Image from 'next/image'
import vector_plus from '../../../public/img/vector-plus.png'
import vector_minus from '../../../public/img/vector-minus.png'

export interface Props {
    title: string;
    content: string;
}

export const Collapsible = ({ title, content }: Props) => {
    const [isCollapsed, setCollapsed] = useState(true);
    const [isHovered, setHovered] = useState(false);

    return (
        <div>
            <div
                className="collapsible"
                onClick={() => setCollapsed(!isCollapsed)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    marginTop: '50px',
                    cursor: 'pointer',
                    padding: '40px 50px 40px 50px',
                    marginBottom: '4px',
                    borderRadius: '30px',
                    backgroundColor: isHovered ? '#B8AFDA' : "#f0f0f0" && isCollapsed ? '#f0f0f0' : '#B8AFDA',
                    flexDirection: 'column'
                }}
            >
                <div className='d-flex justify-content-between'>
                    <p className='fw-700 headline-m'>{title}</p>
                    <Image src={isCollapsed ? vector_plus : vector_minus} alt='' />
                </div>

                <div>{!isCollapsed && (
                    <p className='body-l'>{content}</p>
                )}</div>
            </div>

        </div>
    );
};

