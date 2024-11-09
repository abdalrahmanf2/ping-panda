import Heading from "@/components/Heading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ShinyButton from "@/components/ShinyButton";
import { Check } from "lucide-react";

const Home = () => {
    return (
        <>
            <section className="py-24 sm:py-32 bg-brand-25">
                <MaxWidthWrapper className="text-center">
                    <div className="relative mx-auto text-center flex flex-col items-center gap-10">
                        <Heading>
                            <span>Real-Time SaaS Insights,</span>
                            <br />
                            <span className="bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                                Delivered to Your Discord
                            </span>
                        </Heading>

                        <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
                            PingPanda is the easiest way to monitor your SaaS.
                            Get instant notifications for{" "}
                            <span className="text-gray-700 font-semibold">
                                sales, new users, or any other event
                            </span>
                            sent directly to your Discord.
                        </p>

                        <ul className="space-y-2 text-start text-base/7 text-gray-600">
                            {[
                                "Real-Time Discord alerts for critical events",
                                "Buy once, use forever",
                                "Track sales, new users, or any other event",
                            ].map((item, index) => (
                                <li className="" key={index}>
                                    <Check className="inline size-5 text-brand-700 mr-2" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="w-full max-w-80">
                            <ShinyButton
                                href="/sign-up"
                                className="h-14 w-full text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
                            >
                                Start For Free Today
                            </ShinyButton>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
        </>
    );
};

export default Home;
