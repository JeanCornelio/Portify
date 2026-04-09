"use client";

import { GithubSvg } from "@/components/common/svg";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { signIn } from "@/lib/actions/auth";
import Link from "next/link";
import React, { useState } from "react";

export const HomeClient = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSignIn = () => {
    setIsLoading(true);
    signIn();
  };

  return (
    <>
      {" "}
      <main className=" gap-10 max-w-7xl mx-auto  items-center justify-center">
        <div className="flex flex-col gap-6 mt-40">
          <h1 className="text-3xl sm:text-5xl lg:text-8xl font-bold text-center dark:text-white ">
            From <span className="text-primary">GitHub</span> to <br></br>
            <span className="text-primary">portfolio</span> in one click.
          </h1>
          <p className="sm:text-lg xl:text-2xl text-gray-600 dark:text-gray-400 text-center">
            Connect your GitHub and we&apos;ll build it for you. <br></br> Ready
            to share in under a minute.{" "}
          </p>
          <div className="flex gap-3 justify-center">
            <Button className=" p-5" size={"lg"} onClick={onSignIn}>
              {isLoading ? <Spinner /> : <GithubSvg />}
              Get started
            </Button>

            <Link href={"/dashboard/portfolio/create"}>
              {" "}
              <Button className="p-5 " variant={"outline"} size={"lg"}>
                How it works?
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <div className="absolute top-0 z-[-2] h-screen w-screen  bg-card dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </>
  );
};
