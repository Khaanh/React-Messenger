import React, { useState } from "react";
import Image from "next/image";

enum Status {
  Active = 'bg-green-500 border-gray-950',
  Away = 'bg-yellow-500 border-gray-950',
  Off = 'bg-red-500 border-gray-950',
  Invisible = 'transparent',
}

type Props = {
  lastSeenTime?: string;
  imgRounded?: string;
  status?: 'active' | 'away' | 'off' | 'invisible' | null;
  name?: string;
  size?: number;
};

export default function AvatarLayout(props: Props) {
  const [lastSeenTime, setLastSeenTime] = useState("10/10/22");
  const [status, setStatus] = useState(props.status);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  let statusDetect;

  if(status === 'active') {
    statusDetect = Status.Active
  } else if (status === 'away') {
    statusDetect = Status.Away
  } else if (status === 'off') {
    statusDetect = Status.Off
  } else if (status === 'invisible') {
    statusDetect = Status.Invisible
  }

  return (
    <>
      <div className="flex items-center">
        <div className="flex mr-4">
          <div className="relative">
            <Image
              src={"/img/code-A.png"}
              alt="user avatar"
              height={38}
              width={38}
            />
            <i className={`block rounded-full border-2 border-transparent w-3 h-3 absolute right-0 -bottom-1 ${statusDetect ? statusDetect : ''}`}></i>
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
                17:55
              </time>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
