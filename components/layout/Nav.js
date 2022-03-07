import Link from "next/link";

export default function Nav() {
  return (
    <nav className="h-16 bg-primary-200 flex justify-between fixed w-full font-bold text-lg text-primary-700">
      <ul className="flex items-center ml-16">
        <li>
          <Link href="/">
            <a>
              <span className="material-icons">home</span>
              <span>Hem</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/annonser">
            <a>
              <span class="material-icons">assignment</span>
              <span>Annonser</span>
            </a>
          </Link>
        </li>
      </ul>
      <ul className="flex items-center mr-16">
        <li>
          <a>Logga in</a>
        </li>
      </ul>
    </nav>
  );
}
