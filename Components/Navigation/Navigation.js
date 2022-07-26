//? Required
import { useState, useEffect } from "react";

//? Comps
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

//!Comp
const Navigation = () => {
    //! Responsive
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
    }, []);

    //! Return
    if (screenWidth >= 1024) return <DesktopNav />;
    if (screenWidth <= 1023) return <MobileNav />;
};

export default Navigation;
