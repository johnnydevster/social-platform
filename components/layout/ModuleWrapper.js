import React from "react";

export default function ModuleWrapper({ wrapper: Wrapper = "div", children }) {
  return <Wrapper className="px-2 pt-2 pb-1 col-span-2">{children}</Wrapper>;
}
