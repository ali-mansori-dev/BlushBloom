import Supabase from "@/lib/helper/ClientSupabase";

interface PropTypes {
  items: Array<any>;
  delivery_day: Date;
  total_price?: Number;
  status: Number;
}

export async function save_order({
  delivery_day,
  items,
  status,
  total_price,
}: PropTypes) {
  const { data } = await Supabase.from("bb_orders")
    .insert({
      items,
      delivery_day,
      total_price,
      status,
    })
    .select();

  items.map(
    async (item) => await Supabase.from("bb_cart").delete().eq("id", item.id)
  );
  return data;
}
