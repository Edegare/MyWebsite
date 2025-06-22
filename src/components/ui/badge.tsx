type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <span
      className={`inline-block px-3 py-1 text-sm rounded-xl font-medium transition-all ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;