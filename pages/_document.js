import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="text-primary-800 text-sm lg:text-base">
      <Head />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
