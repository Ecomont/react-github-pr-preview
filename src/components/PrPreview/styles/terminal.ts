export const terminalStyles = `

    /* ── Terminal ── */
    .gh-pr-wrapper[data-gh-pr-theme="terminal"] {
      --gh-pr-font-family: ui-monospace, 'Fira Code', 'Courier New', monospace;
      --gh-pr-bg: #000000;
      --gh-pr-text-primary: #00ff41;
      --gh-pr-text-secondary: #00aa2a;
      --gh-pr-border: #00ff41;
      --gh-pr-footer-bg: #000000;
      --gh-pr-link: #00ff41;
      --gh-pr-open-bg: #00ff41;
      --gh-pr-merged-bg: #00ff41;
      --gh-pr-closed-bg: #ff3333;
      --gh-pr-additions: #00ff41;
      --gh-pr-deletions: #ff3333;
      --gh-pr-skeleton-bg: #003300;
    }
    .gh-pr-wrapper[data-gh-pr-theme="terminal"] .gh-pr-card,
    .gh-pr-wrapper[data-gh-pr-theme="terminal"] .gh-pr-kanban {
      background: #000000;
      border: 1px solid #00ff41;
      border-radius: 0;
      box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
    }
    .gh-pr-wrapper[data-gh-pr-theme="terminal"] .gh-pr-chip {
      background: #000000;
      border: 1px solid #00ff41;
      border-radius: 0;
      box-shadow: 0 0 6px rgba(0, 255, 65, 0.25);
    }
    .gh-pr-wrapper[data-gh-pr-theme="terminal"] .gh-pr-footer {
      background: #000000;
      border-top: 1px dashed #00ff41;
      border-radius: 0;
    }
    .gh-pr-wrapper[data-gh-pr-theme="terminal"] .gh-pr-icon,
    .gh-pr-wrapper[data-gh-pr-theme="terminal"] .gh-pr-kanban-icon,
    .gh-pr-wrapper[data-gh-pr-theme="terminal"] .gh-pr-chip-icon {
      background: transparent !important;
      color: #00ff41;
      border: 1px solid #00ff41;
      text-shadow: 0 0 6px #00ff41;
      border-radius: 0;
    }
    .gh-pr-wrapper[data-gh-pr-theme="terminal"] .gh-pr-label-glass,
    .gh-pr-wrapper[data-gh-pr-theme="terminal"] .gh-pr-label-gradient {
      background: #00ff41 !important;
      color: #000000 !important;
      border: 1px solid #00ff41 !important;
      border-radius: 0 !important;
    }
    .gh-pr-wrapper[data-gh-pr-theme="terminal"] .gh-pr-badge {
      background: #00ff41;
      color: #000000;
      border: 1px solid #00ff41;
      box-shadow: 0 0 4px rgba(0, 255, 65, 0.4);
    }
    .gh-pr-wrapper[data-gh-pr-theme="terminal"] .gh-pr-description {
      border-top: 1px dashed #00ff41;
      color: var(--gh-pr-text-secondary);
    }

`;
