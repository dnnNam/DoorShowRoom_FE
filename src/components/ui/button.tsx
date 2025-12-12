import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}
export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-amber-700 text-white hover:bg-amber-800 focus:ring-amber-500",
    secondary:
      "bg-stone-200 text-stone-900 hover:bg-stone-300 focus:ring-stone-500",
    outline:
      "border border-stone-300 bg-transparent hover:bg-stone-100 text-stone-700 focus:ring-stone-500",
    ghost:
      "bg-transparent hover:bg-stone-100 text-stone-700 focus:ring-stone-500",
  };
  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-12 px-6 text-lg",
  };
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
