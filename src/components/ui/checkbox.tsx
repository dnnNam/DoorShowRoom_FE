import React from "react";
import { Check } from "lucide-react";
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
export function Checkbox({ label, className = "", ...props }: CheckboxProps) {
  return (
    <label
      className={`flex items-center space-x-2 cursor-pointer group ${className}`}
    >
      <div className="relative">
        <input type="checkbox" className="peer sr-only" {...props} />
        <div className="w-5 h-5 border border-gray-300 rounded bg-white peer-checked:bg-orange-600 peer-checked:border-orange-600 transition-colors group-hover:border-orange-500"></div>
        <Check className="w-3.5 h-3.5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
      </div>
      {label && (
        <span className="text-sm text-gray-700 group-hover:text-gray-900 select-none">
          {label}
        </span>
      )}
    </label>
  );
}
export default Checkbox;
