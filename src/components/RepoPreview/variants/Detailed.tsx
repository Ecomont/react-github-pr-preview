import React from "react";
import type { GitHubRepoData } from "../../../types";
import { StarIcon, ForkIcon, ClockIcon, LicenseIcon } from "../../../icons";
import { formatNumber, getRepoRelativeTime, TopicPills } from "../utils";

export const DetailedVariant: React.FC<{ repoData: GitHubRepoData; locale: string; glass?: boolean }> = ({
  repoData,
  locale,
  glass,
}) => {
  return (
    <article className="gh-repo-detailed">
      <div className="gh-repo-detailed-header">
        <img src={repoData.owner.avatarUrl} alt={`${repoData.owner.login}'s avatar`} className="gh-repo-detailed-avatar" />
        <div className="gh-repo-detailed-meta">
          <h3 className="gh-repo-detailed-title">
            <a href={repoData.url} target="_blank" rel="noopener noreferrer" className="gh-repo-link">
              {repoData.owner.login}/{repoData.name}
            </a>
          </h3>
          {repoData.description && <p className="gh-repo-detailed-description">{repoData.description}</p>}
          <TopicPills topics={repoData.topics} glass={glass} />
        </div>
      </div>
      <div className="gh-repo-detailed-footer">
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
