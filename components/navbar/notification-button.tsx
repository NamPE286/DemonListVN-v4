import { IconBell } from "@tabler/icons-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";

export const NotificationButton = () => {
  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button isIconOnly className="rounded-full bg-transparent">
          <IconBell color="gray" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] max-w-full px-[15px] pb-[15px]">
        <div className="flex w-full items-center px-1 py-2">
          <div className="text-medium font-bold">Notification</div>
          <Button className="ml-auto bg-transparent text-foreground-500">
            Clear
          </Button>
        </div>
        <div className="flex flex-col gap-[10px]">
          <Card>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                felis elit, rutrum a bibendum id, lacinia vitae metus.
              </p>
              <p className="text-gray-500">1/1/2025</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                felis elit, rutrum a bibendum id, lacinia vitae metus.
              </p>
              <p className="text-gray-500">1/1/2025</p>
            </CardBody>
          </Card>
        </div>
      </PopoverContent>
    </Popover>
  );
};
