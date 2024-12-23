import { FadeUp } from "../../utility/animation";
import Headphone4 from "../../assets/headphone4.png";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

export const Banner = () => {
    return (
        <section>
            <div className="container grid grid-cols-1 md:grid-cols-2 py-14 space-y-6 md:space-y-0 gap-12">
                {/* _____ Banner Image _____ */}
                <div>
                    <motion.img
                        initial={{ opacity: 0, x: -100, rotate: -180 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                        src={Headphone4}
                        alt=""
                        className="w-[300px] md:w-[400px]"
                    />
                </div>
                {/* _____ Banner Text Info _____ */}
                <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
                        <motion.h1
                            variants={FadeUp(0.2)}
                            initial="hidden"
                            whileInView="show"
                            className="text-3xl lg:text-4xl font-semibold font-poppins"
                        >
                            The Latest Headphone With The Latest Technology
                        </motion.h1>
                        <motion.p
                            variants={FadeUp(0.4)}
                            initial="hidden"
                            whileInView="show"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ratione qui illum harum expedita, laboriosam
                            deserunt fuga vero! Perspiciatis, temporibus
                            voluptatem?
                        </motion.p>
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 9999,
                                followSpeed: 0.5,
                                mixBlendMode: "difference",
                                scale: 5,
                            }}
                        >
                            <motion.button
                                variants={FadeUp(0.6)}
                                initial="hidden"
                                whileInView="show"
                                className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white"
                            >
                                Shop Now
                            </motion.button>
                        </UpdateFollower>
                    </div>
                </div>
                {/* _____ Banner Image _____ */}
            </div>
        </section>
    );
};
