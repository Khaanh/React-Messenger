import React from "react";
import Image from "next/image";

enum AvatarStatus {
  Active = "bg-green-500 border-gray-950",
  Away = "bg-yellow-500 border-gray-950",
  Off = "bg-red-500 border-gray-950",
  Invisible = "transparent border-transparent",
};

enum AvatarSize {
  sm = "10",
  md = "11",
};

type Props = {
  lastSeenTime?: string | null;
  imgRounded: "full" | "lg";
  status: "active" | "away" | "off" | "invisible";
  name: string;
  size: "sm" | "md";
  email: true | false
};

export default function AvatarLayout({
  lastSeenTime,
  imgRounded,
  status,
  name,
  size,
  email,
}: Props) {
  let statusDetect;
  let setAvatarSize;

  if (status === "active") {
    statusDetect = AvatarStatus.Active;
  } else if (status === "away") {
    statusDetect = AvatarStatus.Away;
  } else if (status === "off") {
    statusDetect = AvatarStatus.Off;
  } else if (status === "invisible") {
    statusDetect = AvatarStatus.Invisible;
  }

  if (size == "sm") {
    setAvatarSize = AvatarSize.sm
  } else if( size === "md") {
    setAvatarSize = AvatarSize.md
  }

  return (
    <>
      <div className="flex items-center">
        <div className="flex mr-4">
          <div className="relative">
            <div className={`overflow-hidden rounded-${imgRounded} w-${setAvatarSize} h-${setAvatarSize}`}>
              <Image className="w-auto"
                src={"/img/avatar.jpeg"}
                alt="user avatar"
                height={38}
                width={38}
              />
            </div>
            <i className={`block rounded-full border-2 w-3 h-3 absolute right-0 -bottom-1 ${statusDetect}`}></i>
          </div>
        </div>

        <div className="flex">
          <div className="flex flex-col">
            <span className="text-xl font-medium mr-2">{name}</span>
            <span className="text-xs text-zinc-400">Active</span>
          </div>

          {/* Email display */}
          {
            email && <a href="">Email</a>
          }

          {/* last visit time display */}
          {
          lastSeenTime && <div className="flex">
              <time className="text-tiny">17:55</time>
            </div>
          }
        </div>
      </div>
    </>
  );
}
