"use client";

import React from "react";
import HeaderWidget from "./headerWidgets/headerWidget";
import AvatarLayout from "./avatar/AvatarLayout";

export default function MainScreenHeader() {
  return (
    <div className="flex items-center justify-between w-full h-20 px-4">
      <AvatarLayout status='invisible' />
      <div className="flex">
        <HeaderWidget widget="phone" />
        <HeaderWidget widget="camera" />
        <HeaderWidget widget="more" />
      </div>
    </div>
  );
}
