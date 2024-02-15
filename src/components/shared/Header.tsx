import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/img/krik-logo.png'
import { useState } from 'react';
import { useRouter } from 'next/router';

export const Header = () => {

    const router = useRouter();
    const { slug } = router.query;

    const [activeComponent, setActiveComponent] = useState<string | null>(
        (slug as string) || 'Component1'
    );

    const handleLinkClick = (component: string) => {
        setActiveComponent(component === activeComponent ? null : component);
        router.push(`/[${encodeURIComponent('slug')}]`, `/${encodeURIComponent(component)}`);
    };

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavToggle = () => {
        setIsNavCollapsed(!isNavCollapsed);
    };

    return (
        <div className="container-fluid p-0">
            <div className="container-fluid bg-custom-black text-white">
                <div className="container py-2 d-flex justify-content-between py-lg-2 py-4">
                    <div className="left-side d-none d-lg-flex align-items-center justify-content-between w-45">
                        <Link href={"/newsletter"} className='text-decoration-none text-white'>
                            <h3 className="text-uppercase m-0 headline-s fw-700">Newsletter</h3>
                        </Link>
                        <input className="search w-50" placeholder="SEARCH"></input>
                    </div>
                    <div className="right-side d-none d-lg-flex justify-content-between w-15 align-items-center">
                        <span>En/Mkd</span>
                        <span>E-Shop</span>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg  bg-orange">
                <div className="container d-flex flex-lg-row flex-row-reverse">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded={!isNavCollapsed}
                        aria-label="Toggle navigation"
                        onClick={handleNavToggle} // Call handleNavToggle on button click
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link href="/">
                        <Image src={Logo} alt="krik-logo" />
                    </Link>
                    <div className={`collapse navbar-collapse mb-2 ${isNavCollapsed ? '' : 'show'}`} id="navbarTogglerDemo03">
                        <ul className="navbar-nav ms-auto mt-2 mt-lg-0 d-flex align-items-center">
                            <li className='me-5 hover'>
                                <Link href="/about" className='nav-item text-decoration-none text-black fw-700 headline-s'>
                                    За нас <i className="arrow-down down"></i>
                                </Link>
                                <div className="dropdown-menu text-center">
                                    <ul>
                                        <li className='headline-s fw-700 mb-3'>
                                            <Link href="/about" className='nav-item text-decoration-none text-white fw-700 headline-s'>
                                                За Нас <i className="arrow-down-white down"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/about"} className='text-decoration-none text-white'>
                                                За Крик
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/team"} className='text-decoration-none text-white'>
                                                Тимот на Крик
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/volunteers"} className='text-decoration-none text-white'>
                                                Волонтери
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={"/documents"} className='text-decoration-none text-white'>
                                                Архива
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='me-5 hover'>
                                <Link href="/services" className='nav-item text-decoration-none text-black fw-700 headline-s'>
                                    Услуги
                                </Link>
                            </li>
                            <li className='me-5 hover'>
                                <Link href="/projects" className='nav-item text-decoration-none text-black fw-700 headline-s'>
                                    Проекти
                                </Link>
                            </li>
                            <li className='me-5'>
                                <Link href="#contact" className='nav-item text-decoration-none text-black fw-700 headline-s'>
                                    Контакт
                                </Link>
                            </li>
                            <li className='me-5'>
                                <Link href="/donation">
                                    <button className='btn-donate fw-700 border-0 body-s'>Донирај</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Header;