import { AboutusProps, VolunteersItem, VolunteersProps } from "@/type"
import { Collapsible } from "../About/Collapsible";
import Link from "next/link";

interface VolunteersBlockProps {
    volunteersItem: VolunteersItem[];
}

export const VolunteersBlock = ({ volunteersItem }: VolunteersBlockProps) => {
    return (
        <>
            <div className="volunteers_container row px-lg-5 px-0 justify-content-center">
                {volunteersItem.map(item => (
                    <Link key={item.body.id} href={`/volunteers/${item.body.id}`} className="volunteer-card col-lg-3 col-4 mt-5 text-decoration-none">
                        <div className="card-image">
                            <img src={item.body.img} className="img-fluid rounded-top-5" />
                        </div>
                        <div className="card-body">
                            <h4 className="headline-s fw-700 text-black">{item.body.firstName}  {item.body.middleName} {item.body.lastName}</h4>
                            <p className="body-s fw-400 text-black">{item.body.years} Години, {item.body.country}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}