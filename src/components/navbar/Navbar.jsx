import { navbardata } from "./navbardata";
import { MdMenu } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";

export const Navbar = () => {
    return (
        <>
            <div className="bg-brandDark text-white py-8 font-varela">
                <nav className="container flex justify-between items-center">
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
                            {navbardata.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a
                                            href={item.link}
                                            className="inline-block text-sm py-2 px-3 uppercase"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                            <button className="text-xl ps-14">
                                <SlEarphones />
                            </button>
                        </ul>
                    </div>
                    {/* ____ Mobile Hamburger section ____ */}
                    <div className="md:hidden">
                        <MdMenu className="text-4xl" />
                    </div>
                </nav>
            </div>
        </>
    );
};
