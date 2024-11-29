import DiscordMessage from "@/components/DiscordMessage";
import Heading from "@/components/Heading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MockDiscordUI from "@/components/MockDiscordUI";
import ShinyButton from "@/components/ShinyButton";
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list";
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

            <section className="relative bg-brand-25 pb-4">
                <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
                <MaxWidthWrapper className="relative">
                    <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                        <MockDiscordUI>
                            <AnimatedList>
                                <AnimatedListItem>
                                    <DiscordMessage
                                        title="👤 New user signed up"
                                        event="SignUp"
                                        content={{
                                            Name: "Seif Ihab",
                                            Email: "7ag.seif@gmail.com",
                                        }}
                                        timestamp="Today at 6:13PM"
                                        userImgSrc="/brand-asset-profile-picture.png"
                                        username="PingPanda"
                                    />
                                </AnimatedListItem>
                                <AnimatedListItem>
                                    <DiscordMessage
                                        title="💰 Payment received"
                                        event="Revenue"
                                        content={{
                                            Amount: "$49.00",
                                            Email: "mazenhassan55@gmail.com",
                                            Plan: "PRO",
                                        }}
                                        timestamp="Today at 8:13AM"
                                        userImgSrc="/brand-asset-profile-picture.png"
                                        username="PingPanda"
                                    />
                                </AnimatedListItem>
                                <AnimatedListItem>
                                    <DiscordMessage
                                        title="🚀 Revenue Milestone Achieved"
                                        event="Milestone"
                                        content={{
                                            "Reccuring Revenue": "$5,000 USD",
                                            Growth: "+8.2%",
                                        }}
                                        timestamp="Today at 5:11AM"
                                        userImgSrc="/brand-asset-profile-picture.png"
                                        username="PingPanda"
                                    />
                                </AnimatedListItem>
                            </AnimatedList>
                        </MockDiscordUI>
                    </div>
                </MaxWidthWrapper>
            </section>

            <section className="relative py-24 sm:py-32 bg-brand-25">
                <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
                    <div>
                        <h2 className="text-center text-base/7 font-semibold text-brand-600">
                            Intuitive Monitoring
                        </h2>
                        <Heading>Stay ahead with real-time insights</Heading>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section></section>
            <section></section>
        </>
    );
};

export default Home;
