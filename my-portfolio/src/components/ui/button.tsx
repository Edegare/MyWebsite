import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils"; 

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
};

export default function CustomButton({
  children,
  className,
  variant = "default",
  size = "md",
  ...props
}: CustomButtonProps) {
  const baseClasses = "rounded-xl font-medium transition-colors duration-200";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  };
  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  return (
    <button
      {...props}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
}