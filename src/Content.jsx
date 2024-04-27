import Footer from "./components/Footer";

export default function Content() {
  return (
    <div className="w-full h-full z-2">
      <nav className="fixed w-full p-8 flex justify-center items-center gap-10">
        <div className="nav-item">
          <a href="/work" className="nav-link active" id="active">
            Work
          </a>
        </div>
        <div className="nav-item">
          <a className="nav-link" href="/about">
            About
          </a>
        </div>
      </nav>

      <main className="hero">
        <div className="icon icon1 flex justify-end"></div>
        <div className="title text-5xl font-bold">
          <p>The regeneration Site</p>
        </div>
        <div className="icon icon2"></div>
      </main>

      <Footer />
    </div>
  );
}
