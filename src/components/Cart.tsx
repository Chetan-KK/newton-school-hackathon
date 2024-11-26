"use client";

import useCartStore from "@/lib/cartStore";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { products } from "../../products";
import Image from "next/image";

type Props = {};

const Cart = (props: Props) => {
  const { addProduct, removeProduct, getProductIds } = useCartStore();

  const [cartOpen, setCartOpen] = useState(false);

  // Get IDs of products in the cart
  const productIdsInCart = getProductIds();

  // Filter products that are in the cart
  const productsInCart = products.filter((product) =>
    productIdsInCart.includes(product.id)
  );

  const handleRemove = (id: number) => {
    removeProduct(id); // Remove product by ID
  };
  return (
    <div>
      <Button
        className="fixed bottom-5 right-5"
        onClick={() => {
          setCartOpen(true);
        }}
      >
        show cart ({productIdsInCart.length})
      </Button>
      {cartOpen && (
        <div className="fixed right-0 top-0 z-50 h-screen w-96 bg-background flex flex-col gap-5">
          <Button
            className="m-5 w-min"
            onClick={() => {
              setCartOpen(false);
            }}
          >
            X
          </Button>
          <h1 className="text-4xl font-bold ml-4">Cart</h1>
          {productsInCart.map((product, _) => (
            <div key={_} className="flex gap-3 border-b border-border p-5">
              <Image
                height={100}
                width={100}
                className="border border-border rounded-lg object-cover"
                src={product?.image as string}
                alt="image"
              />
              <div>
                <h1 className="font-bold text-xl">{product.name}</h1>
                <Button
                  onClick={() => {
                    handleRemove(product.id);
                  }}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
          <Button>Checkout</Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
