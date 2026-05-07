export const baseStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
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
        --gh-pr-skeleton-bg: rgba(255, 255, 255, 0.15);
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
      overflow: visible;
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
      overflow: visible;
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
      overflow: visible;
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

    @media (max-width: 640px) {
      /* Inline: prevent overflow, enforce ellipsis */
      .gh-pr-chip {
        max-width: 100%;
      }
      .gh-pr-chip-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Compact: fill available space */
      .gh-pr-kanban {
        width: 100%;
        max-width: 100%;
      }

      /* Default / Detailed: full width, reduce padding, shrink title */
      .gh-pr-card {
        width: 100%;
      }
      .gh-pr-card-header {
        padding: 12px;
      }
      .gh-pr-footer {
        padding: 10px 12px;
      }
      .gh-pr-title {
        font-size: 15px;
      }

      /* Detailed: clamp description to save vertical space */
      .gh-pr-description {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 0 12px 12px;
        padding-top: 10px;
      }
    }


`;
