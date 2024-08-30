"use client";

import { UnivercityContextProvider } from "@/context/univercity-context";
import { Suspense } from "react";

export default function UnivercityProvider({ children }) {
  return (
    <Suspense>
      <UnivercityContextProvider>{children}</UnivercityContextProvider>
    </Suspense>
  );
}
