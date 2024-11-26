"use client";

import Header from "@/components/header";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SectionHeading from "@/components/SectionHeading";
import { useParams } from "next/navigation";
import React from "react";
import { products } from "../../../../products";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {};

const Product = (props: Props) => {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === parseInt(id as string)
  );

  console.log(product);

  return (
    <div>
      <Header />
      <div className="fixed -z-30 bg-gradient-to-b from-primary/30 to-background h-screen w-screen left-0 top-0"></div>
      <MaxWidthWrapper className="p-5">
        <SectionHeading
          className="!text-left p-5 my-5"
          heading={product?.name}
          subHeading={product?.description}
        />
        <Image
          height={500}
          width={500}
          className="bg-red-200 border border-border rounded-lg"
          src={product?.image as string}
          alt="image"
        />
        <h3 className="text-3xl font-bold mt-5 mb-5">
          Price: <span className="text-primary">{product?.price}$</span>
        </h3>

        <Button>Add to Cart</Button>
      </MaxWidthWrapper>
    </div>
  );
};

export default Product;
