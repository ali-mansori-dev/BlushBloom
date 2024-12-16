import Supabase from "@/lib/helper/ClientSupabase";
import { Menu, rem, ActionIcon } from "@mantine/core";
import { UserResponse } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { LuUser, LuLayoutDashboard, LuLogOut } from "react-icons/lu";

export default function UserDropDown() {
  const [user, setUser] = useState<UserResponse>();

  useEffect(() => {
    (async function () {
      setUser(await Supabase.auth.getUser());
      console.log(await Supabase.auth.getUser());
    })();
  }, []);

  return (
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
          <div className="flex flex-col gap-1">
            <span className="text-base font-bold">
              {user?.data?.user?.user_metadata?.full_name}
            </span>
            <span className="text-sm text-gray-500">{user?.data?.user?.email}</span>
          </div>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          color="red"
          leftSection={<LuLogOut style={{ width: rem(14), height: rem(14) }} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
