import type { ContactInputForms } from "@/types/api/product.type";
import http from "@/utils/http";

const contactApis = {
  sendContactForm(data: ContactInputForms) {
    return http.post("/products/Contact", data);
  },
};
export default contactApis;
