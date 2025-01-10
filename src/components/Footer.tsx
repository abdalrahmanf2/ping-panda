import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  const curYear = new Date().getFullYear();

  return (
    <footer className="p-8 bg-brand-25">
      <MaxWidthWrapper className="text-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <p className="font-semibold">
          Ping<span className="text-brand-700">Panda</span>
        </p>
        <p className="text-muted-foreground">
          © {curYear} all rights reserved{" "}
        </p>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
