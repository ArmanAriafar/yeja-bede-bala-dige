//! Required
import { useState } from "react";

//! Comps
import Logo from "../UI/Logo";

//! Icons
import {
    HomeIcon,
    BookingIcon,
    MessagesIcon,
    MoreIcon,
    LogOutIcon,
    NotificationIcon,
    MailIcon,
    AvaillabilitiesIcon,
} from "../UI/NavIcons";

//! AntMenu
import Menu from "antd/lib/menu";
const Items = [
    { label: "Home", key: "home", icon: <HomeIcon /> },
    { label: "Booking", key: "booking", icon: <BookingIcon /> },
    { label: "Messages", key: "messages", icon: <MessagesIcon /> },
    { label: "Availabilities", key: "availabilities", icon: <AvaillabilitiesIcon /> },
    {
        label: "More",
        key: "more",
        icon: <MoreIcon />,
        children: [
            { label: "Something", key: "something" },
            { label: "Something Else", key: "somethingElse" },
        ],
    },
];
//! Comp
const DesktopNav = () => {
    const [menuSelected, setMenuSelected] = useState("home");
    //? AntMenu
    const menuHandler = (e) => {
        setMenuSelected(e.key);
    };
    return (
        <nav className="desktopNav w-full px-4">
            <div className="mx-auto grid h-full w-full max-w-6xl grid-cols-[.5fr_2fr_1fr] items-center justify-items-center">
                <Logo />
                <Menu
                    onClick={menuHandler}
                    selectedKeys={[menuSelected]}
                    mode="horizontal"
                    items={Items}
                    className="flex h-full w-fit items-center justify-center"
                    disabledOverflow
                />
                <NavUser /> {/*InternalImport*/}
            </div>
        </nav>
    );
};
export default DesktopNav;

//! NavUser
//! AntMenu
const UserItems = [
    { icon: <LogOutIcon />, key: "logout" },
    { icon: <NotificationIcon />, key: "notification" },
    { icon: <MailIcon />, key: "email" },
];
//! Comp
export const NavUser = () => {
    const [menuSelected, setMenuSelected] = useState("mail");
    const menuHandler = (e) => {
        setMenuSelected(e.key);
    };
    return (
        <div className="flex h-full items-center justify-center gap-x-4">
            <div className="flex h-full items-center justify-center gap-x-3">
                <Menu
                    onClick={menuHandler}
                    selectedKeys={[menuSelected]}
                    mode="horizontal"
                    items={UserItems}
                    disabledOverflow
                    className="flex h-full items-center justify-center"
                />
            </div>
            <div className="flex h-full items-center justify-center gap-x-2">
                <p className="m-0 font-semibold">Fatemeh</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/static/images/Sample-UserImage.jpg"
                    alt="fatemeh"
                    className="aspect-square w-9 rounded-full border-2 border-white"
                />
            </div>
        </div>
    );
};
