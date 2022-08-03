import "../styles/globals.css";
import "../styles/Fonts.css";
import "antd/dist/antd.css";
import { useState, useEffect } from "react";

//? Comp
import Navigation from "../Components/Navigation/Navigation";

const MyApp = ({ Component, pageProps }) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);
    if (!loaded) {
        return null;
    } else {
        return (
            <>
                <Navigation />
                <Component {...pageProps} />
            </>
        );
    }
};

export default MyApp;
