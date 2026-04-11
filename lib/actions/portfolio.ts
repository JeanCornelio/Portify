import prisma from "../prisma";
import { getAccount } from "./auth";
import { getUserInfo, getReadme, getRepositories } from "./github-info";

export const getPortfolio = async () => {
  const portfolio = await prisma.portfolio.findFirst();

  return portfolio;
};

export const generatePortfolio = async () => {
  const accountInformation = await getAccount();
  const userInfo = await getUserInfo();
  const readme = await getReadme();
  const repositories = await getRepositories();

  console.log(accountInformation, userInfo);

  /* I'm thinking in get the followers in real Time */
  const { bio, company } = userInfo;

  //console.log(repositories);
};
