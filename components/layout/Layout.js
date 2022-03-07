import Footer from "./Footer";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="pt-20 p-4 min-h-screen max-w-6xl mx-auto grid grid-cols-3 gap-4">
        {children}
      </main>
      <Footer />
    </>
  );
}
