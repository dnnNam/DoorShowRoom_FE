export interface VideoProduct {
  ProductId: number;
  ProductName: string;
  Slug: string;
}

export interface Video {
  ImageId: number;
  Url: string;
  PublicId: string;
  ResourceType: string;
  CreatedAt: string;
  Product: VideoProduct | null;
}

export interface VideoListResponse {
  items: Video[];
  total: number;
}

export interface GetVideosParams {
  page?: number;
  limit?: number;
}