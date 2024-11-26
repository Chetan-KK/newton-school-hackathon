import Header from "@/components/header";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionHeading from "@/components/SectionHeading";
import React from "react";

type Props = {};

const Produts = (props: Props) => {
  return (
    <div>
      <div className="fixed -z-30 bg-gradient-to-b from-primary/30 to-background h-screen w-screen left-0 top-0"></div>

      <Header />
      <MaxWidthWrapper>
        <SectionHeading
          className="!text-left p-5 my-5"
          heading={"Explore products"}
          subHeading="find your eyemate here ;)"
        />
      </MaxWidthWrapper>
    </div>
  );
};

export default Produts;
