import { ServicesGalleryProps, ServicesProps } from "@/type"

interface Props {
    data: ServicesProps;
    gallery: ServicesGalleryProps;
}

const Component1: React.FC<Props> = ({ data, gallery }) => {
    return (
        <>
            <div className="container my-5 py-5">
                <div className="heading">
                    <h1 className="headline-l fw-800 mb-5">Центар Крикни</h1>
                </div>
                <div className="content">
                    <p className="lh-40 fw-400 body-l">
                        Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. Aliquam est integer libero morbi congue est porttitor. Vitae tellus lorem arcu tortor sem tellus hendrerit nibh. Mattis volutpat nunc parturient dignissim. Tincidunt mauris velit congue rhoncus ut eget malesuada purus. Ut commodo tempus sed consectetur sem etiam. Vel enim aliquam urna orci tempus mauris vitae tincidunt habitant.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Component1;