import { useEffect, useState } from "react";

export const useScreenResolution = () => {
    const [isMobile, setIsMobile] = useState(false);
<<<<<<< HEAD
=======
    const [width, setWidth] = useState(window.innerWidth);
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
    //   const [islarge, setIsLarge] = useState(false);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    const setResolution = (screenWidth) => {
<<<<<<< HEAD
=======
        setWidth(screenWidth);
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
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

<<<<<<< HEAD
    return { isMobile };
=======
    return { isMobile, width };
>>>>>>> fe9182f2430f295fe8fb98e20603b4e90c1d31aa
};
