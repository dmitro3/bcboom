import { useEffect, useState } from "react";

export const useScreenResolution = () => {
    const [isMobile, setIsMobile] = useState(false);
    //   const [islarge, setIsLarge] = useState(false);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    const setResolution = (screenWidth) => {
        setIsMobile(Boolean(screenWidth <= 768));
    };

    useEffect(() => {
        setResolution(getWindowSize().innerWidth);
        function handleWindowResize() {
            setResolution(getWindowSize().innerWidth);
        }
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { isMobile };
};
