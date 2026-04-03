import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

interface UserPhotoProps {
  name: string;
  image: string | Blob;
}

export const UserPhoto = ({ name, image }: UserPhotoProps) => {
  const fallbackName = name
    .split(" ")
    .map((item) => item.slice(0, 1))
    .join("")
    .slice(0, 2);
  return (
    <Avatar className="h-5 w-5">
      <AvatarImage src={image} alt="@shadcn" />
      <AvatarFallback>{fallbackName}</AvatarFallback>
    </Avatar>
  );
};
