import { Clock } from "lucide-react";
import Image from "next/image";

interface DiscordMessageProps {
    title: string;
    event: string;
    content: {
        [key: string]: string;
    };
    timestamp: string;
    username: string;
    userImgSrc: string;
}

const DiscordMessage = ({
    title,
    event,
    content,
    timestamp,
    username,
    userImgSrc,
}: DiscordMessageProps) => {
    const getEventClassName = (event: string) => {
        const e = event.toLowerCase();
        switch (e) {
            case "signup": {
                return "inline-flex order-2 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset bg-green-500/10 text-green-400 ring-green-500/20";
            }
            case "revenue": {
                return "inline-flex order-2 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset bg-yellow-500/10 text-yellow-400 ring-yellow-500/20";
            }
            default:
                return "inline-flex order-2 items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset bg-gray-500/10 text-gray-400 ring-gray-500/20";
        }
    };
    return (
        <div className="flex gap-2 items-start">
            <div className="rounded-full overflow-hidden">
                <Image
                    src={userImgSrc}
                    alt="User Profile Image"
                    width={42}
                    height={42}
                    className="object-fill"
                />
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <p className="font-medium">{username}</p>
                    <div className="bg-brand-600 rounded-md px-2 py-1 text-xs font-semibold">
                        App
                    </div>
                    <p className="text-discord-text-secodary text-xs">
                        {timestamp}
                    </p>
                </div>
                <div className="bg-discord-gray/40 p-4 rounded-sm max-w-xl ">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{title}</h3>
                            <div className={getEventClassName(event)}>
                                {event}
                            </div>
                        </div>
                        <div className="text-sm">
                            {Object.keys(content).map((key) => (
                                <p key={key} className="text-discord-text">
                                    <span className="text-discord-text-secodary">
                                        {key}:{" "}
                                    </span>
                                    {content[key]}
                                </p>
                            ))}
                        </div>
                        <p className="text-sm text-discord-text-secodary flex items-center gap-2">
                            <Clock className="inline-block size-3" />
                            {timestamp}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscordMessage;
