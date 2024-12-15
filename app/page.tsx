"use client";
import BrandsList from "@/components/BrandsList";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import { Container } from "@mantine/core";

export default function Home() {
  return (
    <Container size={"xl"} className="flex flex-col gap-12">
      <div className="flex flex-col gap-7">
        <div className="w-full text-center text-lg font-bold">Categories</div>
        <CategoryList />
      </div>
      <div className="flex flex-col gap-7">
        <div className="w-full text-center text-lg font-bold">Products</div>
        <ProductList />
      </div>
      <div className="flex flex-col gap-7">
        <div className="w-full text-center text-lg font-bold">Brands</div>
        <BrandsList />
      </div>
    </Container>
  );
}
