export type ProductsTableRow = {
  id: number;
  name: string;
  slug: string;
  price: number;
  images: [string];
  colors: [OptionType];
  sizes: [OptionType];
  description: string;
  created_at: string;
};
export interface OptionType {
  code: number;
  value: string;
}
