import { getAccount } from "@/lib/actions/auth";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const account = await getAccount();

  console.log(account);

  if (!account) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.redirect(new URL("/dashboard/portfolio", request.url));

  /*Validate if the user have a portfolio*/

  /* have : Redirect to saved  */

  /* not have : Redirect to create portfolio */
}
