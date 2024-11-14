"use client";

import { Button, Avatar } from "@nextui-org/react";

export const ProfileButton = () => {
  return (
    <Button className="rounded-full bg-transparent" isIconOnly>
      <Avatar showFallback src="test" />
    </Button>
  );
};
