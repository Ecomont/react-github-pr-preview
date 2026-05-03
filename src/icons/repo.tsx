import React from "react";

export const RepoIcon: React.FC<{ size?: number; ariaLabel?: string }> = ({
  size = 16,
  ariaLabel,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden={!ariaLabel}
    aria-label={ariaLabel}
    role={ariaLabel ? "img" : undefined}
  >
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
  </svg>
);

export const StarIcon: React.FC<{ size?: number; ariaLabel?: string }> = ({
  size = 16,
  ariaLabel = "Stars",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden={!ariaLabel}
    aria-label={ariaLabel}
    role={ariaLabel ? "img" : undefined}
  >
    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
  </svg>
);

export const ForkIcon: React.FC<{ size?: number; ariaLabel?: string }> = ({
  size = 16,
  ariaLabel = "Forks",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden={!ariaLabel}
    aria-label={ariaLabel}
    role={ariaLabel ? "img" : undefined}
  >
    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
  </svg>
);

export const ClockIcon: React.FC<{ size?: number; ariaLabel?: string }> = ({
  size = 16,
  ariaLabel,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden={!ariaLabel}
    aria-label={ariaLabel}
    role={ariaLabel ? "img" : undefined}
  >
    <path d="M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm.5 4.75a.75.75 0 0 0-1.5 0v3.5a.75.75 0 0 0 .471.696l2.5 1a.75.75 0 0 0 .557-1.392L8.5 7.742V4.75Z" />
  </svg>
);

export const LicenseIcon: React.FC<{ size?: number; ariaLabel?: string }> = ({
  size = 16,
  ariaLabel = "License",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="currentColor"
    aria-hidden={!ariaLabel}
    aria-label={ariaLabel}
    role={ariaLabel ? "img" : undefined}
  >
    <path d="M8.75.75a.75.75 0 0 0-1.5 0V2H5.5A1.75 1.75 0 0 0 3.75 3.75V10c0 .967.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0 0 12.75 10V3.75A1.75 1.75 0 0 0 11 2H8.75V.75ZM6.5 4a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
    <path d="M4.25 12.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5Z" />
  </svg>
);
