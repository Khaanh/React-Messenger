"use client";

import React from "react";
import AvatarUI from "./avatar/child/AvatarUI";
import HeaderWidget from "./headerWidgets/headerWidget";

export default function MainScreenHeader() {
  return (
    <div className="flex items-center justify-between">
      <AvatarUI />
      <div className="flex">
        <HeaderWidget widget="phone" />
        <HeaderWidget widget="camera" />
        <HeaderWidget widget="more" />
      </div>
    </div>
  );
}
