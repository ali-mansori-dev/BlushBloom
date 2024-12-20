import { Skeleton } from "@mantine/core";
import React from "react";

const CartSkeleton = () => {
  return (
    <div className="w-full border border-gray-200 p-4 rounded-lg flex flex-col gap-4">
      <Skeleton height={180} />
      <Skeleton height={20} />
      <Skeleton height={20} />
      <Skeleton height={20} />
    </div>
  );
};

export default CartSkeleton;
