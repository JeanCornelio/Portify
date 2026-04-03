"use server";

import { getAccount } from "./auth";

export const getGitHubUserRepos = async () => {
  const res = await getAccount();

  const accessToken = res.account.accessToken;
  const response = await fetch(`${process.env.GITHUB_URL_BASE}/user/repos`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    console.log(response);
    return { error: "Failed to fetch repositories" };
  }

  const data = await response.json();
  return data;
};

export const getGitHubUserInfo = async () => {
  const res = await getAccount();

  const accessToken = res.account.accessToken;
  const response = await fetch(`${process.env.GITHUB_URL_BASE}/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    console.log(response);
    return { error: "Failed to fetch user info" };
  }

  const data = await response.json();
  return data;
};

export const generatePortfolio = async () => {
  const accountInformation = await getAccount();
  const userInfo = await getGitHubUserInfo();
  const repositories = await getGitHubUserRepos();

  console.log(accountInformation, userInfo);
  console.log(repositories);
};
