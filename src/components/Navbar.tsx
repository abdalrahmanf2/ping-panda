import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { SignOutButton } from "@clerk/nextjs";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
    const user = false;

    return (
        <header className="sticky z-50 h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
            <nav>
                <MaxWidthWrapper>
                    <div className="flex h-16 items-center justify-between">
                        <Link href="/" className="flex font-semibold">
                            Ping<span className="text-brand-700">Panda</span>
                        </Link>

                        <div className="h-full flex items-center gap-4">
                            {user ? (
                                <>
                                    <SignOutButton>
                                        <Button size="sm" variant="ghost">
                                            Sign out
                                        </Button>
                                    </SignOutButton>
                                    <Link
                                        href="/dashboard"
                                        className={buttonVariants({
                                            size: "sm",
                                        })}
                                    >
                                        Dashboard
                                        <ArrowRight className="size-4" />
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="#pricing"
                                        className={buttonVariants({
                                            size: "sm",
                                            variant: "ghost",
                                        })}
                                    >
                                        Pricing
                                    </Link>
                                    <Link
                                        href="/sign-in"
                                        className={buttonVariants({
                                            size: "sm",
                                            variant: "ghost",
                                        })}
                                    >
                                        Sign in
                                    </Link>
                                    <div className="w-px h-8 bg-gray-200" />
                                    <Link
                                        href="/sign-in"
                                        className={buttonVariants({
                                            size: "sm",
                                        })}
                                    >
                                        Sign Up
                                        <ArrowRight className="size-4" />
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </MaxWidthWrapper>
            </nav>
        </header>
    );
};

export default Navbar;
