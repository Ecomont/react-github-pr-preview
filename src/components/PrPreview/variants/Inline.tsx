import React from "react";
import type { PullRequestData } from "../../../types";
import { getStatusMeta } from "../utils";

export const InlineVariant: React.FC<{
  prData: PullRequestData;
  glass?: boolean;
  gradient?: boolean;
}> = ({ prData, glass, gradient }) => {
  const status = getStatusMeta(prData.state, prData.merged);

  return (
    <a
      href={prData.url}
      target="_blank"
      rel="noopener noreferrer"
      className="gh-pr-chip"
      title={`${status.label}: ${prData.title}`}
    >
      <span
        className="gh-pr-chip-icon"
        style={
          glass || gradient
            ? { color: status.bgVar, backgroundColor: "transparent" }
            : { backgroundColor: status.bgVar }
        }
        aria-label={status.ariaLabel}
      >
        {status.icon}
      </span>
      <span className="gh-pr-chip-number">#{prData.number}</span>
      <span className="gh-pr-chip-title">{prData.title}</span>
    </a>
  );
};
