import { Skeleton } from "@mantine/core";
import React from "react";

const BrandSkeleton = () => {
  return (
    <div className="w-full rounded-lg flex flex-col gap-4">
      <Skeleton height={180} />
    </div>
  );
};

export default BrandSkeleton;
