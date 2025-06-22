import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { tv } from "tailwind-variants";

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "icon" | "lg";
};

const button = tv({
  base: "inline-flex items-center gap-2 rounded-md text-sm font-medium transition-colors  [&_svg]:size-4 [&_svg]:shrink-0",

  variants: {
    variant: {
      default: "",
      outline: "border",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export default function CustomButton({
  children,
  className,
  variant,
  size,
  ...props
}: CustomButtonProps) {
  return (
    <button
      {...props}
      className={cn(button({ variant, size }), className)}
    >
      {children}
    </button>
  );
}