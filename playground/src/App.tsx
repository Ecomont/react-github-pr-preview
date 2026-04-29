import { useState } from "react";
import {
  GithubPrPreview,
  GithubRepoPreview,
  type PullRequestData,
  type GitHubRepoData,
} from "react-github-pr-preview";

type Theme = "light" | "dark";
type Tab = "prs" | "repos";

/* ------------------------------------------------------------------ */
/*  Demo Data                                                          */
/* ------------------------------------------------------------------ */

const basePr: PullRequestData = {
  title: "[Backport] Feature: Divide player seekbar by chapters",
  number: 13430,
  state: "open",
  merged: false,
  url: "https://github.com/TeamNewPipe/NewPipe/pull/13430",
  author: {
    login: "Ecomont",
    avatarUrl: "https://avatars.githubusercontent.com/u/82473637?v=4",
  },
  createdAt: "2026-04-17T05:42:23Z",
  description:
    "This is the requested backport of PR #13413 to the dev branch to maintain feature parity. It includes the original Java implementation of the ChaptersSeekBar with visual markers, gap rendering based on video metadata, and haptic feedback.",
  additions: 197,
  deletions: 2,
  labels: [
    { name: "feature request", color: "84b6eb" },
    { name: "GUI", color: "20116b" },
    { name: "player", color: "68007a" },
  ],
  checksStatus: "success",
};

const mergedPr: PullRequestData = {
  ...basePr,
  title: "Merge pull request: Refactor player state management",
  number: 13399,
  state: "closed",
  merged: true,
  checksStatus: "success",
  url: "https://github.com/TeamNewPipe/NewPipe/pull/13399",
};

const closedPr: PullRequestData = {
  ...basePr,
  title: "Revert: Broken Extraction due to API change",
  number: 13345,
  state: "closed",
  merged: false,
  checksStatus: "failure",
  url: "https://github.com/TeamNewPipe/NewPipe/pull/13345",
};

const pendingPr: PullRequestData = {
  ...basePr,
  title: "WIP: Implement new downloader architecture",
  number: 13410,
  state: "open",
  merged: false,
  checksStatus: "pending",
  url: "https://github.com/TeamNewPipe/NewPipe/pull/13410",
};

const baseRepo: GitHubRepoData = {
  name: "NewPipe",
  description:
    "A libre lightweight streaming front-end for Android. NewPipe does not use any Google framework libraries, or the YouTube API. It only parses the website in order to gain the information it needs.",
  url: "https://github.com/TeamNewPipe/NewPipe",
  owner: {
    login: "TeamNewPipe",
    avatarUrl: "https://avatars.githubusercontent.com/u/22159651?v=4",
  },
  stargazersCount: 32450,
  forksCount: 3102,
  language: { name: "Java", color: "#b07219" },
  topics: ["android", "youtube", "streaming", "foss", "privacy"],
  license: "GPL-3.0",
  pushedAt: "2026-04-23T14:22:00Z",
};

const compactRepo: GitHubRepoData = {
  ...baseRepo,
  name: "react",
  description: "A declarative, efficient, and flexible JavaScript library for building user interfaces.",
  url: "https://github.com/facebook/react",
  owner: {
    login: "facebook",
    avatarUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
  },
  stargazersCount: 231800,
  forksCount: 47400,
  language: { name: "TypeScript", color: "#3178c6" },
  topics: ["react", "frontend", "ui", "javascript"],
  license: "MIT",
  pushedAt: "2026-04-24T09:15:00Z",
};

const inlineRepo: GitHubRepoData = {
  ...baseRepo,
  name: "linux",
  description: "Linux kernel source tree",
  url: "https://github.com/torvalds/linux",
  owner: {
    login: "torvalds",
    avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
  },
  stargazersCount: 189000,
  forksCount: 52000,
  language: { name: "C", color: "#555555" },
  topics: ["kernel", "linux", "c"],
  license: "GPL-2.0",
  pushedAt: "2026-04-24T10:00:00Z",
};

const detailedRepo: GitHubRepoData = {
  ...baseRepo,
  name: "vscode",
  description:
    "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
  url: "https://github.com/microsoft/vscode",
  owner: {
    login: "microsoft",
    avatarUrl: "https://avatars.githubusercontent.com/u/6154722?v=4",
  },
  stargazersCount: 164200,
  forksCount: 29800,
  language: { name: "TypeScript", color: "#3178c6" },
  topics: ["editor", "typescript", "electron", "microsoft", "ide"],
  license: "MIT",
  pushedAt: "2026-04-23T22:45:00Z",
};

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const fonts = [
  { name: "System UI", value: "system-ui, -apple-system, sans-serif" },
  { name: "Merriweather", value: "Merriweather, Georgia, serif" },
  { name: "Fira Code", value: "Fira Code, monospace" },
  { name: "Comic Neue", value: "Comic Neue, Comic Sans MS, cursive, sans-serif" },
];

const sectionStyle = (theme: Theme): React.CSSProperties => ({
  marginBottom: "48px",
  padding: "24px",
  borderRadius: "12px",
  backgroundColor: theme === "dark" ? "#161b22" : "#ffffff",
  border: `1px solid ${theme === "dark" ? "#30363d" : "#d0d7de"}`,
});

const sectionTitleStyle = (theme: Theme): React.CSSProperties => ({
  fontSize: "20px",
  fontWeight: 700,
  marginBottom: "20px",
  color: theme === "dark" ? "#c9d1d9" : "#1f2328",
});

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "16px",
};

const labelStyle = (theme: Theme): React.CSSProperties => ({
  fontSize: "12px",
  fontWeight: 600,
  marginBottom: "8px",
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  opacity: 0.7,
  color: theme === "dark" ? "#c9d1d9" : "#1f2328",
});

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */

export default function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const [activeTab, setActiveTab] = useState<Tab>("prs");

  const pageBg = theme === "dark" ? "#0d1117" : "#f6f8fa";
  const textColor = theme === "dark" ? "#c9d1d9" : "#1f2328";

  const tabButtonStyle = (tab: Tab): React.CSSProperties => ({
    padding: "10px 20px",
    borderRadius: "6px 6px 0 0",
    border: "1px solid",
    borderColor: theme === "dark" ? "#30363d" : "#d0d7de",
    borderBottom: "none",
    background: activeTab === tab ? (theme === "dark" ? "#161b22" : "#ffffff") : "transparent",
    color: activeTab === tab ? (theme === "dark" ? "#c9d1d9" : "#1f2328") : "inherit",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    opacity: activeTab === tab ? 1 : 0.6,
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: pageBg,
        color: textColor,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
        padding: "32px 24px",
        transition: "background-color 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
            gap: "16px",
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: "28px" }}>
              react-github-previews
            </h1>
            <p style={{ margin: "4px 0 0", opacity: 0.7, fontSize: "14px" }}>
              v5.0 Dual-Track Showcase — Pull Requests & Repositories
            </p>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setTheme("light")}
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                border: "1px solid",
                borderColor: theme === "light" ? "#0969da" : "#d0d7de",
                background: theme === "light" ? "#0969da" : "transparent",
                color: theme === "light" ? "#fff" : "inherit",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                border: "1px solid",
                borderColor: theme === "dark" ? "#0969da" : "#d0d7de",
                background: theme === "dark" ? "#0969da" : "transparent",
                color: theme === "dark" ? "#fff" : "inherit",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
              }}
            >
              Dark
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "4px", marginBottom: "-1px" }}>
          <button onClick={() => setActiveTab("prs")} style={tabButtonStyle("prs")}>
            Pull Requests
          </button>
          <button onClick={() => setActiveTab("repos")} style={tabButtonStyle("repos")}>
            Repositories
          </button>
        </div>

        {/* Content */}
        <div
          style={{
            border: `1px solid ${theme === "dark" ? "#30363d" : "#d0d7de"}`,
            borderRadius: "0 12px 12px 12px",
            backgroundColor: theme === "dark" ? "#161b22" : "#ffffff",
            padding: "24px",
          }}
        >
          {activeTab === "prs" && (
            <>
              {/* Variants Matrix */}
              <div style={sectionStyle(theme)}>
                <h2 style={sectionTitleStyle(theme)}>Variants Matrix</h2>
                <div style={gridStyle}>
                  <div>
                    <p style={labelStyle(theme)}>Inline</p>
                    <GithubPrPreview prData={basePr} theme={theme} variant="inline" />
                  </div>
                  <div>
                    <p style={labelStyle(theme)}>Compact</p>
                    <GithubPrPreview prData={basePr} theme={theme} variant="compact" />
                  </div>
                  <div style={{ gridColumn: "span 2" }}>
                    <p style={labelStyle(theme)}>Default</p>
                    <GithubPrPreview prData={basePr} theme={theme} variant="default" />
                  </div>
                  <div style={{ gridColumn: "span 2" }}>
                    <p style={labelStyle(theme)}>Detailed</p>
                    <GithubPrPreview prData={basePr} theme={theme} variant="detailed" />
                  </div>
                </div>
              </div>

              {/* Typography Showcase */}
              <div style={sectionStyle(theme)}>
                <h2 style={sectionTitleStyle(theme)}>Typography Showcase</h2>
                {fonts.map((font) => (
                  <div key={font.name} style={{ marginBottom: "24px" }}>
                    <p style={labelStyle(theme)}>{font.name}</p>
                    <GithubPrPreview
                      prData={basePr}
                      theme={theme}
                      variant="default"
                      fontFamily={font.value}
                    />
                  </div>
                ))}
              </div>

              {/* States & Checks */}
              <div style={sectionStyle(theme)}>
                <h2 style={sectionTitleStyle(theme)}>States & Checks</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <GithubPrPreview prData={basePr} theme={theme} variant="default" />
                  <GithubPrPreview prData={mergedPr} theme={theme} variant="default" />
                  <GithubPrPreview prData={closedPr} theme={theme} variant="default" />
                  <GithubPrPreview prData={pendingPr} theme={theme} variant="default" />
                </div>
              </div>

              {/* Skeleton Showcase */}
              <div style={sectionStyle(theme)}>
                <h2 style={sectionTitleStyle(theme)}>Skeleton Loaders</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <p style={labelStyle(theme)}>Inline Skeleton</p>
                    <GithubPrPreview.Skeleton variant="inline" theme={theme} />
                  </div>
                  <div style={gridStyle}>
                    <div>
                      <p style={labelStyle(theme)}>Compact Skeleton</p>
                      <GithubPrPreview.Skeleton variant="compact" theme={theme} />
                    </div>
                    <div>
                      <p style={labelStyle(theme)}>Default Skeleton</p>
                      <GithubPrPreview.Skeleton variant="default" theme={theme} />
                    </div>
                  </div>
                  <div>
                    <p style={labelStyle(theme)}>Detailed Skeleton</p>
                    <GithubPrPreview.Skeleton variant="detailed" theme={theme} />
                  </div>
                </div>
              </div>

              {/* Localization */}
              <div style={sectionStyle(theme)}>
                <h2 style={sectionTitleStyle(theme)}>Localization (es-ES)</h2>
                <GithubPrPreview
                  prData={basePr}
                  theme={theme}
                  variant="default"
                  locale="es-ES"
                />
              </div>
            </>
          )}

          {activeTab === "repos" && (
            <>
              {/* Variants Matrix */}
              <div style={sectionStyle(theme)}>
                <h2 style={sectionTitleStyle(theme)}>Variants Matrix</h2>
                <div style={gridStyle}>
                  <div>
                    <p style={labelStyle(theme)}>Inline</p>
                    <GithubRepoPreview repoData={inlineRepo} theme={theme} variant="inline" />
                  </div>
                  <div>
                    <p style={labelStyle(theme)}>Compact</p>
                    <GithubRepoPreview repoData={compactRepo} theme={theme} variant="compact" />
                  </div>
                  <div style={{ gridColumn: "span 2" }}>
                    <p style={labelStyle(theme)}>Default</p>
                    <GithubRepoPreview repoData={baseRepo} theme={theme} variant="default" />
                  </div>
                  <div style={{ gridColumn: "span 2" }}>
                    <p style={labelStyle(theme)}>Detailed</p>
                    <GithubRepoPreview repoData={detailedRepo} theme={theme} variant="detailed" />
                  </div>
                </div>
              </div>

              {/* Typography Showcase */}
              <div style={sectionStyle(theme)}>
                <h2 style={sectionTitleStyle(theme)}>Typography Showcase</h2>
                {fonts.map((font) => (
                  <div key={font.name} style={{ marginBottom: "24px" }}>
                    <p style={labelStyle(theme)}>{font.name}</p>
                    <GithubRepoPreview
                      repoData={detailedRepo}
                      theme={theme}
                      variant="detailed"
                      fontFamily={font.value}
                    />
                  </div>
                ))}
              </div>

              {/* States & Data */}
              <div style={sectionStyle(theme)}>
                <h2 style={sectionTitleStyle(theme)}>Different Repositories</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <GithubRepoPreview repoData={baseRepo} theme={theme} variant="default" />
                  <GithubRepoPreview repoData={compactRepo} theme={theme} variant="default" />
                  <GithubRepoPreview repoData={detailedRepo} theme={theme} variant="default" />
                  <GithubRepoPreview repoData={inlineRepo} theme={theme} variant="default" />
                </div>
              </div>

              {/* Skeleton Showcase */}
              <div style={sectionStyle(theme)}>
                <h2 style={sectionTitleStyle(theme)}>Skeleton Loaders</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <p style={labelStyle(theme)}>Inline Skeleton</p>
                    <GithubRepoPreview.Skeleton variant="inline" theme={theme} />
                  </div>
                  <div style={gridStyle}>
                    <div>
                      <p style={labelStyle(theme)}>Compact Skeleton</p>
                      <GithubRepoPreview.Skeleton variant="compact" theme={theme} />
                    </div>
                    <div>
                      <p style={labelStyle(theme)}>Default Skeleton</p>
                      <GithubRepoPreview.Skeleton variant="default" theme={theme} />
                    </div>
                  </div>
                  <div>
                    <p style={labelStyle(theme)}>Detailed Skeleton</p>
                    <GithubRepoPreview.Skeleton variant="detailed" theme={theme} />
                  </div>
                </div>
              </div>

              {/* Localization */}
              <div style={sectionStyle(theme)}>
                <h2 style={sectionTitleStyle(theme)}>Localization (es-ES)</h2>
                <GithubRepoPreview
                  repoData={detailedRepo}
                  theme={theme}
                  variant="detailed"
                  locale="es-ES"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
