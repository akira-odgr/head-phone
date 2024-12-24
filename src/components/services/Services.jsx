import { FadeUp } from "../../utility/animation";
import { UpdateFollower } from "react-mouse-follower";
import { servicesData } from "./servicesData";
import { motion } from "framer-motion";

export const Services = () => {
    return (
        <section className="bg-gray-100 font-poppins py-8">
            <div className="container py-14">
                <motion.h1
                    variants={FadeUp(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center pb-10"
                >
                    Service
                </motion.h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {servicesData.map((item) => (
                        <UpdateFollower
                            key={item.id}
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 9999,
                                followSpeed: 0.5,
                                scale: 5,
                                rotate: 720,
                                mixBlendMode: "darken",
                                backgroundElement: (
                                    <div>
                                        <img src={item.icon} alt="" />
                                    </div>
                                ),
                            }}
                        >
                            <motion.div
                                variants={FadeUp(item.delay)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex flex-col justify-center items-center max-w-[300px] p-5 shadow-lg mx-auto rounded-xl bg-white"
                            >
                                <img
                                    src={item.icon}
                                    alt=""
                                    className="max-w-[100px] mb-4"
                                />
                                <div className="text-center space-y-2">
                                    <h1 className="text-2xl font-bold">
                                        {item.title}
                                    </h1>
                                    <p className="text-center text-sm text-black/75">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </UpdateFollower>
                    ))}
                </div>
            </div>
        </section>
    );
};
