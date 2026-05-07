import React from "react";
import { getRelativeTime, truncateText } from "../../shared/utils";
import { PUSHED_PREFIX_MAP } from "../../shared/constants";

export function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(num);
}

export function getRepoRelativeTime(input: string | Date, locale: string): string {
  return getRelativeTime(input, locale, PUSHED_PREFIX_MAP, "pushed");
}

export function TopicPills({ topics, glass }: { topics?: string[]; glass?: boolean }) {
  if (!topics || topics.length === 0) return null;
  return (
    <div className="gh-repo-topics">
      {topics.map((topic) => (
        <span
          key={topic}
          className={["gh-repo-topic", glass ? "gh-repo-topic-glass" : ""].filter(Boolean).join(" ")}
        >
          {topic}
        </span>
      ))}
    </div>
  );
}

export { truncateText };
