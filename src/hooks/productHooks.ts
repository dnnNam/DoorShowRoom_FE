import productApis from "@/apis/products.apis";
import { defaultParams } from "@/constants/filter";
import { useProductStore } from "@/stores/productStore";
import type { UseProductsParams } from "@/types/domain/product.type";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export const useAllProducts = (params: UseProductsParams) => {
  const setProducts = useProductStore((s) => s.setProducts);
  const query = useQuery({
    queryKey: ["products", params],
    queryFn: () => {
      const finalParams = params || defaultParams;

      // Trim khoảng trắng thừa
      const cleanedParams: UseProductsParams = {
        ...finalParams,

        //
        ...(finalParams?.Keyword?.trim()
          ? { Keyword: finalParams.Keyword.trim() }
          : {}),

        Materials: finalParams.Materials?.map(
          (m) => m.trim() as (typeof finalParams.Materials)[number],
        ),
        Colors: finalParams.Colors?.map(
          (c) => c.trim() as (typeof finalParams.Colors)[number],
        ),
      };

      return productApis.getAllProducts(cleanedParams);
    },
  });

  useEffect(() => {
    if (query.data?.data) {
      setProducts(query?.data?.data?.data || []);
    }
  }, [query?.data?.data?.data, setProducts]);
  return {
    data: query.data?.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
