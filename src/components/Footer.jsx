import { imageOne } from "./constant";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full">
      <div className="preview absolute bottom-4 right-4 flex gap-1">
        {imageOne.map((img) => (
          <img
            key={img.id}
            src={img.url}
            className="w-32 h-24 relative top-52"
          />
        ))}
      </div>
      <div className="numbers font-semibold">
        <span>1 &mdash; 6</span>
      </div>
    </footer>
  );
}
