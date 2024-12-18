import { OptionType } from "@/types/ProductsTableRow";

export interface CartItem {
  id?: string;
  product_id?: string;
  name?: string;
  price?: number;
  quantity: number;
  image_url: string;
  color?: string;
  size?: string;
}
