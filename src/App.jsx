import { UpdateFollower } from "react-mouse-follower";
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Services } from "./components/services/Services";
import { Banner } from "./components/banner/Banner";
import { BannerText } from "./components/banner/BannerText";
import { Blog } from "./components/blog/Blog";
import { Footer } from "./components/footer/Footer";

function App() {
    return (
        <main className="overflow-x-hidden">
            <UpdateFollower
                mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 1.5,
                }}
            >
                <Navbar />
                <Hero />
            </UpdateFollower>
            <UpdateFollower
                mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 999,
                    followSpeed: 1.5,
                }}
            >
                <Services />
                <Banner />
                <BannerText />
                <Blog />
                <Footer />
            </UpdateFollower>
        </main>
    );
}

export default App;
