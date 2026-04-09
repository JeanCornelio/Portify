import prisma from "../prisma";

export const getPortfolio = async () => {
  const portfolio = await prisma.portfolio.findFirst();

  return portfolio;
};
