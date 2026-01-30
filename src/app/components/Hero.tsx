import React from "react";
import { HeroDesktop } from "./HeroDesktop";
import { HeroMobile } from "./HeroMobile";

export function Hero() {
  return (
    <>
      <HeroDesktop />
      <HeroMobile />
    </>
  );
}
