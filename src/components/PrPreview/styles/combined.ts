export const combinedStyles = `

    /* Glass + Gradient combined overrides */
    .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-gradient="true"] {
      --gh-pr-text-primary: var(--gh-pr-text-primary);
      --gh-pr-text-secondary: var(--gh-pr-text-secondary);
      --gh-pr-link: var(--gh-pr-link);
      --gh-pr-border: var(--gh-pr-border);
      --gh-pr-footer-bg: var(--gh-pr-footer-bg);
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-gradient="true"] .gh-pr-card,
    .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-gradient="true"] .gh-pr-kanban {
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      background: var(--gh-pr-bg);
      border: 1px solid rgba(128, 128, 128, 0.2);
      box-shadow: 0 8px 32px var(--gh-pr-gradient-shadow);
    }
    
    .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-gradient="true"] .gh-pr-chip {
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      background: var(--gh-pr-bg);
      border: 1px solid rgba(128, 128, 128, 0.2);
      box-shadow: 0 4px 16px var(--gh-pr-gradient-shadow);
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-gradient="true"] .gh-pr-footer {
      border-top: 1px solid var(--gh-pr-border);
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-gradient="true"] .gh-pr-description {
      border-top: 1px solid var(--gh-pr-border);
    }

`;
