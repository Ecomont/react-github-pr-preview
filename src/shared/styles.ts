/* ------------------------------------------------------------------ */
/*  Shared helper utilities (zero-deps)                                */
/* ------------------------------------------------------------------ */

export function getContrastColor(hexColor: string): string {
  const hex = hexColor.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#1f2328" : "#ffffff";
}

export function truncateText(text: string, maxLength: number): string {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "…";
}

export function getRelativeTime(
  input: string | Date,
  locale: string,
  prefixMap: Record<string, string>,
  defaultPrefix: string
): string {
  const date = typeof input === "string" ? new Date(input) : input;
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();

  if (diffMs < 0 || diffMs < 60000) {
    return date.toLocaleDateString(locale);
  }

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  let value = 0;
  let unit: Intl.RelativeTimeFormatUnit = "second";

  if (years > 0) {
    value = years;
    unit = "year";
  } else if (months > 0) {
    value = months;
    unit = "month";
  } else if (days > 0) {
    value = days;
    unit = "day";
  } else if (hours > 0) {
    value = hours;
    unit = "hour";
  } else if (minutes > 0) {
    value = minutes;
    unit = "minute";
  } else {
    value = seconds;
    unit = "second";
  }

  const relative = rtf.format(-value, unit);
  const lang = locale.split("-")[0].toLowerCase();
  const prefix = prefixMap[lang] || defaultPrefix;
  return `${prefix} ${relative}`;
}
