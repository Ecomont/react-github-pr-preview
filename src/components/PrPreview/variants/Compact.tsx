import React from "react";
import type { VariantProps } from "../utils";
import { getStatusMeta, getPrRelativeTime } from "../utils";

export const CompactVariant: React.FC<VariantProps> = ({ prData, locale, glass, gradient }) => {
  const status = getStatusMeta(prData.state, prData.merged);

  return (
    <article className="gh-pr-kanban">
      <div className="gh-pr-kanban-header">
        <div
          className="gh-pr-kanban-icon"
          style={glass || gradient ? { color: status.bgVar } : { backgroundColor: status.bgVar }}
          aria-label={status.ariaLabel}
        >
          {status.icon}
        </div>
        <img src={prData.author.avatarUrl} alt={prData.author.login} className="gh-pr-kanban-avatar" title={prData.author.login} />
      </div>
      <h4 className="gh-pr-kanban-title gh-pr-line-clamp">
        <a href={prData.url} target="_blank" rel="noopener noreferrer" className="gh-pr-link">
          {prData.title}
        </a>
      </h4>
      <div className="gh-pr-kanban-footer">
        <span>#{prData.number}</span>
        <span>
          <time dateTime={new Date(prData.createdAt).toISOString()}>
            {getPrRelativeTime(prData.createdAt, locale)}
          </time>
        </span>
      </div>
      {(typeof prData.additions === "number" || typeof prData.deletions === "number") && (
        <div className="gh-pr-kanban-footer">
          <span className="gh-pr-diff">
            {typeof prData.additions === "number" && (
              <span className="gh-pr-diff-add">+{prData.additions}</span>
            )}{" "}
            {typeof prData.deletions === "number" && (
              <span className="gh-pr-diff-del">-{prData.deletions}</span>
            )}
          </span>
        </div>
      )}
    </article>
  );
};
