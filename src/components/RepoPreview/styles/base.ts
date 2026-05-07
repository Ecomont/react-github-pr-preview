export const baseStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
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
      overflow: visible;
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
      overflow: visible;
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
      overflow: visible;
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

    @media (max-width: 640px) {
      /* Inline: prevent overflow, enforce ellipsis */
      .gh-repo-inline {
        max-width: 100%;
      }
      .gh-repo-inline-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Compact: fill available space */
      .gh-repo-compact {
        width: 100%;
        max-width: 100%;
      }

      /* Default: full width, reduce padding, shrink title */
      .gh-repo-card {
        width: 100%;
      }
      .gh-repo-card-header {
        padding: 12px;
      }
      .gh-repo-footer {
        padding: 10px 12px;
        gap: 10px;
      }
      .gh-repo-card-title {
        font-size: 15px;
      }

      /* Detailed: full width, reduce padding, shrink title, clamp description */
      .gh-repo-detailed {
        width: 100%;
      }
      .gh-repo-detailed-header {
        padding: 16px;
      }
      .gh-repo-detailed-footer {
        padding: 12px 16px;
        gap: 12px;
      }
      .gh-repo-detailed-title {
        font-size: 16px;
      }
      .gh-repo-detailed-description {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }


`;
