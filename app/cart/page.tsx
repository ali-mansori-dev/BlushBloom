"use client";
import { CardItemComponent } from "@/components/Cart/CardItem";
import { Button, Container } from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const carts = useSelector((state: any) => state.cart.items);
  const [totalPrice, setTotalPrice] = useState<Number>();

  useEffect(() => {
    const total = carts.reduce(
      (total: any, item: any) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [carts]);

  return (
    <Container size={"xl"} className="flex flex-col lg:flex-row gap-12">
      <div className="w-3/4">
        {carts?.length ? (
          <div className="w-full flex flex-col gap-3">
            {carts?.map((value: any, index: number) => (
              <CardItemComponent key={index} card={value} />
            ))}
          </div>
        ) : (
          <div className="w-full text-center text-gray-400 py-16">
            Your Shoping Cart is Empty!
          </div>
        )}
      </div>
      <div className="w-1/4 flex flex-col gap-3">
        <div className="">
          <span className="font-bold">Total Price: </span>
          {totalPrice && totalPrice.toFixed(2)} $
        </div>
        <Link href={`/checkout`}>
          <Button fullWidth>Checkout</Button>
        </Link>
      </div>
    </Container>
  );
};

export default page;
