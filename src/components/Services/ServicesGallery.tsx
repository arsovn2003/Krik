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
                            <img src={gallery.body.imgOne} className="img-fluid" />
                        </div>
                        <div className="col-8">
                            <img src={gallery.body.imgTwo} className="img-fluid" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-4">
                            <img src={gallery.body.imgThree} className="img-fluid" />
                        </div>
                        <div className="col-4">
                            <img src={gallery.body.imgFour} className="img-fluid" />
                        </div>
                        <div className="col-4">
                            <img src={gallery.body.imgFive} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesGallery;