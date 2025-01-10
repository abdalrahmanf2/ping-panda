import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { PropsWithChildren } from "react";

const LandingLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
