import productApis from "@/apis/products.apis";
import type { UseProductsParams } from "@/types/domain/product.type";

import { useQuery } from "@tanstack/react-query";

export const useAllProducts = (params?: UseProductsParams) => {
  const query = useQuery({
    queryKey: ["products", params],
    queryFn: () => productApis.getAllProducts(params || {}),
  });

  return {
    data: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
