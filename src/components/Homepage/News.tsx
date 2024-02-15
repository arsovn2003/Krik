import { HomepageProps } from "@/type"

export interface NewsProps {
    newsData: HomepageProps
}

export const News = ({ newsData }: NewsProps) => {
    return (
        <div className="container px-5">
            <div className="row px-5">
                {/* <div className="title headline-xl fw-bold">{newsData.news.title}</div> */}
            </div>
        </div>
    )
}