import type {
  Product,
  ProductListReponse,
  SuccessResponse,
} from "~/types/api/product.type";
import type { UseProductsParams } from "~/types/domain/product.type";

import http from "~/utils/http";

const productApis = {
  getAllProducts(query: UseProductsParams) {
    return http.get<SuccessResponse<ProductListReponse>>("/products", {
      params: query,
    });
  },

  getProductById(productId: number) {
    return http.get<SuccessResponse<Product>>(`/products/${productId}`);
  },
};
export default productApis;
