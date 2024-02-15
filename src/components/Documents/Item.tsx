import imagePath from '../../../public/img/documents_arrow.png';

const Item = () => {
    return (
        <div className="col-2 documents__card mx-3">
            <div className="inner">
                <p className="fw-700 headline-s">Lorem ipsum dolor sit amet</p>
                <div className="black__div justify-content-center align-items-center d-flex">
                    <img src={imagePath.src} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Item;
