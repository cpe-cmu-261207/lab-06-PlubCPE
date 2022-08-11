import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import React, { useState } from "react";
import UserCardDetail from "./UserCardDetail";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

export default function UserCard(x) {
  const [isClicked, setIsClicked] = useState(false);

  const show = () => {
    if (isClicked == true) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };
  return (
    <div
      onClick={() => {
        show();
      }}
      className="border-bottom"
    >
      <div className="d-flex align-items-center p-3">
        <img src={x.imgUrl} width="90px" class="rounded-circle me-4" />
        <span className="text-center display-6 me-auto">{x.name}</span>
        {isClicked ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      {isClicked && <UserCardDetail {...x}></UserCardDetail>}
    </div>
  );
}
