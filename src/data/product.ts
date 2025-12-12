export interface Product {
  id: string;
  name: string;
  category: "Cửa gỗ" | "Cửa sắt" | "Cửa kính" | "Cửa chống cháy";
  price: string;
  image: string;
  description: string;
  specs: {
    material: string;
    dimensions: string;
    color: string;
    warranty: string;
  };
}
export const products: Product[] = [
  {
    id: "1",
    name: "Cửa Gỗ Lim Nam Phi Cao Cấp",
    category: "Cửa gỗ",
    price: "5.500.000₫",
    image:
      "https://images.unsplash.com/photo-1517646331032-9e8563c523a1?auto=format&fit=crop&q=80&w=1000",
    description:
      "Cửa gỗ Lim Nam Phi tự nhiên, vân gỗ đẹp, độ bền cao, chống mối mọt tốt.",
    specs: {
      material: "Gỗ Lim Nam Phi",
      dimensions: "900 x 2200 mm",
      color: "Nâu đỏ tự nhiên",
      warranty: "5 năm",
    },
  },
  {
    id: "2",
    name: "Cửa Gỗ Sồi Nga Hiện Đại",
    category: "Cửa gỗ",
    price: "3.200.000₫",
    image:
      "https://images.unsplash.com/photo-1506377550980-bc82966e2e1e?auto=format&fit=crop&q=80&w=1000",
    description:
      "Thiết kế hiện đại, màu sắc tươi sáng, phù hợp với căn hộ chung cư.",
    specs: {
      material: "Gỗ Sồi Nga",
      dimensions: "850 x 2150 mm",
      color: "Vàng sáng",
      warranty: "3 năm",
    },
  },
  {
    id: "3",
    name: "Cửa Thép Vân Gỗ An Toàn",
    category: "Cửa chống cháy",
    price: "4.800.000₫",
    image:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=1000",
    description:
      "Cửa thép an toàn, sơn tĩnh điện vân gỗ giống thật 99%, chống cháy lan.",
    specs: {
      material: "Thép mạ điện",
      dimensions: "950 x 2200 mm",
      color: "Vân gỗ hương",
      warranty: "5 năm",
    },
  },
  {
    id: "4",
    name: "Cửa Kính Cường Lực Khung Nhôm",
    category: "Cửa kính",
    price: "2.900.000₫",
    image:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1000",
    description:
      "Kính cường lực 10mm, khung nhôm Xingfa nhập khẩu, cách âm cách nhiệt.",
    specs: {
      material: "Kính cường lực, Nhôm Xingfa",
      dimensions: "Tuỳ chỉnh",
      color: "Đen/Trắng/Ghi",
      warranty: "2 năm",
    },
  },
  {
    id: "5",
    name: "Cửa Sắt Mỹ Thuật Cổ Điển",
    category: "Cửa sắt",
    price: "6.500.000₫",
    image:
      "https://images.unsplash.com/photo-1593015713608-2e5789684646?auto=format&fit=crop&q=80&w=1000",
    description:
      "Hoa văn uốn lượn tinh xảo, sơn tĩnh điện cao cấp, mang lại vẻ đẹp sang trọng.",
    specs: {
      material: "Sắt đặc",
      dimensions: "Tuỳ chỉnh theo công trình",
      color: "Đen nhám/Đồng",
      warranty: "10 năm",
    },
  },
  {
    id: "6",
    name: "Cửa Nhựa Composite Chống Nước",
    category: "Cửa gỗ",
    price: "3.800.000₫",
    image:
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&q=80&w=1000",
    description: "Chịu nước tuyệt đối 100%, không cong vênh, co ngót, mối mọt.",
    specs: {
      material: "Nhựa gỗ Composite",
      dimensions: "900 x 2200 mm",
      color: "Đa dạng",
      warranty: "3 năm",
    },
  },
  {
    id: "7",
    name: "Cửa Chống Cháy 60 Phút",
    category: "Cửa chống cháy",
    price: "2.500.000₫",
    image:
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&q=80&w=1000",
    description:
      "Đạt tiêu chuẩn PCCC, thời gian ngăn cháy 60 phút, an toàn cho chung cư.",
    specs: {
      material: "Thép tấm + Bông thủy tinh",
      dimensions: "900 x 2100 mm",
      color: "Ghi sáng",
      warranty: "1 năm",
    },
  },
  {
    id: "8",
    name: "Cửa Lùa Kính Ray Treo",
    category: "Cửa kính",
    price: "3.500.000₫",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?auto=format&fit=crop&q=80&w=1000",
    description:
      "Tiết kiệm không gian, vận hành êm ái, phù hợp ngăn phòng khách và bếp.",
    specs: {
      material: "Kính cường lực 10mm",
      dimensions: "Tuỳ chỉnh",
      color: "Trong suốt",
      warranty: "2 năm",
    },
  },
];
