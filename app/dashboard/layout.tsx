import { Navbar } from "@/components/dashboard/navbar";
import { Tools } from "@/components/dashboard/tools";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <Navbar />
      {/* <Tools /> */}
      {children}
    </div>
  );
}
