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
interface NavLink {
  link: string;
  title: string;
}

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme, setTheme } = useTheme();

  const navlinks: NavLink[] = [
    { link: "/", title: "Dashboard" },
    { link: "/dl", title: "Demon List" },
    { link: "/fl", title: "Featured List" },
  ];

  useEffect(() => {
    setIsDarkMode(theme == "dark");
  }, [theme]);

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
    if (isDarkMode) {
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
        <Avatar showFallback src="https://i.pinimg.com/280x280_RS/ec/03/62/ec0362b739b1c7831a071ee24c226967.jpg" />
      </div>
    </div>
  );
};
