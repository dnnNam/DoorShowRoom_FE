export interface ProductImage {
  ImageId: number;
  ProductId: number;
  ImageUrl: string;
}

export interface Category {
  CategoryName: string;
}

export interface Product {
  ProductId: number;
  ProductName: string;
  CategoryId: number;
  Price: string;
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
}

export interface SuccessResponse<T> {
  data: T;
  message: string;
}
