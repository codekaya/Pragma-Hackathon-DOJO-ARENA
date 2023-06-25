import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
  hasNavbar = true,
  bg = "#142436",
  bg_url = "",
}) {
  if (hasNavbar) {
    return (
      <div
        className="flex flex-col min-h-screen text-white font-[automate] overflow-x-hidden"
        style={{
          backgroundColor: bg,
          backgroundImage: `url(${bg_url})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          backgroundPosition: "top",
        }}
      >
        <Header />
        <main className="flex flex-col max-w-dojo justify-center items-center mx-auto  px-20">
          {children}
        </main>
        <Footer />
      </div>
    );
  } else {
    return (
      <div
        className="flex flex-col min-h-screen text-white font-[automate]  overflow-x-hidden"
        style={{
          backgroundColor: bg,
          backgroundImage: `url(${bg_url})`,
          backgroundSize: "contain",
          backgroundRepeat: "repeat",
          backgroundPosition: "top",
        }}
      >
        <main className="flex flex-col max-w-dojo justify-center items-center mx-auto py-10 px-20">
          {children}
        </main>
        <Footer />
      </div>
    );
  }
}
