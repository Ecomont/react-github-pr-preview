import React from "react";
import type { PullRequestData } from "../../types";
import {
  PrOpenIcon,
  PrClosedIcon,
  PrMergedIcon,
  PrChecksSuccessIcon,
  PrChecksFailureIcon,
  PrChecksPendingIcon,
} from "../../icons";
import { getContrastColor, getRelativeTime } from "../../shared/utils";
import { OPENED_PREFIX_MAP } from "../../shared/constants";

export interface StatusMeta {
  label: string;
  bgVar: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

export function getStatusMeta(state: "open" | "closed", merged: boolean): StatusMeta {
  if (merged) {
    return {
      label: "Merged",
      bgVar: "var(--gh-pr-merged-bg)",
      ariaLabel: "Pull Request: Merged",
      icon: <PrMergedIcon />,
    };
  }
  if (state === "open") {
    return {
      label: "Open",
      bgVar: "var(--gh-pr-open-bg)",
      ariaLabel: "Pull Request: Open",
      icon: <PrOpenIcon />,
    };
  }
  return {
    label: "Closed",
    bgVar: "var(--gh-pr-closed-bg)",
    ariaLabel: "Pull Request: Closed",
    icon: <PrClosedIcon />,
  };
}

export function ChecksIcon({ status }: { status: "success" | "failure" | "pending" }) {
  if (status === "success") {
    return (
      <span className="gh-pr-checks" title="All checks passed">
        <PrChecksSuccessIcon />
      </span>
    );
  }
  if (status === "failure") {
    return (
      <span className="gh-pr-checks" title="Checks failed">
        <PrChecksFailureIcon />
      </span>
    );
  }
  return (
    <span className="gh-pr-checks" title="Checks pending">
      <PrChecksPendingIcon />
    </span>
  );
}

export function LabelPills({
  labels,
  glass,
  gradient,
}: {
  labels?: { name: string; color: string }[];
  glass?: boolean;
  gradient?: boolean;
}) {
  if (!labels || labels.length === 0) return null;
  return (
    <div className="gh-pr-labels">
      {labels.map((label) => (
        <span
          key={label.name}
          className={["gh-pr-label", glass ? "gh-pr-label-glass" : "", gradient ? "gh-pr-label-gradient" : ""]
            .filter(Boolean)
            .join(" ")}
          style={
            glass || gradient
              ? undefined
              : {
                  backgroundColor: `#${label.color.replace("#", "")}`,
                  color: getContrastColor(label.color),
                }
          }
        >
          {label.name}
        </span>
      ))}
    </div>
  );
}

export function getPrRelativeTime(input: string | Date, locale: string): string {
  return getRelativeTime(input, locale, OPENED_PREFIX_MAP, "opened");
}

export type VariantProps = {
  prData: PullRequestData;
  locale: string;
  glass?: boolean;
  gradient?: boolean;
};
