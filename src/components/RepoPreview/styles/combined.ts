export const combinedStyles = `

    /* Glass + Gradient combined overrides */
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-gradient="true"] {
      --gh-repo-text-primary: var(--gh-repo-text-primary);
      --gh-repo-text-secondary: var(--gh-repo-text-secondary);
      --gh-repo-link: var(--gh-repo-link);
      --gh-repo-border: var(--gh-repo-border);
      --gh-repo-footer-bg: var(--gh-repo-footer-bg);
    }
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-gradient="true"] .gh-repo-card,
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-gradient="true"] .gh-repo-compact,
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-gradient="true"] .gh-repo-detailed {
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      background: var(--gh-repo-bg);
      border: 1px solid rgba(128, 128, 128, 0.2);
      box-shadow: 0 8px 32px var(--gh-repo-gradient-shadow);
    }
    
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-gradient="true"] .gh-repo-inline {
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
      background: var(--gh-repo-bg);
      border: 1px solid rgba(128, 128, 128, 0.2);
      box-shadow: 0 4px 16px var(--gh-repo-gradient-shadow);
    }
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-gradient="true"] .gh-repo-footer,
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-gradient="true"] .gh-repo-detailed-footer {
      border-top: 1px solid var(--gh-repo-border);
    }

`;
