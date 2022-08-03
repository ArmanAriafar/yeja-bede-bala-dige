//! Required
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Rate from "antd/lib/rate";
import { motion } from "framer-motion";
import CardController from "../../mobx/controller/Card/CardController";
import { observer } from "mobx-react";

//! Icons
import {
    LocationIcon,
    AccountIcon,
    NotificationsIcon,
    CompanyIcon,
    ProfileIcon,
    CloseCircle,
} from "../UI/ProviderProfileIcons";
import Cookies from "js-cookie";

//! AntD Rate
const desc = ["1/5", "2/5", "3/5", "4/5", "5/5"];

//!  Navigation
const items = [
    { label: "Profile", key: "profile", icon: <ProfileIcon />, link: "/edit-profile" },
    { label: "Company", key: "company", icon: <CompanyIcon />, link: "/edit-company" },
    { label: "Notifications", key: "notifications", icon: <NotificationsIcon />, link: "/edit-notification" },
    { label: "Account", key: "account", icon: <AccountIcon />, link: "/edit-account" },
];

//! Harsh using UserData
const user = {
    name: "Fatemeh",
    image: "/static/images/Sample-UserImage.jpg",
    location: "Rotterdom, Netherlands",
    countryIcon: "",
    tags: ["#Travel", "#Journey", "#Nature"],
};

//! Comp
const ProfileCard = observer(({ isActive, setIsActive }) => {
    const store = new CardController();
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
        store.getCountries();
    }, []);
    const route = useRouter();
    const [rate, setRate] = useState(3);
    if (screenWidth >= 1024) {
        return (
            <>
                <article
                    className="
                    mx-auto hidden min-h-[31.25rem] w-full rounded-[1.25rem] border border-gray-200 bg-white py-6
                    lg:flex lg:flex-col lg:items-center lg:justify-center"
                >
                    <div className="flex w-full flex-col items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={user.image} alt={user.name} className="aspect-square w-24 rounded-full" />
                        <p className="text-base font-semibold text-gray-900">{user.name}</p>
                        <span>
                            <Rate tooltips={desc} onChange={setRate} value={rate} disabled />
                            {rate ? <span className="ant-rate-text">{desc[rate - 1]}</span> : ""}
                        </span>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center">
                        <p className="mt-1 flex items-center justify-center gap-x-1 font-sans text-sm font-normal text-gray-300">
                            <LocationIcon />
                            {user.location}
                        </p>
                        <ul className="flex items-center justify-center gap-x-2">
                            {user.tags.map((i, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="
                                        mt-2 rounded-full bg-cyan-50 px-4 py-2 text-sm 
                                        font-normal text-gray-900 "
                                    >
                                        {i}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <ul className="mt-5 flex w-full flex-col items-start justify-center gap-y-4 border-t pt-5">
                        {items.map((a, index) => {
                            return (
                                <li key={index}>
                                    <Link href={a.link}>
                                        <a
                                            className={`${route.pathname === a.link ? "activeLink" : "notActiveLink"}
                                            flex items-center justify-center gap-x-3 text-sm font-medium text-gray-900`}
                                        >
                                            <span>{a.icon}</span>
                                            <span>{a.label}</span>
                                        </a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </article>
            </>
        );
    }
    //? Framer
    const NavVars = {
        hidden: {
            x: "-100vw",
        },
        visible: {
            x: isActive ? "0" : "-100vw",
            transition: {
                type: "tween",
                duration: 0.5,
            },
        },
    };
    return (
        <>
            <motion.article
                variants={NavVars}
                initial="hidden"
                animate="visible"
                className="
                fixed top-0 left-0 z-[201] mx-auto flex h-full w-full flex-col items-center justify-center
                border border-gray-200 bg-white p-6 lg:hidden"
            >
                <div className="relative flex w-full max-w-md flex-col items-center justify-center gap-y-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={user.image} alt={user.name} className="aspect-square w-40 rounded-full" />
                    <p className="text-base font-semibold text-gray-900">{user.name}</p>
                    <span>
                        <Rate tooltips={desc} onChange={setRate} value={rate} disabled />
                        {rate ? <span className="ant-rate-text">{desc[rate - 1]}</span> : ""}
                    </span>
                </div>
                <div className="mt-2 flex w-full max-w-md flex-col items-center justify-center">
                    <p className="mt-1 flex items-center justify-center gap-x-1 font-sans text-sm font-normal text-gray-300">
                        <LocationIcon />
                        {user.location}
                    </p>
                    <ul className="flex w-full items-center justify-center gap-x-2 px-7">
                        {user.tags.map((i, index) => {
                            return (
                                <li
                                    key={index}
                                    className="
                                        mt-2 rounded-full bg-cyan-50 px-4 py-2 text-sm 
                                        font-normal text-gray-900 "
                                >
                                    {i}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ul className="mt-5 flex w-full flex-col items-start justify-center gap-y-4 border-t pt-5 max-w-md">
                    {items.map((a, index) => {
                        return (
                            <li key={index}>
                                <Link href={a.link}>
                                    <a
                                        className={`${route.pathname === a.link ? "activeLink" : "notActiveLink"}
                                        flex items-center justify-start gap-x-3 text-sm font-medium text-gray-900`}
                                    >
                                        <span>{a.icon}</span>
                                        <span>{a.label}</span>
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <button
                    onClick={() => setIsActive(false)}
                    className="absolute top-5 right-5 text-xl font-extrabold text-primary-500"
                >
                    <CloseCircle />
                </button>
            </motion.article>
        </>
    );
});

export default ProfileCard;
