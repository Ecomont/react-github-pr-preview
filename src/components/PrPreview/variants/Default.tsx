import React from "react";
import type { VariantProps } from "../utils";
import { getStatusMeta, ChecksIcon, LabelPills, getPrRelativeTime } from "../utils";

export const DefaultVariant: React.FC<VariantProps> = ({ prData, locale, glass, gradient }) => {
  const status = getStatusMeta(prData.state, prData.merged);

  return (
    <article className="gh-pr-card">
      <div className="gh-pr-card-header">
        <div
          className="gh-pr-icon"
          style={glass || gradient ? { color: status.bgVar } : { backgroundColor: status.bgVar }}
          aria-label={status.ariaLabel}
        >
          {status.icon}
        </div>
        <div className="gh-pr-meta">
          <h3 className="gh-pr-title">
            <a href={prData.url} target="_blank" rel="noopener noreferrer" className="gh-pr-link">
              {prData.title}
            </a>{" "}
            <span className="gh-pr-number">#{prData.number}</span>
          </h3>
          <LabelPills labels={prData.labels} glass={glass} gradient={gradient} />
          <div className="gh-pr-subtitle">
            <img src={prData.author.avatarUrl} alt={`${prData.author.login}'s avatar`} className="gh-pr-avatar" />
            <strong style={{ color: "var(--gh-pr-text-primary)" }}>{prData.author.login}</strong>{" "}
            <time dateTime={new Date(prData.createdAt).toISOString()}>
              {getPrRelativeTime(prData.createdAt, locale)}
            </time>
            {prData.checksStatus && <ChecksIcon status={prData.checksStatus} />}
          </div>
        </div>
      </div>
      <div className="gh-pr-footer">
        <span className="gh-pr-badge" style={{ backgroundColor: status.bgVar }}>
          {status.icon}
          {status.label}
        </span>
        {(typeof prData.additions === "number" || typeof prData.deletions === "number") && (
          <span className="gh-pr-diff">
            {typeof prData.additions === "number" && (
              <span className="gh-pr-diff-add">+{prData.additions}</span>
            )}{" "}
            {typeof prData.deletions === "number" && (
              <span className="gh-pr-diff-del">-{prData.deletions}</span>
            )}
          </span>
        )}
      </div>
    </article>
  );
};
