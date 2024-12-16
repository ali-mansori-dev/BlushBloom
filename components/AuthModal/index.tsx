"use client";
import React, { useEffect } from "react";
import { Modal, Button } from "@mantine/core";
import Supabase from "@/lib/helper/ClientSupabase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { close_all } from "@/Features/Layout/layoutSlice";
import { log_in, log_out } from "@/Features/Auth/authSlice";

const AuthModal = () => {
  const opend = useSelector((state: any) => state.layout.auth_modal_open);

  const dispatch = useDispatch();

  useEffect(() => {
    const { data: subscription } = Supabase.auth.onAuthStateChange(
      (event, session) => {
        switch (event) {
          case "INITIAL_SESSION":
          case "SIGNED_IN":
            if (session) {
              dispatch(
                log_in({
                  user_info: session.user,
                  access_token: session.access_token,
                })
              );
            }
            break;
          case "SIGNED_OUT":
            dispatch(log_out());
            break;
          default:
            break;
        }
      }
    );

  }, [dispatch]);

  const close_handle = () => dispatch(close_all());

  const handleGoogle = async () => {
    await Supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! },
    });
  };
  const handleGithub = async () => {
    await Supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! },
    });
  };

  return (
    <>
      <Modal
        opened={opend}
        onClose={close_handle}
        title="Login to Account"
        centered
      >
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
