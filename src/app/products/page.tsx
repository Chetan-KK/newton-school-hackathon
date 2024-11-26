"use client";

import Header from "@/components/header";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { products } from "../../../products";
import useCartStore from "@/lib/cartStore";

type Props = {};

const Produts = (props: Props) => {
  const { addProduct, removeProduct, getProductIds } = useCartStore();

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
            <div
              key={product.id}
              className="w-80 p-5 bg-background/70 rounded-lg border border-border flex flex-col gap-2"
            >
              <Link href={`/products/${product.id}`}>
                <Image
                  height={500}
                  width={500}
                  className="rounded-lg object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </Link>
              <h1 className="text-xl font-bold">{product.name}</h1>
              <p>{product.description}</p>
              <h3 className="text-3xl font-bold mt-5 mb-5">
                Price: <span className="text-primary">{product?.price}$</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  onClick={() => {
                    addProduct(product.id);
                  }}
                  className="w-full"
                >
                  Add to Cart
                </Button>
                <Link href={"/"} className="w-full">
                  <Button variant={"outline"} className="w-full">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Produts;
