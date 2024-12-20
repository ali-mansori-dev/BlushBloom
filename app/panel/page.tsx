"use client";
import { Button, Container } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const { user_info } = useSelector((redux: any) => redux.auth);
  
  return (
    <Container
      size={"xl"}
      className="flex flex-col items-center justify-center gap-12"
    >
      <div className="w-full flex flex-col items-center gap-3 border-gray-300 rounded-md text-gray-700">
        <img
          src={user_info?.user_metadata?.avatar_url}
          onError={(e: any) =>
            (e.target.src = `https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/person-circle-outline.svg
          `)
          }
          className="w-12 h-w-12 rounded-full"
          alt="avatar_pictures"
        />
        <div className="flex flex-col">
          <span className="text-base w-full text-center">
            {user_info?.user_metadata?.full_name}
          </span>
          <span className="text-xs w-full line-clamp-1 text-center">
            {user_info?.phone || user_info?.email}
          </span>
        </div>
        <div className="">
          <Link href={`/panel/my-orders`}>
            <Button variant="outline">My Orders</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default page;
