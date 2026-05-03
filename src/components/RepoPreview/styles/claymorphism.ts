export const claymorphismStyles = `
    /* ── Claymorphism ── */
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism"] {
      --gh-repo-font-family: 'Nunito', 'Varela Round', system-ui, sans-serif;
      --gh-repo-bg: #f1f5f9;
      --gh-repo-text-primary: #334155;
      --gh-repo-text-secondary: #64748b;
      --gh-repo-border: transparent;
      --gh-repo-footer-bg: transparent;
      --gh-repo-link: #334155;
      --gh-repo-star: #334155;
      --gh-repo-lang-dot: #334155;
      --gh-repo-skeleton-bg: #e2e8f0;
    }
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism"] .gh-repo-card,
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism"] .gh-repo-compact,
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism"] .gh-repo-detailed {
      background: #f1f5f9;
      border: none;
      border-radius: 32px;
      box-shadow:
        8px 8px 16px #d1d9e6,
        -8px -8px 16px #ffffff,
        inset 4px 4px 8px rgba(255,255,255,0.9),
        inset -4px -4px 8px rgba(0,0,0,0.08);
    }
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism"] .gh-repo-inline {
      background: #f1f5f9;
      border: none;
      border-radius: 9999px;
      box-shadow:
        4px 4px 8px #d1d9e6,
        -4px -4px 8px #ffffff,
        inset 2px 2px 4px rgba(255,255,255,0.9),
        inset -2px -2px 4px rgba(0,0,0,0.08);
    }
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism"] .gh-repo-footer,
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism"] .gh-repo-detailed-footer {
      background: transparent;
      border-top: none;
      border-radius: 0 0 30px 30px;
    }
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism"] .gh-repo-icon {
      background: #f1f5f9;
      color: #334155;
      border: none;
      border-radius: 50%;
      box-shadow:
        4px 4px 8px #d1d9e6,
        -4px -4px 8px #ffffff;
    }
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism"] .gh-repo-topic,
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism"] .gh-repo-topic-glass {
      background: #f1f5f9 !important;
      color: #334155 !important;
      border: none !important;
      border-radius: 9999px !important;
      box-shadow:
        inset 2px 2px 4px rgba(255,255,255,0.9),
        inset -2px -2px 4px rgba(0,0,0,0.08);
    }

    /* ── Claymorphism Dark ── */
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism-dark"] {
      --gh-repo-font-family: 'Nunito', 'Varela Round', system-ui, sans-serif;
      --gh-repo-bg: #1e293b;
      --gh-repo-text-primary: #f1f5f9;
      --gh-repo-text-secondary: #94a3b8;
      --gh-repo-border: transparent;
      --gh-repo-footer-bg: transparent;
      --gh-repo-link: #f1f5f9;
      --gh-repo-star: #f1f5f9;
      --gh-repo-lang-dot: #f1f5f9;
      --gh-repo-skeleton-bg: #0f172a;
    }
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism-dark"] .gh-repo-card,
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism-dark"] .gh-repo-compact,
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism-dark"] .gh-repo-detailed {
      background: #1e293b;
      border: none;
      border-radius: 32px;
      box-shadow:
        8px 8px 24px rgba(0,0,0,0.5),
        inset 2px 2px 4px rgba(255,255,255,0.1),
        inset -3px -3px 6px rgba(0,0,0,0.4);
    }
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism-dark"] .gh-repo-inline {
      background: #1e293b;
      border: none;
      border-radius: 9999px;
      box-shadow:
        4px 4px 12px rgba(0,0,0,0.5),
        inset 2px 2px 4px rgba(255,255,255,0.1),
        inset -2px -2px 4px rgba(0,0,0,0.4);
    }
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism-dark"] .gh-repo-footer,
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism-dark"] .gh-repo-detailed-footer {
      background: transparent;
      border-top: none;
      border-radius: 0 0 30px 30px;
    }
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism-dark"] .gh-repo-icon {
      background: #1e293b;
      color: #f1f5f9;
      border: none;
      border-radius: 50%;
      box-shadow:
        4px 4px 12px rgba(0,0,0,0.5),
        inset 2px 2px 4px rgba(255,255,255,0.1);
    }
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism-dark"] .gh-repo-topic,
    .gh-repo-wrapper[data-gh-repo-theme="claymorphism-dark"] .gh-repo-topic-glass {
      background: #1e293b !important;
      color: #f1f5f9 !important;
      border: none !important;
      border-radius: 9999px !important;
      box-shadow:
        inset 2px 2px 4px rgba(255,255,255,0.1),
        inset -2px -2px 4px rgba(0,0,0,0.4);
    }

`;
