export const handDrawnStyles = `

    /* ── Hand-drawn ── */
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn"] {
      --gh-pr-font-family: 'Caveat', 'Comic Sans MS', cursive, sans-serif;
      --gh-pr-bg: #faf9f6;
      --gh-pr-text-primary: #2c2c2c;
      --gh-pr-text-secondary: #5a5a5a;
      --gh-pr-border: #2c2c2c;
      --gh-pr-footer-bg: transparent;
      --gh-pr-link: #2c2c2c;
      --gh-pr-open-bg: #2c2c2c;
      --gh-pr-merged-bg: #2c2c2c;
      --gh-pr-closed-bg: #2c2c2c;
      --gh-pr-additions: #2c2c2c;
      --gh-pr-deletions: #2c2c2c;
      --gh-pr-skeleton-bg: #e8e6e1;
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn"] .gh-pr-card,
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn"] .gh-pr-kanban {
      background: #faf9f6;
      border: 2px solid #2c2c2c;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 4px 4px 0px rgba(44, 44, 44, 0.2);
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn"] .gh-pr-chip {
      background: #faf9f6;
      border: 2px solid #2c2c2c;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 3px 3px 0px rgba(44, 44, 44, 0.2);
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn"] .gh-pr-footer {
      background: transparent;
      border-top: 2px dotted #2c2c2c;
      border-radius: 0;
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn"] .gh-pr-icon,
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn"] .gh-pr-kanban-icon,
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn"] .gh-pr-chip-icon {
      background: transparent !important;
      color: #2c2c2c;
      border: 2px solid #2c2c2c;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 2px 2px 0px rgba(44, 44, 44, 0.15);
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn"] .gh-pr-label-glass,
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn"] .gh-pr-label-gradient {
      background: transparent !important;
      color: #2c2c2c !important;
      border: 1px solid #2c2c2c !important;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px !important;
      box-shadow: 2px 2px 0px rgba(44, 44, 44, 0.15);
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn"] .gh-pr-label {
      background: transparent !important;
      color: #2c2c2c !important;
      border: 1px solid #2c2c2c;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 2px 2px 0px rgba(44, 44, 44, 0.15);
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn"] .gh-pr-badge {
      background: transparent !important;
      color: #2c2c2c !important;
      border: 2px dashed #2c2c2c;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 2px 2px 0px rgba(44, 44, 44, 0.15);
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn"] .gh-pr-description {
      border-top: 2px dashed #2c2c2c;
      color: var(--gh-pr-text-secondary);
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn"] .gh-pr-checks svg {
      fill: #2c2c2c !important;
    }

    /* ── Hand-drawn Dark (Chalkboard) ── */
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn-dark"] {
      --gh-pr-font-family: 'Caveat', 'Comic Sans MS', cursive, sans-serif;
      --gh-pr-bg: #252525;
      --gh-pr-text-primary: #f5f6fa;
      --gh-pr-text-secondary: #d1d1d1;
      --gh-pr-border: #f5f6fa;
      --gh-pr-footer-bg: transparent;
      --gh-pr-link: #f5f6fa;
      --gh-pr-open-bg: #f5f6fa;
      --gh-pr-merged-bg: #f5f6fa;
      --gh-pr-closed-bg: #f5f6fa;
      --gh-pr-additions: #f5f6fa;
      --gh-pr-deletions: #f5f6fa;
      --gh-pr-skeleton-bg: #333333;
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn-dark"] .gh-pr-card,
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn-dark"] .gh-pr-kanban {
      background: #252525;
      border: 2px solid #f5f6fa;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 4px 4px 0px #111111;
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn-dark"] .gh-pr-chip {
      background: #252525;
      border: 2px solid #f5f6fa;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 3px 3px 0px #111111;
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn-dark"] .gh-pr-footer {
      background: transparent;
      border-top: 2px dotted #f5f6fa;
      border-radius: 0;
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn-dark"] .gh-pr-icon,
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn-dark"] .gh-pr-kanban-icon,
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn-dark"] .gh-pr-chip-icon {
      background: transparent !important;
      color: #f5f6fa;
      border: 2px solid #f5f6fa;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn-dark"] .gh-pr-label-glass,
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn-dark"] .gh-pr-label-gradient {
      background: transparent !important;
      color: #f5f6fa !important;
      border: 1px solid #f5f6fa !important;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px !important;
      box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn-dark"] .gh-pr-label {
      background: transparent !important;
      color: #f5f6fa !important;
      border: 1px solid #f5f6fa;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn-dark"] .gh-pr-badge {
      background: transparent !important;
      color: #f5f6fa !important;
      border: 2px dashed #f5f6fa;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn-dark"] .gh-pr-description {
      border-top: 2px dashed #f5f6fa;
      color: var(--gh-pr-text-secondary);
    }
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn-dark"] .gh-pr-checks svg {
      fill: #f5f6fa !important;
    }

    /* Hand-drawn skeleton rough pulse */
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn"] .gh-pr-skeleton-pulse,
    .gh-pr-wrapper[data-gh-pr-theme="hand-drawn-dark"] .gh-pr-skeleton-pulse {
      animation: gh-pr-hand-drawn-pulse 1.5s ease-in-out infinite;
    }
    @keyframes gh-pr-hand-drawn-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.25; }
    }

`;
