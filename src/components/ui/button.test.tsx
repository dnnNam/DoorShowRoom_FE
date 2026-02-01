import Button from "~/components/ui/button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("<Button />", () => {
  it("shouwld render and click to button", async () => {
    // instance userEvent
    const user = userEvent.setup();
    // tạo mock function onClick bằng jest
    const onClick = jest.fn();
    // mount component Button vào DOM ảo trong môi trường test
    render(<Button onClick={onClick}>Click me </Button>);

    // dùng object screen để truy vấn DOM global tìm cái button
    // getByRole: tìm phần tử theo vai trò (role) = button và name = Click me (regex )
    // name chính là nội dung text bên trong button
    const button = screen.getByRole("button", { name: /click me/i });

    // mô phỏng 1 click của người dùng vào button
    await user.click(button);

    // kiểm tra button vẫn đang nằm trong document (không bị unmounted)
    expect(button).toBeInTheDocument();
    // kiếm tra mock onClick đã được gọi đúng 1 lần khi click hay chưa
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies default variant and size", () => {
    render(<Button>Btn</Button>);
    const btn = screen.getByRole("button");

    expect(btn).toHaveClass("bg-gray-900"); // primary
    expect(btn).toHaveClass("h-10"); // md
  });

  it("applies secondary variant styles", () => {
    render(<Button variant="secondary">Btn</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-orange-600");
  });

  it("applies outline variant styles", () => {
    render(<Button variant="outline">Btn</Button>);
    expect(screen.getByRole("button")).toHaveClass("border");
  });

  it("applies lg size styles", () => {
    render(<Button size="lg">Btn</Button>);
    expect(screen.getByRole("button")).toHaveClass("h-12");
  });

  it("takes full width when fullWidth=true", () => {
    render(<Button fullWidth>Btn</Button>);
    expect(screen.getByRole("button")).toHaveClass("w-full");
  });

  it("does not trigger onClick when disabled", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();

    render(
      <Button disabled onClick={onClick}>
        Btn
      </Button>,
    );

    await user.click(screen.getByRole("button"));

    expect(onClick).not.toHaveBeenCalled();
  });
});
