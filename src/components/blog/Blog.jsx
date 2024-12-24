import { UpdateFollower } from "react-mouse-follower";
import { blogData } from "./blogData";

export const Blog = () => {
    return (
        <section>
            <div className="container my-14">
                <h1 className="text-3xl font-bold text-center font-poppins pb-8">
                    Blog
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {blogData.map((item) => {
                        return (
                            <UpdateFollower
                                key={item.id}
                                mouseOptions={{
                                    backgroundColor: "black",
                                    zIndex: 9999,
                                    followSpeed: 0.5,
                                    text: "read",
                                    textFontSize: "3px",
                                    scale: 5,
                                }}
                            >
                                <div className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300">
                                    <img src={item.image} alt="" />
                                    <div>
                                        <h1 className="text-xl font-bold line-clamp-2">
                                            {item.title}
                                        </h1>
                                        <p className="line-clamp-2">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </UpdateFollower>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
