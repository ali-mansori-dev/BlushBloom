import { Menu, ActionIcon, Button, Badge } from "@mantine/core";
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
          className="relative overflow-visible"
        >
          <Badge size="xs" circle className="absolute -top-1 -right-1">
            0
          </Badge>
          <LuShoppingCart />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown className="!p-4">
        <div className="pb-4 text-base font-bold">Shoping Cart</div>
        <div className="w-full flex flex-col gap-3">
          <div className="text-center text-gray-400 py-16">
            Your Shoping Cart is Empty!
          </div>

          {/* <CardVertical />
          <CardVertical /> */}
        </div>
        {/* <div className="w-full flex justify-between pt-4">
          <Button variant="outline" color="dark">
            View Cart
          </Button>
          <Button color="dark">Checkout</Button>
        </div> */}
      </Menu.Dropdown>
    </Menu>
  );
}
