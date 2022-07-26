//! Required
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Rate from "antd/lib/rate";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

//! Icons
import {
    LocationIcon,
    AccountIcon,
    NotificationsIcon,
    CompanyIcon,
    ProfileIcon,
    CloseCircle,
} from "../UI/ProviderProfileIcons";

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
const ProfileCard = ({ isActive, setIsActive }) => {
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        Cookies.set(
            "token",
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiMTE3YzQyNGE3M2ZmODkxMDc1YmMwYmFlMTg4MDM4ZTQyMDYzOGQxOTc5NjRlZmMxYzMxYWRiNTFiZTc5NDczNWFlYTk1NGZiMDEwNzNiMTEiLCJpYXQiOjE2NTg3NDg2NDEuMzE4MjgzLCJuYmYiOjE2NTg3NDg2NDEuMzE4Mjg4LCJleHAiOjE2OTAyODQ2NDEuMjg2NDExLCJzdWIiOiIxMyIsInNjb3BlcyI6W119.mfYYMlUSbQtaSmN_fCNObiKxdooZDauAxFyE74lnWhPDhJJhdukit6P2lYms8K7HAW-eRwGT9eJT-XKlxCagL4M673PnDsT1qeul-YoQNl1v2gOH0G7hGwV74DHFjo_moUH1580bpZCGE__CaO2N52UMIlcN-2nEhAZrwXlJL14RsTUhtDXlY0lGcR8BjUKGXYqxblihwNmn_kU19bzYo-e3UQKSnN3P_3680Pws6mHMQNQUoiQQThWX8ZDUUFh-3-zvd8rnkmnEwxTrELgY_3b2Q5rGsQhRNhTBc7CEAfQnRULMWFIgrFFbNuZTrKAxpslWYF5oBliBXkQkPABimVKZ64CoiH88VlgcK3vZvB7eFK0VA0Fy9Wx5OvUSyp38NJUhm3o8DFA8IAEMq42oUqV_UlIMIYTTi8FydgMjQiIpzqm5WzydgSq7MyU5uEqZIg5VpNoD_OO2K_AYSmJEoExRkxBnj0ubW5nE_qNTrZtY6Kxrq29-Qhgh9q5zAQv1dy70ufMA-hRSyk33_LrzQCN4N2Z679JmOqUFYvxYK8EwfjWpz4gjfcnscNm2YWztCOQfL_t0RdwdFlI9DcrIf5nKisndBZqaHxrWQOPwV3sK_MxqmJsvaCtLo5WuQCmdv7x3dLbvhIGQYuVqfvL6REx3o8m72m9W3LSeP4VpJZQ"
        );
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
    }, []);
    const route = useRouter();
    const [rate, setRate] = useState(3);
    if (screenWidth >= 1024) {
        return (
            <>
                <article
                    className="
                    mx-auto hidden min-h-[31.25rem] w-full max-w-[18.75rem] rounded-[1.25rem] border border-gray-200 bg-white
                    p-6 lg:flex lg:flex-col lg:items-center lg:justify-center"
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
            <motion.div
                variants={NavVars}
                initial="hidden"
                animate="visible"
                className="
                flexY fixed top-0 left-0 z-[201] mx-auto h-full w-full max-w-md
                border border-gray-200 bg-white p-6 lg:hidden"
            >
                <div className="flexY relative w-full gap-y-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={user.image} alt={user.name} className="aspect-square w-40 rounded-full" />
                    <p className="text-base font-semibold text-gray-900">{user.name}</p>
                    <span>
                        <Rate tooltips={desc} onChange={setRate} value={rate} disabled />
                        {rate ? <span className="ant-rate-text">{desc[rate - 1]}</span> : ""}
                    </span>
                </div>
                <div className="flexY mt-2 w-full">
                    <p className="flexX mt-1 gap-x-1 font-sans text-sm font-normal text-gray-300">
                        <LocationIcon />
                        {user.location}
                    </p>
                    <ul className="flexX gap-x-2">
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
                <ul className="flexYStart mt-5 w-full gap-y-4 border-t pt-5">
                    {items.map((a, index) => {
                        return (
                            <li key={index}>
                                <Link href={a.link}>
                                    <a
                                        className={`${route.pathname === a.link ? "activeLink" : ""}
                                            styleChild hOpacity flexXStart gap-x-3 text-sm font-medium text-gray-900`}
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
            </motion.div>
        </>
    );
};

export default ProfileCard;
