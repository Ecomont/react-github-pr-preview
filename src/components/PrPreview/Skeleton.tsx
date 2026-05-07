import React from "react";
import type { GithubPrSkeletonProps } from "../../types";

export const Skeleton: React.FC<GithubPrSkeletonProps> = ({
  variant = "default",
  className,
  style,
  theme = "system",
  glass,
  gradient,
  neumorphic,
}) => {
  const wrapperClass = ["gh-pr-wrapper", className].filter(Boolean).join(" ");

  const getBoneBaseStyle = (): React.CSSProperties => {
    if (neumorphic) {
      return {
        backgroundColor: "var(--gh-pr-bg)",
        borderRadius: "12px",
        boxShadow: "3px 3px 6px var(--gh-pr-neu-dark), -3px -3px 6px var(--gh-pr-neu-light)",
      };
    }
    if (glass) {
      return { backgroundColor: "var(--gh-pr-skeleton-bg)", borderRadius: "4px" };
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
    return { backgroundColor: "var(--gh-pr-border)", borderRadius: "4px" };
  };

  const bone = (sx: React.CSSProperties): React.ReactNode => (
    <div
      className="gh-pr-skeleton-pulse"
      style={{
        ...getBoneBaseStyle(),
        ...sx,
      }}
    />
  );

  const wrapperAttrs = {
    className: wrapperClass,
    style,
    "data-gh-pr-theme": theme,
    "data-gh-pr-glass": glass ? "true" : undefined,
    "data-gh-pr-gradient": gradient ? "true" : undefined,
    "data-gh-pr-neumorphic": neumorphic ? "true" : undefined,
  };

  if (variant === "inline") {
    return (
      <div {...wrapperAttrs}>
        <div className="gh-pr-chip">
          {bone({ width: 14, height: 14, borderRadius: "50%" })}
          {bone({ width: 40, height: 12 })}
          {bone({ width: 120, height: 12 })}
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div {...wrapperAttrs}>
        <div className="gh-pr-kanban">
          <div className="gh-pr-kanban-header">
            {bone({ width: 20, height: 20, borderRadius: "50%" })}
            {bone({ width: 20, height: 20, borderRadius: "50%" })}
          </div>
          {bone({ width: "100%", height: 16 })}
          {bone({ width: "70%", height: 16 })}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4px" }}>
            {bone({ width: 40, height: 11 })}
            {bone({ width: 60, height: 11 })}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "detailed") {
    return (
      <div {...wrapperAttrs}>
        <div className="gh-pr-card">
          <div className="gh-pr-card-header">
            {bone({ width: 32, height: 32, borderRadius: "50%", minWidth: 32 })}
            <div className="gh-pr-meta" style={{ gap: "8px" }}>
              {bone({ width: "80%", height: 16 })}
              {bone({ width: "50%", height: 12 })}
            </div>
          </div>
          {bone({ width: "calc(100% - 32px)", height: 14, margin: "0 16px 12px" })}
          {bone({ width: "calc(90% - 32px)", height: 14, margin: "0 16px 16px" })}
          <div className="gh-pr-footer">
            {bone({ width: 60, height: 20, borderRadius: "10px" })}
            {bone({ width: 50, height: 14 })}
          </div>
        </div>
      </div>
    );
  }

  // default
  return (
    <div {...wrapperAttrs}>
      <div className="gh-pr-card">
        <div className="gh-pr-card-header">
          {bone({ width: 32, height: 32, borderRadius: "50%", minWidth: 32 })}
          <div className="gh-pr-meta" style={{ gap: "8px" }}>
            {bone({ width: "80%", height: 16 })}
            {bone({ width: "50%", height: 12 })}
          </div>
        </div>
        <div className="gh-pr-footer">
          {bone({ width: 60, height: 20, borderRadius: "10px" })}
          {bone({ width: 50, height: 14 })}
        </div>
      </div>
    </div>
  );
};
