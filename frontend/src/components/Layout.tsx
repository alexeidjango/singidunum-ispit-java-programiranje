import type { PropsWithChildren } from "react";
import { NavBar } from "./common/NavBar.tsx";

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <NavBar />
    {children}
  </>
);
