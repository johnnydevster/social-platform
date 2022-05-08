import React from "react";

export default function Heading({ size = "large", children, className }) {
  switch (size) {
    case "large":
      return (
        <h1 className={`text-3xl font-semibold mb-2 ${className}`}>
          {children}
        </h1>
      );
    case "medium":
      return (
        <h2 className={`text-2xl font-semibold mb-2 ${className}`}>
          {children}
        </h2>
      );
    case "small":
      return (
        <h3 className={`text-xl font-semibold mb-2 ${className}`}>
          {children}
        </h3>
      );
  }
}
