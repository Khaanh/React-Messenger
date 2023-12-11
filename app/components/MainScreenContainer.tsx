import React from "react";
import BtnEmoji from "./btnEmoji/btnEmoji";
import BtnMicro from "./btnMicro/btnMicro";
import BtnAttach from "./btnAttach/btnAttach";
import BtnSend from "./btnSend/btnSend";
import InputMessage from "./inputMessage/inputMessage";

export default function MainScreenContainer() {
  return (
    <div className="w-full">
      <form action="">
        <div className="h-main-calc">
          <div className="h-full w-full bg-secondary overflow-y-auto"></div>
        </div>
        <div className="relative">
          <InputMessage />
          <div className="flex items-center absolute top-1/2 right-4 -translate-y-1/2">
            <div className="flex items-center mr-1">
              <BtnEmoji />
              <BtnMicro />
              <BtnAttach />
              <span className="block h-5 w-0.5 bg-slate-700"></span>
            </div>
            <BtnSend />
            {/* <div className="ml-2">
            </div> */}
          </div>
        </div>
      </form>
    </div>
  );
}
