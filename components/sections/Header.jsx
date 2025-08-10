"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Icon from "../icons";

const Header = () => {
  const headerRef = useRef(null);
  const [openToggle, setOpenToggle] = useState(false);

  const toggleHandler = () => {
    setOpenToggle((prev) => !prev);
  };

  useEffect(() => {
    if (!openToggle) return;

    const handleOutsideClick = (e) => {
      if (!headerRef.current) return;

      if (!headerRef.current.contains(e.target)) {
        setOpenToggle(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [openToggle]);

  return (
    <header className="mt-[16px] md:mt-[35px] px-5" ref={headerRef}>
      <div className="relative z-[1] max-w-[978px] mx-auto">
        <div className="flex items-center md:items-start justify-between">
          <div className="md:hidden"></div>

          <Link href={"#"} className="max-w-[107px] md:max-w-full">
            <Image src={"/logo.svg"} alt="Fame Tonic" height={74} width={173} />
          </Link>

          <div className="md:hidden">
            <Icon name="toggle" onClick={toggleHandler} />
          </div>

          <div className="hidden md:flex gap-10">
            <Link
              href={"#"}
              className="font-figtree font-semibold text-[18px] leading-[100%] text-[#A9A9A9] hover:text-white"
            >
              About us
            </Link>
            <Link
              href={"#"}
              className="font-figtree font-semibold text-[18px] leading-[100%] text-[#A9A9A9] hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          {openToggle ? (
            <div className="flex flex-col py-3 gap-3 bg-[#010101] absolute top-[100%] left-0 w-full">
              <Link
                href={"#"}
                className="font-figtree font-semibold text-[18px] leading-[100%] text-[#A9A9A9] hover:text-white"
              >
                About us
              </Link>
              <Link
                href={"#"}
                className="font-figtree font-semibold text-[18px] leading-[100%] text-[#A9A9A9] hover:text-white"
              >
                Contact
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
