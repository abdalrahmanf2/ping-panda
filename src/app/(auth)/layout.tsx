import Navbar from "@/components/Navbar";
import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default AuthLayout;
