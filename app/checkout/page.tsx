"use client";
import { Button, Container } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { save_order } from "./functions";
import { useRouter } from "next/navigation";
import { clear_cart } from "@/Features/Cart/cartSlice";
import { useDispatch } from "react-redux";

const page = () => {
  const router = useRouter();
  const navigate = (id: string) => {
    router.push(`/payment/${id}`);
  };
  const carts = useSelector((state: any) => state.cart.items);
  const [totalPrice, setTotalPrice] = useState<Number>();
  const [deliveryDay, setDeliveryDay] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const today = new Date();

  // Function to calculate future dates
  const getFutureDate = (daysToAdd: any) => {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + daysToAdd);
    return futureDate;
  };

  // Format dates (e.g., "Thursday, Dec 19, 2024")
  const getDateObject = (date: any) => {
    return {
      weekday: date.toLocaleDateString("en-US", { weekday: "long" }),
      month: date.toLocaleDateString("en-US", { month: "short" }),
      day: date.getDate(), // Extract numeric day
    };
  };

  // Format dates (e.g., "Thursday, Dec 19, 2024")
  const formatDate = (date: any) => {
    if (date === undefined) return;
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const delivery_dates = [
    {
      value: today,
      title: getDateObject(today),
    },
    {
      value: getFutureDate(1),
      title: getDateObject(getFutureDate(1)),
    },
    {
      value: getFutureDate(2),
      title: getDateObject(getFutureDate(2)),
    },
    {
      value: getFutureDate(3),
      title: getDateObject(getFutureDate(3)),
    },
  ];

  useEffect(() => {
    const total = carts.reduce(
      (total: any, item: any) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  }, [carts]);

  const onPayHandle = async () => {
    setLoading(true);
    const data = await save_order({
      delivery_day: deliveryDay,
      items: carts,
      status: 1,
      total_price: totalPrice,
    });
    dispatch(clear_cart());
    data && navigate(data[0]?.id ?? "");
  };

  return (
    <Container size={"xl"} className="flex flex-col gap-12">
      <div className="">Address and Delivery Day</div>
      <div className="w-full flex flex-col lg:flex-row gap-12">
        <div className="w-3/4 flex flex-col gap-6">
          {carts?.length ? (
            <div className="w-full flex flex-row gap-6">
              {carts?.map((value: any, index: number) => (
                <div key={index} className="w-[150px] overflow-hidden">
                  <img
                    src={`https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/BlushBloom/${value?.image_url}`}
                    className="w-[150px] h-[150px] object-cover border border-gray-300 rounded-lg"
                    alt="image"
                  />
                  <div className="pt-2 line-clamp-1">{value.name}</div>
                  <div className="pt-2 text-gray-400 text-sm">
                    $ {value.price}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full text-center text-gray-400 py-16">
              Your Shoping Cart is Empty!
            </div>
          )}
          <div className="">Delivery Day</div>
          <div className="flex flex-row gap-6">
            {delivery_dates.map((item, index) => {
              const isActive =
                formatDate(deliveryDay) === formatDate(item.value);

              return (
                <div
                  key={index}
                  onClick={() => setDeliveryDay(item.value)}
                  className={`flex flex-col items-center border border-gray-100 gap-1 cursor-pointer rounded-md p-3 w-[105px] ${
                    isActive === true && "!border-blue-400"
                  }`}
                >
                  <span className="text-base">{item.title.weekday}</span>
                  <span className="text-base font-bold">{item.title.day}</span>
                  <span className="text-sm">{item.title.month}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/4 flex flex-col gap-3">
          <div className="">
            <span className="font-bold">Total Price: </span>
            {totalPrice && totalPrice.toFixed(2)} $
          </div>
          <Button
            disabled={!deliveryDay}
            fullWidth
            loading={loading}
            loaderProps={{ type: "dots" }}
            onClick={onPayHandle}
          >
            Pay
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default page;
