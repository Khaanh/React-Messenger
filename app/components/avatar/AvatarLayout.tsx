import React, { useState } from "react";
import Image from "next/image";

type Props = {
  lastSeenTime: string;
  status?: string;
  name?: string;
  img?: string;
};

export default function AvatarLayout() {
  const [lastSeenTime, setLastSeenTime] = useState<string>("10/10/22");
  const [status, setStatus] = useState(["active", "away", "off", "invisible"]);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  return (
    <>
      <div className="flex items-center">
        <div className="flex mr-4">
          <div className="relative">
            <Image
              src={"/img/avatar.png"}
              alt="user avatar"
              height={38}
              width={38}
            />
            <i className="block bg-green-500 rounded-full border-2 border-gray-950 w-3 h-3 absolute right-0 -bottom-1"></i>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col">
            <span className="text-xl font-medium">Maia</span>
            <span className="text-xs text-zinc-400">Active</span>
          </div>

          {lastSeenTime ? (
            <div className="flex">
              <a href="">Email</a>
              <time>
                Sun Jul 09 2023 17:55:27 GMT+0200 (Central European Summer Time)
              </time>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
