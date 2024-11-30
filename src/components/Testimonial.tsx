import { Star, VerifiedIcon } from "lucide-react";
import Image from "next/image";

interface TestimonialProps {
    testimonial: string;
    name: string;
    username: string;
    userImg: string;
}

const Testimonial = ({
    testimonial,
    name,
    username,
    userImg,
}: TestimonialProps) => {
    return (
        <div className="p-8 lg:p-16 flex flex-col items-center lg:items-start gap-6">
            <div className="space-x-1">
                <Star className="inline-flex text-brand-600 fill-brand-600" />
                <Star className="inline-flex text-brand-600 fill-brand-600" />
                <Star className="inline-flex text-brand-600 fill-brand-600" />
                <Star className="inline-flex text-brand-600 fill-brand-600" />
                <Star className="inline-flex text-brand-600 fill-brand-600" />
            </div>
            <p className="font-medium tracking-tight text-center lg:text-start text-lg">
                {testimonial}
            </p>
            <div className="flex flex-col items-center lg:flex-row gap-4">
                <div className="size-12 rounded-full overflow-hidden">
                    <Image
                        src={userImg}
                        alt="User Image"
                        width={512}
                        height={512}
                        className="size-full object-cover"
                    />
                </div>
                <div className="text-center lg:text-start">
                    <div className="flex justify-center items-center gap-2">
                        <h3 className="font-semibold text-lg">{name}</h3>
                        <VerifiedIcon className="size-5 fill-brand-400" />
                    </div>
                    <p className="text-sm text-gray-500">@{username}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
