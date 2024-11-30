import DiscordMessage from "@/components/DiscordMessage";
import Heading from "@/components/Heading";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MockDiscordUI from "@/components/MockDiscordUI";
import ShinyButton from "@/components/ShinyButton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AnimatedList, AnimatedListItem } from "@/components/ui/animated-list";
import { Check, Star, VerifiedIcon } from "lucide-react";
import Image from "next/image";
import Testimonial from "@/components/Testimonial";

const CODE_SNIPPET = `
await fetch("http://localhost:3000/api/v1/events", {
  method: "POST",
  body: JSON.stringify({
    category: "sale",
    fields: {
      plan: "PRO",
      email: "zoe.martinez2001@email.com",
      amount: 49.00
    }
  }),
  headers: {
    Authorization: "Bearer <YOUR_API_KEY>"
  }
})
`;

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
                    <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
                        {/* First Bento Grid Item */}
                        <div className="lg:order-2 bg-white p-8 rounded-t-[2rem] rounded-b-lg lg:rounded-lg ring ring-gray-100 border border-gray-200 flex flex-col items-center gap-4 text-center lg:text-start">
                            <div className="space-y-2">
                                <h3 className="text-brand-950 font-medium tracking-tight">
                                    Track Any Event
                                </h3>
                                <p className="max-w-lg text-sm/6 text-gray-700">
                                    From new user signups to successful
                                    payments, PingPanda notifies you for all
                                    critical events in your SaaS.
                                </p>
                            </div>
                            <Image
                                src="/bento-any-event.png"
                                alt="Bento any event img"
                                width={300}
                                height={100}
                                className="mt-4"
                            />
                        </div>

                        {/* Second Bento Grid Item */}
                        <div className="lg:row-span-2 lg:order-1 bg-white rounded-lg  lg:rounded-l-[2rem] ring ring-gray-100 border border-gray-200 flex flex-col items-center gap-2 text-center lg:text-start overflow-hidden">
                            <div className="space-y-2 px-8 pt-12">
                                <h3 className="text-brand-950 font-medium tracking-tight">
                                    Real-time Notifications
                                </h3>
                                <p className="max-w-lg text-sm/6 text-gray-700">
                                    Get notified about critical events the
                                    moment they happen, no matter if you&apos;re
                                    at home or on the go.
                                </p>
                            </div>
                            <div className="relative mx-auto w-full max-w-sm min-h-[30rem] [container-type:inline-size] ">
                                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[15cqw] border-t-[15px] border-x-[15px] border-gray-700 bg-gray-700">
                                    <Image
                                        src="/phone-screen.png"
                                        alt="Phone Screenshot from Discord"
                                        width={300}
                                        height={430}
                                        className="size-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Third Bento Grid Item */}
                        <div className="lg:row-start-2 lg:col-start-2 bg-white p-8 rounded-lg ring ring-gray-100 border border-gray-200 flex flex-col items-center gap-4 text-center lg:text-start">
                            <div className="space-y-2">
                                <h3 className="text-brand-950 font-medium tracking-tight">
                                    Track Any Properties
                                </h3>
                                <p className="max-w-lg text-sm/6 text-gray-700">
                                    Add any custom data you like to an event,
                                    such as a user email, a purchase amount or
                                    an exceeded quota.
                                </p>
                            </div>
                            <Image
                                src="/bento-custom-data.png"
                                alt="Bento any event img"
                                width={300}
                                height={100}
                                className="mt-4"
                            />
                        </div>

                        {/* Fourth Bento Grid Item */}
                        <div className="lg:row-span-2 lg:order-4 bg-white rounded-t-lg rounded-b-[2rem] lg:rounded-r-[2rem] ring ring-gray-100 border border-gray-200 flex flex-col items-center gap-2 text-center lg:text-start overflow-hidden">
                            <div className="space-y-2 px-8 pt-8">
                                <h3 className="text-brand-950 font-medium tracking-tight">
                                    Easy Integration
                                </h3>
                                <p className="max-w-lg text-sm/6 text-gray-700">
                                    Connect PingPanda with your existing
                                    workflows in minutes and call our intuitive
                                    logging API from any language.
                                </p>
                            </div>
                            <div className="relative w-full min-h-[30rem] grow shadow-2xl">
                                <div className="absolute bottom-0 left-10 right-0 top-10 rounded-tl-xl overflow-hidden mt-2 bg-gray-900">
                                    <div className="flex bg-gray-800/40 text-white text-sm font-medium border-b border-b-white/10">
                                        <div className="bg-white/5 px-4 py-2 -mb-px border-r border-r-white/20 border-b border-b-white/10">
                                            pingpanda.js
                                        </div>
                                    </div>
                                    <div className="overflow-hidden">
                                        <div className="max-h-[30rem]">
                                            <SyntaxHighlighter
                                                style={{
                                                    ...oneDark,
                                                    'pre[class*="language-"]': {
                                                        ...oneDark[
                                                            'pre[class*="language-"]'
                                                        ],
                                                        background:
                                                            "transparent",
                                                        overflow: "hidden",
                                                    },
                                                    'code[class*="language-"]':
                                                        {
                                                            ...oneDark[
                                                                'code[class*="language-"]'
                                                            ],
                                                            background:
                                                                "transparent",
                                                        },
                                                }}
                                                language="typescript"
                                            >
                                                {CODE_SNIPPET}
                                            </SyntaxHighlighter>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            <section className="py-24 sm:py-32 bg-white">
                <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
                    <div>
                        <h2 className="text-center text-base/7 font-semibold text-brand-600">
                            Real-World Experiences
                        </h2>
                        <Heading>What our customers say</Heading>
                    </div>
                    <div className="grid gap-4 lg:grid-cols-2 bg-brand-25 rounded-2xl divide-y divide-gray-200 lg:divide-y-0 lg:divide-x">
                        <Testimonial
                            testimonial="PingPanda has been a game-changer for me. I've been using it for two months now and seeing sales pop up in real-time is super satisfying."
                            name="Freya Larsson"
                            username="itsfreya"
                            userImg="/user-2.png"
                        />
                        <Testimonial
                            testimonial="PingPanda's been paying off for our SaaS. Nice to have simple way to see how we're doing day-to-day. Definitely makes our lives easier."
                            name="Kai Durant"
                            username="kdurant_"
                            userImg="/user-1.png"
                        />
                    </div>
                    <ShinyButton
                        href="/sign-up"
                        className="h-14 w-full max-w-xs text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
                    >
                        Start For Free Today
                    </ShinyButton>
                </MaxWidthWrapper>
            </section>
            <section></section>
        </>
    );
};

export default Home;
