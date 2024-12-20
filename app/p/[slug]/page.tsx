"use client";
import { useEffect, useState } from "react";
import {
  Button,
  CheckIcon,
  Chip,
  ColorSwatch,
  Container,
  Group,
  Loader,
  Text,
} from "@mantine/core";
import { useParams } from "next/navigation";
import { OptionType, ProductsTableRow } from "@/types/ProductsTableRow";
import Supabase from "@/lib/helper/ClientSupabase";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CartService from "@/Sevices/cartServices";
import Link from "next/link";

interface CartItem {
  id: string;
  name: string;
  price?: number;
  quantity: number;
  image_url: string;
  color?: OptionType;
  size?: OptionType;
}

const Slug = () => {
  // page params
  const params = useParams();
  const slug = params.slug;
  const dispatch = useDispatch();
  const cartService = new CartService(dispatch);

  // states
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cartLoading, setCartLoading] = useState<boolean>(false);
  const [data, setData] = useState<ProductsTableRow>();
  const [color, setColor] = useState<OptionType>();
  const [size, setSize] = useState<OptionType>();
  const [cartItems, setCartItems] = useState<CartItem>();

  const carts = useSelector((state: any) => state.cart.items);

  useEffect(() => {
    if (data && carts) {
      const item = carts.find((item: any) => item.product_id === data?.id);
      item?.id && setCartItems(item);
    }
  }, [carts, data]);

  const handleAddToCart = async (e: any) => {
    setCartLoading(true);
    e.preventDefault(); // Prevent navigation when clicking the button
    await cartService.addItem({
      color: color?.value,
      size: size?.value,
      image_url: `${data?.images[0]}`,
      product_id: `${data?.id}`,
      name: `${data?.name}`,
      price: data?.price,
      quantity: 1,
    });
    setCartLoading(false);
  };

  const handleRemoveFromCart = async () => {
    setCartLoading(true);
    await cartService.removeItem(`${cartItems?.id}`);
    setCartItems(undefined);
    setCartLoading(false);
  };

  useEffect(() => {
    (async function () {
      const products = await Supabase.from("bb_products")
        .select("*")
        .eq("slug", slug)
        .order("created_at", { ascending: false });
      setIsLoading(false);
      products?.data && products?.data?.length > 0 && setData(products.data[0]);
    })();
  }, []);

  useEffect(() => {
    !color && data?.colors?.length && setColor(data?.colors[0]);
  }, [data]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center py-60">
        <Loader type="dots" color="blue" />
      </div>
    );
  }

  return (
    <Container size={"xl"} className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-[380px] flex flex-col gap-4">
        <img
          src={`https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/BlushBloom/${
            data && data?.images[0]
          }`}
          className="lg:w-[380px] h-[380px] object-cover border rounded-lg"
        />
        <div className="w-full inline-flex gap-3">
          {data &&
            data?.images?.map((value: any, index: any) => {
              return (
                <img
                  src={`https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/BlushBloom/${value}`}
                  key={index}
                  className="w-[90px] h-[90px] object-cover border rounded-lg"
                />
              );
            })}
        </div>
      </div>
      <div className="lg:w-2/4 flex flex-col gap-4">
        <div className="text-xl font-bold">{data && data?.name}</div>
        <p className="w-full text-sm text-gray-400 leading-7 line-clamp-4">
          {data && data?.description}
        </p>
        <div className="flex flex-row gap-4">
          <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
            $ {data && data?.price.toFixed(2)}
          </Text>
        </div>
        <hr />

        {data?.colors?.length ? (
          <div className="flex flex-col gap-2 items-start">
            <div className="">Choose Color</div>
            <Group>
              {data?.colors?.map((value, index) => (
                <ColorSwatch
                  key={index}
                  onClick={() => setColor(value)}
                  color={value?.value}
                  className={`${
                    color?.code === value?.code && `outline outline-gray-500`
                  }`}
                >
                  {color?.code === value?.code && (
                    <CheckIcon size={12} color="gray" />
                  )}
                </ColorSwatch>
              ))}
            </Group>
          </div>
        ) : (
          ""
        )}
        {data?.sizes?.length ? (
          <div className="flex flex-col gap-2 items-start">
            <div className="">Choose size</div>
            <Group>
              {data?.sizes?.map((value) => (
                <Chip key={value.code} variant="outline" value="first">
                  {value?.value}
                </Chip>
              ))}
            </Group>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="lg:w-1/4 border border-gray-200 py-4 px-4 rounded-lg">
        {cartItems?.id ? (
          <div className="flex flex-col gap-2">
            <Link href={`/cart`}>
              <Button fullWidth variant="" size="sm">
                Checkout
              </Button>
            </Link>
            <Button
              fullWidth
              variant="outline"
              size="sm"
              loading={cartLoading}
              loaderProps={{ type: "dots" }}
              onClick={handleRemoveFromCart}
            >
              Remove from Cart
            </Button>
          </div>
        ) : (
          <Button
            fullWidth
            size="sm"
            loading={cartLoading}
            loaderProps={{ type: "dots" }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        )}
      </div>
    </Container>
  );
};

export default Slug;
