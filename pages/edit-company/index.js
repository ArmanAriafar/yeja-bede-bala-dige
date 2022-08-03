//! Required
import { useState } from "react";
import { Input, Button } from "antd";

//! Comps
import ProviderCard from "../../Components/ProviderCard/ProviderCard";
import { UserCardIcon } from "../../Components/UI/ProviderProfileIcons";

//! Comp
const EditCompany = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);
    return (
        <main className="h-full w-full">
            <div className="mx-auto my-7 flex w-full max-w-md items-center justify-between px-4 lg:max-w-6xl lg:px-8">
                <h1 className="mb-0 font-sans text-3xl font-bold">Host profile</h1>
                <button onClick={() => setIsActive((prev) => !prev)} className="lg:hidden">
                    <UserCardIcon />
                </button>
            </div>
            <div
                className="
                mx-auto mb-6 grid w-full max-w-md items-start gap-x-10 justify-self-center px-4
                pb-10 lg:mb-0 lg:max-w-6xl lg:grid-cols-[300px_1fr]"
            >
                <ProviderCard setIsActive={setIsActive} isActive={isActive} />
                <div className="h-full w-full">
                    {/* companyDetails */}
                    <header className="mx-auto flex w-full flex-col items-start justify-start lg:max-w-none lg:px-0">
                        <div className="flex w-full items-center justify-start">
                            <h1 className="font-sans text-xl font-bold text-gray-900">Company details</h1>
                        </div>
                        <div className="mt-7 grid w-full grid-cols-1 grid-rows-3 items-center justify-items-center gap-y-8 gap-x-5 lg:grid-cols-2 ">
                            <Input
                                placeholder="Company Name"
                                className="w-full rounded-[1.25rem] py-3.5 px-6 text-sm font-normal"
                            />
                            <Input
                                placeholder="VAT number"
                                className="w-full rounded-[1.25rem] py-3.5 px-6 text-sm font-normal"
                            />
                            <Input
                                placeholder="Street and house number"
                                className="w-full rounded-[1.25rem] py-3.5 px-6 text-sm font-normal"
                            />
                            <Input
                                placeholder="Region"
                                className="w-full rounded-[1.25rem] py-3.5 px-6 text-sm font-normal"
                            />
                            <Input
                                placeholder="Post code"
                                className="w-full rounded-[1.25rem] py-3.5 px-6 text-sm font-normal"
                            />
                            <Input
                                placeholder="Country"
                                className="w-full rounded-[1.25rem] py-3.5 px-6 text-sm font-normal"
                            />
                        </div>
                    </header>
                    {/* BankDetails */}
                    <header className="mx-auto mt-11 flex w-full flex-col items-start justify-start lg:max-w-none lg:px-0">
                        <h1 className="font-sans text-xl font-bold text-gray-900">Bank Details</h1>
                        <div className="mt-5 grid w-full grid-cols-1 grid-rows-2 items-center justify-items-center gap-y-8 gap-x-5 lg:grid-cols-2 ">
                            <Input
                                placeholder="Account owner"
                                className="w-full rounded-[1.25rem] py-3.5 px-6 text-sm font-normal"
                            />
                            <Input
                                placeholder="IBAN"
                                className="w-full rounded-[1.25rem] py-3.5 px-6 text-sm font-normal"
                            />
                            <Input
                                placeholder="Bank"
                                className="w-full rounded-[1.25rem] py-3.5 px-6 text-sm font-normal"
                            />
                            <Input
                                placeholder="BIC"
                                className="w-full rounded-[1.25rem] py-3.5 px-6 text-sm font-normal"
                            />
                        </div>
                    </header>
                    <Button
                        type="primary"
                        loading={isLoading}
                        shape="round"
                        onClick={() => setIsLoading(true)}
                        className="btn-primary my-10 w-full !border-none outline-none lg:w-fit lg:self-start"
                    >
                        Save Changes
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default EditCompany;
