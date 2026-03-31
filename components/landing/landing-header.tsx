import React from "react";
import { ThemeToggle } from "../common/theme-toogle";

import Link from "next/link";

export const LandingHeader = () => {
  return (
    <section className="h-15">
      <div className="max-w-7xl  h-full mx-auto flex items-center sm:px-10">
        <div className="me-auto flex gap-10">
          <Link href={"/"}>
            <span className=" text-primary font-bold">Portify.dev</span>
          </Link>
          {/* <ul>
            <Link href={"/how-it-works"}>
              <li>how it works</li>
            </Link>
          </ul> */}
        </div>
        <ThemeToggle />
      </div>
    </section>
  );
};
