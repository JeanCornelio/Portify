import React from "react";
import { Button } from "../../ui/button";
import { Palette, Type } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const toolbarOptions: customPopoverProps[] = [
  {
    id: 1,
    titleButton: "Themes",
    icon: () => <Palette />,
    titleHeader: "10 Themes",
    description: "Select a theme to customize the appearance of the interface.",
    variantButton: "outline",
    content: () => <h2>Theme Content</h2>,
  },
  {
    id: 2,
    titleButton: "Typography",
    icon: () => <Type />,
    titleHeader: "40 Typography",
    description: "Write it",
    variantButton: "outline",
    content: () => <h2>Typography Content</h2>,
  },
];

interface customPopoverProps {
  id?: number;
  titleButton: string;
  icon: React.ComponentType;
  titleHeader: string;
  description: string;
  variantButton: string;
  content: React.ComponentType;
}

const CustomPopover = ({
  titleButton,
  titleHeader,
  icon,
  description,
  variantButton = "outline",
  content,
}: customPopoverProps) => {
  const Icon = icon;
  const Content = content;
  return (
    <Popover>
      <PopoverTrigger render={<Button variant={variantButton} />}>
        <Icon /> {titleButton}
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>{titleHeader}</PopoverTitle>
          <PopoverDescription>{description}</PopoverDescription>
        </PopoverHeader>
        <Content />
      </PopoverContent>
    </Popover>
  );
};

export const Toolbar = () => {
  return (
    <div className=" h-15 bg-card border-b">
      <div className="max-w-7xl  h-full mx-auto flex items-center ">
        <div className="me-auto flex gap-4 ">
          {toolbarOptions.map((item) => {
            return <CustomPopover {...item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
