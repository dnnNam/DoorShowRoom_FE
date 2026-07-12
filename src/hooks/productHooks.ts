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
  console.log(query?.data?.data);

  return {
    data: query.data?.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};

export const useFilterOptions = () => {
  const query = useQuery({
    queryKey: ["filter-options"],
    queryFn: () => productApis.getFilterOptions(),
    staleTime: 10 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  return {
    categories: query.data?.data?.data?.categories ?? [],
    colors: query.data?.data?.data?.colors ?? [],
    materials: query.data?.data?.data?.materials ?? [],
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
