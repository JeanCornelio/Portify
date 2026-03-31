import React from "react";
import { Button } from "../ui/button";
import { Palette, Share } from "lucide-react";

export const Tools = () => {
  return (
    <div className="bg-card rounded-full h-13 flex items-center px-10 max-w-2xl mx-auto gap-2 mt-10">
      <Button size={"icon"} className="flex gap-2">
        <Palette />
      </Button>

      <Button size={"icon"} className="flex gap-2">
        <Share />
      </Button>
    </div>
  );
};
