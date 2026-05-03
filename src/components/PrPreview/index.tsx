import React from "react";
import type { GithubPrPreviewProps, GithubPrSkeletonProps } from "../../types";
import { injectPrStyles } from "./styles";
import { DefaultVariant } from "./variants/Default";
import { DetailedVariant } from "./variants/Detailed";
import { CompactVariant } from "./variants/Compact";
import { InlineVariant } from "./variants/Inline";
import { Skeleton } from "./Skeleton";

injectPrStyles();

interface GithubPrPreviewComponent extends React.FC<GithubPrPreviewProps> {
  Skeleton: React.FC<GithubPrSkeletonProps>;
}

export const GithubPrPreview: GithubPrPreviewComponent = ({
  prData,
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
  const wrapperClass = ["gh-pr-wrapper", className].filter(Boolean).join(" ");

  const rootStyle: React.CSSProperties = {
    fontFamily: fontFamily || "var(--gh-pr-font-family, inherit)",
    ...style,
  };

  const renderVariant = () => {
    switch (variant) {
      case "compact":
        return <CompactVariant prData={prData} locale={locale} glass={glass} gradient={gradient} />;
      case "inline":
        return <InlineVariant prData={prData} glass={glass} gradient={gradient} />;
      case "detailed":
        return <DetailedVariant prData={prData} locale={locale} glass={glass} gradient={gradient} />;
      case "default":
      default:
        return <DefaultVariant prData={prData} locale={locale} glass={glass} gradient={gradient} />;
    }
  };

  return (
    <div
      className={wrapperClass}
      style={rootStyle}
      data-gh-pr-theme={theme}
      data-gh-pr-glass={glass ? "true" : undefined}
      data-gh-pr-gradient={gradient ? "true" : undefined}
      data-gh-pr-neumorphic={neumorphic ? "true" : undefined}
    >
      {renderVariant()}
    </div>
  );
};

GithubPrPreview.displayName = "GithubPrPreview";
GithubPrPreview.Skeleton = Skeleton;
Skeleton.displayName = "GithubPrPreview.Skeleton";
