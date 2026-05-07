export const glassStyles = `
    /* Glass variables - Light theme */
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="light"] {
      --gh-repo-bg: rgba(255, 255, 255, 0.06);
      --gh-repo-text-primary: #1f2328;
      --gh-repo-text-secondary: #57606a;
      --gh-repo-footer-bg: rgba(255, 255, 255, 0.04);
      --gh-repo-link: #0969da;
      --gh-repo-star: #e3b341;
      --gh-repo-lang-dot: #0969da;
      --gh-repo-topic-glass-bg: rgba(255, 255, 255, 0.20);
      --gh-repo-topic-glass-border: rgba(255, 255, 255, 0.40);
      --gh-repo-skeleton-bg: rgba(31, 35, 40, 0.12);
    }
    /* Glass variables - Dark theme */
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="dark"] {
      --gh-repo-bg: rgba(15, 15, 15, 0.25);
      --gh-repo-text-primary: #ffffff;
      --gh-repo-text-secondary: rgba(255, 255, 255, 0.60);
      --gh-repo-footer-bg: rgba(15, 15, 15, 0.20);
      --gh-repo-link: #ffffff;
      --gh-repo-star: #e3b341;
      --gh-repo-lang-dot: #c7d2fe;
      --gh-repo-topic-glass-bg: rgba(255, 255, 255, 0.08);
      --gh-repo-topic-glass-border: rgba(255, 255, 255, 0.15);
      --gh-repo-skeleton-bg: rgba(255, 255, 255, 0.12);
    }
    /* Glass variables - System theme (default light) */
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="system"] {
      --gh-repo-bg: rgba(255, 255, 255, 0.06);
      --gh-repo-text-primary: #1f2328;
      --gh-repo-text-secondary: #656d76;
      --gh-repo-footer-bg: rgba(255, 255, 255, 0.04);
      --gh-repo-link: #0969da;
      --gh-repo-star: #e3b341;
      --gh-repo-lang-dot: #0969da;
      --gh-repo-topic-glass-bg: rgba(255, 255, 255, 0.20);
      --gh-repo-topic-glass-border: rgba(255, 255, 255, 0.40);
      --gh-repo-skeleton-bg: rgba(31, 35, 40, 0.12);
    }
    @media (prefers-color-scheme: dark) {
      .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="system"] {
        --gh-repo-bg: rgba(15, 15, 15, 0.25);
        --gh-repo-text-primary: #ffffff;
        --gh-repo-text-secondary: rgba(255, 255, 255, 0.60);
        --gh-repo-footer-bg: rgba(15, 15, 15, 0.20);
        --gh-repo-link: #ffffff;
        --gh-repo-star: #e3b341;
        --gh-repo-lang-dot: #c7d2fe;
        --gh-repo-topic-glass-bg: rgba(255, 255, 255, 0.08);
        --gh-repo-topic-glass-border: rgba(255, 255, 255, 0.15);
        --gh-repo-skeleton-bg: rgba(255, 255, 255, 0.12);
      }
    }

    /* Gradient variables — light */
    .gh-repo-wrapper[data-gh-repo-gradient="true"][data-gh-repo-theme="light"] {
      --gh-repo-bg: #f5f5f7;
      --gh-repo-text-primary: #1a1a2e;
      --gh-repo-text-secondary: rgba(26, 26, 46, 0.65);
      --gh-repo-border: rgba(0, 0, 0, 0.1);
      --gh-repo-footer-bg: rgba(0, 0, 0, 0.03);
      --gh-repo-link: #4338ca;
      --gh-repo-star: #d4a017;
      --gh-repo-lang-dot: #4338ca;
      --gh-repo-gradient-bg: linear-gradient(145deg, #f0f0f5 0%, #f5f5f7 50%, #ebe8f5 100%);
      --gh-repo-gradient-border: #a78bfa;
      --gh-repo-gradient-shadow: rgba(120, 50, 220, 0.25);
      --gh-repo-gradient-glow: rgba(120, 50, 220, 0.12);
      --gh-repo-topic-gradient-bg: rgba(0, 0, 0, 0.08);
      --gh-repo-topic-gradient-color: #1a1a2e;
      --gh-repo-topic-gradient-border: rgba(0, 0, 0, 0.15);
    }
    /* Gradient variables — dark */
    .gh-repo-wrapper[data-gh-repo-gradient="true"][data-gh-repo-theme="dark"] {
      --gh-repo-bg: #081016;
      --gh-repo-text-primary: #e0f2fe;
      --gh-repo-text-secondary: rgba(224, 242, 254, 0.65);
      --gh-repo-border: rgba(14, 165, 233, 0.2);
      --gh-repo-footer-bg: rgba(14, 165, 233, 0.05);
      --gh-repo-link: #38bdf8;
      --gh-repo-star: #fde047;
      --gh-repo-lang-dot: #38bdf8;
      --gh-repo-gradient-bg: linear-gradient(145deg, #020d1b 0%, #0a1c2e 50%, #0c2a3a 100%);
      --gh-repo-gradient-border: #0ea5e9;
      --gh-repo-gradient-shadow: rgba(14, 165, 233, 0.45);
      --gh-repo-gradient-glow: rgba(14, 165, 233, 0.18);
      --gh-repo-topic-gradient-bg: rgba(14, 165, 233, 0.12);
      --gh-repo-topic-gradient-color: #e0f2fe;
      --gh-repo-topic-gradient-border: rgba(14, 165, 233, 0.25);
    }
    @media (prefers-color-scheme: light) {
      .gh-repo-wrapper[data-gh-repo-gradient="true"][data-gh-repo-theme="system"] {
        --gh-repo-bg: #f5f5f7;
        --gh-repo-text-primary: #1a1a2e;
        --gh-repo-text-secondary: rgba(26, 26, 46, 0.65);
        --gh-repo-border: rgba(0, 0, 0, 0.1);
        --gh-repo-footer-bg: rgba(0, 0, 0, 0.03);
        --gh-repo-link: #4338ca;
        --gh-repo-star: #d4a017;
        --gh-repo-lang-dot: #4338ca;
        --gh-repo-gradient-bg: linear-gradient(145deg, #f0f0f5 0%, #f5f5f7 50%, #ebe8f5 100%);
        --gh-repo-gradient-border: #a78bfa;
        --gh-repo-gradient-shadow: rgba(120, 50, 220, 0.25);
        --gh-repo-gradient-glow: rgba(120, 50, 220, 0.12);
        --gh-repo-topic-gradient-bg: rgba(0, 0, 0, 0.08);
        --gh-repo-topic-gradient-color: #1a1a2e;
        --gh-repo-topic-gradient-border: rgba(0, 0, 0, 0.15);
      }
    }
    @media (prefers-color-scheme: dark) {
      .gh-repo-wrapper[data-gh-repo-gradient="true"][data-gh-repo-theme="system"] {
        --gh-repo-bg: #081016;
        --gh-repo-text-primary: #e0f2fe;
        --gh-repo-text-secondary: rgba(224, 242, 254, 0.65);
        --gh-repo-border: rgba(14, 165, 233, 0.2);
        --gh-repo-footer-bg: rgba(14, 165, 233, 0.05);
        --gh-repo-link: #38bdf8;
        --gh-repo-star: #fde047;
        --gh-repo-lang-dot: #38bdf8;
        --gh-repo-gradient-bg: linear-gradient(145deg, #020d1b 0%, #0a1c2e 50%, #0c2a3a 100%);
        --gh-repo-gradient-border: #0ea5e9;
        --gh-repo-gradient-shadow: rgba(14, 165, 233, 0.45);
        --gh-repo-gradient-glow: rgba(14, 165, 233, 0.18);
        --gh-repo-topic-gradient-bg: rgba(14, 165, 233, 0.12);
        --gh-repo-topic-gradient-color: #e0f2fe;
        --gh-repo-topic-gradient-border: rgba(14, 165, 233, 0.25);
      }
    }

    /* Liquid Glass card effects */
    .gh-repo-wrapper[data-gh-repo-glass="true"] .gh-repo-card,
    .gh-repo-wrapper[data-gh-repo-glass="true"] .gh-repo-compact,
    .gh-repo-wrapper[data-gh-repo-glass="true"] .gh-repo-detailed {
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      background: var(--gh-repo-bg);
      border: 1px solid rgba(255, 255, 255, 0.35);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      border-radius: 24px;
      position: relative;
      overflow: visible;
    }
    .gh-repo-wrapper[data-gh-repo-glass="true"] .gh-repo-inline {
      backdrop-filter: blur(30px);
      -webkit-backdrop-filter: blur(30px);
      background: var(--gh-repo-bg);
      border: 1px solid rgba(255, 255, 255, 0.35);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
      border-radius: 9999px;
      position: relative;
      overflow: visible;
    }
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="dark"] .gh-repo-card,
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="dark"] .gh-repo-compact,
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="dark"] .gh-repo-detailed,
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="dark"] .gh-repo-inline {
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }
    @media (prefers-color-scheme: dark) {
      .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="system"] .gh-repo-card,
      .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="system"] .gh-repo-compact,
      .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="system"] .gh-repo-detailed,
      .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="system"] .gh-repo-inline {
        border: 1px solid rgba(255, 255, 255, 0.15);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      }
    }
    /* Glass shine effect */
    .gh-repo-wrapper[data-gh-repo-glass="true"] .gh-repo-card::before,
    .gh-repo-wrapper[data-gh-repo-glass="true"] .gh-repo-compact::before,
    .gh-repo-wrapper[data-gh-repo-glass="true"] .gh-repo-detailed::before,
    .gh-repo-wrapper[data-gh-repo-glass="true"] .gh-repo-inline::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 40%);
      pointer-events: none;
      z-index: 1;
    }
    .gh-repo-wrapper[data-gh-repo-glass="true"] .gh-repo-card-header {
      padding: 20px;
    }
    .gh-repo-wrapper[data-gh-repo-glass="true"] .gh-repo-footer {
      background: var(--gh-repo-footer-bg);
      border-top: 1px solid rgba(255, 255, 255, 0.35);
      padding: 14px 20px;
      border-radius: 0 0 23px 23px;
    }
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="dark"] .gh-repo-footer,
    .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="dark"] .gh-repo-detailed-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.15);
    }
    @media (prefers-color-scheme: dark) {
      .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="system"] .gh-repo-footer,
      .gh-repo-wrapper[data-gh-repo-glass="true"][data-gh-repo-theme="system"] .gh-repo-detailed-footer {
        border-top: 1px solid rgba(255, 255, 255, 0.15);
      }
    }
    .gh-repo-wrapper[data-gh-repo-glass="true"] .gh-repo-detailed-header {
      padding: 20px;
    }
    .gh-repo-wrapper[data-gh-repo-glass="true"] .gh-repo-detailed-footer {
      background: var(--gh-repo-footer-bg);
      border-top: 1px solid rgba(255, 255, 255, 0.6);
      padding: 14px 20px;
      border-radius: 0 0 23px 23px;
    }
    .gh-repo-wrapper[data-gh-repo-glass="true"] .gh-repo-icon {
      background: transparent;
      border: none;
      color: var(--gh-repo-text-primary);
      box-shadow: none;
      border-radius: 12px;
    }
    .gh-repo-wrapper[data-gh-repo-glass="true"] .gh-repo-topic-glass {
      background: var(--gh-repo-topic-glass-bg);
      color: var(--gh-repo-text-primary);
      border: 1px solid var(--gh-repo-topic-glass-border);
      backdrop-filter: blur(8px) saturate(150%);
      border-radius: 9999px;
    }
    .gh-repo-wrapper[data-gh-repo-glass="true"] .gh-repo-compact-stars {
      color: var(--gh-repo-star);
    }

`;
