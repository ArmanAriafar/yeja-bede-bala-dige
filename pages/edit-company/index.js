//! Comps
import ProviderCard from "../../Components/ProviderCard/ProviderCard";

//! Comp
const EditCompany = () => {
    return (
        <main className="h-full w-full">
            <div
                className="
                mx-auto mb-6 grid w-full max-w-6xl items-start gap-x-10
                justify-self-center py-10 lg:mb-0 lg:grid-cols-[300px_1fr]"
            >
                <ProviderCard />
                <div className="h-full w-full"></div>
            </div>
        </main>
    );
};

export default EditCompany;
