import React from "react";
import type { GitHubRepoData } from "../../../types";
import { RepoIcon, StarIcon } from "../../../icons";
import { formatNumber } from "../utils";

export const InlineVariant: React.FC<{ repoData: GitHubRepoData }> = ({ repoData }) => {
  return (
    <a
      href={repoData.url}
      target="_blank"
      rel="noopener noreferrer"
      className="gh-repo-inline"
      title={`${repoData.owner.login}/${repoData.name}`}
    >
      <span className="gh-repo-inline-icon" aria-label="Repository">
        <RepoIcon size={14} />
      </span>
      <span className="gh-repo-inline-name">
        {repoData.owner.login}/{repoData.name}
      </span>
      <span className="gh-repo-inline-stars" aria-label={`${formatNumber(repoData.stargazersCount)} stars`}>
        <StarIcon size={12} />
        {formatNumber(repoData.stargazersCount)}
      </span>
    </a>
  );
};
