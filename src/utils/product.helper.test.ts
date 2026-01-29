import { isNewProduct, toggleFilterItem } from "~/utils/products.helper";

describe("toggleFilterItem", () => {
  it("should add item if not present", () => {
    const initialArray = ["apple", "banana"];
    const itemToAdd = "orange";
    const result = toggleFilterItem(initialArray, itemToAdd);
    expect(result).toEqual(["apple", "banana", "orange"]);
  });

  it("should remove item if present", () => {
    const initialArray = ["apple", "banana", "orange"];
    const itemToRemove = "banana";
    const result = toggleFilterItem(initialArray, itemToRemove);
    expect(result).toEqual(["apple", "orange"]);
  });

  it("should handle empty array correctly", () => {
    const result = toggleFilterItem([], "apple");
    expect(result).toEqual(["apple"]);
  });

  it("should work with numbers (Generic check)", () => {
    const result = toggleFilterItem([1, 2], 3);
    expect(result).toEqual([1, 2, 3]);
  });
});

describe("isNewProduct", () => {
  const NOW = new Date("2026-01-10T00:00:00Z").getTime();
  beforeAll(() => {
    // Chuyển sang dùng fake timers của Jest
    jest.useFakeTimers();
    // Cố định system time cho toàn bộ test trong describe
    jest.setSystemTime(NOW);
  });

  afterAll(() => {
    // Khôi phục lại timers thật sau khi test xong
    jest.useRealTimers();
  });

  // 5 ngày trước
  it("return true if product is new (<= 7 days)", () => {
    const createdAt = "2026-01-05T00:00:00Z";
    expect(isNewProduct(createdAt)).toBe(true);
  });

  // 10 ngày trước
  it("return false if product is older than 7 days", () => {
    const createdAt = "2025-12-31T00:00:00Z";
    expect(isNewProduct(createdAt)).toBe(false);
  });
  // đúng 7 ngày
  it("return true if product is exactly 7 days old", () => {
    const createdAt = "2026-01-03T00:00:00Z";
    expect(isNewProduct(createdAt)).toBe(true);
  });
});
