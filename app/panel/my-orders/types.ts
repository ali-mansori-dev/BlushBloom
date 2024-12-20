interface OrderType {
  id: string;
  created_at: string;
  user_id: string;
  items: [OrderItems];
  delivery_day: string;
  total_price: number;
  status: number;
}
interface OrderItems {
  id: string;
  name: string;
  size: string | null;
  color: string | null;
  price: number;
  quantity: number;
  image_url: string;
  product_id: string;
}
export type { OrderItems, OrderType };
