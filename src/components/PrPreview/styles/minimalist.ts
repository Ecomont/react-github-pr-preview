export const minimalistStyles = `

    /* ── Minimalist ── */
    .gh-pr-wrapper[data-gh-pr-theme="minimalist"] {
      --gh-pr-bg: transparent;
      --gh-pr-text-primary: #000000;
      --gh-pr-text-secondary: #888888;
      --gh-pr-border: #eaeaea;
      --gh-pr-footer-bg: transparent;
      --gh-pr-link: #000000;
      --gh-pr-open-bg: #666666;
      --gh-pr-merged-bg: #888888;
      --gh-pr-closed-bg: #aaaaaa;
      --gh-pr-additions: #666666;
      --gh-pr-deletions: #aaaaaa;
      --gh-pr-skeleton-bg: #eaeaea;
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist"] .gh-pr-card,
    .gh-pr-wrapper[data-gh-pr-theme="minimalist"] .gh-pr-kanban {
      background: transparent;
      border: 1px solid #eaeaea;
      border-radius: 8px;
      box-shadow: none;
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist"] .gh-pr-chip {
      background: transparent;
      border: 1px solid #eaeaea;
      border-radius: 8px;
      box-shadow: none;
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist"] .gh-pr-footer {
      background: transparent;
      border-top: 1px solid #eaeaea;
      border-radius: 0 0 7px 7px;
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist"] .gh-pr-icon,
    .gh-pr-wrapper[data-gh-pr-theme="minimalist"] .gh-pr-kanban-icon,
    .gh-pr-wrapper[data-gh-pr-theme="minimalist"] .gh-pr-chip-icon {
      background: transparent !important;
      color: var(--gh-pr-open-bg);
      border: none;
      box-shadow: none;
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist"] .gh-pr-label,
    .gh-pr-wrapper[data-gh-pr-theme="minimalist"] .gh-pr-label-glass,
    .gh-pr-wrapper[data-gh-pr-theme="minimalist"] .gh-pr-label-gradient {
      background: #f3f4f6 !important;
      color: #4b5563 !important;
      border: 1px solid #e5e7eb !important;
      border-radius: 4px !important;
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist"] .gh-pr-badge {
      background: #ffffff !important;
      color: #333333 !important;
      border: 1px solid #e5e7eb !important;
      box-shadow: none;
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist"] .gh-pr-description {
      border-top: 1px solid #eaeaea;
      color: var(--gh-pr-text-secondary);
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist"] .gh-pr-checks svg {
      fill: #666666 !important;
    }

    /* ── Minimalist Dark ── */
    .gh-pr-wrapper[data-gh-pr-theme="minimalist-dark"] {
      --gh-pr-bg: #000000;
      --gh-pr-text-primary: #ffffff;
      --gh-pr-text-secondary: #a1a1aa;
      --gh-pr-border: rgba(255, 255, 255, 0.1);
      --gh-pr-footer-bg: transparent;
      --gh-pr-link: #ffffff;
      --gh-pr-open-bg: #a1a1aa;
      --gh-pr-merged-bg: #a1a1aa;
      --gh-pr-closed-bg: #a1a1aa;
      --gh-pr-additions: #a1a1aa;
      --gh-pr-deletions: #a1a1aa;
      --gh-pr-skeleton-bg: rgba(255, 255, 255, 0.1);
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist-dark"] .gh-pr-card,
    .gh-pr-wrapper[data-gh-pr-theme="minimalist-dark"] .gh-pr-kanban {
      background: #000000;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      box-shadow: none;
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist-dark"] .gh-pr-chip {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      box-shadow: none;
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist-dark"] .gh-pr-footer {
      background: transparent;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 0 0 7px 7px;
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist-dark"] .gh-pr-icon,
    .gh-pr-wrapper[data-gh-pr-theme="minimalist-dark"] .gh-pr-kanban-icon,
    .gh-pr-wrapper[data-gh-pr-theme="minimalist-dark"] .gh-pr-chip-icon {
      background: transparent !important;
      color: var(--gh-pr-open-bg);
      border: none;
      box-shadow: none;
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist-dark"] .gh-pr-label,
    .gh-pr-wrapper[data-gh-pr-theme="minimalist-dark"] .gh-pr-label-glass,
    .gh-pr-wrapper[data-gh-pr-theme="minimalist-dark"] .gh-pr-label-gradient {
      background: transparent !important;
      color: #a1a1aa !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      border-radius: 4px !important;
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist-dark"] .gh-pr-badge {
      background: transparent !important;
      color: #ffffff !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      box-shadow: none;
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist-dark"] .gh-pr-description {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--gh-pr-text-secondary);
    }
    .gh-pr-wrapper[data-gh-pr-theme="minimalist-dark"] .gh-pr-checks svg {
      fill: #a1a1aa !important;
    }

`;
