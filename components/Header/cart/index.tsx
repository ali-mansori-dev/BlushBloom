import { Menu, ActionIcon, Button } from "@mantine/core";
import { LuShoppingCart } from "react-icons/lu";
import { CardVertical } from "./CardVertical";

export default function Cart() {
  return (
    <Menu shadow="md" width={450}>
      <Menu.Target>
        <ActionIcon
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
        >
          <LuShoppingCart />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown className="!p-4">
        <div className="pb-4 text-base font-bold">Shooping Cart</div>
        <div className="w-full flex flex-col gap-3">
          <CardVertical />
          <CardVertical />
        </div>
        <div className="w-full flex justify-between pt-4">
          <Button variant="outline" color="dark">
            View Cart
          </Button>
          <Button color="dark">Checkout</Button>
        </div>
      </Menu.Dropdown>
    </Menu>
  );
}
