import { PropsWithChildren } from "react";
import Icons from "./Icons";
import {
    Gift,
    Headset,
    Menu,
    Mic,
    PlusIcon,
    SearchIcon,
    Settings,
    Smile,
    Sticker,
    X,
} from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import Image from "next/image";

const MockDiscordUI = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex min-h-[800px] w-full max-w-[1200px] bg-discord-background text-white rounded-lg overflow-hidden shadow-xl">
            {/* Server List */}
            <div className="hidden sm:flex flex-col items-center w-[72px] py-3 bg-discord-gray">
                <div className="size-12 flex items-center justify-center bg-discord-brand rounded-2xl cursor-pointer hover:rounded-xl transition-all duration-200">
                    <Icons.discord className="size-3/5" />
                </div>

                <div className="h-[2px] w-8 bg-discord-background my-2 rounded-full" />

                {[...new Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="size-12 mb-3 rounded-3xl flex justify-center items-center select-none cursor-pointer bg-discord-background hover:bg-discord-brand hover:rounded-xl transition-all duration-200"
                    >
                        <span>{String.fromCharCode(65 + i)}</span>
                    </div>
                ))}

                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger className="mt-auto">
                            <div className="group size-12 mb-3 rounded-3xl flex justify-center items-center select-none cursor-pointer bg-discord-background hover:bg-green-600 hover:rounded-xl transition-all duration-200">
                                <PlusIcon className="text-green-600 group-hover:text-white transition" />
                            </div>
                        </TooltipTrigger>
                        <TooltipContent
                            side="right"
                            sideOffset={10}
                            align="center"
                            className="font-bold"
                        >
                            Add a Server
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>

            {/* DM List */}
            <div className="hidden pt-4 w-[240px] bg-[#2B2D31] text-discord-text-secodary lg:flex flex-col gap-4">
                <div className="px-2 flex-shrink-0 h-[48px] shadow-discord w-full">
                    <div className="bg-discord-gray px-2 py-1 rounded-sm w-full select-none cursor-pointer">
                        <span className=" text-sm">
                            Find or start a conversation
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 pl-4 pr-2">
                    <div className="h-[42px] flex items-center gap-4 p-2 hover:bg-discord-background hover:text-discord-text cursor-pointer rounded-md">
                        <Icons.friends className="size-6" />
                        Friends
                    </div>
                    <div className="h-[42px] flex items-center gap-4 p-2 hover:bg-discord-background hover:text-discord-text cursor-pointer rounded-md">
                        <Icons.nitro className="size-6" />
                        Nitro
                    </div>
                    <div className="h-[42px] flex items-center gap-4 p-2 hover:bg-discord-background hover:text-discord-text cursor-pointer rounded-md">
                        <Icons.shop className="size-6" />
                        Shop
                    </div>
                </div>

                <h2 className="px-4 uppercase flex justify-between text-xs select-none hover:text-discord-text">
                    <span className="font-semibold">Direct Messages</span>
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger>
                                <PlusIcon className="size-4 text-discord-text-secodary hover:text-discord-text cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent>Create a DM</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </h2>
                <div className="mx-2 flex flex-col gap-2">
                    <div className="group h-[42px] px-2 py-1 rounded-md select-none cursor-pointer bg-discord-background text-discord-text flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="relative">
                                <Image
                                    src="/brand-asset-profile-picture.png"
                                    alt="PingPanda Avatar"
                                    width={32}
                                    height={32}
                                    className="object-cover rounded-full"
                                />
                                <div className="absolute bottom-0 right-0 size-3 rounded-full bg-green-600" />
                            </div>
                            <span className="text-base">PingPanda</span>
                        </div>
                        <X className="hidden group-hover:inline-flex size-4 text-discord-text-secodary hover:text-discord-text" />
                    </div>

                    {/* Mock DMs */}
                    {[...new Array(4)].map((_, i) => (
                        <MockDM username={`User ${i + 1}`} key={i} />
                    ))}
                </div>

                <div className="bg-discord-gray/50 p-2 mt-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="size-8 bg-discord-brand rounded-full"></div>
                        <div className="flex flex-col">
                            <p className="text-sm">You</p>
                            <p className="text-xs text-discord-text-secodary/60">
                                @your_account
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Mic className="size-5 hover:text-discord-text cursor-pointer transition" />
                        <Headset className="size-5 hover:text-discord-text cursor-pointer transition" />
                        <Settings className="size-5 hover:text-discord-text cursor-pointer transition" />
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col gap-4">
                {/* Header */}
                <div className="px-4 h-16 shadow-discord-sec flex justify-between items-center">
                    <div className="relative flex gap-2 items-center">
                        <Menu className="lg:hidden size-6" />
                        <div className="relative">
                            <Image
                                src="/brand-asset-profile-picture.png"
                                alt="PingPanda Avatar"
                                width={24}
                                height={24}
                                className="object-cover rounded-full"
                            />
                            <div className="absolute bottom-0 right-0 size-2 rounded-full bg-green-600" />
                        </div>
                        <span className="text-base font-medium">PingPanda</span>
                    </div>
                    <div className="hidden text-discord-text/80 md:flex items-center gap-4">
                        <Icons.phone className="size-6 cursor-pointer hover:text-discord-text" />
                        <Icons.camera className="size-6 cursor-pointer hover:text-discord-text" />
                        <Icons.pin className="size-6 cursor-pointer hover:text-discord-text" />
                        <Icons.addFriends className="size-6 cursor-pointer hover:text-discord-text" />
                        <Icons.userProfile className="size-6 text-discord-text-secodary/60" />
                        <div className="w-[144px] cursor-text bg-discord-gray px-2 py-1 rounded-sm flex items-center justify-between">
                            <span className="text-sm select-none">Search</span>
                            <SearchIcon className="size-4" />
                        </div>
                        <Icons.inbox className="size-6 cursor-pointer hover:text-discord-text" />
                        <Icons.help className="size-6 cursor-pointer hover:text-discord-text" />
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 flex flex-col-reverse overflow-y-auto p-4">
                    {children}
                </div>

                {/* Message Input */}
                <div className="mx-4 mb-6 p-4 rounded-lg bg-discord-overlay">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="size-6 cursor-pointer transition hover:bg-discord-text flex items-center justify-center rounded-full p-1 bg-discord-text-secodary">
                                <PlusIcon className="size-auto text-discord-overlay font-bold" />
                            </div>
                            <div className="cursor-text select-none text-discord-text-secodary/60">
                                Message @PingPanda
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Gift className="size-5 text-discord-text hover:text-white cursor-not-allowed hidden sm:block" />
                            <Sticker className="size-5 text-discord-text hover:text-white cursor-not-allowed hidden sm:block" />
                            <Smile className="size-5 text-discord-text hover:text-white cursor-not-allowed hidden sm:block" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MockDM = ({ username }: { username: string }) => {
    return (
        <div className="group h-[42px] px-2 py-1 rounded-md select-none cursor-pointer hover:bg-discord-background hover:text-discord-text flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="relative">
                    <div className="size-8 bg-discord-gray/50 rounded-full" />
                    <div className="absolute -bottom-0 -right-0 size-3 bg-discord-gray border-4 border-discord-background rounded-full" />
                </div>
                <span className="text-base">{username}</span>
            </div>
            <X className="hidden group-hover:inline-flex size-4 text-discord-text-secodary hover:text-discord-text" />
        </div>
    );
};

export default MockDiscordUI;
