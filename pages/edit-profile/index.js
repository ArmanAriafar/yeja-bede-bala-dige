//! Required
import { useState } from "react";
import { Input, Select, Button } from "antd";
import { ProfileEditIcon, UserCardIcon, BtnHashtags } from "../../Components/UI/ProviderProfileIcons";

//! Comps
import ProviderCard from "../../Components/ProviderCard/ProviderCard";

//! Comp
const EditProfilePage = () => {
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
                    <Header setIsActive={setIsActive} />
                    <Language />
                    <Hashtags />
                    <Quote />
                    <Teaser />
                    <Images />
                    <Button
                        type="primary"
                        loading={isLoading}
                        shape="round"
                        onClick={() => setIsLoading(true)}
                        className="btn-primary mt-10 w-full !border-none outline-none lg:w-fit lg:self-start"
                    >
                        Save Changes
                    </Button>
                </div>
            </div>
        </main>
    );
};
export default EditProfilePage;

//! Header
export const Header = () => {
    return (
        <header className="mt-5 flex w-full flex-col items-start justify-start gap-y-7 lg:mt-0">
            <div className="grid w-full grid-cols-1 items-center justify-items-center gap-x-6 justify-self-center lg:grid-cols-[100px_1fr]">
                <div className="relative w-fit">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/static/images/Sample-UserImage.jpg" alt="Fatemeh" className="rounded-full" />
                    <button className="absolute right-0 bottom-0">
                        <ProfileEditIcon />
                    </button>
                </div>
                <div className="mt-5 grid w-full grid-cols-1 grid-rows-2 items-center gap-y-5 gap-x-5 justify-self-center lg:mt-0 lg:grid-cols-2">
                    <Input placeholder="First name" className="!rounded-[1.25rem] py-2 px-6 text-sm font-medium" />
                    <Input placeholder="Surname" className="!rounded-[1.25rem] py-2 px-6 text-sm font-medium" />
                    <Input placeholder="Phone number" className="!rounded-[1.25rem] py-2 px-6 text-sm font-medium" />
                    <Input placeholder="Email address" className="!rounded-[1.25rem] py-2 px-6 text-sm font-medium" />
                </div>
            </div>
        </header>
    );
};

//! Language
export const Language = () => {
    const [selectOptions, setSelectOptions] = useState([{ value: "English" }, { value: "Spain" }]);
    const [selectedValues, setSelectedValues] = useState([]);
    const [selectedValues2, setSelectedValues2] = useState([]);
    function selectHandler(values) {
        if (!selectedValues.find((val) => val === values[0])) {
            selectedValues.push(...values);
            setSelectedValues([...selectedValues]);
        }
    }
    return (
        <section className="flex w-full flex-col items-center justify-start gap-y-4 border-b border-gray-200 py-9 lg:items-start">
            <h2 className="self-start text-sm font-bold">Languages you speak:</h2>
            <Select
                mode="tags"
                bordered={false}
                allowClear
                showArrow
                value={selectedValues2}
                placeholder="Choose your languages"
                onChange={selectHandler}
                className="w-full max-w-sm rounded-[1.25rem] border border-gray-100"
                options={selectOptions}
            />
            <ul className="flex w-full items-center justify-start gap-x-2">
                {selectedValues.map((i, index) => {
                    return (
                        <li
                            key={index}
                            className="
                            mt-2 rounded-full bg-cyan-50 px-4 py-2 text-sm 
                            font-medium text-gray-900"
                        >
                            {i}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

//! Hashtags
export const Hashtags = () => {
    const [selectOptions, setSelectOptions] = useState([{ value: "Home" }, { value: "House" }]);
    const [selectedValues, setSelectedValues] = useState([]);
    const [selectedValues2, setSelectedValues2] = useState([]);
    function selectHandler(values) {
        if (!selectedValues.find((val) => val === values[0])) {
            selectedValues.push(...values);
            setSelectedValues([...selectedValues]);
        }
    }
    return (
        <section className="flex w-full flex-col items-center justify-start gap-y-4 border-b border-gray-200 py-9 lg:items-start">
            <h2 className="self-start text-sm font-bold">
                Hashtags{" "}
                <span className="font-medium text-gray-300">
                    The hashtags are part of your profile and are meant to express you as a person.{" "}
                </span>
            </h2>
            <div className="flex w-full max-w-sm items-center justify-start rounded-[1.25rem] border border-gray-100 px-2 py-1">
                <p className="!mb-0 px-1 text-sm font-normal">#</p>
                <Select
                    mode="tags"
                    bordered={false}
                    allowClear
                    value={selectedValues2}
                    placeholder="Select your spoken language"
                    onChange={selectHandler}
                    className="w-full"
                    options={selectOptions}
                />
                <button>
                    <BtnHashtags />
                </button>
            </div>
            <ul className="flex w-full items-center justify-start gap-x-2">
                {selectedValues.map((i, index) => {
                    return (
                        <li
                            key={index}
                            className="
                            mt-2 rounded-full bg-cyan-50 px-4 py-2 text-sm 
                            font-normal text-gray-900"
                        >
                            {i}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
//! Provider Quote
export const Quote = () => {
    const { TextArea } = Input;
    return (
        <section className="flex w-full flex-col items-center justify-start gap-y-4 py-9 lg:items-start">
            <h2 className="self-start text-sm font-bold">
                Your quote{" "}
                <span className="font-medium text-gray-300">
                    A short phrase or quote that best characterizes you as a host.{" "}
                </span>
            </h2>
            <TextArea rows={3} className="rounded-[1.25rem]" />
        </section>
    );
};

//! Provider Teaser
export const Teaser = () => {
    const { TextArea } = Input;
    return (
        <section className="flex w-full flex-col items-center justify-start gap-y-4 py-9 lg:items-start">
            <h2 className="self-start text-sm font-bold">
                Your description{" "}
                <span className="font-medium text-gray-300">A description of you as a host and your company.</span>
            </h2>
            <TextArea rows={3} className="rounded-[1.25rem]" />
        </section>
    );
};

//! Image
export const Images = () => {
    return (
        <section className="flex w-full flex-col items-center justify-start lg:items-start">
            <h2 className="self-start text-sm font-bold">Profile image</h2>
        </section>
    );
};
