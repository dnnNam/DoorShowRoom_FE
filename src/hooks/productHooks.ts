import productApis from "@/apis/products.apis";
import type { UseProductsParams } from "@/types/domain/product.type";

import { useQuery } from "@tanstack/react-query";

export const useAllProducts = (params?: UseProductsParams) => {
  console.log("param nè: ", params);

  const query = useQuery({
    queryKey: ["products", params],
    queryFn: () => {
      const defaultParams: UseProductsParams = {
        CategoryId: [],
        minPrice: 0,
        maxPrice: 50000000,
        Materials: [],
        Colors: [],
      };

      const finalParams = params || defaultParams;

      // ✅ Trim khoảng trắng thừa
      const cleanedParams: UseProductsParams = {
        ...finalParams,
        Materials: finalParams.Materials.map(
          (m) => m.trim() as (typeof finalParams.Materials)[number]
        ),
        Colors: finalParams.Colors.map(
          (c) => c.trim() as (typeof finalParams.Colors)[number]
        ),
      };

      return productApis.getAllProducts(cleanedParams);
    },
  });

  return {
    data: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
