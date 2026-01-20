// file này viết các hàm giúp lọc sản phẩm dựa trên các tiêu chí khác nhau

// hàm kiểm tra xem người dùng đã chọn bộ lọc nào chưa , nếu chọn thêm vào , nếu bỏ thì xóa khỏi bộ lọc
export function toggleFilterItem<T>(array: T[], item: T): T[] {
  // nếu kiểm tra mảng đã có item mà người dùng chọn thì xóa nó đi và ngược lại
  if (array.includes(item)) {
    // nếu có rồi thì loại bỏ item khỏi mảng
    return array.filter((product) => product !== item); // REMOVE
  } else {
    // nếu chưa có thì thêm item vào mảng
    return [...array, item]; // ADD
  }
}
// hàm kiểm tra sản phẩm có phải là sản phẩm mới hay không dựa trên ngày tạo
export const isNewProduct = (createdAt: string) => {
  const createdTime = new Date(createdAt).getTime();
  const now = Date.now();
  const diffDays = (now - createdTime) / (1000 * 60 * 60 * 24);

  return diffDays <= 7; // sản phẩm trong 7 ngày
};
