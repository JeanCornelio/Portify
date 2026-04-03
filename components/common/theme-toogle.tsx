"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const handleChangeTheme = () =>
    theme === Theme.DARK ? setTheme(Theme.LIGHT) : setTheme(Theme.DARK);

  return (
    <Button
      variant="outline"
      size="icon-xs"
      onClick={() => handleChangeTheme()}>
      <Sun className="scale-0 size-3  -rotate-90 transition-all   dark:scale-100  dark:rotate-0" />

      <Moon className="absolute size-3   scale-100 rotate-0 transition-all  dark:scale-0 dark:rotate-90" />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
