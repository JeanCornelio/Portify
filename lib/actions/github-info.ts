"use server";

import { getAccount } from "./auth";

export const getRepositories = async () => {
  const account = await getAccount();

  const accessToken = account.accessToken;
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

export const getUserInfo = async () => {
  const account = await getAccount();

  const accessToken = account.accessToken;
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

export const getReadme = async () => {
  const { user } = await getAccount();

  if (!user?.username) {
    return { error: "GitHub username not found" };
  }

  const username = user.username;

  const repoRes = await fetch(
    `https://api.github.com/repos/${username}/${username}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      cache: "no-store",
    },
  );

  if (!repoRes.ok) {
    return { error: "Profile repository not found" };
  }

  const repo = await repoRes.json();
  const branch = repo.default_branch;

  const readmeRes = await fetch(
    `https://raw.githubusercontent.com/${username}/${username}/${branch}/README.md`,
    { cache: "no-store" },
  );

  if (!readmeRes.ok) {
    return { error: "Failed to fetch markdown" };
  }

  const markdown = await readmeRes.text();

  return { markdown };
};
