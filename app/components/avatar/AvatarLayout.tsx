import React, { useState } from "react";
import AvatarUI from "./child/AvatarUI";
import Avatar from "./child/Avatar";

export default function AvatarLayout() {
  const [lastSeenTime, setLastSeenTime] = useState<string>("10/10/22");
  const [status, setStatus] = useState(["active", "away", "off", "invisible"]);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  return (
    <>
      {/* <Avatar setLastSeenTime={setLastSeenTime} /> */}
      <AvatarUI />
    </>
  );
}
