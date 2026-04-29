import React from "react";
import type {
  GithubRepoPreviewProps,
  GitHubRepoData,
  GithubRepoSkeletonProps,
} from "../../types";
import { getRelativeTime, truncateText } from "../../shared/styles";

/* ------------------------------------------------------------------ */
/*  Global style injection (once, SSR-safe)                            */
/* ------------------------------------------------------------------ */

const STYLE_ID = "react-github-repo-preview-styles";

function injectGlobalStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    .gh-repo-wrapper {
      --gh-repo-font-family: inherit;
      --gh-repo-bg: #ffffff;
      --gh-repo-text-primary: #1f2328;
      --gh-repo-text-secondary: #656d76;
      --gh-repo-border: #d0d7de;
      --gh-repo-footer-bg: #f6f8fa;
      --gh-repo-link: #0969da;
      --gh-repo-star: #e3b341;
      --gh-repo-lang-dot: #0969da;
      font-family: var(--gh-repo-font-family);
      color: var(--gh-repo-text-primary);
    }

    .gh-repo-wrapper[data-gh-repo-theme="dark"] {
      --gh-repo-bg: #0d1117;
      --gh-repo-text-primary: #c9d1d9;
      --gh-repo-text-secondary: #8b949e;
      --gh-repo-border: #30363d;
      --gh-repo-footer-bg: #161b22;
      --gh-repo-link: #58a6ff;
      --gh-repo-star: #e3b341;
    }

    @media (prefers-color-scheme: dark) {
      .gh-repo-wrapper[data-gh-repo-theme="system"] {
        --gh-repo-bg: #0d1117;
        --gh-repo-text-primary: #c9d1d9;
        --gh-repo-text-secondary: #8b949e;
        --gh-repo-border: #30363d;
        --gh-repo-footer-bg: #161b22;
        --gh-repo-link: #58a6ff;
        --gh-repo-star: #e3b341;
      }
    }

    @keyframes gh-repo-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
    .gh-repo-skeleton-pulse {
      animation: gh-repo-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .gh-repo-link {
      color: var(--gh-repo-link);
      text-decoration: none;
    }
    .gh-repo-link:hover {
      text-decoration: underline;
    }
    .gh-repo-line-clamp {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .gh-repo-line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Default variant */
    .gh-repo-card {
      border: 1px solid var(--gh-repo-border);
      border-radius: 6px;
      background-color: var(--gh-repo-bg);
      overflow: hidden;
    }
    .gh-repo-card-header {
      padding: 16px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    .gh-repo-icon {
      width: 32px;
      height: 32px;
      min-width: 32px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--gh-repo-text-secondary);
      background-color: var(--gh-repo-footer-bg);
      border: 1px solid var(--gh-repo-border);
    }
    .gh-repo-meta {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
      flex: 1;
    }
    .gh-repo-title {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.25;
      word-break: break-word;
    }
    .gh-repo-description {
      font-size: 14px;
      color: var(--gh-repo-text-secondary);
      line-height: 1.5;
      margin: 0;
    }
    .gh-repo-footer {
      padding: 12px 16px;
      background-color: var(--gh-repo-footer-bg);
      border-top: 1px solid var(--gh-repo-border);
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      font-size: 12px;
      color: var(--gh-repo-text-secondary);
    }
    .gh-repo-footer-item {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .gh-repo-lang-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      display: inline-block;
    }
    .gh-repo-avatar {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      vertical-align: middle;
    }

    /* Compact variant */
    .gh-repo-compact {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 14px;
      border: 1px solid var(--gh-repo-border);
      border-radius: 8px;
      background-color: var(--gh-repo-bg);
      max-width: 260px;
      box-sizing: border-box;
    }
    .gh-repo-compact-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .gh-repo-compact-icon {
      width: 20px;
      height: 20px;
      color: var(--gh-repo-text-secondary);
    }
    .gh-repo-compact-title {
      font-size: 13px;
      font-weight: 600;
      line-height: 1.4;
      color: var(--gh-repo-text-primary);
      margin: 0;
    }
    .gh-repo-compact-stars {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      font-weight: 600;
      color: var(--gh-repo-text-primary);
    }
    .gh-repo-compact-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 11px;
      color: var(--gh-repo-text-secondary);
    }

    /* Inline variant */
    .gh-repo-inline {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      border: 1px solid var(--gh-repo-border);
      border-radius: 12px;
      background-color: var(--gh-repo-bg);
      font-size: 12px;
      color: var(--gh-repo-text-primary);
      white-space: nowrap;
      vertical-align: middle;
      text-decoration: none;
      max-width: 100%;
      min-width: 0;
      box-sizing: border-box;
      overflow: hidden;
    }
    .gh-repo-inline-icon {
      width: 14px;
      height: 14px;
      color: var(--gh-repo-text-secondary);
      flex-shrink: 0;
    }
    .gh-repo-inline-stars {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      font-weight: 600;
      color: var(--gh-repo-text-secondary);
      flex-shrink: 0;
    }
    .gh-repo-inline-name {
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
      flex: 1 1 auto;
    }

    /* Detailed variant */
    .gh-repo-detailed {
      border: 1px solid var(--gh-repo-border);
      border-radius: 8px;
      background-color: var(--gh-repo-bg);
      overflow: hidden;
    }
    .gh-repo-detailed-header {
      padding: 20px;
      display: flex;
      align-items: flex-start;
      gap: 14px;
    }
    .gh-repo-detailed-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      min-width: 40px;
    }
    .gh-repo-detailed-meta {
      display: flex;
      flex-direction: column;
      gap: 6px;
      min-width: 0;
      flex: 1;
    }
    .gh-repo-detailed-title {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.3;
      word-break: break-word;
    }
    .gh-repo-detailed-description {
      font-size: 14px;
      color: var(--gh-repo-text-secondary);
      line-height: 1.5;
      margin: 0;
    }
    .gh-repo-topics {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 4px;
    }
    .gh-repo-topic {
      display: inline-block;
      padding: 3px 10px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      line-height: 1.4;
      white-space: nowrap;
      background-color: var(--gh-repo-footer-bg);
      color: var(--gh-repo-link);
      border: 1px solid var(--gh-repo-border);
    }
    .gh-repo-detailed-footer {
      padding: 14px 20px;
      background-color: var(--gh-repo-footer-bg);
      border-top: 1px solid var(--gh-repo-border);
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      font-size: 13px;
      color: var(--gh-repo-text-secondary);
    }
  `;
  document.head.appendChild(style);
}

injectGlobalStyles();

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const PUSHED_PREFIX_MAP: Record<string, string> = {
  en: "pushed", es: "enviado", fr: "poussé", de: "gepusht",
  pt: "enviado", it: "pushato", nl: "gepusht", ru: "отправлено",
  ja: "プッシュ", ko: "푸시됨", zh: "推送", pl: "wypchnięto",
  tr: "gönderildi", sv: "pushad", no: "pushet", da: "pushet",
  fi: "pushattu", cs: "pushnuto", hu: "feltöltve", ro: "push-uit",
};

function getRepoRelativeTime(input: string | Date, locale: string): string {
  return getRelativeTime(input, locale, PUSHED_PREFIX_MAP, "pushed");
}

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  return String(num);
}

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

const RepoIcon: React.FC<{ size?: number; ariaLabel?: string }> = ({
  size = 16,
  ariaLabel,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden={!ariaLabel}
    aria-label={ariaLabel}
    role={ariaLabel ? "img" : undefined}
  >
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
  </svg>
);

const StarIcon: React.FC<{ size?: number; ariaLabel?: string }> = ({
  size = 16,
  ariaLabel = "Stars",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden={!ariaLabel}
    aria-label={ariaLabel}
    role={ariaLabel ? "img" : undefined}
  >
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
  </svg>
);

const ForkIcon: React.FC<{ size?: number; ariaLabel?: string }> = ({
  size = 16,
  ariaLabel = "Forks",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden={!ariaLabel}
    aria-label={ariaLabel}
    role={ariaLabel ? "img" : undefined}
  >
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
  </svg>
);

const ClockIcon: React.FC<{ size?: number; ariaLabel?: string }> = ({
  size = 16,
  ariaLabel,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden={!ariaLabel}
    aria-label={ariaLabel}
    role={ariaLabel ? "img" : undefined}
  >
    <path d="M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm.5 4.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 .471.696l2.5 1a.75.75 0 0 0 .557-1.392L8.5 7.742V4.75Z" />
  </svg>
);

const LicenseIcon: React.FC<{ size?: number; ariaLabel?: string }> = ({
  size = 16,
  ariaLabel = "License",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden={!ariaLabel}
    aria-label={ariaLabel}
    role={ariaLabel ? "img" : undefined}
  >
    <path d="M8.75.75a.75.75 0 0 0-1.5 0V2H5.5A1.75 1.75 0 0 0 3.75 3.75V10c0 .967.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0 0 12.75 10V3.75A1.75 1.75 0 0 0 11 2H8.75V.75ZM6.5 4a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
    <path d="M4.25 12.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Topics pills                                                       */
/* ------------------------------------------------------------------ */

function TopicPills({ topics }: { topics?: string[] }) {
  if (!topics || topics.length === 0) return null;
  return (
    <div className="gh-repo-topics">
      {topics.map((topic) => (
        <span key={topic} className="gh-repo-topic">
          {topic}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Variants                                                           */
/* ------------------------------------------------------------------ */

const DefaultVariant: React.FC<{ repoData: GitHubRepoData; locale: string }> = ({
  repoData,
  locale,
}) => {
  return (
    <article className="gh-repo-card">
      <div className="gh-repo-card-header">
        <div className="gh-repo-icon" aria-label="Repository">
          <RepoIcon size={18} />
        </div>
        <div className="gh-repo-meta">
          <h3 className="gh-repo-title">
            <a
              href={repoData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-repo-link"
            >
              {repoData.owner.login}/{repoData.name}
            </a>
          </h3>
          {repoData.description && (
            <p className="gh-repo-description gh-repo-line-clamp-2">
              {repoData.description}
            </p>
          )}
        </div>
      </div>
      <div className="gh-repo-footer">
        {repoData.language?.name && (
          <span className="gh-repo-footer-item" aria-label={`Language: ${repoData.language.name}`}>
            <span
              className="gh-repo-lang-dot"
              style={{ backgroundColor: repoData.language.color }}
            />
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

const DetailedVariant: React.FC<{ repoData: GitHubRepoData; locale: string }> = ({
  repoData,
  locale,
}) => {
  return (
    <article className="gh-repo-detailed">
      <div className="gh-repo-detailed-header">
        <img
          src={repoData.owner.avatarUrl}
          alt={`${repoData.owner.login}'s avatar`}
          className="gh-repo-detailed-avatar"
        />
        <div className="gh-repo-detailed-meta">
          <h3 className="gh-repo-detailed-title">
            <a
              href={repoData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="gh-repo-link"
            >
              {repoData.owner.login}/{repoData.name}
            </a>
          </h3>
          {repoData.description && (
            <p className="gh-repo-detailed-description">
              {repoData.description}
            </p>
          )}
          <TopicPills topics={repoData.topics} />
        </div>
      </div>
      <div className="gh-repo-detailed-footer">
        {repoData.language?.name && (
          <span className="gh-repo-footer-item" aria-label={`Language: ${repoData.language.name}`}>
            <span
              className="gh-repo-lang-dot"
              style={{ backgroundColor: repoData.language.color }}
            />
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

const CompactVariant: React.FC<{ repoData: GitHubRepoData; locale: string }> = ({
  repoData,
  locale,
}) => {
  return (
    <article className="gh-repo-compact">
      <div className="gh-repo-compact-header">
        <RepoIcon size={20} ariaLabel="Repository" />
        <span className="gh-repo-compact-stars" aria-label={`${formatNumber(repoData.stargazersCount)} stars`}>
          <StarIcon size={14} />
          {formatNumber(repoData.stargazersCount)}
        </span>
      </div>
      <h4 className="gh-repo-compact-title gh-repo-line-clamp">
        <a
          href={repoData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="gh-repo-link"
        >
          {repoData.name}
        </a>
      </h4>
      {repoData.description && (
        <p
          className="gh-repo-description gh-repo-line-clamp-2"
          style={{ fontSize: 12, margin: 0 }}
        >
          {truncateText(repoData.description, 90)}
        </p>
      )}
      <div className="gh-repo-compact-footer">
        {repoData.language?.name && (
          <span className="gh-repo-footer-item" aria-label={`Language: ${repoData.language.name}`}>
            <span
              className="gh-repo-lang-dot"
              style={{ backgroundColor: repoData.language.color }}
            />
            {repoData.language.name}
          </span>
        )}
        <span>
          <time dateTime={new Date(repoData.pushedAt).toISOString()}>
            {getRepoRelativeTime(repoData.pushedAt, locale)}
          </time>
        </span>
      </div>
    </article>
  );
};

const InlineVariant: React.FC<{ repoData: GitHubRepoData }> = ({ repoData }) => {
  return (
    <a
      href={repoData.url}
      target="_blank"
      rel="noopener noreferrer"
      className="gh-repo-inline"
      title={`${repoData.owner.login}/${repoData.name}`}
    >
      <span className="gh-repo-inline-icon" aria-label="Repository">
        <RepoIcon size={14} />
      </span>
      <span className="gh-repo-inline-name">
        {repoData.owner.login}/{repoData.name}
      </span>
      <span className="gh-repo-inline-stars" aria-label={`${formatNumber(repoData.stargazersCount)} stars`}>
        <StarIcon size={12} />
        {formatNumber(repoData.stargazersCount)}
      </span>
    </a>
  );
};

/* ------------------------------------------------------------------ */
/*  Skeleton sub-component                                             */
/* ------------------------------------------------------------------ */

const Skeleton: React.FC<GithubRepoSkeletonProps> = ({
  variant = "default",
  className,
  style,
  theme = "system",
}) => {
  const wrapperClass = ["gh-repo-wrapper", className].filter(Boolean).join(" ");

  const bone = (sx: React.CSSProperties): React.ReactNode => (
    <div
      className="gh-repo-skeleton-pulse"
      style={{ backgroundColor: "var(--gh-repo-border)", borderRadius: "4px", ...sx }}
    />
  );

  if (variant === "inline") {
    return (
      <div className={wrapperClass} style={style} data-gh-repo-theme={theme}>
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
      <div className={wrapperClass} style={style} data-gh-repo-theme={theme}>
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
      <div className={wrapperClass} style={style} data-gh-repo-theme={theme}>
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
    <div className={wrapperClass} style={style} data-gh-repo-theme={theme}>
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

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

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
        return <DetailedVariant repoData={repoData} locale={locale} />;
      case "default":
      default:
        return <DefaultVariant repoData={repoData} locale={locale} />;
    }
  };

  return (
    <div className={wrapperClass} style={rootStyle} data-gh-repo-theme={theme}>
      {renderVariant()}
    </div>
  );
};

GithubRepoPreview.displayName = "GithubRepoPreview";
GithubRepoPreview.Skeleton = Skeleton;
Skeleton.displayName = "GithubRepoPreview.Skeleton";
