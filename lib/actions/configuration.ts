import prisma from "../prisma";

export const getColors = async () => {
  const themes = await prisma.themes.findMany();

  return themes;
};
