import { Navbar } from "@/components/dashboard/navbar/navbar";
import { Toolbar } from "@/components/dashboard/toolbar/toolbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <Toolbar />
      <div>{children}</div>
    </div>
  );
}
