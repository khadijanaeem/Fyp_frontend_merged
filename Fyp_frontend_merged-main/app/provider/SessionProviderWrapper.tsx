"use client";
/*
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SessionProviderWrapper({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}*/
/*"use client";

import { SessionProvider } from "next-auth/react";

export default function SessionProviderWrapper({ children }: any) {
  return <SessionProvider>{children}</SessionProvider>;
}*/
"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function SessionProviderWrapper({ children }: { children: ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
