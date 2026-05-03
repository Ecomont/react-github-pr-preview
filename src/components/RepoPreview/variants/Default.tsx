import React from "react";
import type { GitHubRepoData } from "../../../types";
import { RepoIcon, StarIcon, ForkIcon, ClockIcon, LicenseIcon } from "../../../icons";
import { formatNumber, getRepoRelativeTime } from "../utils";

export const DefaultVariant: React.FC<{ repoData: GitHubRepoData; locale: string }> = ({
  repoData,
  locale,
}) => {
  return (
    <article className="gh-repo-card">
      <div className="gh-repo-card-header">
        <div className="gh-repo-icon" aria-label="Repository">
          <RepoIcon size={18} />
        </div>
        <div className="gh-repo-meta">
          <h3 className="gh-repo-title">
            <a href={repoData.url} target="_blank" rel="noopener noreferrer" className="gh-repo-link">
              {repoData.owner.login}/{repoData.name}
            </a>
          </h3>
          {repoData.description && (
            <p className="gh-repo-description gh-repo-line-clamp-2">{repoData.description}</p>
          )}
        </div>
      </div>
      <div className="gh-repo-footer">
        {repoData.language?.name && (
          <span className="gh-repo-footer-item" aria-label={`Language: ${repoData.language.name}`}>
            <span className="gh-repo-lang-dot" style={{ backgroundColor: repoData.language.color }} />
            {repoData.language.name}
          </span>
        )}
        <span className="gh-repo-footer-item" aria-label={`${formatNumber(repoData.stargazersCount)} stars`}>
          <StarIcon size={14} />
          {formatNumber(repoData.stargazersCount)}
        </span>
        <span className="gh-repo-footer-item" aria-label={`${formatNumber(repoData.forksCount)} forks`}>
          <ForkIcon size={14} />
          {formatNumber(repoData.forksCount)}
        </span>
        {repoData.license && (
          <span className="gh-repo-footer-item" aria-label={`License: ${repoData.license}`}>
            <LicenseIcon size={14} />
            {repoData.license}
          </span>
        )}
        <span className="gh-repo-footer-item">
          <ClockIcon size={14} ariaLabel="Last pushed" />
          <time dateTime={new Date(repoData.pushedAt).toISOString()}>
            {getRepoRelativeTime(repoData.pushedAt, locale)}
          </time>
        </span>
      </div>
    </article>
  );
};
