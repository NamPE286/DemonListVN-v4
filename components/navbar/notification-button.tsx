import { IconBell } from "@tabler/icons-react";
import { Button } from "@nextui-org/react";

export const NotificationButton = () => {
  return (
    <Button isIconOnly className="bg-transparent rounded-full">
        <IconBell color="gray"/>
    </Button>
  );
};
