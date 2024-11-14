"use client";

import {
  Button,
  Modal,
  ModalContent,
  Input,
  Kbd,
  useDisclosure,
  Card,
  CardBody,
  CardHeader,
  Link,
  Avatar,
} from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";
import { useEffect } from "react";

export const SearchButton = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key == "k") {
        e.preventDefault();
        onOpen();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const searchButton = () => {
    return (
      <>
        <Button
          onPress={onOpen}
          className="hidden h-10 w-[200px] justify-start bg-default-400/20 px-[12px] font-normal text-default-500 dark:bg-default-500/20 sm:flex"
        >
          <IconSearch size={18} />
          <span>Search</span>
          <Kbd className="ml-auto" keys={["command"]}>
            K
          </Kbd>
        </Button>
        <Button
          onPress={onOpen}
          isIconOnly
          className="bg-transparent sm:hidden"
        >
          <IconSearch color="gray" />
        </Button>
      </>
    );
  };

  const searchInput = () => (
    <Input
      autoFocus
      isClearable
      classNames={{
        label: "text-black/50 dark:text-white/90",
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "bg-default-200/50",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focus=true]:bg-default-200/50",
          "dark:group-data-[focus=true]:bg-default/60",
          "!cursor-text",
          "mb-[20px]",
          "mt-[20px] sm:mt-0"
        ],
      }}
      placeholder="Type to search..."
      startContent={<IconSearch />}
    />
  );

  const searchModal = () => {
    return (
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="w-[550px] max-w-full bg-transparent">
          {(onClose) => (
            <div className="flex flex-col-reverse sm:flex-col">
              {searchInput()}
              <div className="flex flex-col gap-[10px]">
                <Card>
                  <CardHeader className="pb-0">
                    <h4 className="text-medium font-bold">Levels</h4>
                  </CardHeader>
                  <CardBody>
                    <Link href="#!">name by creator - 12345678</Link>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader className="pb-0">
                    <h4 className="text-medium font-bold">Player</h4>
                  </CardHeader>
                  <CardBody>
                    <Link href="#!" color="foreground" className="flex gap-[10px]">
                      <Avatar showFallback src="" size="sm" />
                      NamPE
                    </Link>
                  </CardBody>
                </Card>
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    );
  };

  return (
    <>
      {searchButton()}
      {searchModal()}
    </>
  );
};
