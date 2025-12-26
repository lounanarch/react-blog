

import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined, 
        height: undefined
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        handleResize(); // Initialize size on mount

        window.addEventListener("resize", handleResize);   

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty dependency array means this effect runs once on mount

    return windowSize; // Return the window size object
}

export default useWindowSize;
