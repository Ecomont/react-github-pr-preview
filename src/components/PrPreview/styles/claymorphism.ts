export const claymorphismStyles = `

    /* ── Claymorphism ── */
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism"] {
      --gh-pr-font-family: 'Nunito', 'Varela Round', system-ui, sans-serif;
      --gh-pr-bg: #f1f5f9;
      --gh-pr-text-primary: #334155;
      --gh-pr-text-secondary: #64748b;
      --gh-pr-border: transparent;
      --gh-pr-footer-bg: transparent;
      --gh-pr-link: #334155;
      --gh-pr-open-bg: #334155;
      --gh-pr-merged-bg: #334155;
      --gh-pr-closed-bg: #334155;
      --gh-pr-additions: #334155;
      --gh-pr-deletions: #334155;
      --gh-pr-skeleton-bg: #e2e8f0;
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism"] .gh-pr-card,
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism"] .gh-pr-kanban {
      background: #f1f5f9;
      border: none;
      border-radius: 32px;
      box-shadow:
        8px 8px 16px #d1d9e6,
        -8px -8px 16px #ffffff,
        inset 4px 4px 8px rgba(255,255,255,0.9),
        inset -4px -4px 8px rgba(0,0,0,0.08);
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism"] .gh-pr-chip {
      background: #f1f5f9;
      border: none;
      border-radius: 9999px;
      box-shadow:
        4px 4px 8px #d1d9e6,
        -4px -4px 8px #ffffff,
        inset 2px 2px 4px rgba(255,255,255,0.9),
        inset -2px -2px 4px rgba(0,0,0,0.08);
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism"] .gh-pr-footer {
      background: transparent;
      border-top: none;
      border-radius: 0 0 30px 30px;
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism"] .gh-pr-icon,
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism"] .gh-pr-kanban-icon,
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism"] .gh-pr-chip-icon {
      background: #f1f5f9 !important;
      color: #334155;
      border: none;
      border-radius: 50%;
      box-shadow:
        4px 4px 8px #d1d9e6,
        -4px -4px 8px #ffffff;
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism"] .gh-pr-label-glass,
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism"] .gh-pr-label-gradient {
      background: #f1f5f9 !important;
      color: #334155 !important;
      border: none !important;
      border-radius: 9999px !important;
      box-shadow:
        inset 2px 2px 4px rgba(255,255,255,0.9),
        inset -2px -2px 4px rgba(0,0,0,0.08);
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism"] .gh-pr-label {
      background: #f1f5f9 !important;
      color: #334155 !important;
      border: none;
      border-radius: 9999px;
      box-shadow:
        inset 2px 2px 4px rgba(255,255,255,0.9),
        inset -2px -2px 4px rgba(0,0,0,0.08);
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism"] .gh-pr-badge {
      background: #f1f5f9 !important;
      color: #334155 !important;
      border: none;
      border-radius: 9999px;
      box-shadow:
        inset 3px 3px 6px rgba(255,255,255,0.9),
        inset -3px -3px 6px rgba(0,0,0,0.1);
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism"] .gh-pr-description {
      border-top: none;
      color: var(--gh-pr-text-secondary);
    }

    /* ── Claymorphism Dark ── */
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism-dark"] {
      --gh-pr-font-family: 'Nunito', 'Varela Round', system-ui, sans-serif;
      --gh-pr-bg: #1e293b;
      --gh-pr-text-primary: #f1f5f9;
      --gh-pr-text-secondary: #94a3b8;
      --gh-pr-border: transparent;
      --gh-pr-footer-bg: transparent;
      --gh-pr-link: #f1f5f9;
      --gh-pr-open-bg: #f1f5f9;
      --gh-pr-merged-bg: #f1f5f9;
      --gh-pr-closed-bg: #f1f5f9;
      --gh-pr-additions: #f1f5f9;
      --gh-pr-deletions: #f1f5f9;
      --gh-pr-skeleton-bg: #0f172a;
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism-dark"] .gh-pr-card,
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism-dark"] .gh-pr-kanban {
      background: #1e293b;
      border: none;
      border-radius: 32px;
      box-shadow:
        8px 8px 24px rgba(0,0,0,0.5),
        inset 2px 2px 4px rgba(255,255,255,0.1),
        inset -3px -3px 6px rgba(0,0,0,0.4);
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism-dark"] .gh-pr-chip {
      background: #1e293b;
      border: none;
      border-radius: 9999px;
      box-shadow:
        4px 4px 12px rgba(0,0,0,0.5),
        inset 2px 2px 4px rgba(255,255,255,0.1),
        inset -2px -2px 4px rgba(0,0,0,0.4);
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism-dark"] .gh-pr-footer {
      background: transparent;
      border-top: none;
      border-radius: 0 0 30px 30px;
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism-dark"] .gh-pr-icon,
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism-dark"] .gh-pr-kanban-icon,
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism-dark"] .gh-pr-chip-icon {
      background: #1e293b !important;
      color: #f1f5f9;
      border: none;
      border-radius: 50%;
      box-shadow:
        4px 4px 12px rgba(0,0,0,0.5),
        inset 2px 2px 4px rgba(255,255,255,0.1);
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism-dark"] .gh-pr-label-glass,
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism-dark"] .gh-pr-label-gradient {
      background: #1e293b !important;
      color: #f1f5f9 !important;
      border: none !important;
      border-radius: 9999px !important;
      box-shadow:
        inset 2px 2px 4px rgba(255,255,255,0.1),
        inset -2px -2px 4px rgba(0,0,0,0.4);
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism-dark"] .gh-pr-label {
      background: #1e293b !important;
      color: #f1f5f9 !important;
      border: none;
      border-radius: 9999px;
      box-shadow:
        inset 2px 2px 4px rgba(255,255,255,0.1),
        inset -2px -2px 4px rgba(0,0,0,0.4);
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism-dark"] .gh-pr-badge {
      background: #1e293b !important;
      color: #f1f5f9 !important;
      border: none;
      border-radius: 9999px;
      box-shadow:
        inset 2px 2px 4px rgba(255,255,255,0.1),
        inset -3px -3px 6px rgba(0,0,0,0.4);
    }
    .gh-pr-wrapper[data-gh-pr-theme="claymorphism-dark"] .gh-pr-description {
      border-top: none;
      color: var(--gh-pr-text-secondary);
    }

`;
