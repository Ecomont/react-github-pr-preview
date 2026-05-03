export const glassStyles = `
    /* Glass variables - Light theme */
    .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-theme="light"] {
      --gh-pr-bg: rgba(255, 255, 255, 0.08);
      --gh-pr-text-primary: #1f2328;
      --gh-pr-text-secondary: #57606a;
      --gh-pr-footer-bg: rgba(255, 255, 255, 0.04);
      --gh-pr-link: #0969da;
      --gh-pr-open-bg: #1a7f37;
      --gh-pr-merged-bg: #8250df;
      --gh-pr-closed-bg: #cf222e;
      --gh-pr-additions: #1a7f37;
      --gh-pr-deletions: #cf222e;
      --gh-pr-label-glass-bg: rgba(255, 255, 255, 0.20);
      --gh-pr-label-glass-border: rgba(255, 255, 255, 0.40);
      --gh-pr-skeleton-bg: rgba(31, 35, 40, 0.12);
    }
    /* Glass variables - Dark theme */
    .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-theme="dark"] {
      --gh-pr-bg: rgba(15, 15, 15, 0.25);
      --gh-pr-text-primary: #ffffff;
      --gh-pr-text-secondary: rgba(255, 255, 255, 0.60);
      --gh-pr-footer-bg: rgba(15, 15, 15, 0.20);
      --gh-pr-link: #ffffff;
      --gh-pr-open-bg: #3fb950;
      --gh-pr-merged-bg: #a371f7;
      --gh-pr-closed-bg: #f85149;
      --gh-pr-additions: rgba(255, 255, 255, 0.90);
      --gh-pr-deletions: rgba(255, 255, 255, 0.90);
      --gh-pr-label-glass-bg: rgba(255, 255, 255, 0.08);
      --gh-pr-label-glass-border: rgba(255, 255, 255, 0.15);
      --gh-pr-skeleton-bg: rgba(255, 255, 255, 0.12);
    }
    /* Glass variables - System theme (default light) */
    .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-theme="system"] {
      --gh-pr-bg: rgba(255, 255, 255, 0.08);
      --gh-pr-text-primary: #1f2328;
      --gh-pr-text-secondary: #656d76;
      --gh-pr-footer-bg: rgba(255, 255, 255, 0.04);
      --gh-pr-link: #0969da;
      --gh-pr-open-bg: #1a7f37;
      --gh-pr-merged-bg: #8250df;
      --gh-pr-closed-bg: #cf222e;
      --gh-pr-additions: #1a7f37;
      --gh-pr-deletions: #cf222e;
      --gh-pr-label-glass-bg: rgba(255, 255, 255, 0.20);
      --gh-pr-label-glass-border: rgba(255, 255, 255, 0.40);
      --gh-pr-skeleton-bg: rgba(31, 35, 40, 0.12);
    }
    @media (prefers-color-scheme: dark) {
      .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-theme="system"] {
        --gh-pr-bg: rgba(15, 15, 15, 0.25);
        --gh-pr-text-primary: #ffffff;
        --gh-pr-text-secondary: rgba(255, 255, 255, 0.60);
        --gh-pr-footer-bg: rgba(15, 15, 15, 0.20);
        --gh-pr-link: #ffffff;
        --gh-pr-open-bg: #3fb950;
        --gh-pr-merged-bg: #a371f7;
        --gh-pr-closed-bg: #f85149;
        --gh-pr-additions: rgba(255, 255, 255, 0.90);
        --gh-pr-deletions: rgba(255, 255, 255, 0.90);
        --gh-pr-label-glass-bg: rgba(255, 255, 255, 0.08);
        --gh-pr-label-glass-border: rgba(255, 255, 255, 0.15);
        --gh-pr-skeleton-bg: rgba(255, 255, 255, 0.12);
      }
    }

    /* Gradient variables — light */
    .gh-pr-wrapper[data-gh-pr-gradient="true"][data-gh-pr-theme="light"] {
      --gh-pr-bg: #f5f5f7;
      --gh-pr-text-primary: #1a1a2e;
      --gh-pr-text-secondary: rgba(26, 26, 46, 0.65);
      --gh-pr-border: rgba(0, 0, 0, 0.1);
      --gh-pr-footer-bg: rgba(0, 0, 0, 0.03);
      --gh-pr-link: #4338ca;
      --gh-pr-open-bg: #1a7f37;
      --gh-pr-merged-bg: #8250df;
      --gh-pr-closed-bg: #cf222e;
      --gh-pr-additions: #1a7f37;
      --gh-pr-deletions: #cf222e;
      --gh-pr-gradient-bg: linear-gradient(145deg, #f0f0f5 0%, #f5f5f7 50%, #ebe8f5 100%);
      --gh-pr-gradient-border: #a78bfa;
      --gh-pr-gradient-shadow: rgba(120, 50, 220, 0.25);
      --gh-pr-gradient-glow: rgba(120, 50, 220, 0.12);
      --gh-pr-label-gradient-bg: rgba(0, 0, 0, 0.08);
      --gh-pr-label-gradient-color: #1a1a2e;
      --gh-pr-label-gradient-border: rgba(0, 0, 0, 0.15);
    }
    /* Gradient variables — dark */
    .gh-pr-wrapper[data-gh-pr-gradient="true"][data-gh-pr-theme="dark"] {
      --gh-pr-bg: #081016;
      --gh-pr-text-primary: #e0f2fe;
      --gh-pr-text-secondary: rgba(224, 242, 254, 0.65);
      --gh-pr-border: rgba(14, 165, 233, 0.2);
      --gh-pr-footer-bg: rgba(14, 165, 233, 0.05);
      --gh-pr-link: #38bdf8;
      --gh-pr-open-bg: #22d3ee;
      --gh-pr-merged-bg: #818cf8;
      --gh-pr-closed-bg: #fb7185;
      --gh-pr-additions: #22d3ee;
      --gh-pr-deletions: #fb7185;
      --gh-pr-gradient-bg: linear-gradient(145deg, #020d1b 0%, #0a1c2e 50%, #0c2a3a 100%);
      --gh-pr-gradient-border: #0ea5e9;
      --gh-pr-gradient-shadow: rgba(14, 165, 233, 0.45);
      --gh-pr-gradient-glow: rgba(14, 165, 233, 0.18);
      --gh-pr-label-gradient-bg: rgba(14, 165, 233, 0.12);
      --gh-pr-label-gradient-color: #e0f2fe;
      --gh-pr-label-gradient-border: rgba(14, 165, 233, 0.25);
    }
    /* Gradient variables — system */
    @media (prefers-color-scheme: light) {
      .gh-pr-wrapper[data-gh-pr-gradient="true"][data-gh-pr-theme="system"] {
        --gh-pr-bg: #f5f5f7;
        --gh-pr-text-primary: #1a1a2e;
        --gh-pr-text-secondary: rgba(26, 26, 46, 0.65);
        --gh-pr-border: rgba(0, 0, 0, 0.1);
        --gh-pr-footer-bg: rgba(0, 0, 0, 0.03);
        --gh-pr-link: #4338ca;
        --gh-pr-open-bg: #1a7f37;
        --gh-pr-merged-bg: #8250df;
        --gh-pr-closed-bg: #cf222e;
        --gh-pr-additions: #1a7f37;
        --gh-pr-deletions: #cf222e;
        --gh-pr-gradient-bg: linear-gradient(145deg, #f0f0f5 0%, #f5f5f7 50%, #ebe8f5 100%);
        --gh-pr-gradient-border: #a78bfa;
        --gh-pr-gradient-shadow: rgba(120, 50, 220, 0.25);
        --gh-pr-gradient-glow: rgba(120, 50, 220, 0.12);
        --gh-pr-label-gradient-bg: rgba(0, 0, 0, 0.08);
        --gh-pr-label-gradient-color: #1a1a2e;
        --gh-pr-label-gradient-border: rgba(0, 0, 0, 0.15);
      }
    }
    @media (prefers-color-scheme: dark) {
      .gh-pr-wrapper[data-gh-pr-gradient="true"][data-gh-pr-theme="system"] {
        --gh-pr-bg: #081016;
        --gh-pr-text-primary: #e0f2fe;
        --gh-pr-text-secondary: rgba(224, 242, 254, 0.65);
        --gh-pr-border: rgba(14, 165, 233, 0.2);
        --gh-pr-footer-bg: rgba(14, 165, 233, 0.05);
        --gh-pr-link: #38bdf8;
        --gh-pr-open-bg: #22d3ee;
        --gh-pr-merged-bg: #818cf8;
        --gh-pr-closed-bg: #fb7185;
        --gh-pr-additions: #22d3ee;
        --gh-pr-deletions: #fb7185;
        --gh-pr-gradient-bg: linear-gradient(145deg, #020d1b 0%, #0a1c2e 50%, #0c2a3a 100%);
        --gh-pr-gradient-border: #0ea5e9;
        --gh-pr-gradient-shadow: rgba(14, 165, 233, 0.45);
        --gh-pr-gradient-glow: rgba(14, 165, 233, 0.18);
        --gh-pr-label-gradient-bg: rgba(14, 165, 233, 0.12);
        --gh-pr-label-gradient-color: #e0f2fe;
        --gh-pr-label-gradient-border: rgba(14, 165, 233, 0.25);
      }
    }

    /* Liquid Glass card effects */
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-card,
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-kanban {
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      background: var(--gh-pr-bg);
      border: 1px solid rgba(255, 255, 255, 0.35);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.08), 
        inset 0 1px 1px rgba(255, 255, 255, 0.9), 
        inset 0 -1px 1px rgba(255, 255, 255, 0.1); 
      border-radius: 24px;
      position: relative;
      overflow: visible;
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-chip {
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      background: var(--gh-pr-bg);
      border: 1px solid rgba(255, 255, 255, 0.35);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
      border-radius: 9999px;
      position: relative;
      overflow: visible;
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-theme="dark"] .gh-pr-card,
    .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-theme="dark"] .gh-pr-kanban,
    .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-theme="dark"] .gh-pr-chip {
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }
    @media (prefers-color-scheme: dark) {
      .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-theme="system"] .gh-pr-card,
      .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-theme="system"] .gh-pr-kanban,
      .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-theme="system"] .gh-pr-chip {
        border: 1px solid rgba(255, 255, 255, 0.15);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      }
    }
    /* Glass shine effect */
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-card::before,
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-kanban::before,
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-chip::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: linear-gradient(105deg, 
      rgba(255, 255, 255, 0) 0%, 
      rgba(255, 255, 255, 0) 15%, 
      rgba(255, 255, 255, 0.45) 25%, /* The white highlight */
      rgba(255, 255, 255, 0) 35%,
      rgba(255, 255, 255, 0) 100%
    );
      pointer-events: none;
      z-index: 1;
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-card-header {
      padding: 20px;
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-footer {
      background: var(--gh-pr-footer-bg);
      border-top: 1px solid rgba(255, 255, 255, 0.35);
      padding: 14px 20px;
      border-radius: 0 0 23px 23px;
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-theme="dark"] .gh-pr-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.15);
    }
    @media (prefers-color-scheme: dark) {
      .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-theme="system"] .gh-pr-footer {
        border-top: 1px solid rgba(255, 255, 255, 0.15);
      }
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-icon {
      background: transparent !important;
      border: none;
      box-shadow: none;
      border-radius: 12px;
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-icon svg {
      filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15));
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-label-glass {
      background: var(--gh-pr-label-glass-bg) !important;
      color: var(--gh-pr-text-primary) !important;
      border: 1px solid var(--gh-pr-label-glass-border) !important;
      backdrop-filter: blur(8px) saturate(150%);
      border-radius: 9999px;
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-badge {
      background: rgba(0, 0, 0, 0.05) !important;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(0, 0, 0, 0.1);
      color: #24292f;
      box-shadow: none;
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-theme="dark"] .gh-pr-badge {
      background: rgba(255, 255, 255, 0.10) !important;
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #ffffff;
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-description {
      border-top: 1px solid rgba(255, 255, 255, 0.6);
      color: var(--gh-pr-text-secondary);
      margin: 0 20px 20px;
      padding-top: 16px;
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-theme="dark"] .gh-pr-description {
      border-top: 1px solid rgba(255, 255, 255, 0.15);
    }
    @media (prefers-color-scheme: dark) {
      .gh-pr-wrapper[data-gh-pr-glass="true"][data-gh-pr-theme="system"] .gh-pr-description {
        border-top: 1px solid rgba(255, 255, 255, 0.15);
      }
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-kanban {
      padding: 16px;
      max-width: 260px;
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-kanban-icon {
      background: transparent !important;
      border: none;
      box-shadow: none;
      border-radius: 12px;
    }
    .gh-pr-wrapper[data-gh-pr-glass="true"] .gh-pr-kanban-icon svg {
      filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15));
    }

`;
