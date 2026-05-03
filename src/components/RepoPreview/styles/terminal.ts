export const terminalStyles = `
    /* ── Terminal ── */
    .gh-repo-wrapper[data-gh-repo-theme="terminal"] {
      --gh-repo-font-family: ui-monospace, 'Fira Code', 'Courier New', monospace;
      --gh-repo-bg: #000000;
      --gh-repo-text-primary: #00ff41;
      --gh-repo-text-secondary: #00aa2a;
      --gh-repo-border: #00ff41;
      --gh-repo-footer-bg: #000000;
      --gh-repo-link: #00ff41;
      --gh-repo-star: #00ff41;
      --gh-repo-lang-dot: #00ff41;
      --gh-repo-skeleton-bg: #003300;
    }
    .gh-repo-wrapper[data-gh-repo-theme="terminal"] .gh-repo-card,
    .gh-repo-wrapper[data-gh-repo-theme="terminal"] .gh-repo-compact,
    .gh-repo-wrapper[data-gh-repo-theme="terminal"] .gh-repo-detailed {
      background: #000000;
      border: 1px solid #00ff41;
      border-radius: 0;
      box-shadow: 0 0 8px rgba(0, 255, 65, 0.3);
    }
    .gh-repo-wrapper[data-gh-repo-theme="terminal"] .gh-repo-inline {
      background: #000000;
      border: 1px solid #00ff41;
      border-radius: 0;
      box-shadow: 0 0 6px rgba(0, 255, 65, 0.25);
    }
    .gh-repo-wrapper[data-gh-repo-theme="terminal"] .gh-repo-footer,
    .gh-repo-wrapper[data-gh-repo-theme="terminal"] .gh-repo-detailed-footer {
      background: #000000;
      border-top: 1px dashed #00ff41;
      border-radius: 0;
    }
    .gh-repo-wrapper[data-gh-repo-theme="terminal"] .gh-repo-icon {
      background: transparent;
      color: #00ff41;
      border: 1px solid #00ff41;
      text-shadow: 0 0 6px #00ff41;
      border-radius: 0;
    }
    .gh-repo-wrapper[data-gh-repo-theme="terminal"] .gh-repo-topic,
    .gh-repo-wrapper[data-gh-repo-theme="terminal"] .gh-repo-topic-glass {
      background: #00ff41 !important;
      color: #000000 !important;
      border: 1px solid #00ff41 !important;
      border-radius: 0 !important;
    }


`;
