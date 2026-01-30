export interface ProductImage {
  ImageId: number;
  ProductId: number;
  ImageUrl: string;
}

export interface Category {
  CategoryName: string;
}

export interface SuccessResponse<T> {
  data: T;
  message: string;
}

export interface Product {
  ProductId: number;
  ProductName: string;
  CategoryId: number;
  Price: number;
  Material: string;
  Color: string;
  Size: string;
  Description: string;
  IsFeatured: boolean;
  IsActive: boolean;
  IsBestSeller: boolean;
  CreatedAt: string;
  ProductImages: ProductImage[];
  Categories: Category;
  Slug: string;
}

export interface ProductListReponse {
  items: Product[];
  total: number;
}

export interface Contact {
  ContactId: number;
  CreatedAt: string;
  Email: string;
  FullName: string;
  Message: string;
  Phone: string;
}

export interface ContactInputForms {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}
