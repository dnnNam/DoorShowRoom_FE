import type { Product } from "@/types/api/product.type";
import http from "@/utils/http";

const productApis = {
  getAllProducts() {
    return http.get<Product[]>("/products");
  },
};
export default productApis;
