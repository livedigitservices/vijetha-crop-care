export default function Container({
  children,
  className = "",
  size = "default"
}) {
  const sizeClasses = {
    default: "max-w-7xl",
    wide: "max-w-8xl",
    narrow: "max-w-4xl",
    prose: "max-w-3xl"
  };

  return (
    <div className={`mx-auto px-6 sm:px-8 lg:px-12 w-full ${sizeClasses[size] || sizeClasses.default} ${className}`}>
      {children}
    </div>
  );
}
