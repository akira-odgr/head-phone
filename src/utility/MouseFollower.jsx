import { useEffect, useState } from "react";
import { MouseFollower } from "react-mouse-follower";
import App from "../App";

const Main = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768); // 540px以上の判定

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768); // ウィンドウサイズに基づいて更新
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {isDesktop ? <MouseFollower /> : null}{" "}
            {/* 540px以上の時のみMouseFollowerを表示 */}
            <App />
        </>
    );
};

export default Main; // Mainコンポーネントをエクスポート
