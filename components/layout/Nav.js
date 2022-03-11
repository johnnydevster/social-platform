import Link from "next/link";

export default function Nav() {
  return (
    <nav className="h-16 bg-gray-50 flex justify-center fixed w-full font-bold text-primary-700">
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
          <Link
            href={`https://id.twitch.tv/oauth2/authorize
    ?client_id=${process.env.TWITCH_CLIENT_ID}>
    &redirect_uri=http://localhost:3000
    &response_type=token
    &scope=user:read:email`}
          >
            <a className="flex items-center hover:underline transition-all">
              <span className="material-icons">account_circle</span>
              <span className="ml-1">Logga in</span>
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
