import Link from "next";

export default function Nav() {
  return (
    <nav className="h-16 bg-primary-200 flex justify-center fixed w-full">
      <ul className="flex flex-grow-1 items-center justify-between w-72 text-lg font-bold text-primary-700">
        <li>
          <a>Hem</a>
        </li>
        <li>
          <a>Annonser</a>
        </li>
        <li>
          <a>Logga in</a>
        </li>
      </ul>
    </nav>
  );
}
