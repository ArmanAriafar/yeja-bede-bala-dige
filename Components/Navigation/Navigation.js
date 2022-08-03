//? Required
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

//? Comps
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

//!Comp
const Navigation = () => {
    //! Responsive
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        Cookies.set(
            "token",
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiYjJjYjZkZGUxNmJhYmNkODBhZDhiM2I3ZTZkYTEzY2M5YWE3ZjhhMTcxNzk5ZmYyZmUyMTU1MTk4MzBhNDVjNzI0Mzk2MzkzNWUzMjEzMzkiLCJpYXQiOjE2NTg5MTkxNzcuMDE3MDY5LCJuYmYiOjE2NTg5MTkxNzcuMDE3MDczLCJleHAiOjE2OTA0NTUxNzYuOTc0MTQ0LCJzdWIiOiIxNCIsInNjb3BlcyI6W119.KOmOFltGPE6FyWhQkNiJHcHmXgkD_IHdRo7-T7V-IMv7gN9IQtcnbyqNlUqFwuuLa4x2JNyL1rujqh50YaUDWRRceE-wVo8HzJCvyEODLGBDj6mmk6GILFqSyhFSB53XI_GmTtQ4DcNbgY1wfP0odonpcrF6M7IXX9yry_rZyq1RaYYYpMODQEAyaSHNoa-f5FlyfiEhqgQSwULFze6m-vbcikZHBQ7DKk_EPtMsUYpc6S3Sv7OuWI5w7BaZjP-lXfCPOkt2z2N-_jBnY0EtdRJbqqg4kZrHIocamHOwT3mneBK9URpRTxYd-AyQ7sG9jTeyKlAxglum521YIt3t18-y_corktkvHVjZCBRfkocJybfsSUuVIfNbooOOs08FaQXM0ByW9TqdWsCTn5ldhVZjiQ68J1baxAT19bAJ-HVO_noK44gdHfqmnORXPi87fRgbO4_qGJ_4C9qzL4a-JkfGLacUCIkx-pReTSnfXro3IdoxRaUTN-4a53-juV2oCam6ZJ8ZagO99vSLKX8DRxtqg-tbijUQp2cdDwevkSGCg5kFabeOspGuq8jcQnGQt_AXe_xp1XD_SIDtF2hdcFl-rmsWH_dP-ye6sCqPAhaYdAnnqasWGTjxMp6AulG3BnYyIwqaD-RJE9dwEAdIg3yOPVX5-LNzBaw_VsucKQs"
        );
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
    }, []);

    //! Return
    if (screenWidth >= 1024) return <DesktopNav />;
    if (screenWidth <= 1023) return <MobileNav />;
};

export default Navigation;
