import { baseStyles } from "./styles/base";
import { glassStyles } from "./styles/glass";
import { gradientStyles } from "./styles/gradient";
import { combinedStyles } from "./styles/combined";
import { neumorphicStyles } from "./styles/neumorphic";
import { neobrutalismStyles } from "./styles/neobrutalism";
import { terminalStyles } from "./styles/terminal";
import { minimalistStyles } from "./styles/minimalist";
import { retroStyles } from "./styles/retro";
import { handDrawnStyles } from "./styles/handDrawn";
import { claymorphismStyles } from "./styles/claymorphism";

const STYLE_ID = "react-github-pr-preview-styles";

export function injectPrStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = [
    baseStyles,
    glassStyles,
    gradientStyles,
    combinedStyles,
    neumorphicStyles,
    neobrutalismStyles,
    terminalStyles,
    minimalistStyles,
    retroStyles,
    handDrawnStyles,
    claymorphismStyles,
  ].join("\n");

  document.head.appendChild(style);
}
