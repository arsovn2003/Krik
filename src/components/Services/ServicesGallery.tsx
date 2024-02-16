import { ServicesGalleryProps } from "@/type"

interface Props {
    gallery: ServicesGalleryProps;
}

const ServicesGallery = ({ gallery }: Props) => {
    return (
        <>
            <div className="container mt-10">
                <div className="heading mb-4">
                    <h1>Галерија Со Активности</h1>
                </div>
                <div className="inner__div">
                    <div className="row">
                        <div className="col-4">
                            {/* <img src={gallery.imgOne} className="img-fluid" /> */}
                        </div>
                        <div className="col-8">
                            <img src={gallery.imgTwo} className="img-fluid" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-4">
                            <img src={gallery.imgThree} className="img-fluid" />
                        </div>
                        <div className="col-4">
                            <img src={gallery.imgFour} className="img-fluid" />
                        </div>
                        <div className="col-4">
                            <img src={gallery.imgFive} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesGallery;