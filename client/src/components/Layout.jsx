import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#142436] text-white font-[automate]">
      <Header />
      <main className="flex flex-col max-w-dojo justify-center items-center mx-auto py-10 px-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
