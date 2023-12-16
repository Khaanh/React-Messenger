"use client";
import { MouseEventHandler, useState } from "react";
import AvatarLayout from "../avatar/AvatarLayout";

export default function TabsLayout() {
  const [tabs, setTabs] = useState<string[]>(["Chat", "Groups"]);
  const [tabsActive, setTabsActive] = useState<boolean>(true)

  const handleSetTab= (e: any)=> {
    console.log(e);
    
  } 

  return (
    <div>
      <ul className="flex items-center justify-center flex-wrap rounded-lg bg-secondary h-12">
        {tabs.map((tabEl) => {
          return (
            <li key={tabEl} className="flex bg-secondary h-9 w-36 rounded-lg transition hover:bg-primary">
              <button
                className="flex items-center justify-center w-full h-full text-base text-slate-50" 
                onClick={handleSetTab}>
                {tabEl}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="rounded-lg overflow-hidden">
        <div>
          <div className="h-28 w-full p-4 cursor-pointer transition hover:bg-secondary hover:bg-slate-700 hover:opacity-70">
            <AvatarLayout
              lastSeenTime={"12:28pm"}
              imgRounded="lg"
              status="active"
              name="Finn"
              size="sm"
              email={false}
            />
            <p className="text-xs text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quas?</p>
          </div>
          <div className="h-28 w-full p-4 cursor-pointer transition hover:bg-secondary hover:bg-slate-700 hover:opacity-70">
            <AvatarLayout
              lastSeenTime={"12:28pm"}
              imgRounded="lg"
              status="active"
              name="Finn"
              size="sm"
              email={false}
            />
            <p className="text-xs text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quas?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
