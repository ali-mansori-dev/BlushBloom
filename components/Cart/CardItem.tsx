import {
  ActionIcon,
  Card,
  ColorSwatch,
  Group,
  Image,
  Text,
} from "@mantine/core";
import classes from "./ArticleCardVertical.module.css";
import { useDispatch } from "react-redux";
import CartService from "@/Sevices/cartServices";
import { LuMinus, LuPlus, LuTrash } from "react-icons/lu";
import { CartItem } from "./CartItem";

export function CardItemComponent({ card }: { card: CartItem }) {
  const dispatch = useDispatch();
  const cartService = new CartService(dispatch);
  // actions
  const increaseToCart = () => cartService.increaseItem(`${card?.id}`);
  const decreasToCart = () => cartService.decreaseItem(`${card?.id}`);
  const deleteToCart = () => cartService.removeItem(`${card?.id}`);

  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        <Image
          src={`https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/BlushBloom/${card?.image_url}`}
          className="w-[70px] h-[70px] object-cover"
          alt="image"
        />
        <div className={classes.body}>
          <Text
            className={`${classes.title} !mb-0 line-clamp-1`}
            mt="xs"
            mb="md"
          >
            {card?.name}
          </Text>
          <div className="flex flex-row gap-3">
            <Text size="lg" c="dimmed">
              $ {card?.price}
            </Text>
            {card?.color?.value && (
              <ColorSwatch color={`${card?.color?.value}`} />
            )}
          </div>
          <Group wrap="nowrap" gap="xs">
            <div className="inline-flex items-center gap-2">
              {card?.quantity > 1 ? (
                <ActionIcon onClick={decreasToCart} size={"lg"}>
                  <LuMinus />
                </ActionIcon>
              ) : (
                <ActionIcon onClick={deleteToCart} size={"lg"}>
                  <LuTrash />
                </ActionIcon>
              )}
              <p className="w-[28px] text-center">{card?.quantity}</p>
              <ActionIcon onClick={increaseToCart} size={"lg"}>
                <LuPlus />
              </ActionIcon>
            </div>
          </Group>
        </div>
      </Group>
    </Card>
  );
}
