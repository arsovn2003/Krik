import { useEffect, useState } from "react";
import { Saturation } from '@/hooks/saturation';
import { Accessibility } from "./Accessibility";

export const AccessibilityModal = () => {
    const [isHovered, setIsHovered] = useState(false);

    const [saturation, adjustSaturation] = Saturation();
    const [isActiveScreenReader, setIsActiveScreenReader] = useState(false);
    const [isActiveContrast, setIsActiveContrast] = useState(false);
    const [isActiveSaturation, setIsActiveSaturation] = useState(false);
    const [isDyslexiaMode, setIsDyslexiaMode] = useState(false);

    const changeSaturation = () => {
        adjustSaturation(saturation >= 2 ? 1 : saturation + 1);
        setIsActiveSaturation(!isActiveSaturation);
    };

    const changeContrast = () => {
        document.body.classList.toggle('contrast');
        setIsActiveContrast(!isActiveContrast);
    };

    const changeDyslexia = () => {
        setIsDyslexiaMode(!isDyslexiaMode);
        setIsActiveScreenReader(!isActiveScreenReader);
    };

    useEffect(() => {
        document.body.classList.toggle('dyslexia-mode', isDyslexiaMode);

        return () => {
            document.body.classList.remove('dyslexia-mode');
        };
    }, [isDyslexiaMode]);

    return (
        <>
            <button
                className="access-btn"
                onClick={() => setIsHovered(true)}
            >
                Пристапност
            </button>
            {isHovered &&
                <div className="access-modal">
                    <div className="access-modal-header text-white fw-700 headline-s d-flex align-items-center justify-content-center" onClick={() => setIsHovered(false)}>Пристапност</div>
                    <div className="access-modal-body px-3">
                        <div className="row text-center mb-5 mt-5">
                            <div className="col-6 pt-20 hovered-div" style={{ cursor: "pointer" }}>
                                <img src="/img/CursorSize.png" alt="Cursor Size" />
                                <p className="fw-600 headline-s">Cursor Size</p>
                            </div>
                            <div className={`col-6 pt-20 ${isActiveScreenReader ? 'active__mode' : ''} hovered-div`}
                                onClick={changeDyslexia} style={{ cursor: "pointer" }}
                            >
                                <img src="/img/ScreenReader.png" alt="Screen Reader" />
                                <p className="fw-600 headline-s">Screen Reader</p>
                            </div>
                        </div>
                        <div className="row text-center mb-5">
                            <div className={`col-6 pt-20 ${isActiveContrast ? 'active__mode' : ''} hovered-div`}
                                onClick={changeContrast} style={{ cursor: "pointer" }}>
                                <img src="/img/Contrast.png" alt="Contrast" />
                                <p className="fw-600 headline-s">Contrast</p>
                            </div>
                            <div className="col-6 pt-20 hovered-div" style={{ cursor: "pointer" }}>
                                <img src="/img/ReadingMask.png" alt="Reading Mask" />
                                <p className="fw-600 headline-s">Reading Mask</p>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-6 pt-20 hovered-div" style={{ cursor: "pointer" }} >
                                <img src="/img/PauseAnimation.png" alt="Pause Animation" />
                                <p className="fw-600 headline-s">Pause Animation</p>
                            </div>
                            <div className={`col-6 pt-20 ${isActiveSaturation ? 'active__mode' : ''} hovered-div`}
                                onClick={changeSaturation} style={{ cursor: "pointer" }} >
                                <img src="/img/Saturation.png" alt="Saturation" />
                                <p className="fw-600 headline-s">Saturation</p>
                            </div>
                        </div>
                    </div>
                </div >
            }
        </>
    );
};