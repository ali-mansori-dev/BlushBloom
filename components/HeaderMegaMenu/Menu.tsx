import { Menu, rem, ActionIcon } from "@mantine/core";
import { LuUser, LuLayoutDashboard, LuLogOut } from "react-icons/lu";

export default function UserDropDown() {
  return (
    <Menu shadow="md" width={200}>
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
          My Dashboard
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
