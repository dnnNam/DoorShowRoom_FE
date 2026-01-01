export interface ProductImage {
  ImageId: number;
  ProductId: number;
  ImageUrl: string;
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
  CreatedAt: string;
  ProductImages: ProductImage[];
}
