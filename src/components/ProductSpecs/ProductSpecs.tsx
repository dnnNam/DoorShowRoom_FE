import { useState } from "react";

import { ShieldCheck, Wrench, FileText, Settings, Star } from "lucide-react";
import type { Product } from "@/types/api/product.type";
// interface ProductSpecsProps {
//   product: Product;
// }
export default function ProductSpecs({ product }: { product: Product }) {
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "reviews">(
    "desc"
  );
  return (
    <div className="mt-12 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-200 overflow-x-auto">
        <button
          onClick={() => setActiveTab("desc")}
          className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === "desc"
              ? "border-orange-600 text-orange-600 bg-orange-50/50"
              : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          }`}
        >
          <FileText className="w-4 h-4" />
          Mô tả chi tiết
        </button>
        <button
          onClick={() => setActiveTab("specs")}
          className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === "specs"
              ? "border-orange-600 text-orange-600 bg-orange-50/50"
              : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          }`}
        >
          <Settings className="w-4 h-4" />
          Thông số kỹ thuật
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === "reviews"
              ? "border-orange-600 text-orange-600 bg-orange-50/50"
              : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          }`}
        >
          <Star className="w-4 h-4" />
          Đánh giá (0)
        </button>
      </div>
      {/* Tab Content */}
      <div className="p-6 md:p-8">
        {activeTab === "desc" && (
          <div className="prose prose-orange max-w-none">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Đặc điểm nổi bật của {product.ProductName}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              {product.Description} Sản phẩm được sản xuất trên dây chuyền công
              nghệ hiện đại, đảm bảo độ bền cao và tính thẩm mỹ vượt trội. Phù
              hợp với nhiều không gian kiến trúc từ cổ điển đến hiện đại.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <ShieldCheck className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-1">
                  Độ bền vượt trội
                </h4>
                <p className="text-sm text-gray-600">
                  Chất liệu cao cấp, chống chịu thời tiết tốt, không cong vênh
                  mối mọt.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <Wrench className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-1">
                  Dễ dàng lắp đặt
                </h4>
                <p className="text-sm text-gray-600">
                  Thiết kế thông minh giúp quy trình lắp đặt nhanh chóng và
                  chính xác.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <Star className="w-8 h-8 text-orange-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-1">Thẩm mỹ cao</h4>
                <p className="text-sm text-gray-600">
                  Màu sắc tinh tế, vân gỗ tự nhiên, mang lại vẻ đẹp sang trọng.
                </p>
              </div>
            </div>
            <p className="text-gray-600">
              Sản phẩm {product.ProductName} là lựa chọn hoàn hảo cho ngôi nhà
              của bạn. Liên hệ ngay với chúng tôi để được tư vấn chi tiết về
              kích thước và báo giá tốt nhất.
            </p>
          </div>
        )}
        {activeTab === "specs" && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900 w-1/3">
                    Mã sản phẩm
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    CD-{product.ProductId}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Danh mục
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {product?.Categories?.CategoryName}
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Chất liệu
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {product.Material}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Kích thước có sẵn
                  </td>
                  <td className="px-4 py-3 text-gray-600">{product.Size}</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Màu sắc
                  </td>
                  <td className="px-4 py-3 text-gray-600">{product.Color}</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Xuất xứ
                  </td>
                  <td className="px-4 py-3 text-gray-600">Việt Nam</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">
                    Bảo hành
                  </td>
                  <td className="px-4 py-3 text-gray-600">5 năm chính hãng</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <Star className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Chưa có đánh giá nào
            </h3>
            <p className="text-gray-500 mb-6">
              Hãy là người đầu tiên đánh giá sản phẩm này
            </p>
            <button className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors font-medium">
              Viết đánh giá
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
