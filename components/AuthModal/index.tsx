"use client";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import Supabase from "@/lib/helper/ClientSupabase";
// import { useDispatch, useSelector } from "react-redux";
// import { close_all } from "@/slices/layoutSlice";

const AuthModal = () => {
  // const opened = useSelector((state: any) => state.layout.is_auth_modal_open);
  // const dispatch = useDispatch();
  const close = () => 0;

  const handleGoogle = async () => {
    await Supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: "http://localhost:3000/" },
    });
  };
  const handleGithub = async () => {
    await Supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: "http://localhost:3000/" },
    });
  };

  return (
    <>
      <Modal opened={false} onClose={close} title="Login to Account" centered>
        <div className="flex flex-col gap-4">
          <Button onClick={handleGoogle} fullWidth>
            Login With Google
          </Button>
          <Button onClick={handleGithub} fullWidth>
            Login With Github
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default AuthModal;
