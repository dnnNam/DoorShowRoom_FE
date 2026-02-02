import productApis from "~/apis/products.apis";

import type { UseProductsParams } from "~/types/domain/product.type";

import { useQuery } from "@tanstack/react-query";

export const useAllProducts = (params: UseProductsParams) => {
  const query = useQuery({
    queryKey: ["products", params],
    queryFn: () => productApis.getAllProducts(params),
    enabled: !!params && Object.keys(params).length > 0,
    staleTime: 5 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    placeholderData: (previousData) => previousData,
  });

  return {
    data: query.data?.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
