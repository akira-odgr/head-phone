import { useState } from "react";
import { headphoneData } from "./headphoneData";

import { FaWhatsapp } from "react-icons/fa6";
import { UpdateFollower } from "react-mouse-follower";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "../../utility/animation";

export const Hero = () => {
    const [activeData, setActiveData] = useState(headphoneData[0]);

    const handleActiveData = (data) => setActiveData(data);

    return (
        <section className="bg-brandDark text-white font-varela">
            <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
                {/* _____ Headphone Info _____ */}
                <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
                    <div className="space-y-5 text-center md:text-left">
                        {/* ----- Headphone Title ----- */}
                        <AnimatePresence mode="wait">
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: "white",
                                    zIndex: 9999,
                                    followSpeed: 0.5,
                                    rotate: -720,
                                    mixBlendMode: "difference",
                                    scale: 10,
                                }}
                            >
                                <motion.h1
                                    key={activeData.id}
                                    variants={FadeUp(0.2)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className="text-[28px] lg:text-6xl font-bold leading-[34px]"
                                >
                                    {activeData.title}
                                </motion.h1>
                            </UpdateFollower>
                        </AnimatePresence>

                        <AnimatePresence>
                            <motion.p
                                key={activeData.id}
                                variants={FadeUp(0.3)}
                                initial="hidden"
                                animate="show"
                                exit="exit"
                                className="text-sm leading-loose text-white/80"
                            >
                                {activeData.subtitle}
                            </motion.p>
                        </AnimatePresence>

                        <AnimatePresence>
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: activeData.bgColor,
                                    zIndex: 9999,
                                    followSpeed: 0.5,
                                    rotate: -720,
                                    scale: 6,
                                    backgroundElement: (
                                        <div>
                                            <img src={activeData.image} />
                                        </div>
                                    ),
                                }}
                            >
                                <motion.button
                                    key={activeData.id}
                                    variants={FadeUp(0.3)}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    style={{
                                        backgroundColor: activeData.bgColor,
                                    }}
                                    className="px-4 py-2 inline-block font-normal rounded-sm"
                                >
                                    Buy and Listen
                                </motion.button>
                            </UpdateFollower>
                        </AnimatePresence>

                        {/* _____ Headphone List Separator _____ */}
                        <div className="flex items-center justify-between md:justify-start gap-4 !mt-24">
                            <div className="w-20 h-[1px] bg-white"></div>
                            <div>
                                <p>Top Headphones for you</p>
                            </div>
                            <div className="w-20 h-[1px] bg-white"></div>
                        </div>

                        <div className="grid grid-cols-3 gap-10">
                            {headphoneData.map((item) => {
                                return (
                                    <div
                                        key={item.id}
                                        className="grid grid-cols-2 place-items-center cursor-pointer"
                                        onClick={() => handleActiveData(item)}
                                    >
                                        <div>
                                            <img
                                                src={item.image}
                                                alt=""
                                                className="w-[200px]"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-base font-bold">
                                                {item.price}
                                            </p>
                                            <p className="text-sm font-normal text-nowrap">
                                                {item.modal}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                {/* _____ Hero Image _____ */}
                <div className="flex flex-col justify-end items-center">
                    <img
                        src={activeData.image}
                        alt=""
                        className="w-[300px] md:w-[400px] xl:w-[550px]"
                    />
                </div>
                {/* _____ WhatsApp Icon _____ */}
                <div className="text-3xl text-black fixed bottom-10 right-10 hover:rotate-[360deg] duration-[500] z-[9999] mix-blend-difference">
                    <a href="">
                        <FaWhatsapp />
                    </a>
                </div>
            </div>
        </section>
    );
};
