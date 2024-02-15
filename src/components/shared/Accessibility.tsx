import React, { useState } from "react";
import { AccessibilityModal } from "./AccessibilityModal";

export const Accessibility = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <button
                className="access-btn"
                onClick={() => setIsHovered(true)}
            >
                Пристапност
            </button>
            {isHovered && <AccessibilityModal />}
        </>
    );
};


