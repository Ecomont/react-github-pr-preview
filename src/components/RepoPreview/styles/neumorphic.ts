export const neumorphicStyles = `

    /* Neumorphism overrides */
    .gh-repo-wrapper[data-gh-repo-neumorphic="true"][data-gh-repo-theme="light"] {
      --gh-repo-bg: #e0e5ec;
      --gh-repo-text-primary: #4a5568;
      --gh-repo-text-secondary: #718096;
      --gh-repo-border: transparent;
      --gh-repo-footer-bg: #e0e5ec;
      --gh-repo-link: #4a5568;
      --gh-repo-star: #ecc94b;
      --gh-repo-lang-dot: #4a5568;
      --gh-repo-neu-dark: #a3b1c6;
      --gh-repo-neu-light: #ffffff;
    }
    .gh-repo-wrapper[data-gh-repo-neumorphic="true"][data-gh-repo-theme="dark"] {
      --gh-repo-bg: #2d3748;
      --gh-repo-text-primary: #e2e8f0;
      --gh-repo-text-secondary: #a0aec0;
      --gh-repo-border: transparent;
      --gh-repo-footer-bg: #2d3748;
      --gh-repo-link: #e2e8f0;
      --gh-repo-star: #ecc94b;
      --gh-repo-lang-dot: #e2e8f0;
      --gh-repo-neu-dark: #1a202c;
      --gh-repo-neu-light: #3e4c5e;
    }
    @media (prefers-color-scheme: dark) {
      .gh-repo-wrapper[data-gh-repo-neumorphic="true"][data-gh-repo-theme="system"] {
        --gh-repo-bg: #2d3748;
        --gh-repo-text-primary: #e2e8f0;
        --gh-repo-text-secondary: #a0aec0;
        --gh-repo-border: transparent;
        --gh-repo-footer-bg: #2d3748;
        --gh-repo-link: #e2e8f0;
        --gh-repo-star: #ecc94b;
        --gh-repo-lang-dot: #e2e8f0;
        --gh-repo-neu-dark: #1a202c;
        --gh-repo-neu-light: #3e4c5e;
      }
    }
    .gh-repo-wrapper[data-gh-repo-neumorphic="true"] .gh-repo-card,
    .gh-repo-wrapper[data-gh-repo-neumorphic="true"] .gh-repo-compact,
    .gh-repo-wrapper[data-gh-repo-neumorphic="true"] .gh-repo-detailed {
      background: var(--gh-repo-bg);
      border: none;
      border-radius: 20px;
      box-shadow: 8px 8px 16px var(--gh-repo-neu-dark), -8px -8px 16px var(--gh-repo-neu-light);
    }
    .gh-repo-wrapper[data-gh-repo-neumorphic="true"] .gh-repo-inline {
      background: var(--gh-repo-bg);
      border: none;
      border-radius: 20px;
      box-shadow: 4px 4px 8px var(--gh-repo-neu-dark), -4px -4px 8px var(--gh-repo-neu-light);
    }
    .gh-repo-wrapper[data-gh-repo-neumorphic="true"] .gh-repo-inline:active {
      box-shadow: inset 3px 3px 6px var(--gh-repo-neu-dark), inset -3px -3px 6px var(--gh-repo-neu-light);
    }
    .gh-repo-wrapper[data-gh-repo-neumorphic="true"] .gh-repo-footer,
    .gh-repo-wrapper[data-gh-repo-neumorphic="true"] .gh-repo-detailed-footer {
      background: transparent;
      border-top: none;
    }
    .gh-repo-wrapper[data-gh-repo-neumorphic="true"] .gh-repo-icon {
      background: var(--gh-repo-bg);
      box-shadow: 3px 3px 6px var(--gh-repo-neu-dark), -3px -3px 6px var(--gh-repo-neu-light);
      border: none;
    }
    .gh-repo-wrapper[data-gh-repo-neumorphic="true"] .gh-repo-topic {
      background: var(--gh-repo-bg) !important;
      color: var(--gh-repo-text-primary) !important;
      box-shadow: 2px 2px 4px var(--gh-repo-neu-dark), -2px -2px 4px var(--gh-repo-neu-light);
      border: none;
    }
    .gh-repo-wrapper[data-gh-repo-neumorphic="true"] .gh-repo-compact-stars {
      color: var(--gh-repo-star);
    }


`;
