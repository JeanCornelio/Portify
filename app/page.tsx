import { LandingHeader } from "@/components/landing/landing-header";

import { HomeClient } from "./home-client";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard/portfolio");
  }

  return (
    <div className="relative h-dvh ">
      <LandingHeader />
      <HomeClient />
    </div>
  );
}
