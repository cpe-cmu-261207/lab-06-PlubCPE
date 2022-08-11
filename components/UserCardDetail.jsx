import React from "react";
import {
  IconChevronDown,
  IconChevronUp,
  IconMailForward,
  IconMapPins,
} from "@tabler/icons";

export default function UserCardDetail(x) {
  return (
    <div className="text-center">
      <p>
        <IconMailForward />
        {x.email}
      </p>
      <p>
        <IconMapPins />
        {x.address}
      </p>
    </div>
  );
}
