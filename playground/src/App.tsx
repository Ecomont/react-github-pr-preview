import { useState } from "react";
import {
  GithubPrPreview,
  GithubRepoPreview,
  type PullRequestData,
  type GitHubRepoData,
} from "react-github-pr-preview";

type Theme = "light" | "dark" | "neobrutalism" | "neobrutalism-dark" | "terminal" | "minimalist" | "minimalist-dark" | "retro" | "hand-drawn" | "hand-drawn-dark" | "claymorphism" | "claymorphism-dark";
type PlaygroundSelection = Theme | "glass" | "glass-dark" | "gradient" | "gradient-dark" | "neumorphic" | "neumorphic-dark";
type Tab = "prs" | "repos";

const DARK_THEMES: Theme[] = ["dark", "terminal", "neobrutalism-dark", "minimalist-dark", "hand-drawn-dark", "claymorphism-dark"];
const THEME_OPTIONS: { label: string; value: PlaygroundSelection }[] = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "Neobrutalism", value: "neobrutalism" },
  { label: "Neobrutalism Dark", value: "neobrutalism-dark" },
  { label: "Terminal", value: "terminal" },
  { label: "Minimalist", value: "minimalist" },
  { label: "Minimalist Dark", value: "minimalist-dark" },
  { label: "Retro", value: "retro" },
  { label: "Hand-drawn", value: "hand-drawn" },
  { label: "Hand-drawn Dark", value: "hand-drawn-dark" },
  { label: "Claymorphism", value: "claymorphism" },
  { label: "Claymorphism Dark", value: "claymorphism-dark" },
  { label: "Glass", value: "glass" },
  { label: "Glass Dark", value: "glass-dark" },
  { label: "Gradient", value: "gradient" },
  { label: "Gradient Dark", value: "gradient-dark" },
  { label: "Neumorphic", value: "neumorphic" },
  { label: "Neumorphic Dark", value: "neumorphic-dark" },
];

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
  { name: "Atkinson Hyperlegible", value: "Atkinson Hyperlegible, sans-serif", accessible: true },
  { name: "Merriweather", value: "Merriweather, Georgia, serif" },
  { name: "Fira Code", value: "Fira Code, monospace" },
  { name: "Comic Neue", value: "Comic Neue, Comic Sans MS, cursive, sans-serif" },
];

const meshGradient = (theme: Theme): string =>
  theme === "dark"
    ? `
      radial-gradient(at 0% 0%, hsla(253,60%,28%,0.5) 0px, transparent 50%),
      radial-gradient(at 50% 0%, hsla(225,55%,25%,0.45) 0px, transparent 50%),
      radial-gradient(at 100% 0%, hsla(339,60%,28%,0.5) 0px, transparent 50%),
      radial-gradient(at 0% 50%, hsla(220,55%,26%,0.4) 0px, transparent 50%),
      radial-gradient(at 100% 50%, hsla(260,50%,27%,0.45) 0px, transparent 50%),
      radial-gradient(at 0% 100%, hsla(280,55%,28%,0.45) 0px, transparent 50%),
      radial-gradient(at 100% 100%, hsla(200,60%,25%,0.4) 0px, transparent 50%)
    `
    : `
      radial-gradient(at 0% 0%, hsla(253,85%,78%,0.35) 0px, transparent 50%),
      radial-gradient(at 50% 0%, hsla(225,78%,72%,0.3) 0px, transparent 50%),
      radial-gradient(at 100% 0%, hsla(339,85%,75%,0.35) 0px, transparent 50%),
      radial-gradient(at 0% 50%, hsla(220,78%,70%,0.25) 0px, transparent 50%),
      radial-gradient(at 100% 50%, hsla(260,70%,72%,0.3) 0px, transparent 50%),
      radial-gradient(at 0% 100%, hsla(280,75%,72%,0.3) 0px, transparent 50%),
      radial-gradient(at 100% 100%, hsla(200,80%,70%,0.25) 0px, transparent 50%)
    `;

const sectionStyle = (theme: Theme, isGlass?: boolean): React.CSSProperties => ({
  marginBottom: "48px",
  padding: "24px",
  borderRadius: "24px",
  background:
    isGlass && !DARK_THEMES.includes(theme)
      ? "rgba(255,255,255,0.06)"
      : DARK_THEMES.includes(theme)
        ? "rgba(13,17,23,0.35)"
        : "rgba(255,255,255,0.35)",
  border: `1px solid ${DARK_THEMES.includes(theme) ? "rgba(255,255,255,0.08)" : isGlass ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.1)"}`,
  boxShadow:
    DARK_THEMES.includes(theme)
      ? "0 8px 32px 0 rgba(0,0,0,0.2)"
      : "0 8px 32px 0 rgba(0,0,0,0.06)",
});

const sectionTitleStyle = (theme: Theme): React.CSSProperties => ({
  fontSize: "20px",
  fontWeight: 700,
  marginBottom: "20px",
  color: DARK_THEMES.includes(theme) ? "#c9d1d9" : "#1f2328",
});

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "16px",
};

const labelStyle = (theme: Theme): React.CSSProperties => ({
  fontSize: "11px",
  fontWeight: 600,
  marginBottom: "8px",
  textTransform: "uppercase",
  letterSpacing: "0.6px",
  opacity: 0.85,
  color: DARK_THEMES.includes(theme) ? "#c9d1d9" : "#1f2328",
  display: "inline-block",
  padding: "4px 10px",
  borderRadius: "9999px",
  background: DARK_THEMES.includes(theme) ? "rgba(13,17,23,0.5)" : "rgba(255,255,255,0.6)",
});

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */

export default function App() {
  const [selection, setSelection] = useState<PlaygroundSelection>("light");
  const [activeTab, setActiveTab] = useState<Tab>("prs");

  const theme: Theme =
    selection === "glass-dark" || selection === "gradient-dark" || selection === "neumorphic-dark"
      ? "dark"
      : ["glass", "gradient", "neumorphic"].includes(selection)
        ? "light"
        : (selection as Theme);
  const glass = selection === "glass" || selection === "glass-dark";
  const gradient = selection === "gradient" || selection === "gradient-dark";
  const neumorphic = selection === "neumorphic" || selection === "neumorphic-dark";

  const textColor =
    DARK_THEMES.includes(theme)
      ? "#c9d1d9"
      : theme === "retro" || theme === "hand-drawn"
        ? "#000000"
        : "#1f2328";

  const tabButtonStyle = (tab: Tab): React.CSSProperties => ({
    padding: "10px 20px",
    borderRadius: "6px 6px 0 0",
    border: "1px solid",
    borderColor: DARK_THEMES.includes(theme) ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.5)",
    borderBottom: "none",
    background:
      activeTab === tab
        ? DARK_THEMES.includes(theme)
          ? "rgba(13,17,23,0.45)"
          : "rgba(255,255,255,0.45)"
        : "transparent",
    color: activeTab === tab ? textColor : "inherit",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    opacity: activeTab === tab ? 1 : 0.6,
    backdropFilter: activeTab === tab ? "blur(12px) saturate(150%)" : "none",
    WebkitBackdropFilter: activeTab === tab ? "blur(12px) saturate(150%)" : "none",
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor:
          selection === "glass" ? "#dbeafe" :
          selection === "neumorphic" ? "#d1d9e6" :
          selection === "neumorphic-dark" ? "#1a202c" :
          selection === "claymorphism" ? "#faf3f0" :
          selection === "claymorphism-dark" ? "#1e1b2e" :
          theme === "light" ? "#f0f2f5" :
          theme === "dark" ? "#0d1117" :
          theme === "minimalist-dark" ? "#000000" :
          theme === "neobrutalism" ? "#fdfd96" :
          theme === "neobrutalism-dark" ? "#000000" :
          theme === "terminal" ? "#000000" :
          theme === "minimalist" ? "#ffffff" :
          theme === "hand-drawn" ? "#faf9f6" :
          theme === "hand-drawn-dark" ? "#1e1e1e" :
          theme === "claymorphism" ? "#f1f5f9" :
          theme === "claymorphism-dark" ? "#0f172a" :
          "#d4d4d4",
        backgroundImage:
          selection === "glass"
            ? `
              radial-gradient(at 0% 0%, hsla(253,90%,70%,0.45) 0px, transparent 50%),
              radial-gradient(at 50% 0%, hsla(190,90%,65%,0.4) 0px, transparent 50%),
              radial-gradient(at 100% 0%, hsla(339,90%,68%,0.45) 0px, transparent 50%),
              radial-gradient(at 0% 50%, hsla(220,85%,65%,0.35) 0px, transparent 50%),
              radial-gradient(at 100% 50%, hsla(260,80%,68%,0.4) 0px, transparent 50%),
              radial-gradient(at 0% 100%, hsla(280,85%,68%,0.4) 0px, transparent 50%),
              radial-gradient(at 100% 100%, hsla(200,90%,65%,0.35) 0px, transparent 50%)
            `
            : selection === "neumorphic"
              ? `
                radial-gradient(at 0% 0%, hsla(220,20%,85%,0.5) 0px, transparent 50%),
                radial-gradient(at 100% 100%, hsla(220,20%,80%,0.4) 0px, transparent 50%)
              `
              : selection === "neumorphic-dark"
                ? `
                  radial-gradient(at 0% 0%, hsla(220,15%,25%,0.5) 0px, transparent 50%),
                  radial-gradient(at 100% 100%, hsla(220,15%,20%,0.4) 0px, transparent 50%)
                `
                : selection === "claymorphism"
                  ? `
                    radial-gradient(at 0% 0%, hsla(340,80%,85%,0.35) 0px, transparent 50%),
                    radial-gradient(at 50% 50%, hsla(30,90%,88%,0.3) 0px, transparent 50%),
                    radial-gradient(at 100% 100%, hsla(200,80%,85%,0.35) 0px, transparent 50%)
                  `
                  : selection === "claymorphism-dark"
                    ? `
                      radial-gradient(at 0% 0%, hsla(280,60%,30%,0.35) 0px, transparent 50%),
                      radial-gradient(at 50% 50%, hsla(340,50%,25%,0.3) 0px, transparent 50%),
                      radial-gradient(at 100% 100%, hsla(220,60%,30%,0.35) 0px, transparent 50%)
                    `
                    : theme === "light" || theme === "dark" ? meshGradient(theme) : "none",
        color: textColor,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',
        padding: "32px 24px",
        transition: "background-color 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating ambient orbs */}
      <div
        style={{
          position: "fixed",
          top: "-10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            theme === "dark"
              ? "hsla(260, 60%, 35%, 0.35)"
              : "hsla(260, 85%, 78%, 0.3)",
          filter: "blur(120px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          bottom: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            DARK_THEMES.includes(theme)
              ? "hsla(339, 60%, 32%, 0.3)"
              : "hsla(339, 85%, 75%, 0.25)",
          filter: "blur(140px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "40%",
          right: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            DARK_THEMES.includes(theme)
              ? "hsla(200, 60%, 28%, 0.25)"
              : "hsla(200, 80%, 70%, 0.2)",
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "32px",
            gap: "16px",
            padding: "20px 24px",
            borderRadius: "24px",
            background: DARK_THEMES.includes(theme) ? "rgba(13,17,23,0.55)" : "rgba(255,255,255,0.55)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: `1px solid ${DARK_THEMES.includes(theme) ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.5)"}`,
            boxShadow:
              DARK_THEMES.includes(theme)
                ? "0 8px 32px 0 rgba(0,0,0,0.2)"
                : "0 8px 32px 0 rgba(0,0,0,0.06)",
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: "28px" }}>react-github-previews</h1>
            <p style={{ margin: "4px 0 0", opacity: 0.7, fontSize: "14px" }}>
              v5.0 Dual-Track Showcase — Pull Requests &amp; Repositories
            </p>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <select
              value={selection}
              onChange={(e) => setSelection(e.target.value as PlaygroundSelection)}
              style={{
                padding: "8px 16px",
                borderRadius: "9999px",
                border: `1px solid ${DARK_THEMES.includes(theme) ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)"}`,
                background: DARK_THEMES.includes(theme) ? "rgba(13,17,23,0.55)" : "rgba(255,255,255,0.55)",
                color: textColor,
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 600,
                backdropFilter: "blur(12px) saturate(150%)",
                WebkitBackdropFilter: "blur(12px) saturate(150%)",
                outline: "none",
              }}
            >
              {THEME_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "4px", marginBottom: "-1px", padding: "0 4px" }}>
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
            border: `1px solid ${DARK_THEMES.includes(theme) ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.5)"}`,
            borderRadius: "0 24px 24px 24px",
            background: DARK_THEMES.includes(theme) ? "rgba(13,17,23,0.35)" : "rgba(255,255,255,0.35)",
            backdropFilter: "blur(12px) saturate(150%)",
            WebkitBackdropFilter: "blur(12px) saturate(150%)",
            padding: "32px",
          }}
        >
          {activeTab === "prs" && (
            <>
              {/* Variants Matrix */}
              <div style={sectionStyle(theme, glass)}>
                <h2 style={sectionTitleStyle(theme)}>Variants Matrix</h2>
                <div style={gridStyle}>
                  <div>
                    <p style={labelStyle(theme)}>Inline</p>
                    <GithubPrPreview prData={basePr} theme={theme} variant="inline" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                  </div>
                  <div>
                    <p style={labelStyle(theme)}>Compact</p>
                    <GithubPrPreview prData={basePr} theme={theme} variant="compact" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                  </div>
                  <div style={{ gridColumn: "span 2" }}>
                    <p style={labelStyle(theme)}>Default</p>
                    <GithubPrPreview prData={basePr} theme={theme} variant="default" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                  </div>
                  <div style={{ gridColumn: "span 2" }}>
                    <p style={labelStyle(theme)}>Detailed</p>
                    <GithubPrPreview prData={basePr} theme={theme} variant="detailed" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                  </div>
                </div>
              </div>

              {/* Typography Showcase */}
              <div style={sectionStyle(theme, glass)}>
                <h2 style={sectionTitleStyle(theme)}>Typography Showcase</h2>
                {fonts.map((font) => (
                  <div key={font.name} style={{ marginBottom: "24px" }}>
                    <p style={labelStyle(theme)}>
                      {font.name}
                      {font.accessible && (
                        <span style={{
                          marginLeft: "8px",
                          fontSize: "10px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          color: DARK_THEMES.includes(theme) ? "#39ff14" : "#1a7f37",
                          border: `1px solid ${DARK_THEMES.includes(theme) ? "#39ff14" : "#1a7f37"}`,
                          padding: "2px 6px",
                          borderRadius: "4px",
                          verticalAlign: "middle",
                        }}>
                          Accessible
                        </span>
                      )}
                    </p>
                    <GithubPrPreview
                      prData={basePr}
                      theme={theme}
                      variant="default" glass={glass} gradient={gradient} neumorphic={neumorphic}
                      fontFamily={font.value}
                    />
                  </div>
                ))}
              </div>

              {/* States & Checks */}
              <div style={sectionStyle(theme, glass)}>
                <h2 style={sectionTitleStyle(theme)}>States &amp; Checks</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <GithubPrPreview prData={basePr} theme={theme} variant="default" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                  <GithubPrPreview prData={mergedPr} theme={theme} variant="default" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                  <GithubPrPreview prData={closedPr} theme={theme} variant="default" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                  <GithubPrPreview prData={pendingPr} theme={theme} variant="default" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                </div>
              </div>

              {/* Skeleton Showcase */}
              <div style={sectionStyle(theme, glass)}>
                <h2 style={sectionTitleStyle(theme)}>Skeleton Loaders</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <p style={labelStyle(theme)}>Inline Skeleton</p>
                    <GithubPrPreview.Skeleton variant="inline" glass={glass} gradient={gradient} neumorphic={neumorphic} theme={theme} />
                  </div>
                  <div style={gridStyle}>
                    <div>
                      <p style={labelStyle(theme)}>Compact Skeleton</p>
                      <GithubPrPreview.Skeleton variant="compact" glass={glass} gradient={gradient} neumorphic={neumorphic} theme={theme} />
                    </div>
                    <div>
                      <p style={labelStyle(theme)}>Default Skeleton</p>
                      <GithubPrPreview.Skeleton variant="default" glass={glass} gradient={gradient} neumorphic={neumorphic} theme={theme} />
                    </div>
                  </div>
                  <div>
                    <p style={labelStyle(theme)}>Detailed Skeleton</p>
                    <GithubPrPreview.Skeleton variant="detailed" glass={glass} gradient={gradient} neumorphic={neumorphic} theme={theme} />
                  </div>
                </div>
              </div>

              {/* Localization */}
              <div style={sectionStyle(theme, glass)}>
                <h2 style={sectionTitleStyle(theme)}>Localization (es-ES)</h2>
                <GithubPrPreview
                  prData={basePr}
                  theme={theme}
                  variant="default" glass={glass} gradient={gradient} neumorphic={neumorphic}
                  locale="es-ES"
                />
              </div>
            </>
          )}

          {activeTab === "repos" && (
            <>
              {/* Variants Matrix */}
              <div style={sectionStyle(theme, glass)}>
                <h2 style={sectionTitleStyle(theme)}>Variants Matrix</h2>
                <div style={gridStyle}>
                  <div>
                    <p style={labelStyle(theme)}>Inline</p>
                    <GithubRepoPreview repoData={inlineRepo} theme={theme} variant="inline" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                  </div>
                  <div>
                    <p style={labelStyle(theme)}>Compact</p>
                    <GithubRepoPreview repoData={compactRepo} theme={theme} variant="compact" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                  </div>
                  <div style={{ gridColumn: "span 2" }}>
                    <p style={labelStyle(theme)}>Default</p>
                    <GithubRepoPreview repoData={baseRepo} theme={theme} variant="default" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                  </div>
                  <div style={{ gridColumn: "span 2" }}>
                    <p style={labelStyle(theme)}>Detailed</p>
                    <GithubRepoPreview repoData={detailedRepo} theme={theme} variant="detailed" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                  </div>
                </div>
              </div>

              {/* Typography Showcase */}
              <div style={sectionStyle(theme, glass)}>
                <h2 style={sectionTitleStyle(theme)}>Typography Showcase</h2>
                {fonts.map((font) => (
                  <div key={font.name} style={{ marginBottom: "24px" }}>
                    <p style={labelStyle(theme)}>
                      {font.name}
                      {font.accessible && (
                        <span style={{
                          marginLeft: "8px",
                          fontSize: "10px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          color: DARK_THEMES.includes(theme) ? "#39ff14" : "#1a7f37",
                          border: `1px solid ${DARK_THEMES.includes(theme) ? "#39ff14" : "#1a7f37"}`,
                          padding: "2px 6px",
                          borderRadius: "4px",
                          verticalAlign: "middle",
                        }}>
                          Accessible
                        </span>
                      )}
                    </p>
                    <GithubRepoPreview
                      repoData={detailedRepo}
                      theme={theme}
                      variant="detailed" glass={glass} gradient={gradient} neumorphic={neumorphic}
                      fontFamily={font.value}
                    />
                  </div>
                ))}
              </div>

              {/* States & Data */}
              <div style={sectionStyle(theme, glass)}>
                <h2 style={sectionTitleStyle(theme)}>Different Repositories</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <GithubRepoPreview repoData={baseRepo} theme={theme} variant="default" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                  <GithubRepoPreview repoData={compactRepo} theme={theme} variant="default" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                  <GithubRepoPreview repoData={detailedRepo} theme={theme} variant="default" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                  <GithubRepoPreview repoData={inlineRepo} theme={theme} variant="default" glass={glass} gradient={gradient} neumorphic={neumorphic} />
                </div>
              </div>

              {/* Skeleton Showcase */}
              <div style={sectionStyle(theme, glass)}>
                <h2 style={sectionTitleStyle(theme)}>Skeleton Loaders</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div>
                    <p style={labelStyle(theme)}>Inline Skeleton</p>
                    <GithubRepoPreview.Skeleton variant="inline" glass={glass} gradient={gradient} neumorphic={neumorphic} theme={theme} />
                  </div>
                  <div style={gridStyle}>
                    <div>
                      <p style={labelStyle(theme)}>Compact Skeleton</p>
                      <GithubRepoPreview.Skeleton variant="compact" glass={glass} gradient={gradient} neumorphic={neumorphic} theme={theme} />
                    </div>
                    <div>
                      <p style={labelStyle(theme)}>Default Skeleton</p>
                      <GithubRepoPreview.Skeleton variant="default" glass={glass} gradient={gradient} neumorphic={neumorphic} theme={theme} />
                    </div>
                  </div>
                  <div>
                    <p style={labelStyle(theme)}>Detailed Skeleton</p>
                    <GithubRepoPreview.Skeleton variant="detailed" glass={glass} gradient={gradient} neumorphic={neumorphic} theme={theme} />
                  </div>
                </div>
              </div>

              {/* Localization */}
              <div style={sectionStyle(theme, glass)}>
                <h2 style={sectionTitleStyle(theme)}>Localization (es-ES)</h2>
                <GithubRepoPreview
                  repoData={detailedRepo}
                  theme={theme}
                  variant="detailed" glass={glass} gradient={gradient} neumorphic={neumorphic}
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
