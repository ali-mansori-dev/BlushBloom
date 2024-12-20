import { CartItem } from "@/components/Cart/CartItem";
import {
  add_to_cart,
  decrease_qty,
  increase_qty,
  remove_from_cart,
} from "@/Features/Cart/cartSlice";
import { open_auth_modal } from "@/Features/Layout/layoutSlice";
import Supabase from "@/lib/helper/ClientSupabase";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";

class CartService {
  dispatch: Dispatch<UnknownAction>;

  constructor(dispatch: Dispatch<UnknownAction>) {
    this.dispatch = dispatch;
  }

  // add to the cart (local and  Supabase)
  async addItem(item: CartItem) {
    const { data: user_data } = await Supabase.auth.getUser();
    if (!user_data.user?.id) return this.dispatch(open_auth_modal());

    // save on Supabase
    const { data, error } = await Supabase.from("bb_cart")
      .insert({
        product_id: item?.product_id,
        size: item?.size,
        color: item?.color,
        quantity: 1,
      })
      .select();

    data && data[0] && this.dispatch(add_to_cart({ id: data[0].id, ...item })); // local (Redux)

    if (error) {
      console.error("Error adding item to Supabase:", error.message);
    } else {
      console.log("Item added to Supabase:", data);
    }
  }

  // decrease qty
  async increaseItem(itemId: any) {
    this.dispatch(increase_qty(itemId)); // local (Redux)

    // update on Supabase
    const { error } = await Supabase.rpc("increment_item_quantity", {
      item_id: itemId,
    });

    if (error) {
      console.error("Error decreasing quantity in Supabase:", error.message);
    }
  }

  // decrease qty
  async decreaseItem(itemId: any) {
    this.dispatch(decrease_qty(itemId)); // local (Redux)

    // update on Supabase
    const { error } = await Supabase.rpc("decrement_item_quantity", {
      item_id: itemId,
    });

    if (error) {
      console.error("Error decreasing quantity in Supabase:", error.message);
    }
  }

  // remove item
  async removeItem(itemId: string) {
    this.dispatch(remove_from_cart(itemId)); // local (Redux)

    // remove from Supabase
    const { error } = await Supabase.from("bb_cart").delete().eq("id", itemId);

    if (error) {
      console.error("Error removing item from Supabase:", error.message);
    }
  }

  // fetch data from Supabase
  async fetchCart() {
    // const { data, error } = await Supabase.from("cart").select("*");
    // if (error) {
    //   console.error("Error fetching cart data:", error.message);
    //   return [];
    // }
    // return data;
  }
}

export default CartService;
