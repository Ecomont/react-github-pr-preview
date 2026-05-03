import React from "react";
import type { GithubRepoPreviewProps, GithubRepoSkeletonProps } from "../../types";
import { injectRepoStyles } from "./styles";
import { DefaultVariant } from "./variants/Default";
import { DetailedVariant } from "./variants/Detailed";
import { CompactVariant } from "./variants/Compact";
import { InlineVariant } from "./variants/Inline";
import { Skeleton } from "./Skeleton";

injectRepoStyles();

interface GithubRepoPreviewComponent extends React.FC<GithubRepoPreviewProps> {
  Skeleton: React.FC<GithubRepoSkeletonProps>;
}

export const GithubRepoPreview: GithubRepoPreviewComponent = ({
  repoData,
  className,
  style,
  theme = "system",
  variant = "default",
  fontFamily,
  locale = "en-US",
  glass,
  gradient,
  neumorphic,
}) => {
  const wrapperClass = ["gh-repo-wrapper", className].filter(Boolean).join(" ");

  const rootStyle: React.CSSProperties = {
    fontFamily: fontFamily || "var(--gh-repo-font-family, inherit)",
    ...style,
  };

  const renderVariant = () => {
    switch (variant) {
      case "compact":
        return <CompactVariant repoData={repoData} locale={locale} />;
      case "inline":
        return <InlineVariant repoData={repoData} />;
      case "detailed":
        return <DetailedVariant repoData={repoData} locale={locale} glass={glass} />;
      case "default":
      default:
        return <DefaultVariant repoData={repoData} locale={locale} />;
    }
  };

  return (
    <div
      className={wrapperClass}
      style={rootStyle}
      data-gh-repo-theme={theme}
      data-gh-repo-glass={glass ? "true" : undefined}
      data-gh-repo-gradient={gradient ? "true" : undefined}
      data-gh-repo-neumorphic={neumorphic ? "true" : undefined}
    >
      {renderVariant()}
    </div>
  );
};

GithubRepoPreview.displayName = "GithubRepoPreview";
GithubRepoPreview.Skeleton = Skeleton;
Skeleton.displayName = "GithubRepoPreview.Skeleton";
