import Navbar from "@/components/Navbar";
import { PropsWithChildren } from "react";

const LandingLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default LandingLayout;
