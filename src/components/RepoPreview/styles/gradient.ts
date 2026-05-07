export const gradientStyles = `

    /* Gradient card — solid with gradient border */
    .gh-repo-wrapper[data-gh-repo-gradient="true"] .gh-repo-card,
    .gh-repo-wrapper[data-gh-repo-gradient="true"] .gh-repo-compact,
    .gh-repo-wrapper[data-gh-repo-gradient="true"] .gh-repo-detailed {
      background: var(--gh-repo-gradient-bg);
      border: 1px solid rgba(128, 128, 128, 0.2);
      border-radius: 24px;
      box-shadow: 0 12px 40px var(--gh-repo-gradient-shadow), 0 0 60px var(--gh-repo-gradient-glow), inset 0 1px 0 rgba(255, 255, 255, 0.08);
      position: relative;
      overflow: visible;
    }
    /* New blurred gradient shadow behind the card */
    .gh-repo-wrapper[data-gh-repo-gradient="true"] .gh-repo-card::before,
    .gh-repo-wrapper[data-gh-repo-gradient="true"] .gh-repo-kanban::before {
      content: "";
      position: absolute;
      inset: 0; /* Align with card edge to prevent hard lines */
      border-radius: 26px; /* slightly larger than card */
      background: linear-gradient(135deg, #7c3aed, #db2777, #f59e0b);
      filter: blur(12px);
      z-index: -1;
      opacity: 0.8;
      pointer-events: none;
    }
    /* Gradient diffuse inner light */
    .gh-repo-wrapper[data-gh-repo-gradient="true"] .gh-repo-card::after,
    .gh-repo-wrapper[data-gh-repo-gradient="true"] .gh-repo-compact::after,
    .gh-repo-wrapper[data-gh-repo-gradient="true"] .gh-repo-detailed::after {
      content: "";
      position: absolute;
      top: -30%;
      left: -20%;
      width: 80%;
      height: 80%;
      background: radial-gradient(ellipse at center, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
      pointer-events: none;
      z-index: 0;
    }
    .gh-repo-wrapper[data-gh-repo-gradient="true"] .gh-repo-inline {
      background: var(--gh-repo-bg);
      border: 1px solid rgba(128, 128, 128, 0.2);
      border-radius: 9999px;
      box-shadow: 0 4px 16px var(--gh-repo-gradient-shadow);
    }
    .gh-repo-wrapper[data-gh-repo-gradient="true"] .gh-repo-footer,
    .gh-repo-wrapper[data-gh-repo-gradient="true"] .gh-repo-detailed-footer {
      background: var(--gh-repo-footer-bg);
      border-top: 1px solid var(--gh-repo-border);
    }
    .gh-repo-wrapper[data-gh-repo-gradient="true"] .gh-repo-icon {
      background: transparent;
      border: none;
      color: var(--gh-repo-link);
      box-shadow: none;
      filter: drop-shadow(0 0 4px var(--gh-repo-gradient-glow));
    }
    .gh-repo-wrapper[data-gh-repo-gradient="true"] .gh-repo-topic {
      background: var(--gh-repo-topic-gradient-bg) !important;
      color: var(--gh-repo-topic-gradient-color) !important;
      border: 1px solid var(--gh-repo-topic-gradient-border) !important;
      border-radius: 9999px;
    }

`;
