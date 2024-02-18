import React, { useRef } from 'react';
import { TweenMax } from 'gsap';

const ButtonWithRotationAnimation = () => {
    const buttonRef = useRef(null);

    const handleHover = () => {
        // Rotate the button 180 degrees on hover
        TweenMax.to(buttonRef.current, 0.5, { rotation: 180 });
    };

    const handleMouseLeave = () => {
        // Rotate the button back to its original position when mouse leaves
        TweenMax.to(buttonRef.current, 0.5, { rotation: 0 });
    };

    return (
        <button
            ref={buttonRef}
            onMouseEnter={handleHover}
            onMouseLeave={handleMouseLeave}
            // Other button props...
        >
            Hover over me!
        </button>
    );
};

export default ButtonWithRotationAnimation;
