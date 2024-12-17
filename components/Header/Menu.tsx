import { log_out } from "@/Features/Auth/authSlice";
import { open_auth_modal } from "@/Features/Layout/layoutSlice";
import Supabase from "@/lib/helper/ClientSupabase";
import { Menu, rem, ActionIcon } from "@mantine/core";
import { UserResponse } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { LuUser, LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function UserDropDown() {
  const [user, setUser] = useState<UserResponse>();
  const dispatch = useDispatch();

  const is_authed = useSelector((state: any) => state.auth.is_authed);

  const open_auth_modal_handle = () => dispatch(open_auth_modal());
  const logout_handle = async () => {
    await Supabase.auth.signOut();
    dispatch(log_out());
  };

  useEffect(() => {
    (async function () {
      setUser(await Supabase.auth.getUser());
      console.log(await Supabase.auth.getUser());
    })();
  }, []);

  return is_authed ? (
    <Menu shadow="md">
      <Menu.Target>
        <ActionIcon
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
        >
          <LuUser />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <LuLayoutDashboard style={{ width: rem(14), height: rem(14) }} />
          }
        >
          <div className="flex flex-col gap-0">
            <span className="text-base font-bold">
              {user?.data?.user?.user_metadata?.full_name}
            </span>
            <span className="text-sm text-gray-500">
              {user?.data?.user?.email}
            </span>
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          onClick={logout_handle}
          color="red"
          leftSection={<LuLogOut style={{ width: rem(14), height: rem(14) }} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  ) : (
    <ActionIcon
      onClick={open_auth_modal_handle}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      <LuUser />
    </ActionIcon>
  );
}
