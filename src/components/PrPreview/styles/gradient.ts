export const gradientStyles = `

    /* Gradient card — textured with dramatic glow */
    .gh-pr-wrapper[data-gh-pr-gradient="true"] .gh-pr-card,
    .gh-pr-wrapper[data-gh-pr-gradient="true"] .gh-pr-kanban {
      background: var(--gh-pr-gradient-bg);
      border: 1px solid rgba(128, 128, 128, 0.2);
      border-radius: 24px;
      /* Remove gradient border, keep structural shadow only */
      box-shadow: 0 12px 40px var(--gh-pr-gradient-shadow), 0 0 60px var(--gh-pr-gradient-glow);
      position: relative;
      /* We need overflow visible to allow the blurred pseudo-element to render outside without being clipped */
      overflow: visible;
    }
    /* New blurred gradient shadow behind the card */
    .gh-pr-wrapper[data-gh-pr-gradient="true"] .gh-pr-card::before,
    .gh-pr-wrapper[data-gh-pr-gradient="true"] .gh-pr-kanban::before {
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
    .gh-pr-wrapper[data-gh-pr-gradient="true"] .gh-pr-card::after,
    .gh-pr-wrapper[data-gh-pr-gradient="true"] .gh-pr-kanban::after {
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
    .gh-pr-wrapper[data-gh-pr-gradient="true"] .gh-pr-chip {
      background: var(--gh-pr-bg);
      border: 1px solid rgba(128, 128, 128, 0.2);
      border-radius: 9999px;
      box-shadow: 0 4px 16px var(--gh-pr-gradient-shadow);
    }
    .gh-pr-wrapper[data-gh-pr-gradient="true"] .gh-pr-footer {
      background: var(--gh-pr-footer-bg);
      border-top: 1px solid var(--gh-pr-border);
      border-radius: 0 0 22px 22px;
    }
    .gh-pr-wrapper[data-gh-pr-gradient="true"] .gh-pr-icon,
    .gh-pr-wrapper[data-gh-pr-gradient="true"] .gh-pr-kanban-icon,
    .gh-pr-wrapper[data-gh-pr-gradient="true"] .gh-pr-chip-icon {
      background: transparent !important;
      color: var(--gh-pr-open-bg);
      border: none;
      box-shadow: none;
      filter: drop-shadow(0 0 4px var(--gh-pr-open-bg));
    }
    .gh-pr-wrapper[data-gh-pr-gradient="true"] .gh-pr-label-gradient {
      background: var(--gh-pr-label-gradient-bg) !important;
      color: var(--gh-pr-label-gradient-color) !important;
      border: 1px solid rgba(128, 128, 128, 0.2) !important;
      border-radius: 9999px;
    }
    .gh-pr-wrapper[data-gh-pr-gradient="true"] .gh-pr-description {
      border-top: 1px solid var(--gh-pr-border);
      color: var(--gh-pr-text-secondary);
    }

`;
