"use client";

import {
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Divider,
} from "@nextui-org/react";

import { IconUser, IconSend, IconLogout } from "@tabler/icons-react";
import { ReactElement } from "react";

interface NavLink {
  onClick: () => void;
  icon: ReactElement;
  title: string;
  textColor: string;
}

export const ProfileButton = () => {
  const navLinkGroups: NavLink[][] = [
    [
      {
        onClick: () => {},
        icon: <IconUser size={21} color="gray" />,
        title: "Profile",
        textColor: "default",
      },
      {
        onClick: () => {},
        icon: <IconSend size={21} color="gray" />,
        title: "Submissions",
        textColor: "default",
      },
    ],
    [
      {
        onClick: () => {},
        icon: <IconLogout size={21} color="#f31260" />,
        title: "Sign Out",
        textColor: "danger",
      },
    ],
  ];

  return (
    <Popover placement="bottom-end" showArrow={true}>
      <PopoverTrigger>
        <Button className="rounded-full bg-transparent" isIconOnly>
          <Avatar showFallback src="test" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] max-w-full">
        <div className="w-full py-2">
          <div className="my-[20px] flex flex-col items-center gap-[10px]">
            <Avatar
              isBordered
              showFallback
              src=""
              size="lg"
              className="h-[100px] w-[100px]"
            />
            <b className="text-xl">Hello, Player</b>
          </div>
          {navLinkGroups.map((group, index) => {
            return (
              <div key={index}>
                {group.map((item) => {
                  return (
                    <Button key={item.title} className="h-[35px] w-full justify-start bg-transparent px-3 hover:bg-default">
                      {item.icon}{" "}
                      <span
                        className={
                          item.textColor ? `text-${item.textColor}` : ""
                        }
                      >
                        {item.title}
                      </span>
                    </Button>
                  );
                })}

                {index != navLinkGroups.length - 1 ? (
                  <Divider className="mx-auto my-2 w-[95%]" />
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};
