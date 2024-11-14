"use client";

import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Avatar,
} from "@nextui-org/react";
import { IconMenu2 } from "@tabler/icons-react";
import { ThemeSwitch } from "@/components/theme-switch";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ProfileButton } from "@/components/profile-button";

interface NavLink {
  link: string;
  title: string;
}

export const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const navlinks: NavLink[] = [
    { link: "/", title: "Dashboard" },
    { link: "/dl", title: "Demon List" },
    { link: "/fl", title: "Featured List" },
    { link: "/settings", title: "Settings" },
  ];

  useEffect(() => {
    setIsMounted(true);
  });

  const menuButton = () => {
    return (
      <Dropdown>
        <DropdownTrigger>
          <Button className="bg-transparent" isIconOnly>
            <IconMenu2 />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="nav" items={navlinks}>
          {(item) => <DropdownItem key={item.link}>{item.title}</DropdownItem>}
        </DropdownMenu>
      </Dropdown>
    );
  };

  const icon = () => {
    if (isMounted && theme === "dark") {
      return <img src="/favicon.ico" className="h-[30px] invert"></img>;
    }

    return <img src="/favicon.ico" className="h-[30px]"></img>;
  };

  return (
    <div className="h-[65px] flex items-center pl-[30px] pr-[30px]">
      <div className="flex items-center gap-[10px]">
        <Link href="/">{icon()}</Link>
        {menuButton()}
      </div>
      <div className="ml-auto flex gap-[10px]">
        <ThemeSwitch />
        <ProfileButton />
      </div>
    </div>
  );
};
