import {
  imageFive,
  imageFour,
  imageOne,
  imageThree,
  imageTwo,
} from "./constant";

export default function Container() {
  return (
    <div className="fixed w-full h-full flex-row flex gap-2 contain">
      {/* COL1 */}
      <div className="col relative w-full top-full flex-1 flex flex-col gap-2 item c-1">
        {imageOne.map((img) => (
          <div key={img.id} className="item col-item top-full">
            <img key={img.id} src={img.url} />
          </div>
        ))}
      </div>
      {/* COL2 */}
      <div className="col relative w-full  flex-1 flex flex-col gap-2 c-2">
        {imageTwo.map((img) => (
          <div key={img.id} className="item col-item -top-full">
            <img key={img.id} src={img.url} />
          </div>
        ))}
      </div>
      {/* COL3 */}
      <div className="col relative w-full top-full flex-1 flex flex-col gap-2 c-3">
        {imageThree.map((img) => (
          <div key={img.id} className="item col-item top-full">
            <img key={img.id} src={img.url} />
          </div>
        ))}
      </div>
      {/* COL4 */}
      <div className="col relative w-full  flex-1 flex flex-col gap-2 c-4">
        {imageFour.map((img) => (
          <div key={img.id} className="col-item item -top-full">
            <img key={img.id} src={img.url} />
          </div>
        ))}
      </div>
      {/* COL5 */}
      <div className="col relative w-full top-full flex-1 flex flex-col gap-2 c-5">
        {imageFive.map((img) => (
          <div key={img.id} className="col-item item top-full">
            <img key={img.id} src={img.url} />
          </div>
        ))}
      </div>
    </div>
  );
}
