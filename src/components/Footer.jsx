import { footerImg } from "../constant";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full">
      <div className="preview absolute bottom-4 right-4 flex gap-1">
        {footerImg.map((img) => (
          <img
            key={img.id}
            src={img.url}
            className="w-20 h-12 relative top-52"
          />
        ))}
      </div>
      <div className="numbers font-semibold">
        <span>1 &mdash; 8</span>
      </div>
    </footer>
  );
}
