import React from "react";
import AsideScreen from "./asideScreen/page";
import MainScreen from "./mainScreen/page";
import WidgetScreen from "./widgetScreen/page";

export default function FullScreen() {
  return (
    <div className="w-full grid grid-cols-layout">
      <AsideScreen />
      <MainScreen />
      <WidgetScreen />
    </div>
  );
}
