import { MainButton } from "../Buttons/MainButton"
import { Input } from "../Inputs/Input"
import Image from 'next/image'
import Facebook from '../../../public/img/facebook-icon.png'
import Instagram from '../../../public/img/instagram-icon.png'
import Linkedin from '../../../public/img/linkedin-icon.png'
import Twitter from '../../../public/img/twitter-icon.png'
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="container-fluid bg-custom-black text-white py-5 rounded-top-5" id="contact">
            <div className="container flex-column">
                <div className="top-container d-lg-flex d-block justify-content-around px-lg-5 px-0">
                    <div className="col-2 mb-lg-0 mb-4">
                        <h2>Месечен <br></br>билтен</h2>
                    </div>
                    <div className="col-lg-3 col-12 px-lg-5 px-0 mb-lg-0 mb-4">
                        <p className="lh-40">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus animi dolore quos aliquid error!
                        </p>
                    </div>
                    <div className="col-lg-4 col-12">
                        <Input placeholder="Вашата Емаил Адреса" />
                        <MainButton value="CTA" />
                    </div>
                </div>
                <div className="line"></div>
                <div className="bottom-container d-lg-flex d-block justify-content-around px-lg-5 px-0">
                    <div className="col-lg-4 col-12">
                        <div className="heading">
                            <h3 className="mb-4">Контактирај Не!</h3>
                        </div>
                        <Input placeholder="Вашето Име" />
                        <Input placeholder="Вашата Емаил Адреса" />
                        <MainButton value="CTA" />
                    </div>
                    <div className="col-lg-3 col-12 mt-lg-0 mt-5">
                        <div className="heading">
                            <h3 className="mb-5">Приклучи Се</h3>
                        </div>
                        <div className="text">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum eaque explicabo dolores ad veritatis libero fugiat, commodi in illum iure dignissimos atque facere nobis incidunt, qui distinctio quis? Nemo, blanditiis!
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 mt-lg-0 mt-5">
                        <div className="heading">
                            <h3 className="mb-4">За Крик</h3>
                        </div>
                        <div className="text">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae perferendis velit nihil sint cum quia, quidem illum nemo. Eum, magnam.
                            </p>
                        </div>
                        <div className="social-icons d-flex justify-content-center">
                            <Image src={Linkedin} alt="linkedin" className="me-3" />
                            <Image src={Facebook} alt="facebook" className="me-3" />
                            <Image src={Instagram} alt="instagram" className="me-3" />
                            <Image src={Twitter} alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}