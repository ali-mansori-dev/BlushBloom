import { ActionIcon, Card, Group, Image, Text } from "@mantine/core";
import { ProductsTableRow } from "@/types/ProductsTableRow";
import { LuPlus, LuStar, LuTrash } from "react-icons/lu";
import Link from "next/link";
import { useDispatch } from "react-redux";
import CartService from "@/Sevices/cartServices";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../Cart/CartItem";

export function FeaturesCard({ product }: { product: ProductsTableRow }) {
  const dispatch = useDispatch();
  const cartService = new CartService(dispatch);

  const [cartItems, setCartItems] = useState<CartItem>();

  const carts = useSelector((state: any) => state.cart.items);

  useEffect(() => {
    const item = carts.find((item: any) => item.product_id === product?.id);
    item?.id && setCartItems(item);
  }, [carts]);

  const handleAddToCart = (e: any) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    cartService.addItem({
      color: product?.colors[0]?.value,
      size: product?.sizes[0]?.value,
      image_url: `${product?.images[0]}`,
      product_id: `${product?.id}`,
      name: `${product?.name}`,
      price: product?.price,
      quantity: 1,
    });
  };

  const handleRemoveFromCart = (e: any) => {
    e.preventDefault();
    cartService.removeItem(`${cartItems?.id}`);
    setCartItems(undefined);
  };

  return (
    <Link href={`/p/${product?.slug}`}>
      <Card
        withBorder
        radius="md"
        className={`bg-white border border-gray-200`}
      >
        <Card.Section
          className={"flex items-center justify-center bg-white py-4"}
        >
          <Image
            src={`https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/BlushBloom/${product.images[0]}`}
            alt={product?.name}
            className="h-[180px]"
          />
        </Card.Section>

        <Card.Section
          className={`flex flex-col gap-4 justify-between border-t border-gray-300 py-1 px-4`}
          mt="md"
        >
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <LuStar fill="#faaf00" color="#faaf00" />
              <span className="text-xs">4.0</span>
            </div>
            <span className="text-sm">My</span>
          </div>
          <div className="w-full line-clamp-1">
            <Text fw={400}>{product?.name}</Text>
          </div>
        </Card.Section>

        <Card.Section className={` p-4`}>
          <Group gap={30} justify="space-between">
            <div className="">
              <Text fz="lg" fw={700} style={{ lineHeight: 1 }}>
                $ {product.price.toFixed(2)}
              </Text>
            </div>

            {cartItems?.product_id ? (
              <ActionIcon
                variant="filled"
                aria-label="Settings"
                onClick={handleRemoveFromCart}
              >
                <LuTrash />
              </ActionIcon>
            ) : (
              <ActionIcon
                variant="outline"
                aria-label="Settings"
                onClick={handleAddToCart}
              >
                <LuPlus />
              </ActionIcon>
            )}
          </Group>
        </Card.Section>
      </Card>
    </Link>
  );
}
