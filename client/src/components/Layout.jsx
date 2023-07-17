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
        className="flex flex-col min-h-screen text-white font-[automate] overflow-x-hidden lg:bg-contain lg:bg-repeat bg-top"
        style={{
          backgroundColor: bg,
          backgroundImage: `url(${bg_url})`,
        }}
      >
        <Header />
        <main className="flex flex-col lg:max-w-dojo justify-center items-center md:mx-auto px-4 lg:px-20">
          {children}
        </main>
        <Footer />
      </div>
    );
  } else {
    return (
      <div
        className="flex flex-col min-h-screen text-white font-[automate]  overflow-x-hidden bg-contain bg-repeat bg-top"
        style={{
          backgroundColor: bg,
          backgroundImage: `url(${bg_url})`,
        }}
      >
        <main className="flex flex-col lg:max-w-dojo justify-center items-center md:mx-auto lg:py-10 lg:px-20">
          {children}
        </main>
        <Footer />
      </div>
    );
  }
}
