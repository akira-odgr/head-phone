import { UpdateFollower } from "react-mouse-follower";

export const BannerText = () => {
    return (
        <section className="py-12 text-center">
            <div className="container">
                <div className="bg-gradient-to-t from-primary to-primary/70 text-white rounded-3xl p-8 md:hover:scale-105 duration-500 md:hover:shadow-2xl">
                    <UpdateFollower
                        mouseOptions={{
                            backgroundColor: "black",
                            zIndex: 9999,
                            followSpeed: 0.5,
                            mixBlendMode: "screen",
                            scale: 10,
                        }}
                    >
                        <p className="font-bold text-4xl max-w-[700px] mx-auto leading-normal">
                            Headphone With With Good Quality And affordable.
                        </p>
                    </UpdateFollower>
                </div>
            </div>
        </section>
    );
};
