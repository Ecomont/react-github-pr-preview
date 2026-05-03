export const minimalistStyles = `
    /* ── Minimalist ── */
    .gh-repo-wrapper[data-gh-repo-theme="minimalist"] {
      --gh-repo-bg: transparent;
      --gh-repo-text-primary: #000000;
      --gh-repo-text-secondary: #888888;
      --gh-repo-border: #eaeaea;
      --gh-repo-footer-bg: transparent;
      --gh-repo-link: #000000;
      --gh-repo-star: #888888;
      --gh-repo-lang-dot: #888888;
      --gh-repo-skeleton-bg: #eaeaea;
    }
    .gh-repo-wrapper[data-gh-repo-theme="minimalist"] .gh-repo-card,
    .gh-repo-wrapper[data-gh-repo-theme="minimalist"] .gh-repo-compact,
    .gh-repo-wrapper[data-gh-repo-theme="minimalist"] .gh-repo-detailed {
      background: transparent;
      border: 1px solid #eaeaea;
      border-radius: 8px;
      box-shadow: none;
    }
    .gh-repo-wrapper[data-gh-repo-theme="minimalist"] .gh-repo-inline {
      background: transparent;
      border: 1px solid #eaeaea;
      border-radius: 8px;
      box-shadow: none;
    }
    .gh-repo-wrapper[data-gh-repo-theme="minimalist"] .gh-repo-footer,
    .gh-repo-wrapper[data-gh-repo-theme="minimalist"] .gh-repo-detailed-footer {
      background: transparent;
      border-top: 1px solid #eaeaea;
      border-radius: 0 0 7px 7px;
    }
    .gh-repo-wrapper[data-gh-repo-theme="minimalist"] .gh-repo-icon {
      background: transparent;
      color: #888888;
      border: none;
      box-shadow: none;
    }
    .gh-repo-wrapper[data-gh-repo-theme="minimalist"] .gh-repo-topic,
    .gh-repo-wrapper[data-gh-repo-theme="minimalist"] .gh-repo-topic-glass {
      background: #f3f4f6 !important;
      color: #4b5563 !important;
      border: 1px solid #e5e7eb !important;
      border-radius: 4px !important;
    }

    /* ── Minimalist Dark ── */
    .gh-repo-wrapper[data-gh-repo-theme="minimalist-dark"] {
      --gh-repo-bg: #000000;
      --gh-repo-text-primary: #ffffff;
      --gh-repo-text-secondary: #a1a1aa;
      --gh-repo-border: rgba(255, 255, 255, 0.1);
      --gh-repo-footer-bg: transparent;
      --gh-repo-link: #ffffff;
      --gh-repo-star: #a1a1aa;
      --gh-repo-lang-dot: #a1a1aa;
      --gh-repo-skeleton-bg: rgba(255, 255, 255, 0.1);
    }
    .gh-repo-wrapper[data-gh-repo-theme="minimalist-dark"] .gh-repo-card,
    .gh-repo-wrapper[data-gh-repo-theme="minimalist-dark"] .gh-repo-compact,
    .gh-repo-wrapper[data-gh-repo-theme="minimalist-dark"] .gh-repo-detailed {
      background: #000000;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      box-shadow: none;
    }
    .gh-repo-wrapper[data-gh-repo-theme="minimalist-dark"] .gh-repo-inline {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      box-shadow: none;
    }
    .gh-repo-wrapper[data-gh-repo-theme="minimalist-dark"] .gh-repo-footer,
    .gh-repo-wrapper[data-gh-repo-theme="minimalist-dark"] .gh-repo-detailed-footer {
      background: transparent;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 0 0 7px 7px;
    }
    .gh-repo-wrapper[data-gh-repo-theme="minimalist-dark"] .gh-repo-icon {
      background: transparent;
      color: #a1a1aa;
      border: none;
      box-shadow: none;
    }
    .gh-repo-wrapper[data-gh-repo-theme="minimalist-dark"] .gh-repo-topic,
    .gh-repo-wrapper[data-gh-repo-theme="minimalist-dark"] .gh-repo-topic-glass {
      background: transparent !important;
      color: #a1a1aa !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      border-radius: 4px !important;
    }


`;
