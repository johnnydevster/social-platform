import Footer from "./Footer";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="pt-20 p-4 min-h-screen max-w-7xl mx-auto grid grid-cols-3 gap-4">
        {children}
      </main>
      <Footer />
    </>
  );
}
