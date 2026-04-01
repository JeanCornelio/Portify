"use client";

import Link from "next/link";
import { ThemeToggle } from "../common/theme-toogle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { usePathname } from "next/navigation";

const dashboardRoutes = [
  {
    path: "/dashboard/portfolio/create",
    name: "Create",
    target: "",
  },
  {
    path: "/dashboard/portfolio/saved",
    name: "Saved",
    target: "",
  },
  {
    path: "/dashboard/portfolio/search",
    name: "Search",
    target: "",
  },
  {
    path: "https://github.com/JeanCornelio/Portify",
    name: "Github",
    target: "_blank",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <section className=" h-15 border-b">
      <div className="max-w-7xl  h-full mx-auto flex items-center ">
        <div className="me-auto flex gap-5">
          <Link href={"/"}>
            <span className=" text-primary font-bold">Portify.dev</span>
          </Link>
          <Separator />

          <ul className="flex gap-5">
            {dashboardRoutes.map((item, idx) => (
              <Link
                href={item.path}
                target={item.target}
                key={idx}
                className={`${pathname === item.path ? "text-primary" : ""} hover:text-primary `}>
                {item.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex h-44 items-center gap-4 text-sm">
          <Avatar className="h-5 w-5">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <Separator orientation="vertical" />
          <ThemeToggle />
          <Separator orientation="vertical" />
          <Button size={"icon"} variant={"ghost"} className="">
            <LogOut />
          </Button>
        </div>
      </div>
    </section>
  );
};
