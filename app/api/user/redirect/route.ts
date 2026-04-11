import { getAccount } from "@/lib/actions/auth";
import { generatePortfolio } from "@/lib/actions/portfolio";
import prisma from "@/lib/prisma";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { account } = await getAccount();

  console.log(account);

  if (!account) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const portfolio = await prisma.portfolio.findFirst({
    where: {
      userId: account.id,
    },
  });

  /*Validate if the user have a portfolio*/

  /* Implement a loading state */

  if (!portfolio) {
    await generatePortfolio();

    /* not have : Redirect to Portfolio : generate portfolio Data */
    //Create Portfolio Data
    const newPortfolio = 1;
    return NextResponse.redirect(
      new URL(`/dashboard/portfolio/${newPortfolio}`, request.url),
    );
  }
  /* have : Redirect to Portfolio With Data */
  return NextResponse.redirect(
    new URL(`/dashboard/portfolio/${portfolio.id}`, request.url),
  );
}
