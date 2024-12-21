import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";

import { navbarData } from "./navbarData";

export const Navbar = () => {
    return (
        <>
            <div className="bg-brandDark text-white py-8 font-varela">
                <motion.nav
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="container flex justify-between items-center"
                >
                    {/* ____ Logo section ____ */}
                    <div>
                        <a href="#" className="text-xl font-bold">
                            playing /{" "}
                            <span className="font-extralight text-white-70">
                                Market
                            </span>
                        </a>
                    </div>
                    {/* ____ Menu section ____ */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-4">
                            {navbarData.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <UpdateFollower
                                            mouseOptions={{
                                                backgroundColor: "white",
                                                zIndex: 999,
                                                followSpeed: 1.5,
                                                scale: 5,
                                                mixBlendMode: "difference",
                                            }}
                                        >
                                            <a
                                                href={item.link}
                                                className="inline-block text-sm py-2 px-3 uppercase"
                                            >
                                                {item.title}
                                            </a>
                                        </UpdateFollower>
                                    </li>
                                );
                            })}
                            <button className="text-xl ps-14">
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: "white",
                                        zIndex: 999,
                                        followSpeed: 1.5,
                                        scale: 5,
                                        mixBlendMode: "difference",
                                    }}
                                >
                                    <SlEarphones />
                                </UpdateFollower>
                            </button>
                        </ul>
                    </div>
                    {/* ____ Mobile Hamburger section ____ */}
                    <div className="md:hidden">
                        <MdMenu className="text-4xl" />
                    </div>
                </motion.nav>
            </div>
        </>
    );
};
