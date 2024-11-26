import React from "react";
import { ModeToggle } from "./ui/mode-toggle";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="p-5 border-b border-border bg-background/60 backdrop-blur-lg">
      <MaxWidthWrapper className="flex justify-between items-center">
        <Link href={"/"} className="text-2xl font-bold">
          Spectra <span className="text-primary">Store</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={"/cart"}
            className="hover:underline underline-offset-4 hover:text-primary"
          >
            View cart
          </Link>
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
