import { UpdateFollower } from "react-mouse-follower";
import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Services } from "./components/services/Services";

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
                <Services />
            </UpdateFollower>
        </main>
    );
}

export default App;
