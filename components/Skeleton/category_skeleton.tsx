import { Skeleton } from "@mantine/core";
import React from "react";

const CategorySkeleton = () => {
  return (
    <div className="w-full rounded-lg flex flex-col gap-4">
      <Skeleton height={180} />
      <Skeleton height={20} />
    </div>
  );
};

export default CategorySkeleton;
