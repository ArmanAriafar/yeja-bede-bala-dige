//! Required
import Menu from "antd/lib/menu";
import { useState } from "react";

//! Icons
import Logo from "../UI/Logo";
import { HomeIcon, BookingIcon, MessagesIcon, MoreIcon, LogOutIcon, NotificationIcon, MailIcon } from "../UI/NavIcons";

const MobileNav = () => {
    return (
        <nav className="flex w-full items-center justify-between bg-white px-4 py-2 max-w-md mx-auto">
            <Logo />
            <NavUser />
            <div className="fixed bottom-0 left-0 z-[200] grid w-full grid-cols-4 items-center justify-items-center border-t-2 border-primary-500 bg-white py-3">
                <HomeIcon />
                <BookingIcon />
                <MessagesIcon />
                <MoreIcon />
            </div>
        </nav>
    );
};

export default MobileNav;

//! NavUser
//! AntMenu
const UserItems = [
    { icon: <LogOutIcon />, key: "logout" },
    { icon: <NotificationIcon />, key: "notification" },
    { icon: <MailIcon />, key: "email" },
];
export const NavUser = () => {
    const [menuSelected, setMenuSelected] = useState("mail");
    const menuHandler = (e) => {
        setMenuSelected(e.key);
    };
    return (
        <div className="mobileNavUser flex h-full items-center justify-center gap-x-4">
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
