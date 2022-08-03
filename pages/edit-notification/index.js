//! Required
import { useState } from "react";
import { UserCardIcon } from "../../Components/UI/ProviderProfileIcons";
import Switch from "antd/lib/switch";

//! Comps
import ProviderCard from "../../Components/ProviderCard/ProviderCard";

//! Comp
const EditNotification = () => {
    const [isActive, setIsActive] = useState(false);
    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <main className="h-full w-full">
            <div
                className="
                mx-auto mb-6 grid w-full max-w-6xl items-start gap-x-10 justify-self-center
                px-4 py-10 lg:mb-0 lg:grid-cols-[300px_1fr]"
            >
                <ProviderCard setIsActive={setIsActive} isActive={isActive} />
                <div className="h-full w-full">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="font-sans text-xl font-bold text-gray-900">Change password</h1>
                        <button onClick={() => setIsActive((prev) => !prev)} className="lg:hidden">
                            <UserCardIcon />
                        </button>
                    </div>
                    <article className="flex w-full select-none items-center justify-between gap-x-10 border-b border-gray-200 py-6 text-base font-medium text-gray-900">
                        <label htmlFor="1" className="cursor-pointer">
                            Receive relevant updates from the moverii team :
                        </label>
                        <Switch defaultChecked onChange={onChange} id="1" />
                    </article>
                    <article className="flex w-full select-none items-center justify-between gap-x-10 border-b border-gray-200 py-6 text-base font-medium text-gray-900">
                        <label htmlFor="2" className="cursor-pointer">
                            Receive relevant statistics from your moverii account :
                        </label>
                        <Switch defaultChecked onChange={onChange} id="2" />
                    </article>
                    <article className="flex w-full select-none items-center justify-between gap-x-10 border-b border-gray-200 py-6 text-base font-medium text-gray-900">
                        <label htmlFor="3" className="cursor-pointer">
                            Receive email notifications for new ratings :
                        </label>
                        <Switch defaultChecked onChange={onChange} id="3" />
                    </article>
                    <article className="flex w-full select-none items-center justify-between gap-x-10 border-b border-gray-200 py-6 text-base font-medium text-gray-900">
                        <label htmlFor="4" className="cursor-pointer">
                            Receive email notifications to keep your offers up to date :
                        </label>
                        <Switch defaultChecked onChange={onChange} id="4" />
                    </article>
                </div>
            </div>
        </main>
    );
};

export default EditNotification;
