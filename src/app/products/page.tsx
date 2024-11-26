import Header from "@/components/header";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { products } from "../../../products";

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
        <div className="flex p-5 flex-wrap gap-5 justify-center items-center">
          {products.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="w-80 p-5 bg-background/70 rounded-lg border border-border flex flex-col gap-2"
            >
              <Image
                height={500}
                width={500}
                className="rounded-lg object-cover"
                src={product.image}
                alt={product.name}
              />
              <h1 className="text-xl font-bold">{product.name}</h1>
              <p>{product.description}</p>
              <div className="grid grid-cols-2 gap-3">
                <Link href="/products" className="w-full">
                  <Button className="w-full">Add to Cart</Button>
                </Link>
                <Link href={"/"} className="w-full">
                  <Button variant={"outline"} className="w-full">
                    View Details
                  </Button>
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Produts;
