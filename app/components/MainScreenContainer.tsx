import React from "react";
import BtnEmoji from "./btnEmoji/btnEmoji";
import BtnMicro from "./btnMicro/btnMicro";
import BtnAttach from "./btnAttach/btnAttach";
import BtnSend from "./btnSend/btnSend";
import InputMessage from "./inputMessage/inputMessage";
import ContainerMessage from "./containerMessage/containerMessage";

export default function MainScreenContainer() {
  return (
    <div className="w-full">
      <div>
        <div className="h-main-calc">
          <div className="h-full w-full bg-secondary overflow-y-auto p-4">
            <ContainerMessage/>
          </div>
        </div>
        <form className="relative mt-5 mb-3 mr-8 ml-4">
          <InputMessage />
          <div className="flex items-center absolute top-1/2 right-4 -translate-y-1/2">
            <div className="flex items-center mr-1">
              <BtnEmoji />
              <BtnMicro />
              <BtnAttach />
              <span className="block h-5 w-0.5 bg-slate-700"></span>
            </div>
            <BtnSend />
          </div>
        </form>
      </div>
    </div>
  );
}
