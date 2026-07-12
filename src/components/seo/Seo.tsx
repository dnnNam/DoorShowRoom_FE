import { Helmet } from "react-helmet-async";

export interface SeoProps {
  /** Tiêu đề riêng của trang, sẽ tự nối thêm tên thương hiệu */
  title: string;
  /** Mô tả ngắn 120-160 ký tự, hiển thị trên kết quả tìm kiếm */
  description: string;
  /** Đường dẫn tương đối, ví dụ "/products" — dùng để tạo canonical & og:url */
  path?: string;
  /** Ảnh đại diện khi chia sẻ (Open Graph / Twitter Card) */
  image?: string;
  type?: "website" | "article" | "product";
  /** Cho phép tắt lập chỉ mục với các trang không muốn Google index */
  noIndex?: boolean;
}

const SITE_NAME = "Đại Nam - Cửa Cuốn & Nhôm Kính Cao Cấp";
// TODO: thay bằng domain thật khi deploy production
const SITE_URL = "https://dainam.vn";
// TODO: thay bằng ảnh OG thật (khuyến nghị 1200x630px) đặt trong thư mục public/
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
}: SeoProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <html lang="vi" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="vi_VN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}