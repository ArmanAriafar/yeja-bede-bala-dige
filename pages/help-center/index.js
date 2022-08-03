//! Required
import Link from "next/link";
import { useState } from "react";

//! Icons
import {
    FirstIcon,
    SecondIcon,
    ThirdIcon,
    FourthIcon,
    FifthIcon,
    SixthIcon,
    SeventhIcon,
    EighthIcon,
    NinthIcon,
    ArrowRight,
} from "../../Components/UI/ProviderHelpCenterIcons";
import { FeedBack, Communicate } from "../../Components/UI/SVGShapes";

//! Data And Routes
const Helpers = [
    { icon: <FirstIcon />, text: "First Steps", link: "/help-center/first-steps" },
    { icon: <SecondIcon />, text: "Profile & Settings", link: "/help-center/profile-settings" },
    { icon: <ThirdIcon />, text: "Booking Management", link: "/help-center/booking-management" },
    { icon: <FourthIcon />, text: "Messaging", link: "/help-center/messaging" },
    { icon: <FifthIcon />, text: "Capacity Management", link: "/help-center/capacity-management" },
    { icon: <SixthIcon />, text: "Offers & Journeys", link: "/help-center/offers-journeys" },
    { icon: <SeventhIcon />, text: "Invoices & Payments", link: "/help-center/invoices-payments" },
    { icon: <EighthIcon />, text: "Insights", link: "/help-center/insights" },
    { icon: <NinthIcon />, text: "Customer Communication", link: "/help-center/customer-communication" },
];

//! Comp
const HelpCenter = () => {
    const [helpValue, setHelpValue] = useState("");
    return (
        <main className="lg:pb-18 mt-10 w-full pb-14">
            <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center px-4 md:max-w-6xl">
                <h1 className="self-start text-3xl font-extrabold">Help Center</h1>
                <div className="flex w-full max-w-lg flex-col items-center justify-center">
                    <p className="text-2xl font-bold">Hi Lara! How can we help you?</p>
                    <div className="flex w-full items-center justify-center rounded-[1.25rem] border-2 border-[#ECECF6] p-1">
                        <input
                            onChange={(e) => setHelpValue(e.target.value)}
                            placeholder="Ask a question"
                            className="w-full border-none px-3 text-sm font-normal outline-none"
                            bordered={false}
                        />
                        <button className="hoverFx rounded-[1.25rem] bg-primary-500 px-9 py-2 text-sm font-semibold text-white">
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="
                mx-auto mt-8 grid w-full max-w-6xl grid-cols-1 items-center justify-items-center 
                gap-8 px-4 md:grid-cols-2 lg:grid-cols-3"
            >
                {Helpers.map((i, index) => {
                    return (
                        <Link href={i.link} key={index}>
                            <a className="h-full w-full max-w-[23.74rem] text-black lg:max-w-none">
                                <div
                                    className="
                                    hoverFx flex h-full w-full flex-col items-center 
                                    justify-center rounded-[1.25rem] py-4 px-7 shadow-[0_4px_20px_rgba(120,123,154,0.15)]"
                                >
                                    {i.icon}
                                    <p className="mt-2 text-base font-semibold">{i.text}</p>
                                </div>
                            </a>
                        </Link>
                    );
                })}
            </div>
            <div
                className="
                mx-auto mt-8 grid w-full max-w-md grid-cols-1 items-center 
                justify-items-center gap-x-8 gap-y-4 lg:max-w-6xl lg:grid-cols-2"
            >
                <article className="relative h-40 w-full rounded-[1.25rem] bg-[#E1F9FC]">
                    <FeedBack />
                    <div
                        className="
                        absolute top-1/2 z-20 flex max-w-[13.5rem] -translate-y-1/2 
                        flex-col items-start justify-center pl-9 lg:max-w-none"
                    >
                        <h1 className="text-base font-bold">Do you have a feedback on the progress?</h1>
                        <Link href="/help-center/feedback-form">
                            <a className="flex items-center justify-center gap-x-2 text-sm font-semibold text-[#12A3BA]">
                                <span>Write a feedback</span>
                                <ArrowRight fill="#12A3BA" />
                            </a>
                        </Link>
                    </div>
                </article>
                <article className="relative h-40 w-full rounded-[1.25rem] bg-[#FCEBE1]">
                    <Communicate />
                    <div
                        className="
                        absolute top-1/2 z-20 flex max-w-[13.5rem] -translate-y-1/2 flex-col 
                        items-start justify-center pl-9 lg:max-w-none"
                    >
                        <h1 className="text-base font-bold">Do you want to communicate with us?</h1>
                        <Link href="/help-center/communicate-form">
                            <a className="flex items-center justify-center gap-x-2 text-sm font-semibold text-[#FF9F1C]">
                                <span>Write a feedback</span>
                                <ArrowRight fill="#FF9F1C" />
                            </a>
                        </Link>
                    </div>
                </article>
            </div>
        </main>
    );
};
export default HelpCenter;
