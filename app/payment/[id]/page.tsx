"use client";
import { Container, Loader } from "@mantine/core";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import Supabase from "@/lib/helper/ClientSupabase";
import { checkout } from "./functions";

const page = () => {
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    (async function () {
      const site_url = `${process.env.NEXT_PUBLIC_URL}`;
      if (!id) return;
      const { data } = await Supabase.from("bb_orders").select().eq("id", id);
      if (data) {
        const items = await data[0].items.map((value: any) => {
          return {
            name: value.name,
            quantity: value.quantity,
            price: +value.price,
          };
        });
        checkout(items, site_url, id);
      }
    })();
  }, [id]);

  return (
    <Container
      size={"xl"}
      className="flex flex-col items-center justify-center gap-12"
    >
      <div className="flex flex-col justify-center items-center gap-3 py-40">
        <Loader color="blue" />
        <div className="font-bold">Redirecting to Payment</div>
      </div>
    </Container>
  );
};

export default page;
