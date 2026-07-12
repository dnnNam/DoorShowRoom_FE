export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imgUrl: string;
  altText: string;
}

export const COLLECTIONS: CollectionItem[] = [
  {
    id: "wood",
    title: "Gỗ Di Sản",
    subtitle: "Thủ Công Vượt Thời Gian",
    category: "wood",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpAKlqQ2mvaUMPOX7sH8OYBa2N7bighHaMU0D7F2bPoFuHzErkZywBzhIy6ArTmDqKso8dFtlb9lpNMOcS3tBEFjwN56XXaOTPNOJ9CxkjIZkv49wWu-cvLLFduDcokWTezl79DpVnaXXWwD2iPYarL90g9HC0vTigMwrmcRrGgLvoPWUe5xsBgnl0_lOgQg6lqGIRJYAqoKiElHXxzCT0wN_aMLIeYtrmMwya1-c72JKvLUQtKJSD13OG0YZ2XDRSI_gnTrNnPe0",
    altText: "A minimalist solid oak front door with vertical grain pattern."
  },
  {
    id: "glass",
    title: "Dòng Vista",
    subtitle: "Xuyên Thấu & Hình Khối",
    category: "glass",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS1LLlInAikwkt8E5AVjQqLhFsUiRrvR2tQRnCPTNEt6mRbe6CRvYsgZPsYpGSXwcBFZwjpMgI8MWtDc6hkSPsRUJgrDe2qeTShQdfuGvowDal7RePTE-qcGrPT1vkWBmSMPSV8oj9FjVAi6eRokJI60RwlRxfWCDHY-FnfdAFrZgivTH20k0FJZUiPkyp_uXQzMpVCgu9CtTt7-aUQI1U40Hrk9ncdETnz0E8HDj-_DDFCtm4HSeXi6MyWxeVv8rKdItSTGMqHaA",
    altText: "A large-format minimalist pivot door with glass."
  },
  {
    id: "pivot",
    title: "Trục Xoay Lớn",
    subtitle: "Kỹ Thuật Đồ Sộ",
    category: "pivot",
    imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6AoQ16f4qKs0ANxF9lcKMVBSfPxHz_mJgUgt1_i1U0Xby_7JVrBWvJW4vgYX31Oh8ZpMlgMZstJJXfTSVN5jw7Z5M4ZDnD3lYgVra4qUnkZAmsAQabJdY7DLVczAPAvEMmLa75JtYk8AJzkPCn6ttqUvdn2nlefCssFvenVqk8qA4RlD-phmHE_wA-Xw_eTwOrSJ1U7wL55nMZbc3X2hA33ByWf2hgt76QHcSvxOIkGUzHl2b3daQJVA7VRyzBb2GNKryCQFZQOc",
    altText: "A heavy security steel entrance door with a dark matte charcoal finish."
  }
];