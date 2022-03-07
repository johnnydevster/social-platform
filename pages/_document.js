import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="text-primary-800">
      <Head />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
