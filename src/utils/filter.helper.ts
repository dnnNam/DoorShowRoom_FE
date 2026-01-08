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
