import React from "react";
import { ModeToggle } from "./ui/mode-toggle";
import MaxWidthWrapper from "./max-width-wrapper";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="p-5 border-b border-border">
      <MaxWidthWrapper className="flex justify-between items-center">
        <div>next-src-ts-tailwind-shadcn</div>
        <ModeToggle />
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
