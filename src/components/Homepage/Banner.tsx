import { HomepageProps } from "@/type"
import { SconButton } from "../Buttons/SconButton"
import Link from "next/link"

export interface BannerData {
    bannerData: HomepageProps
}

export const Banner = ({ bannerData }: BannerData) => {
    return (
        <div className="Banner container-fluid p-0 m-0">
            <div className="container text-center px-lg-5 px-0 py-5">
                <div className="inner pt-5 flex-column">
                    <div className="title m-auto mb-5">
                        <h1 className="headline-xl fw-bold text-uppercase">{bannerData.banner_content.title}</h1>
                    </div>
                    <div className="sub-title mt-5">
                        <h3 className="headline-m pt-5">{bannerData.banner_content.subtitle}</h3>
                    </div>
                    <div className="text w-50 m-auto mt-3 px-lg-0 px-3">
                        <p className="body-l">{bannerData.banner_content.text}</p>
                    </div>
                    <div className="btn-div w-50 m-auto mt-5">
                        <Link href={"/about"}>
                            <SconButton value="Повеќе за нас" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}