import React from "react";
import BtnEmoji from "./btnEmoji/page";
import BtnMicro from "./btnMicro/page";
import BtnAttach from "./btnAttach/page";
import BtnSend from "./btnSend/page";

export default function MainScreenContainer() {
  return (
    <div className="w-full">
      <form action="">
        <div>
          <textarea></textarea>
        </div>
        <div>
          <input type="text" placeholder="Type something..."/>
          <div className="flex items-center">
            <div className="flex">
              <BtnEmoji/>
              <BtnMicro/>
              <BtnAttach/>
            </div>
            <span className="block h-5 w-0.5 bg-slate-700"></span>
            <div className="ml-2">
              <BtnSend/>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
