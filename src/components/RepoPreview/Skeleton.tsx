import React from "react";
import type { GithubRepoSkeletonProps } from "../../types";

export const Skeleton: React.FC<GithubRepoSkeletonProps> = ({
  variant = "default",
  className,
  style,
  theme = "system",
  glass,
  gradient,
  neumorphic,
}) => {
  const wrapperClass = ["gh-repo-wrapper", className].filter(Boolean).join(" ");

  const getBoneBaseStyle = (): React.CSSProperties => {
    if (neumorphic) {
      return {
        backgroundColor: "var(--gh-repo-bg)",
        borderRadius: "12px",
        boxShadow: "3px 3px 6px var(--gh-repo-neu-dark), -3px -3px 6px var(--gh-repo-neu-light)",
      };
    }
    if (glass) {
      return { backgroundColor: "var(--gh-repo-skeleton-bg)", borderRadius: "4px" };
    }
    if (theme === "hand-drawn") {
      return {
        backgroundColor: "rgba(224, 221, 213, 0.25)",
        border: "2px solid #d0ccc5",
        borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
      };
    }
    if (theme === "hand-drawn-dark") {
      return {
        backgroundColor: "rgba(80, 80, 80, 0.25)",
        border: "2px solid #555555",
        borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
      };
    }
    if (theme === "claymorphism") {
      return {
        backgroundColor: "#e2e8f0",
        borderRadius: "9999px",
        boxShadow:
          "inset 2px 2px 4px rgba(255,255,255,0.9), inset -2px -2px 4px rgba(0,0,0,0.08)",
      };
    }
    if (theme === "claymorphism-dark") {
      return {
        backgroundColor: "#0f172a",
        borderRadius: "9999px",
        boxShadow:
          "inset 2px 2px 4px rgba(255,255,255,0.1), inset -2px -2px 4px rgba(0,0,0,0.4)",
      };
    }
    if (theme === "neobrutalism") {
      return {
        borderRadius: "4px",
        border: "2px solid #000000",
      };
    }
    if (theme === "neobrutalism-dark") {
      return {
        borderRadius: "4px",
        border: "2px solid #ffffff",
      };
    }
    return { backgroundColor: "var(--gh-repo-border)", borderRadius: "4px" };
  };

  const bone = (sx: React.CSSProperties): React.ReactNode => (
    <div
      className="gh-repo-skeleton-pulse"
      style={{
        ...getBoneBaseStyle(),
        ...sx,
      }}
    />
  );

  const wrapperAttrs = {
    className: wrapperClass,
    style,
    "data-gh-repo-theme": theme,
    "data-gh-repo-glass": glass ? "true" : undefined,
    "data-gh-repo-gradient": gradient ? "true" : undefined,
    "data-gh-repo-neumorphic": neumorphic ? "true" : undefined,
  };

  if (variant === "inline") {
    return (
      <div {...wrapperAttrs}>
        <div className="gh-repo-inline">
          {bone({ width: 14, height: 14, borderRadius: "4px" })}
          {bone({ width: 100, height: 12 })}
          {bone({ width: 40, height: 12 })}
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div {...wrapperAttrs}>
        <div className="gh-repo-compact">
          <div className="gh-repo-compact-header">
            {bone({ width: 20, height: 20, borderRadius: "4px" })}
            {bone({ width: 50, height: 14 })}
          </div>
          {bone({ width: "100%", height: 16 })}
          {bone({ width: "80%", height: 12 })}
          <div className="gh-repo-compact-footer">
            {bone({ width: 50, height: 11 })}
            {bone({ width: 60, height: 11 })}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "detailed") {
    return (
      <div {...wrapperAttrs}>
        <div className="gh-repo-detailed">
          <div className="gh-repo-detailed-header">
            {bone({ width: 40, height: 40, borderRadius: "50%", minWidth: 40 })}
            <div className="gh-repo-detailed-meta" style={{ gap: "8px" }}>
              {bone({ width: "70%", height: 18 })}
              {bone({ width: "100%", height: 14 })}
              {bone({ width: "60%", height: 14 })}
            </div>
          </div>
          <div className="gh-repo-detailed-footer">
            {bone({ width: 60, height: 14 })}
            {bone({ width: 50, height: 14 })}
            {bone({ width: 50, height: 14 })}
          </div>
        </div>
      </div>
    );
  }

  // default
  return (
    <div {...wrapperAttrs}>
      <div className="gh-repo-card">
        <div className="gh-repo-card-header">
          {bone({ width: 32, height: 32, borderRadius: "6px", minWidth: 32 })}
          <div className="gh-repo-meta" style={{ gap: "8px" }}>
            {bone({ width: "70%", height: 16 })}
            {bone({ width: "100%", height: 14 })}
          </div>
        </div>
        <div className="gh-repo-footer">
          {bone({ width: 60, height: 12 })}
          {bone({ width: 50, height: 12 })}
          {bone({ width: 50, height: 12 })}
        </div>
      </div>
    </div>
  );
};
