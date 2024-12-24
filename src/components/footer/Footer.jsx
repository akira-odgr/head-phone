import {
    FaInstagram,
    FaTelegram,
    FaGoogle,
    FaPhone,
    FaMapLocationDot,
} from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Cards from "../../assets/credit-cards.webp";
import { linkList } from "./footerData";

export const Footer = () => {
    return (
        <footer className="bg-primary pt-12 pb-8 text-white">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* Company details section */}
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold uppercase">
                            Playing
                        </h1>
                        <p className="text-sm max-w-[300px]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Odio quos delectus amet id maiores nostrum
                            nulla et deserunt error! Nulla recusandae commodi
                            fugit nam exercitationem.
                        </p>
                        <div>
                            <p className="flex items-center gap-2 mb-2">
                                <FaPhone /> +1 (123) 456-7890
                            </p>
                            <p className="flex items-center gap-2">
                                <FaMapLocationDot /> Noida, Utta Pradesh
                            </p>
                        </div>
                    </div>

                    {/* Footer Links section */}
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold uppercase">
                            Quick Link
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <ul className="space-y-2">
                                    {linkList.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <ul className="space-y-2">
                                    {linkList.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Social Links section */}
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold uppercase">
                            Follow Us
                        </h1>
                        <div className="flex items-center gap-3">
                            <FaFacebook className="text-3xl hover:scale-105 duration-300" />
                            <FaInstagram className="text-3xl hover:scale-105 duration-300" />
                            <FaTelegram className="text-3xl hover:scale-105 duration-300" />
                            <FaGoogle className="text-3xl hover:scale-105 duration-300" />
                        </div>
                        <div className="space-y-2">
                            <p>Payment Methods</p>
                            <img src={Cards} alt="" className="w-[80%]" />
                        </div>
                    </div>
                </div>

                {/* Copyright section */}
                <p className="text-white text-center mt-8 border-t-2 pt-8">
                    &copy; 2024. All Right Reserved
                </p>
            </div>
        </footer>
    );
};
