import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className="bg-[#009DFF] md:text-white text-black">
            <div className="flex items-center font-medium justify-around">
                <div className="z-50 p-5 md:w-auto w-full flex justify-between">
                    <h1 className="text-xl text-white">MOCK-PLUS</h1>
                    <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                        <ion-icon className='' name={`${open ? "close" : "menu"}`}></ion-icon>
                    </div>
                </div>
                <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block">
                            MockPlus RP
                        </Link>
                    </li>
                    <NavLinks />
                </ul>
                <p className="md:block text-gray-200 hidden">Log in</p>
                <div className="md:block hidden">
                    <Button />
                </div>
                {/* Mobile nav */}
                <ul
                    className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
                >
                    <li>
                        <Link to="/" className="py-7 px-3 inline-block">
                            Home
                        </Link>
                    </li>
                    <NavLinks />
                    <div className="py-5">
                        <Button />
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;