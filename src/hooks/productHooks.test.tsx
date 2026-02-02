// Mock http.ts để tránh lỗi import.meta //
jest.mock("~/utils/http", () => ({
  default: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  },
}));

jest.mock("~/apis/products.apis");

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { useAllProducts } from "./productHooks";
import productApis from "~/apis/products.apis";

const wrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("product hooks", () => {
  it("don't call api when param is empty", () => {
    renderHook(() => useAllProducts({}), { wrapper });
    expect(productApis.getAllProducts).not.toHaveBeenCalled();
  });

  it("isError is true when api fails", async () => {
    (productApis.getAllProducts as jest.Mock).mockRejectedValueOnce(
      new Error("API Error"),
    );

    const { result } = renderHook(() => useAllProducts({ page: 1 }), {
      wrapper,
    });

    // Wait for the hook to update
    await waitFor(() => expect(result.current.isError).toBe(true));
  });

  it("returns data when api succeeds", async () => {
    (productApis.getAllProducts as jest.Mock).mockResolvedValueOnce({
      data: {
        data: {
          items: [{ id: 1, name: "Product 1" }],
          total: 1,
        },
      },
    });

    const { result } = renderHook(() => useAllProducts({ page: 1 }), {
      wrapper,
    });

    await waitFor(() =>
      expect(result.current.data).toEqual({
        items: [{ id: 1, name: "Product 1" }],
        total: 1,
      }),
    );
  });

  it("isLoading is true while fetching", () => {
    (productApis.getAllProducts as jest.Mock).mockImplementation(
      () => new Promise(() => {}), //  demo pending kiểm tra isLoading
    );

    const { result } = renderHook(() => useAllProducts({ page: 1 }), {
      wrapper,
    });

    expect(result.current.isLoading).toBe(true);
  });

  it("refetch data when param changes", async () => {
    (productApis.getAllProducts as jest.Mock).mockResolvedValue({
      data: { data: { items: [], total: 0 } },
    });

    const { rerender } = renderHook(
      ({ page }) => useAllProducts({ page }), // hook nhận page từ props
      {
        wrapper,
        initialProps: { page: 1 }, // lần đầu page = 1
      },
    );

    await waitFor(() =>
      expect(productApis.getAllProducts).toHaveBeenCalledTimes(1),
    );

    rerender({ page: 2 }); // thay đổi props page = 2
    await waitFor(() =>
      expect(productApis.getAllProducts).toHaveBeenCalledTimes(2),
    );
  });
});
