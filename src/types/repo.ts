export interface GitHubRepoOwner {
  /** The GitHub username of the repository owner. */
  login: string;
  /** URL to the owner's avatar image. */
  avatarUrl: string;
}

export interface GitHubRepoLanguage {
  /** Programming language name. */
  name: string;
  /** Hex color string for the language dot. */
  color: string;
}

export interface GitHubRepoData {
  /** The repository name. */
  name: string;
  /** The repository description. */
  description: string;
  /** The URL to the repository on GitHub. */
  url: string;
  /** Information about the owner of the repository. */
  owner: GitHubRepoOwner;
  /** Number of stargazers (stars). */
  stargazersCount: number;
  /** Number of forks. */
  forksCount: number;
  /** Primary language of the repository. */
  language: GitHubRepoLanguage;
  /** Repository topics / tags. */
  topics: string[];
  /** SPDX license identifier (optional). */
  license?: string;
  /** The date/time the repository was last pushed to (ISO string or Date). */
  pushedAt: string | Date;
}

export type GithubRepoTheme =
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

export type GithubRepoVariant = "default" | "compact" | "inline" | "detailed";

export interface GithubRepoPreviewProps {
  /** The repository data to render. */
  repoData: GitHubRepoData;
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
  theme?: GithubRepoTheme;
  /**
   * Layout variant.
   * - `'default'`: Classic repository list item.
   * - `'compact'`: Grid-style square card.
   * - `'inline'`: Ultra-minimal single-line chip.
   * - `'detailed'`: Information-rich showcase card.
   * @default 'default'
   */
  variant?: GithubRepoVariant;
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

export interface GithubRepoSkeletonProps {
  /** Skeleton layout variant. */
  variant?: GithubRepoVariant;
  /** Optional CSS class name for the root element. */
  className?: string;
  /** Optional inline styles for the root element. */
  style?: React.CSSProperties;
  /**
   * Visual theme for the skeleton.
   * @default 'system'
   */
  theme?: GithubRepoTheme;
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
