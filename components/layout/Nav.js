import { Modal } from "@mantine/core";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";
import { auth } from "../../lib/firebase-client/firebase-client-config";
import { useAuth } from "../../lib/hooks/useAuth";
import LoginCard from "../pages/login/LoginCard";

export default function Nav() {
  const [showLoginModal, setShowLoginModal] = useState();
  const { user } = useAuth();

  return (
    <>
      <Modal
        centered
        opened={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      >
        <LoginCard />
      </Modal>
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
            {!user ? ( // user isn't logged in
              <button
                onClick={() => setShowLoginModal(true)}
                className="flex items-center hover:underline transition-all"
              >
                <span className="material-icons">account_circle</span>
                <span className="ml-1">Log in</span>
              </button>
            ) : (
              <>
                <Link href={`/profile/${user.uid}`}>
                  <a>Profile</a>
                </Link>
                <button
                  className="flex items-center hover:underline transition-all"
                  onClick={() => signOut(auth)}
                >
                  <span className="material-icons">account_circle</span>
                  <span className="ml-1">Log out</span>
                </button>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
