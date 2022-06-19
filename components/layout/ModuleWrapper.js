import React from "react";

export default function ModuleWrapper({
  wrapper: Wrapper = "section",
  children,
  className,
}) {
  return (
    <Wrapper className={`px-2 pt-2 pb-1 col-span-5 lg:col-span-4 ${className}`}>
      {children}
    </Wrapper>
  );
}
