import type {
  FilterOptionsResponse,
  Product,
  ProductListReponse,
  SuccessResponse,
} from "~/types/api/product.type";
import type { UseProductsParams } from "~/types/domain/product.type";

import http from "~/utils/http";

const productApis = {
  getAllProducts(query: UseProductsParams) {
    return http.get<SuccessResponse<ProductListReponse>>("/api/products", {
      params: query,
    });
  },

  getProductById(productId: number) {
    return http.get<SuccessResponse<Product>>(`/api/products/${productId}`);
  },
  getFilterOptions() {
    return http.get<SuccessResponse<FilterOptionsResponse>>(
      "/api/products/filter-options",
    );
  },
};
export default productApis;
