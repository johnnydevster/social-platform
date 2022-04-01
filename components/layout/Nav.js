import Link from "next/link";

export default function Nav() {
  return (
    <nav className="h-16 bg-primary-800 flex justify-center fixed z-40 w-full font-bold text-primary-100">
      <div className="flex h-full max-w-7xl grow">
        <ul className="flex mx-5 space-x-6 items-center grow">
          <li className="">
            <Link href="/">
              <a className="flex items-center hover:underline transition-all">
                <span className="material-icons">home</span>
                <span className="ml-1">Hem</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/annonser">
              <a className="flex items-center hover:underline transition-all">
                <span className="material-icons">assignment</span>
                <span className="ml-1">Annonser</span>
              </a>
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-6 mx-5 items-center justify-end grow">
          <a className="flex items-center hover:underline transition-all">
            <span className="material-icons">account_circle</span>
            <span className="ml-1">Logga in</span>
          </a>
        </ul>
      </div>
    </nav>
  );
}
