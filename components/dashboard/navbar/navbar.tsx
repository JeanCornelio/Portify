import { Separator } from "@/components/ui/separator";

import { UserPhoto } from "./user-photo";
import { ThemeToggle } from "@/components/common/theme-toogle";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { getUserSession, signOut } from "@/lib/actions/auth";

export async function Navbar() {
  const session = await getUserSession();

  const { user } = session;

  return (
    <nav className=" h-15 bg-card border-b">
      <div className="max-w-7xl  h-full mx-auto flex items-center ">
        <div className="me-auto flex gap-5 ">
          <span className=" text-primary font-bold select-none">
            Portify.dev
          </span>
          <Separator />
        </div>
        <div className="flex h-44 items-center gap-2 text-sm">
          <UserPhoto name={user.name} image={user.image} />
          <Separator orientation="vertical" />
          <ThemeToggle />
          <Separator orientation="vertical" />
          <Button size={"icon-xs"} variant="outline" onClick={signOut}>
            <LogOut />
          </Button>
        </div>
      </div>
    </nav>
  );
}
