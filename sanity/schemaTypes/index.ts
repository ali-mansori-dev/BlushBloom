import { type SchemaTypeDefinition } from "sanity";
import { product } from "../schemas/product-schema";
import { categoriy } from "../schemas/category-schema";
import { slide } from "../schemas/slide-schema";
import { brand } from "../schemas/brand-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, categoriy, slide, brand],
};
