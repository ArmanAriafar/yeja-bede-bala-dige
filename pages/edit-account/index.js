//! Required
import { useState } from "react";
import { Input, Button } from "antd";
import {
    LogoutIcon,
    DeleteAccountIcon,
    DeactiveAccountIcon,
    UserCardIcon,
} from "../../Components/UI/ProviderProfileIcons";

//! Comps
import ProviderCard from "../../Components/ProviderCard/ProviderCard";

//! Comp
const EditAccount = () => {
    return (
        <main className="h-full w-full">
            <div
                className="
                mx-auto mb-6 grid w-full max-w-6xl items-start gap-x-10
                justify-self-center py-10 lg:mb-0 lg:grid-cols-[300px_1fr]"
            >
                <ProviderCard />
                <div className="h-full w-full">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="font-sans text-xl font-bold text-gray-900">Change password</h1>
                        <button onClick={() => setIsActive((prev) => !prev)} className="lg:hidden">
                            <UserCardIcon />
                        </button>
                    </div>
                    <Passwords />
                    <div
                        className="
                            mt-14 grid w-full grid-cols-3 items-start justify-items-center gap-x-14 border-t border-gray-200 
                            pt-10 text-[0.938rem] font-medium lg:flex lg:grid-cols-none lg:items-center lg:justify-start"
                    >
                        <button className="flex flex-col items-center justify-center gap-x-[0.375rem] gap-y-2 leading-4 lg:flex lg:flex-row lg:items-center lg:justify-start">
                            <LogoutIcon />
                            <span>Logout</span>
                        </button>
                        <button className="flex flex-col items-center justify-center gap-x-[0.375rem] gap-y-2 leading-4 lg:flex lg:flex-row lg:items-center lg:justify-start">
                            <DeleteAccountIcon />
                            <span>Delete Account</span>
                        </button>
                        <button className="flex flex-col items-center justify-center gap-x-[0.375rem] gap-y-2 leading-4 lg:flex lg:flex-row lg:items-center lg:justify-start">
                            <DeactiveAccountIcon />
                            <span>Deactive Account</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default EditAccount;

//! Passwords
export const Passwords = () => {
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState({ pass: "", checkPass: "" });
    return (
        <>
            <div className="mt-6 flex w-full max-w-[25rem] flex-col items-center justify-center gap-y-6 ">
                <Input
                    type="password"
                    placeholder="Old Password"
                    className="rounded-[1.25rem] py-2 px-6 text-sm font-medium"
                    onChange={(e) => setOldPass(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="New Password"
                    className="rounded-[1.25rem] py-2 px-6 text-sm font-medium"
                    onChange={(e) => setNewPass({ ...newPass, pass: e.target.value })}
                />
                <Input
                    type="password"
                    placeholder="Re-enter New Password"
                    className="rounded-[1.25rem] py-2 px-6 text-sm font-medium"
                    onChange={(e) => setNewPass({ ...newPass, checkPass: e.target.value })}
                />
            </div>
            <Button
                type="primary"
                onClick={() => sendData()}
                className="btn-primary mx-auto mt-6 w-full max-w-md lg:w-fit lg:max-w-none"
            >
                Save Changes
            </Button>
        </>
    );
};
