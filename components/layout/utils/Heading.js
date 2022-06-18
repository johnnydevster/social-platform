export default function Heading({ size, children, className }) {
  switch (size) {
    case "3xl":
      return <h1 className={`text-3xl ${className}`}>{children}</h1>;
    case "2xl":
      return <h2 className={`text-2xl ${className}`}>{children}</h2>;
    case "xl":
      return <h3 className={`text-xl ${className}`}>{children}</h3>;
    case "lg":
      return <h4 className={`text-lg ${className}`}>{children}</h4>;
    default:
      return <h5 className={`${className}`}>{children}</h5>;
  }
}
