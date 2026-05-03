export const neumorphicStyles = `

    /* Neumorphism overrides */
    .gh-pr-wrapper[data-gh-pr-neumorphic="true"][data-gh-pr-theme="light"] {
      --gh-pr-bg: #e0e5ec;
      --gh-pr-text-primary: #4a5568;
      --gh-pr-text-secondary: #718096;
      --gh-pr-border: transparent;
      --gh-pr-footer-bg: #e0e5ec;
      --gh-pr-link: #4a5568;
      --gh-pr-open-bg: #48bb78;
      --gh-pr-merged-bg: #9f7aea;
      --gh-pr-closed-bg: #f56565;
      --gh-pr-additions: #48bb78;
      --gh-pr-deletions: #f56565;
      --gh-pr-neu-dark: #a3b1c6;
      --gh-pr-neu-light: #ffffff;
    }
    .gh-pr-wrapper[data-gh-pr-neumorphic="true"][data-gh-pr-theme="dark"] {
      --gh-pr-bg: #2d3748;
      --gh-pr-text-primary: #e2e8f0;
      --gh-pr-text-secondary: #a0aec0;
      --gh-pr-border: transparent;
      --gh-pr-footer-bg: #2d3748;
      --gh-pr-link: #e2e8f0;
      --gh-pr-open-bg: #48bb78;
      --gh-pr-merged-bg: #9f7aea;
      --gh-pr-closed-bg: #f56565;
      --gh-pr-additions: #48bb78;
      --gh-pr-deletions: #f56565;
      --gh-pr-neu-dark: #1a202c;
      --gh-pr-neu-light: #3e4c5e;
    }
    @media (prefers-color-scheme: dark) {
      .gh-pr-wrapper[data-gh-pr-neumorphic="true"][data-gh-pr-theme="system"] {
        --gh-pr-bg: #2d3748;
        --gh-pr-text-primary: #e2e8f0;
        --gh-pr-text-secondary: #a0aec0;
        --gh-pr-border: transparent;
        --gh-pr-footer-bg: #2d3748;
        --gh-pr-link: #e2e8f0;
        --gh-pr-open-bg: #48bb78;
        --gh-pr-merged-bg: #9f7aea;
        --gh-pr-closed-bg: #f56565;
        --gh-pr-additions: #48bb78;
        --gh-pr-deletions: #f56565;
        --gh-pr-neu-dark: #1a202c;
        --gh-pr-neu-light: #3e4c5e;
      }
    }
    .gh-pr-wrapper[data-gh-pr-neumorphic="true"] .gh-pr-card,
    .gh-pr-wrapper[data-gh-pr-neumorphic="true"] .gh-pr-kanban {
      background: var(--gh-pr-bg);
      border: none;
      border-radius: 20px;
      box-shadow: 8px 8px 16px var(--gh-pr-neu-dark), -8px -8px 16px var(--gh-pr-neu-light);
    }
    .gh-pr-wrapper[data-gh-pr-neumorphic="true"] .gh-pr-chip {
      background: var(--gh-pr-bg);
      border: none;
      border-radius: 20px;
      box-shadow: 4px 4px 8px var(--gh-pr-neu-dark), -4px -4px 8px var(--gh-pr-neu-light);
    }
    .gh-pr-wrapper[data-gh-pr-neumorphic="true"] .gh-pr-chip:active {
      box-shadow: inset 3px 3px 6px var(--gh-pr-neu-dark), inset -3px -3px 6px var(--gh-pr-neu-light);
    }
    .gh-pr-wrapper[data-gh-pr-neumorphic="true"] .gh-pr-footer {
      background: transparent;
      border-top: none;
    }
    .gh-pr-wrapper[data-gh-pr-neumorphic="true"] .gh-pr-icon {
      box-shadow: 3px 3px 6px var(--gh-pr-neu-dark), -3px -3px 6px var(--gh-pr-neu-light);
    }
    .gh-pr-wrapper[data-gh-pr-neumorphic="true"] .gh-pr-badge {
      box-shadow: 2px 2px 4px var(--gh-pr-neu-dark), -2px -2px 4px var(--gh-pr-neu-light);
    }
    .gh-pr-wrapper[data-gh-pr-neumorphic="true"] .gh-pr-label {
      background: var(--gh-pr-bg) !important;
      color: var(--gh-pr-text-primary) !important;
      box-shadow: 2px 2px 4px var(--gh-pr-neu-dark), -2px -2px 4px var(--gh-pr-neu-light);
      border: none;
    }
    .gh-pr-wrapper[data-gh-pr-neumorphic="true"] .gh-pr-description {
      border-top: none;
      color: var(--gh-pr-text-secondary);
    }

`;
