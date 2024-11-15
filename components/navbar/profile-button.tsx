"use client";

import {
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Divider,
  Skeleton,
} from "@nextui-org/react";
import {
  IconUser,
  IconSend,
  IconLogout,
  IconPlus,
  IconBrandGoogleFilled,
  IconSettings,
} from "@tabler/icons-react";
import { ReactElement } from "react";

import { client } from "@/utils/client";
import { useUser } from "@/app/providers";

interface NavLink {
  onPress: () => void;
  icon: ReactElement;
  title: string;
  textColor: string;
}

export const ProfileButton = () => {
  const user = useUser();

  function signIn() {
    client.db.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: window.location.origin,
      },
    });
  }

  function signOut() {
    client.db.auth.signOut();
    window.location.reload();
  }

  const navLinkGroups: NavLink[][] = [
    [
      {
        onPress: () => {},
        icon: <IconUser color="gray" size={21} />,
        title: "Profile",
        textColor: "",
      },
      {
        onPress: () => {},
        icon: <IconSend color="gray" size={21} />,
        title: "Submissions",
        textColor: "",
      },
    ],
    [
      {
        onPress: () => {},
        icon: <IconSettings color="gray" size={21} />,
        title: "Settings",
        textColor: "",
      },
    ],
    [
      {
        onPress: signOut,
        icon: <IconLogout color="#f31260" size={21} />,
        title: "Sign Out",
        textColor: "danger",
      },
    ],
  ];

  if (typeof user === "undefined") {
    return (
      <Popover placement="bottom-end" showArrow={true}>
        <PopoverTrigger>
          <Button isIconOnly className="rounded-full bg-transparent">
            <Avatar showFallback src="" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] max-w-full px-[20px] py-[20px]">
          <Skeleton className="flex h-12 w-full rounded-lg" />
        </PopoverContent>
      </Popover>
    );
  }

  if (user === null) {
    return (
      <Popover placement="bottom-end" showArrow={true}>
        <PopoverTrigger>
          <Button isIconOnly className="rounded-full bg-transparent">
            <Avatar showFallback src="" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] max-w-full py-[20px]">
          <Button color="primary" onPress={signIn}>
            <IconBrandGoogleFilled /> Sign in with Google
          </Button>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Popover placement="bottom-end" showArrow={true}>
      <PopoverTrigger>
        <Button isIconOnly className="rounded-full bg-transparent">
          <Avatar
            showFallback
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${user.uid}.jpg`}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] max-w-full">
        <div className="w-full py-2">
          <div className="mt-[20px] flex flex-col items-center gap-[10px]">
            <Avatar
              isBordered
              showFallback
              className="h-[100px] w-[100px]"
              size="lg"
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${user.uid}.jpg`}
            />
            <b className="text-xl">Hello, {user.name}</b>
          </div>
          <div className="my-[15px] flex justify-center">
            <Button className="font-bold" color="primary" variant="flat">
              <IconPlus /> Submit new record
            </Button>
          </div>

          {navLinkGroups.map((group, index) => {
            return (
              <div key={index}>
                {group.map((item) => {
                  return (
                    <Button
                      key={item.title}
                      className="h-[35px] w-full justify-start bg-transparent px-3 hover:bg-default"
                      onPress={item.onPress}
                    >
                      {item.icon}
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
