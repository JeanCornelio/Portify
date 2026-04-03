"use server";

import { redirect } from "next/navigation";
import { auth } from "../auth";
import { headers } from "next/headers";
import prisma from "../prisma";

export const signIn = async () => {
  const { url } = await auth.api.signInSocial({
    body: {
      provider: "github",
      callbackURL: "/api/user/redirect",
      scopes: ["read:user", "user:email", "repo"],
    },
  });

  if (url) {
    redirect(url);
  }
};

export const signOut = async () => {
  await auth.api.signOut({ headers: { "Content-Type": "application/json" } });
  redirect("/");
};

export const getUserSession = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  return session;
};

export const getAccount = async () => {
  const session = await getUserSession();

  const account = await prisma.account.findFirst({
    where: {
      userId: session?.user?.id,
      providerId: "github",
    },
  });
  if (!account?.accessToken) throw new Error("No GitHub token found");

  return { account, user: session?.user };
};
