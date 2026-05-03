export const handDrawnStyles = `
    /* ── Hand-drawn ── */
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn"] {
      --gh-repo-font-family: 'Caveat', 'Comic Sans MS', cursive, sans-serif;
      --gh-repo-bg: #faf9f6;
      --gh-repo-text-primary: #2c2c2c;
      --gh-repo-text-secondary: #5a5a5a;
      --gh-repo-border: #2c2c2c;
      --gh-repo-footer-bg: transparent;
      --gh-repo-link: #2c2c2c;
      --gh-repo-star: #2c2c2c;
      --gh-repo-lang-dot: #2c2c2c;
      --gh-repo-skeleton-bg: #e8e6e1;
    }
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn"] .gh-repo-card,
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn"] .gh-repo-compact,
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn"] .gh-repo-detailed {
      background: #faf9f6;
      border: 2px solid #2c2c2c;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 4px 4px 0px rgba(44, 44, 44, 0.2);
    }
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn"] .gh-repo-inline {
      background: #faf9f6;
      border: 2px solid #2c2c2c;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 3px 3px 0px rgba(44, 44, 44, 0.2);
    }
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn"] .gh-repo-footer,
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn"] .gh-repo-detailed-footer {
      background: transparent;
      border-top: 2px dotted #2c2c2c;
      border-radius: 0;
    }
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn"] .gh-repo-icon {
      background: transparent;
      color: #2c2c2c;
      border: 2px solid #2c2c2c;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 2px 2px 0px rgba(44, 44, 44, 0.15);
    }
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn"] .gh-repo-topic,
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn"] .gh-repo-topic-glass {
      background: transparent !important;
      color: #2c2c2c !important;
      border: 1px solid #2c2c2c !important;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px !important;
      box-shadow: 2px 2px 0px rgba(44, 44, 44, 0.15);
    }

    /* ── Hand-drawn Dark (Chalkboard) ── */
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn-dark"] {
      --gh-repo-font-family: 'Caveat', 'Comic Sans MS', cursive, sans-serif;
      --gh-repo-bg: #252525;
      --gh-repo-text-primary: #f5f6fa;
      --gh-repo-text-secondary: #d1d1d1;
      --gh-repo-border: #f5f6fa;
      --gh-repo-footer-bg: transparent;
      --gh-repo-link: #f5f6fa;
      --gh-repo-star: #f5f6fa;
      --gh-repo-lang-dot: #f5f6fa;
      --gh-repo-skeleton-bg: #333333;
    }
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn-dark"] .gh-repo-card,
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn-dark"] .gh-repo-compact,
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn-dark"] .gh-repo-detailed {
      background: #252525;
      border: 2px solid #f5f6fa;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 4px 4px 0px #111111;
    }
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn-dark"] .gh-repo-inline {
      background: #252525;
      border: 2px solid #f5f6fa;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 3px 3px 0px #111111;
    }
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn-dark"] .gh-repo-footer,
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn-dark"] .gh-repo-detailed-footer {
      background: transparent;
      border-top: 2px dotted #f5f6fa;
      border-radius: 0;
    }
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn-dark"] .gh-repo-icon {
      background: transparent;
      color: #f5f6fa;
      border: 2px solid #f5f6fa;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
      box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
    }
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn-dark"] .gh-repo-topic,
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn-dark"] .gh-repo-topic-glass {
      background: transparent !important;
      color: #f5f6fa !important;
      border: 1px solid #f5f6fa !important;
      border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px !important;
      box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
    }

    /* Hand-drawn skeleton rough pulse */
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn"] .gh-repo-skeleton-pulse,
    .gh-repo-wrapper[data-gh-repo-theme="hand-drawn-dark"] .gh-repo-skeleton-pulse {
      animation: gh-repo-hand-drawn-pulse 1.5s ease-in-out infinite;
    }
    @keyframes gh-repo-hand-drawn-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.25; }
    }


`;
