export interface ProductMedia {
  MediaId: number;
  ProductId: number;
  Url: string;
  PublicId: string | null;
  ResourceType: string | null;
  IsPrimary: boolean;
  CreatedAt: string | null;
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
  ProductMedia: ProductMedia[];
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
