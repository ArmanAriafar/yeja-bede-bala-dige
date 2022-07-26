import "../styles/globals.css";
import "antd/dist/antd.css";

//? Comp
import Navigation from "../Components/Navigation/Navigation";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Navigation />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
