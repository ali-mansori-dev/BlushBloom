import { Button, Container, Loader } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { LuCheck, LuCheckCircle } from "react-icons/lu";

const page = () => {
  return (
    <Container
      size={"xl"}
      className="flex flex-col items-center justify-center gap-12"
    >
      <div className="flex flex-col justify-center items-center gap-3 py-40">
        <span className="text-green-600">
          <LuCheckCircle size={60} />
        </span>
        <div className="font-bold">Thanks you for your ordering!</div>
        <div className="text-sm text-gray-400">
          we send you your order in delivery day!
        </div>
        <div className="inline-flex gap-4 pt-4">
          <Link href={`/`}>
            <Button variant="outline">Home Page</Button>
          </Link>
          <Link href={`/panel/my-orders`}>
            <Button variant="filled">Check Status</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default page;
