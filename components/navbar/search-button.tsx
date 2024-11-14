"use client";

import { Button } from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";

export const SearchButton = () => {
  return (
    <div>
      <Button className="hidden h-10 w-[150px] bg-default-400/20 px-0 font-normal text-default-500 dark:bg-default-500/20 sm:flex">
        <IconSearch size={18} />
        <span>Search</span>
      </Button>
      <Button isIconOnly className="bg-transparent sm:hidden">
        <IconSearch color="gray"/>
      </Button>
    </div>
  );
};
