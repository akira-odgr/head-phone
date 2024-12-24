import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { MouseFollower } from "react-mouse-follower";
import "./index.css";
// import App from "./App.jsx";
import Main from "./utility/MouseFollower.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Main />
    </StrictMode>
);

// const Main = () => {
//     const [isDesktop, setIsDesktop] = useState(window.innerWidth > 540); // 540px以上の判定

//     useEffect(() => {
//         const handleResize = () => {
//             setIsDesktop(window.innerWidth > 540); // ウィンドウサイズに基づいて更新
//         };

//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     return (
//         <StrictMode>
//             {isDesktop ? <MouseFollower /> : null}{" "}
//             {/* 540px以上の時のみMouseFollowerを表示 */}
//             <App />
//         </StrictMode>
//     );
// };

// createRoot(document.getElementById("root")).render(<Main />);
