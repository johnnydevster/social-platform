export default function CardWrapper({
  wrapper: Wrapper = "div",
  children,
  className,
}) {
  return <Wrapper className={`p-2 sm:p-4 ${className}`}>{children}</Wrapper>;
}
