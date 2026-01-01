import http from "@/utils/http";

const productApis = {
  getAllProducts() {
    return http.get("/products");
  },
};
export default productApis;
