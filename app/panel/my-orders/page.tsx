"use client";
import Supabase from "@/lib/helper/ClientSupabase";
import { Container, Loader, Skeleton } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { OrderType } from "./types";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import OrderComponent from "./order_component";

const page = () => {
  const [data, setData] = useState<PostgrestSingleResponse<OrderType[]>>();
  useEffect(() => {
    (async function () {
      const orders = await Supabase.from("bb_orders")
        .select()
        .eq("user_id", (await Supabase.auth.getUser()).data.user?.id);
      setData(orders);
    })();
  }, []);

  return (
    <Container
      size={"xl"}
      className="flex flex-col items-center justify-center gap-10"
    >
      {data ? (
        data?.data?.map((item: OrderType, index: number) => (
          <OrderComponent key={index} data={item} />
        ))
      ) : (
        <div className="w-full h-full flex items-center justify-center py-60">
          <Loader type="dots" color="blue" />
        </div>
      )}
    </Container>
  );
};

export default page;
