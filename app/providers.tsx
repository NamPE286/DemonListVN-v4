"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import { client } from "@/utils/client";

type TUser = Awaited<ReturnType<typeof client.player.getPlayerByUID>>;

const UserContext = createContext<TUser | null | undefined>(undefined);

export interface ProvidersProps {
  children: ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const [user, setUser] = useState<TUser | null | undefined>(undefined);
  const router = useRouter();

  async function getUser() {
    const { data, error } = await client.db.auth.getUser();

    if (error || !data.user) {
      setUser(null);

      return;
    }

    setUser(await client.player.getPlayerByUID(data.user.id));
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const useUser = () => useContext(UserContext);
