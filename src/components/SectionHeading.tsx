import React from "react";

const SectionHeading = ({ heading, subHeading, className }: any) => {
  return (
    <div className={`text-center my-5 p-20 ${className}`}>
      <h1 className="font-bold text-4xl mb-5">{heading}</h1>
      <p className="text-muted-foreground">{subHeading}</p>
    </div>
  );
};

export default SectionHeading;
