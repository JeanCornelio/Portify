import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getColors } from "@/lib/actions/configuration";
import React from "react";

export const ColorOption = async () => {
  const colors = await getColors();

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
      {colors.map((item) => (
        <Button className=" rounded-none px-0 " variant="ghost" key={item.id}>
          <div className="flex items-center justify-between w-full ms-auto">
            <div className="flex gap-1">
              {" "}
              {item.colors.map((clr, idx) => (
                <div
                  className=" rounded-2xl h-3 w-3"
                  style={{ background: clr }}
                  key={idx}></div>
              ))}
            </div>
            <span className="text-muted-foreground me-3"> {item.name}</span>
          </div>
        </Button>
      ))}
      <Separator />
    </div>
  );
};
