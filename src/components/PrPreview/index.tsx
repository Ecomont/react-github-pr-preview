import React from "react";
import type {
  GithubPrPreviewProps,
  PullRequestData,
  GithubPrSkeletonProps,
} from "../../types";
import { getContrastColor, getRelativeTime, truncateText } from "../../shared/styles";

/* ------------------------------------------------------------------ */
/*  Global style injection (once, SSR-safe)                            */
/* ------------------------------------------------------------------ */

const STYLE_ID = "react-github-pr-preview-styles";

function injectGlobalStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    .gh-pr-wrapper {
      --gh-pr-font-family: inherit;
      --gh-pr-bg: #ffffff;
      --gh-pr-text-primary: #1f2328;
      --gh-pr-text-secondary: #656d76;
      --gh-pr-border: #d0d7de;
      --gh-pr-footer-bg: #f6f8fa;
      --gh-pr-link: #0969da;
      --gh-pr-open-bg: #1a7f37;
      --gh-pr-merged-bg: #8250df;
      --gh-pr-closed-bg: #cf222e;
      --gh-pr-additions: #1a7f37;
      --gh-pr-deletions: #cf222e;
      font-family: var(--gh-pr-font-family);
      color: var(--gh-pr-text-primary);
    }

    .gh-pr-wrapper[data-gh-pr-theme="dark"] {
      --gh-pr-bg: #0d1117;
      --gh-pr-text-primary: #c9d1d9;
      --gh-pr-text-secondary: #8b949e;
      --gh-pr-border: #30363d;
      --gh-pr-footer-bg: #161b22;
      --gh-pr-link: #58a6ff;
      --gh-pr-open-bg: #238636;
      --gh-pr-merged-bg: #8957e5;
      --gh-pr-closed-bg: #da3633;
      --gh-pr-additions: #3fb950;
      --gh-pr-deletions: #f85149;
    }

    @media (prefers-color-scheme: dark) {
      .gh-pr-wrapper[data-gh-pr-theme="system"] {
        --gh-pr-bg: #0d1117;
        --gh-pr-text-primary: #c9d1d9;
        --gh-pr-text-secondary: #8b949e;
        --gh-pr-border: #30363d;
        --gh-pr-footer-bg: #161b22;
        --gh-pr-link: #58a6ff;
        --gh-pr-open-bg: #238636;
        --gh-pr-merged-bg: #8957e5;
        --gh-pr-closed-bg: #da3633;
        --gh-pr-additions: #3fb950;
        --gh-pr-deletions: #f85149;
      }
    }

    @keyframes gh-pr-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }
    .gh-pr-skeleton-pulse {
      animation: gh-pr-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    .gh-pr-link {
      color: var(--gh-pr-link);
      text-decoration: none;
    }
    .gh-pr-link:hover {
      text-decoration: underline;
    }
    .gh-pr-line-clamp {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .gh-pr-line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .gh-pr-labels {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin-top: 6px;
    }
    .gh-pr-label {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 600;
      line-height: 1.4;
      white-space: nowrap;
    }

    .gh-pr-card {
      border: 1px solid var(--gh-pr-border);
      border-radius: 6px;
      background-color: var(--gh-pr-bg);
      overflow: hidden;
    }
    .gh-pr-card-header {
      padding: 16px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    .gh-pr-icon {
      width: 32px;
      height: 32px;
      min-width: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
    }
    .gh-pr-meta {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
      flex: 1;
    }
    .gh-pr-title {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.25;
      word-break: break-word;
    }
    .gh-pr-number {
      color: var(--gh-pr-text-secondary);
      font-weight: 400;
    }
    .gh-pr-subtitle {
      font-size: 12px;
      color: var(--gh-pr-text-secondary);
      line-height: 1.5;
    }
    .gh-pr-avatar {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 4px;
    }
    .gh-pr-footer {
      padding: 12px 16px;
      background-color: var(--gh-pr-footer-bg);
      border-top: 1px solid var(--gh-pr-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px;
    }
    .gh-pr-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 10px;
      border-radius: 2em;
      font-size: 12px;
      font-weight: 600;
      line-height: 1;
      color: #ffffff;
    }
    .gh-pr-diff {
      font-size: 12px;
      font-weight: 600;
      font-variant-numeric: tabular-nums;
    }
    .gh-pr-diff-add { color: var(--gh-pr-additions); }
    .gh-pr-diff-del { color: var(--gh-pr-deletions); }

    .gh-pr-checks {
      display: inline-flex;
      align-items: center;
      margin-left: 6px;
    }

    .gh-pr-description {
      padding: 0 16px 16px;
      font-size: 14px;
      line-height: 1.5;
      color: var(--gh-pr-text-secondary);
      word-break: break-word;
      border-top: 1px solid var(--gh-pr-border);
      padding-top: 12px;
      margin: 0 16px 16px;
    }

    .gh-pr-kanban {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
      border: 1px solid var(--gh-pr-border);
      border-radius: 8px;
      background-color: var(--gh-pr-bg);
      max-width: 260px;
      box-sizing: border-box;
      overflow: hidden;
    }
    .gh-pr-kanban-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .gh-pr-kanban-icon {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
    }
    .gh-pr-kanban-icon svg {
      width: 12px;
      height: 12px;
    }
    .gh-pr-kanban-avatar {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
    .gh-pr-kanban-title {
      font-size: 13px;
      font-weight: 600;
      line-height: 1.4;
      color: var(--gh-pr-text-primary);
      margin: 0;
      min-width: 0;
    }
    .gh-pr-kanban-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 11px;
      color: var(--gh-pr-text-secondary);
    }

    .gh-pr-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      border: 1px solid var(--gh-pr-border);
      border-radius: 12px;
      background-color: var(--gh-pr-bg);
      font-size: 12px;
      color: var(--gh-pr-text-primary);
      white-space: nowrap;
      vertical-align: middle;
      text-decoration: none;
      max-width: 100%;
      min-width: 0;
      box-sizing: border-box;
      overflow: hidden;
    }
    .gh-pr-chip-icon {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      flex-shrink: 0;
    }
    .gh-pr-chip-icon svg {
      width: 8px;
      height: 8px;
    }
    .gh-pr-chip-number {
      font-weight: 600;
      color: var(--gh-pr-text-secondary);
      flex-shrink: 0;
    }
    .gh-pr-chip-title {
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
      flex: 1 1 auto;
    }
  `;
  document.head.appendChild(style);
}

injectGlobalStyles();

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const OPENED_PREFIX_MAP: Record<string, string> = {
  en: "opened", es: "abierto", fr: "ouvert", de: "geöffnet",
  pt: "aberto", it: "aperto", nl: "geopend", ru: "открыт",
  ja: "作成", ko: "열림", zh: "打开", pl: "otwarty",
  tr: "açıldı", sv: "öppnad", no: "åpnet", da: "åbnet",
  fi: "avattu", cs: "otevřeno", hu: "megnyitva", ro: "deschis",
};

function getPrRelativeTime(input: string | Date, locale: string): string {
  return getRelativeTime(input, locale, OPENED_PREFIX_MAP, "opened");
}

interface StatusMeta {
  label: string;
  bgVar: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

function getStatusMeta(state: "open" | "closed", merged: boolean): StatusMeta {
  if (merged) {
    return {
      label: "Merged",
      bgVar: "var(--gh-pr-merged-bg)",
      ariaLabel: "Pull Request: Merged",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.877a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .007V3.25Z" />
        </svg>
      ),
    };
  }
  if (state === "open") {
    return {
      label: "Open",
      bgVar: "var(--gh-pr-open-bg)",
      ariaLabel: "Pull Request: Open",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z" />
        </svg>
      ),
    };
  }
  return {
    label: "Closed",
    bgVar: "var(--gh-pr-closed-bg)",
    ariaLabel: "Pull Request: Closed",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
        <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" />
      </svg>
    ),
  };
}

function ChecksIcon({ status }: { status: "success" | "failure" | "pending" }) {
  if (status === "success") {
    return (
      <span className="gh-pr-checks" title="All checks passed">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="#1a7f37">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm3.28 6.78a.75.75 0 0 0-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4-4Z" />
        </svg>
      </span>
    );
  }
  if (status === "failure") {
    return (
      <span className="gh-pr-checks" title="Checks failed">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="#cf222e">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm3.53 4.47a.75.75 0 0 0-1.06 0L8 6.94 5.53 4.47a.75.75 0 0 0-1.06 1.06L6.94 8l-2.47 2.47a.75.75 0 1 0 1.06 1.06L8 9.06l2.47 2.47a.75.75 0 1 0 1.06-1.06L9.06 8l2.47-2.47a.75.75 0 0 0 0-1.06Z" />
        </svg>
      </span>
    );
  }
  return (
    <span className="gh-pr-checks" title="Checks pending">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="#d1242f">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z" />
      </svg>
    </span>
  );
}

function LabelPills({ labels }: { labels?: { name: string; color: string }[] }) {
  if (!labels || labels.length === 0) return null;
  return (
    <div className="gh-pr-labels">
      {labels.map((label) => (
        <span
          key={label.name}
          className="gh-pr-label"
          style={{
            backgroundColor: `#${label.color.replace("#", "")}`,
            color: getContrastColor(label.color),
          }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Variants                                                           */
/* ------------------------------------------------------------------ */

const DefaultVariant: React.FC<{ prData: PullRequestData; locale: string }> = ({
  prData,
  locale,
}) => {
  const status = getStatusMeta(prData.state, prData.merged);

  return (
    <article className="gh-pr-card">
      <div className="gh-pr-card-header">
        <div className="gh-pr-icon" style={{ backgroundColor: status.bgVar }} aria-label={status.ariaLabel}>
          {status.icon}
        </div>
        <div className="gh-pr-meta">
          <h3 className="gh-pr-title">
            <a href={prData.url} target="_blank" rel="noopener noreferrer" className="gh-pr-link">
              {prData.title}
            </a>{" "}
            <span className="gh-pr-number">#{prData.number}</span>
          </h3>
          <LabelPills labels={prData.labels} />
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

const DetailedVariant: React.FC<{ prData: PullRequestData; locale: string }> = ({
  prData,
  locale,
}) => {
  const status = getStatusMeta(prData.state, prData.merged);

  return (
    <article className="gh-pr-card">
      <div className="gh-pr-card-header">
        <div className="gh-pr-icon" style={{ backgroundColor: status.bgVar }} aria-label={status.ariaLabel}>
          {status.icon}
        </div>
        <div className="gh-pr-meta">
          <h3 className="gh-pr-title">
            <a href={prData.url} target="_blank" rel="noopener noreferrer" className="gh-pr-link">
              {prData.title}
            </a>{" "}
            <span className="gh-pr-number">#{prData.number}</span>
          </h3>
          <LabelPills labels={prData.labels} />
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
      {prData.description && (
        <div className="gh-pr-description gh-pr-line-clamp-2">
          {truncateText(prData.description, 180)}
        </div>
      )}
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

const CompactVariant: React.FC<{ prData: PullRequestData; locale: string }> = ({
  prData,
  locale,
}) => {
  const status = getStatusMeta(prData.state, prData.merged);

  return (
    <article className="gh-pr-kanban">
      <div className="gh-pr-kanban-header">
        <div className="gh-pr-kanban-icon" style={{ backgroundColor: status.bgVar }} aria-label={status.ariaLabel}>
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

const InlineVariant: React.FC<{ prData: PullRequestData }> = ({ prData }) => {
  const status = getStatusMeta(prData.state, prData.merged);

  return (
    <a href={prData.url} target="_blank" rel="noopener noreferrer" className="gh-pr-chip" title={`${status.label}: ${prData.title}`}>
      <span className="gh-pr-chip-icon" style={{ backgroundColor: status.bgVar }} aria-label={status.ariaLabel}>
        {status.icon}
      </span>
      <span className="gh-pr-chip-number">#{prData.number}</span>
      <span className="gh-pr-chip-title">{prData.title}</span>
    </a>
  );
};

/* ------------------------------------------------------------------ */
/*  Skeleton sub-component                                             */
/* ------------------------------------------------------------------ */

const Skeleton: React.FC<GithubPrSkeletonProps> = ({
  variant = "default",
  className,
  style,
  theme = "system",
}) => {
  const wrapperClass = ["gh-pr-wrapper", className].filter(Boolean).join(" ");

  const bone = (sx: React.CSSProperties): React.ReactNode => (
    <div className="gh-pr-skeleton-pulse" style={{ backgroundColor: "var(--gh-pr-border)", borderRadius: "4px", ...sx }} />
  );

  if (variant === "inline") {
    return (
      <div className={wrapperClass} style={style} data-gh-pr-theme={theme}>
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
      <div className={wrapperClass} style={style} data-gh-pr-theme={theme}>
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
      <div className={wrapperClass} style={style} data-gh-pr-theme={theme}>
        <div className="gh-pr-card">
          <div className="gh-pr-card-header">
            {bone({ width: 32, height: 32, borderRadius: "50%", minWidth: 32 })}
            <div className="gh-pr-meta" style={{ gap: "8px" }}>
              {bone({ width: "80%", height: 16 })}
              {bone({ width: "50%", height: 12 })}
            </div>
          </div>
          {bone({ width: "100%", height: 14, margin: "0 16px 12px" })}
          {bone({ width: "90%", height: 14, margin: "0 16px 16px" })}
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
    <div className={wrapperClass} style={style} data-gh-pr-theme={theme}>
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

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

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
}) => {
  const wrapperClass = ["gh-pr-wrapper", className].filter(Boolean).join(" ");

  const rootStyle: React.CSSProperties = {
    fontFamily: fontFamily || "var(--gh-pr-font-family, inherit)",
    ...style,
  };

  const renderVariant = () => {
    switch (variant) {
      case "compact":
        return <CompactVariant prData={prData} locale={locale} />;
      case "inline":
        return <InlineVariant prData={prData} />;
      case "detailed":
        return <DetailedVariant prData={prData} locale={locale} />;
      case "default":
      default:
        return <DefaultVariant prData={prData} locale={locale} />;
    }
  };

  return (
    <div className={wrapperClass} style={rootStyle} data-gh-pr-theme={theme}>
      {renderVariant()}
    </div>
  );
};

GithubPrPreview.displayName = "GithubPrPreview";
GithubPrPreview.Skeleton = Skeleton;
Skeleton.displayName = "GithubPrPreview.Skeleton";
