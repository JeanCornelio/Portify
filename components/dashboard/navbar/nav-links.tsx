"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const routes = [
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

export const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex gap-5">
      {routes.map((item, idx) => (
        <Link
          href={item.path}
          target={item.target}
          key={idx}
          className={`${pathname === item.path ? "text-primary" : ""} hover:text-primary `}>
          {item.name}
        </Link>
      ))}
    </ul>
  );
};
