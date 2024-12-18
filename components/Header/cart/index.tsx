import { Menu, ActionIcon, Button, Badge, Indicator } from "@mantine/core";
import { LuShoppingCart } from "react-icons/lu";
import { CardItemComponent } from "../../Cart/CardItem";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Cart() {
  const carts = useSelector((state: any) => state.cart.items);

  return (
    <Menu shadow="md" width={450}>
      <Menu.Target>
        <Indicator inline label={carts?.length ?? 0} size={16}>
          <ActionIcon
            variant="default"
            size="xl"
            aria-label="Toggle color scheme"
          >
            <LuShoppingCart />
          </ActionIcon>
        </Indicator>
      </Menu.Target>

      <Menu.Dropdown className="!p-4">
        <div className="w-full inline-flex justify-between pb-4">
          <span className="text-base font-bold">Shoping Cart</span>
          <Link href={"/cart"} className="text-base text-blue-700">
            View All
          </Link>
        </div>
        <div className="w-full flex flex-col gap-3">
          {carts?.length ? (
            carts?.map((value: any, index: number) => (
              <CardItemComponent key={index} card={value} />
            ))
          ) : (
            <div className="text-center text-gray-400 py-16">
              Your Shoping Cart is Empty!
            </div>
          )}
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
