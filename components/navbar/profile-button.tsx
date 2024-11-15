"use client";

import {
    Button,
    Avatar,
    Popover,
    PopoverTrigger,
    PopoverContent,
    Divider,
} from "@nextui-org/react";

import {
    IconUser,
    IconSend,
    IconLogout,
    IconPlus,
    IconBrandGoogleFilled,
    IconSettings,
} from "@tabler/icons-react";
import { ReactElement, useState } from "react";

interface NavLink {
    onPress: () => void;
    icon: ReactElement;
    title: string;
    textColor: string;
}

export const ProfileButton = () => {
    const [isSignedIn, setIsSignedIn] = useState(true);
    const navLinkGroups: NavLink[][] = [
        [
            {
                onPress: () => {},
                icon: <IconUser size={21} color="gray" />,
                title: "Profile",
                textColor: "",
            },
            {
                onPress: () => {},
                icon: <IconSend size={21} color="gray" />,
                title: "Submissions",
                textColor: "",
            },
        ],
        [
            {
                onPress: () => {},
                icon: <IconSettings size={21} color="gray" />,
                title: "Settings",
                textColor: "",
            },
        ],
        [
            {
                onPress: () => {
                    setIsSignedIn(false);
                },
                icon: <IconLogout size={21} color="#f31260" />,
                title: "Sign Out",
                textColor: "danger",
            },
        ],
    ];

    if (!isSignedIn) {
        return (
            <Popover placement="bottom-end" showArrow={true}>
                <PopoverTrigger>
                    <Button className="rounded-full bg-transparent" isIconOnly>
                        <Avatar showFallback src="test" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[250px] max-w-full py-[20px]">
                    <Button color="primary" onPress={() => setIsSignedIn(true)}>
                        <IconBrandGoogleFilled /> Sign in with Google
                    </Button>
                </PopoverContent>
            </Popover>
        );
    }

    return (
        <Popover placement="bottom-end" showArrow={true}>
            <PopoverTrigger>
                <Button className="rounded-full bg-transparent" isIconOnly>
                    <Avatar showFallback src="test" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[350px] max-w-full">
                <div className="w-full py-2">
                    <div className="mt-[20px] flex flex-col items-center gap-[10px]">
                        <Avatar
                            isBordered
                            showFallback
                            src=""
                            size="lg"
                            className="h-[100px] w-[100px]"
                        />
                        <b className="text-xl">Hello, Player</b>
                    </div>
                    <div className="my-[15px] flex justify-center">
                        <Button
                            className="font-bold"
                            color="primary"
                            variant="flat"
                        >
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
                                            {item.icon}{" "}
                                            <span
                                                className={
                                                    item.textColor
                                                        ? `text-${item.textColor}`
                                                        : ""
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
