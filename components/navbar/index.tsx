"use client";

import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Link,
} from "@nextui-org/react";
import { IconMenu2 } from "@tabler/icons-react";
import { useTheme } from "next-themes";

import { ProfileButton } from "./profile-button";
import { SearchButton } from "./search-button";

import { ThemeSwitch } from "@/components/theme-switch";
import { NotificationButton } from "@/components/navbar/notification-button";

interface NavLink {
  link: string;
  title: string;
}

export const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  const navlinks: NavLink[] = [
    { link: "/", title: "Dashboard" },
    { link: "/list/dl", title: "Demon List" },
    { link: "/list/fl", title: "Featured List" },
  ];

  useEffect(() => {
    setIsMounted(true);
  });

  const menuButton = () => {
    return (
      <Dropdown>
        <DropdownTrigger>
          <Button isIconOnly className="bg-transparent">
            <IconMenu2 />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="nav" items={navlinks}>
          {(item) => (
            <DropdownItem key={item.link}>
              <Link className="w-full text-sm text-current" href={item.link}>
                {item.title}
              </Link>
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    );
  };

  const icon = () => {
    if (isMounted && theme === "dark") {
      return <img alt="" className="h-[30px] invert" src="/favicon.ico" />;
    }

    return <img alt="" className="h-[30px]" src="/favicon.ico" />;
  };

  return (
    <div className="flex h-[65px] items-center px-[15px] sm:px-[30px]">
      <div className="flex items-center gap-[10px]">
        <Link href="/">{icon()}</Link>
        {menuButton()}
      </div>
      <div className="ml-auto flex gap-[10px]">
        <ThemeSwitch />
        <SearchButton />
        <NotificationButton />
        <ProfileButton />
      </div>
    </div>
  );
};
