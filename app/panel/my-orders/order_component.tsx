import React from "react";
import { OrderType } from "./types";
import { Badge, Button } from "@mantine/core";
import Link from "next/link";

const OrderComponent = ({ data }: { data: OrderType }) => {
  const FormatDate = (dateProps: any) => {
    const date = new Date(dateProps);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="w-full border border-gray-200 flex flex-col rounded-lg overflow-hidden">
      <div className="flex flex-col gap-4 p-4 border-b border-gray-200 text-sm">
        <div className="">
          {data.status == 1 && <Badge color="yellow">Not Paid</Badge>}
          {data.status == 2 && <Badge color="green">Payed</Badge>}
        </div>
        <div className="inline-flex flex-wrap gap-4">
          <div className="">
            <span className="text-gray-500 font-bold">
              {FormatDate(data.delivery_day)}
            </span>
          </div>
          <div className="">
            <span className="text-gray-400">Order Code: </span>
            <span className="text-gray-700 font-bold">{data.id}</span>
          </div>
          <div className="">
            <span className="text-gray-400">Order Total Amount: </span>
            <span className="text-gray-700 font-bold">
              $ {data.total_price}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-4">
        {data?.items?.map((value, index) => (
          <div key={index}>
            <img
              src={`https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/BlushBloom/${value.image_url}`}
              className="w-[100px] h-[100px] border border-gray-200 rounded-md"
            />
          </div>
        ))}
      </div>
      {data.status == 1 && (
        <div className="p-4">
          <Link href={`/payment/${data.id}`}>
            <Button>Pay Order</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderComponent;
