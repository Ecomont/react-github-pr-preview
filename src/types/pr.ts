export interface PullRequestLabel {
  /** Label name (e.g., "bug", "enhancement"). */
  name: string;
  /** Hex color string (e.g., "#d73a4a"). */
  color: string;
}

export interface PullRequestAuthor {
  /** The GitHub username of the PR author. */
  login: string;
  /** URL to the author's avatar image. */
  avatarUrl: string;
}

export interface PullRequestData {
  /** The title of the pull request. */
  title: string;
  /** The pull request number. */
  number: number;
  /** The current state of the pull request. */
  state: "open" | "closed";
  /** Whether the pull request has been merged. */
  merged: boolean;
  /** The URL to the pull request on GitHub. */
  url: string;
  /** Information about the author of the pull request. */
  author: PullRequestAuthor;
  /** The date/time the pull request was created (ISO string or Date). */
  createdAt: string | Date;
  /** PR description / body text (optional). Used by the 'detailed' variant. */
  description?: string;
  /** PR labels (optional). */
  labels?: PullRequestLabel[];
  /** CI/CD check status (optional). */
  checksStatus?: "success" | "failure" | "pending";
  /** Number of lines added (optional). */
  additions?: number;
  /** Number of lines deleted (optional). */
  deletions?: number;
}

export type GithubPrTheme =
  | "light"
  | "dark"
  | "system"
  | "neobrutalism"
  | "neobrutalism-dark"
  | "terminal"
  | "minimalist"
  | "minimalist-dark"
  | "retro"
  | "hand-drawn"
  | "hand-drawn-dark"
  | "claymorphism"
  | "claymorphism-dark";

export type GithubPrVariant = "default" | "compact" | "inline" | "detailed";

export interface GithubPrPreviewProps {
  /** The pull request data to render. */
  prData: PullRequestData;
  /** Optional CSS class name for the root element. */
  className?: string;
  /** Optional inline styles for the root element. */
  style?: React.CSSProperties;
  /**
   * Visual theme for the component.
   * - `'light'`: Forces the light GitHub theme.
   * - `'dark'`: Forces the dark GitHub theme.
   * - `'system'`: Automatically matches the user's OS preference via `prefers-color-scheme`.
   * @default 'system'
   */
  theme?: GithubPrTheme;
  /**
   * Layout variant.
   * - `'default'`: Classic rectangular list item.
   * - `'compact'`: Kanban-style square card.
   * - `'inline'`: Ultra-minimal single-line chip.
   * - `'detailed'`: Information-rich card with description.
   * @default 'default'
   */
  variant?: GithubPrVariant;
  /**
   * Optional font-family override.
   * Defaults to the host website's font via CSS variable fallback.
   */
  fontFamily?: string;
  /**
   * Locale for relative time formatting.
   * @default 'en-US'
   */
  locale?: string;
  /**
   * Enable liquid-glass styling.
   * @default false
   */
  glass?: boolean;
  /**
   * Enable gradient background on the wrapper.
   * @default false
   */
  gradient?: boolean;
  /**
   * Enable neumorphic (soft UI) styling.
   * @default false
   */
  neumorphic?: boolean;
}

export interface GithubPrSkeletonProps {
  /** Skeleton layout variant. */
  variant?: GithubPrVariant;
  /** Optional CSS class name for the root element. */
  className?: string;
  /** Optional inline styles for the root element. */
  style?: React.CSSProperties;
  /**
   * Visual theme for the skeleton.
   * @default 'system'
   */
  theme?: GithubPrTheme;
  /**
   * Render skeleton with liquid-glass styling.
   * @default false
   */
  glass?: boolean;
  /**
   * Render skeleton with a gradient wrapper background.
   * @default false
   */
  gradient?: boolean;
  /**
   * Render skeleton with neumorphic styling.
   * @default false
   */
  neumorphic?: boolean;
}
