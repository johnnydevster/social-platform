import React from "react";

export default function SectionWrapper({ wrapper: Wrapper = "div", children }) {
  return <Wrapper className="px-4 pt-4">{children}</Wrapper>;
}
