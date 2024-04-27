import { useEffect } from "react";
import { useState } from "react";

export default function Intro() {
  const [state, setState] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setState((state) => {
        if (state > 99) {
          state = 99;
        }
        return state + 1;
      });
    }, 350);
  }, [state]);
  return (
    <div className="bg-[#141414]  w-full h-full loader">
      <div className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-white">
        <h1 className="counter">{state} %</h1>
      </div>
    </div>
  );
}
