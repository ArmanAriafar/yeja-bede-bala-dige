//! Required
import Link from "next/link";

//! Icons
import { MessagingIcon, DisLikeIcon, LikeIcon, ArrowRight } from "../../../../Components/UI/ProviderHelpCenterIcons";
import { Communicate, FeedBack } from "../../../../Components/UI/SVGShapes";

//! Comps
import Slider from "../../../../Components/HelpCenter/Slider";

//! Data Slider
const Images = [
    "/static/images/slide1.png",
    "/static/images/slide2.png",
    "/static/images/slide1.png",
    "/static/images/slide2.png",
];

//! Comp
const MessagingPostOne = () => {
    return (
        <main className="w-full pt-16">
            <header className="mx-auto flex w-full max-w-6xl flex-col items-start justify-center px-4">
                <h1 className="text-3xl font-bold">Help Center</h1>
                <p className="mt-9 flex items-end justify-center gap-x-3 text-3xl font-bold">
                    <MessagingIcon /> <span>Messaging</span>
                </p>
                <p className="max-w-4xl text-2xl font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna?
                </p>
            </header>
            <div className="mx-auto grid w-full max-w-6xl grid-cols-[75%_25%] items-start justify-items-center gap-x-10 px-4">
                {/* rightSide */}
                <div className="flex w-full flex-col items-start justify-center">
                    <p className="text-base font-semibold leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                        congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi
                        porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id
                        aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
                        velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur
                        lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium
                        viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet
                        facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit
                        volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae
                        suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt
                        id aliquet.
                    </p>
                    <div className="max-w-full">
                        <Slider Data={Images} />
                    </div>
                    <p className="mt-10 text-base font-semibold leading-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                        congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi
                        porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id
                        aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
                        velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur
                        lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium
                        viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet
                        facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit
                        volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae
                        suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt
                        id aliquet.
                    </p>
                </div>
                {/* leftSide */}
                <aside className="sticky top-5 w-full rounded-[1.25rem] bg-[#E1F9FC] p-4">
                    <h6>Index 1</h6>
                    <ul>
                        <li>
                            <a href="#title1">Title1</a>
                        </li>
                        <li>
                            <a href="#title2">Title2</a>
                        </li>
                        <li>
                            <a href="#title3">Title3</a>
                        </li>
                    </ul>
                </aside>
            </div>
            <footer
                className="
                mx-auto mt-8 grid w-full max-w-md grid-cols-1 items-center justify-items-center
                gap-x-8 gap-y-4 px-4 lg:max-w-6xl lg:grid-cols-2"
            >
                <div className="col-span-2 mb-10 flex w-full items-center justify-start gap-x-5 border-t pt-4">
                    <p className="m-0 text-base font-normal">Was this article helpful?</p>
                    <button className="flex items-center justify-center gap-x-1 rounded-full border px-6 py-2 text-sm font-normal">
                        <LikeIcon />
                        <span>Yes</span>
                    </button>
                    <button className="flex items-center justify-center gap-x-1 rounded-full border px-6 py-2 text-sm font-normal">
                        <DisLikeIcon />
                        <span>No</span>
                    </button>
                </div>
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

export default MessagingPostOne;
