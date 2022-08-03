//! Required
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

//! Icons
import { MessagingIcon, ArrowRight } from "../../../Components/UI/ProviderHelpCenterIcons";
import { Communicate, FeedBack } from "../../../Components/UI/SVGShapes";

//! Data And Routes
const Events = [
    {
        title: "How much does moverii charge? ",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna?",
        link: "messaging/messaging-one",
    },
    {
        title: "How much does moverii charge? ",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna?",
        link: "messaging/messaging-two",
    },
    {
        title: "How much does moverii charge? ",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna?",
        link: "messaging/messaging-three",
    },
];
//! Comp
const FirstStep = () => {
    const [inputHandler, setInputHandler] = useState("");
    const router = useRouter();
    return (
        <main className="lg:pb-18 mt-10 w-full pb-14">
            <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center px-4 md:max-w-6xl">
                <h1 className="mb-8 self-start text-3xl font-extrabold">Help Center</h1>
                <div className="flex w-full max-w-lg flex-col items-center justify-center">
                    <p className="flex items-center justify-center gap-x-3 text-3xl font-bold">
                        <MessagingIcon /> <span>Messaging</span>
                    </p>
                    <div className="flex w-full items-center justify-center rounded-[1.25rem] border-2 border-[#ECECF6] p-1">
                        <input
                            onChange={(e) => setInputHandler(e.target.value)}
                            placeholder="Ask a question"
                            className="w-full border-none px-3 text-sm font-normal outline-none"
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
                {Events.map((i, index) => {
                    return (
                        <Link href={i.link} key={index}>
                            <a className="h-full w-full max-w-[23.74rem] text-black lg:max-w-none">
                                <div
                                    className="
                                    hoverFx flex h-full w-full flex-col items-center 
                                    justify-center rounded-[1.25rem] py-4 px-7 shadow-[0_4px_20px_rgba(120,123,154,0.15)]"
                                >
                                    <h1 className="self-start  text-lg font-bold">{i.title}</h1>
                                    <p className="text-base font-normal">{i.text}</p>
                                    <button
                                        onClick={() => router.push(`/helper-center/messaging/${i.link}`)}
                                        className="flex items-center justify-center gap-x-1 self-start text-base font-normal text-[#FF9F1C]"
                                    >
                                        <span>Read</span>
                                        <ArrowRight fill="#FF9F1C" />
                                    </button>
                                </div>
                            </a>
                        </Link>
                    );
                })}
            </div>
            <footer
                className="
                mx-auto mt-8 grid w-full max-w-md grid-cols-1 items-center 
                justify-items-center gap-x-8 gap-y-4 lg:max-w-6xl lg:grid-cols-2"
            >
                <Link href="/help-center/feedback-form">
                    <a className="hoverFx h-full w-full">
                        <article className="relative h-40 w-full rounded-[1.25rem] bg-[#E1F9FC]">
                            <FeedBack />
                            <div
                                className="
                                absolute top-1/2 z-20 flex max-w-[13.5rem] -translate-y-1/2 
                                flex-col items-start justify-center pl-9 lg:max-w-none"
                            >
                                <h1 className="text-base font-bold">Do you want to give us feedback?</h1>
                                <Link href="/help-center/feedback-form">
                                    <a className="flex items-center justify-center gap-x-2 text-sm font-semibold text-[#12A3BA]">
                                        <span>Submit feedback now</span>
                                        <ArrowRight fill="#12A3BA" />
                                    </a>
                                </Link>
                            </div>
                        </article>
                    </a>
                </Link>
                <Link href="/help-center/communicate-form">
                    <a className="hoverFx h-full w-full">
                        <article className="relative h-40 w-full rounded-[1.25rem] bg-[#FCEBE1]">
                            <Communicate />
                            <div
                                className="
                                absolute top-1/2 z-20 flex max-w-[13.5rem] -translate-y-1/2 flex-col 
                                items-start justify-center pl-9 lg:max-w-none"
                            >
                                <h1 className="text-base font-bold">Do you want to get in touch with us?</h1>
                                <Link href="/help-center/communicate-form">
                                    <a className="flex items-center justify-center gap-x-2 text-sm font-semibold text-[#FF9F1C]">
                                        <span>Contact us now</span>
                                        <ArrowRight fill="#FF9F1C" />
                                    </a>
                                </Link>
                            </div>
                        </article>
                    </a>
                </Link>
            </footer>
        </main>
    );
};
export default FirstStep;
