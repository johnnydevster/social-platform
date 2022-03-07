import Link from "next/link";

export default function Nav() {
  return (
    <nav className="h-16 bg-primary-200 flex justify-between fixed w-full font-bold text-lg text-primary-700">
      <ul className="flex items-center ml-16">
        <li className="">
          <Link href="/">
            <a className="flex items-center hover:text-primary-500 transition-all">
              <span className="material-icons">home</span>
              <span className="ml-1">Hem</span>
            </a>
          </Link>
        </li>
        <li className="ml-5">
          <Link href="/annonser">
            <a className="flex items-center hover:text-primary-500 transition-all">
              <span className="material-icons">assignment</span>
              <span className="ml-1">Annonser</span>
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
