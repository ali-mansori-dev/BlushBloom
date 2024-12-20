"use client";
import { Button, Container } from "@mantine/core";
import Link from "next/link";
import React, { useEffect } from "react";
import { LuXCircle } from "react-icons/lu";
import { useParams } from "next/navigation";
import Supabase from "@/lib/helper/ClientSupabase";

const page = () => {
  const params = useParams();
  const id = params.id;

  return (
    <Container
      size={"xl"}
      className="flex flex-col items-center justify-center gap-12"
    >
      <div className="flex flex-col justify-center items-center gap-3 py-40">
        <span className="text-red-600">
          <LuXCircle size={60} />
        </span>
        <div className="font-bold">Your order failed!</div>
        <div className="text-sm text-gray-400">you can pay it later!</div>
        <div className="inline-flex gap-4 pt-4">
          <Link href={`/`}>
            <Button variant="outline">Home Page</Button>
          </Link>
          <Link href={`/panel/my-orders`}>
            <Button variant="filled">Check Order</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default page;
