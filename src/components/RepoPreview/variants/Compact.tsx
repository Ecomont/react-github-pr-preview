import React from "react";
import type { GitHubRepoData } from "../../../types";
import { RepoIcon, StarIcon } from "../../../icons";
import { formatNumber, getRepoRelativeTime, truncateText } from "../utils";

export const CompactVariant: React.FC<{ repoData: GitHubRepoData; locale: string }> = ({
  repoData,
  locale,
}) => {
  return (
    <article className="gh-repo-compact">
      <div className="gh-repo-compact-header">
        <RepoIcon size={20} ariaLabel="Repository" />
        <span className="gh-repo-compact-stars" aria-label={`${formatNumber(repoData.stargazersCount)} stars`}>
          <StarIcon size={14} />
          {formatNumber(repoData.stargazersCount)}
        </span>
      </div>
      <h4 className="gh-repo-compact-title gh-repo-line-clamp">
        <a href={repoData.url} target="_blank" rel="noopener noreferrer" className="gh-repo-link">
          {repoData.name}
        </a>
      </h4>
      {repoData.description && (
        <p className="gh-repo-description gh-repo-line-clamp-2" style={{ fontSize: 12, margin: 0 }}>
          {truncateText(repoData.description, 90)}
        </p>
      )}
      <div className="gh-repo-compact-footer">
        {repoData.language?.name && (
          <span className="gh-repo-footer-item" aria-label={`Language: ${repoData.language.name}`}>
            <span className="gh-repo-lang-dot" style={{ backgroundColor: repoData.language.color }} />
            {repoData.language.name}
          </span>
        )}
        <span>
          <time dateTime={new Date(repoData.pushedAt).toISOString()}>
            {getRepoRelativeTime(repoData.pushedAt, locale)}
          </time>
        </span>
      </div>
    </article>
  );
};
