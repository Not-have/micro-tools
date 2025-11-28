import {
  html,
  type TemplateResult
} from "lit";
import {
  styleMap
} from "lit/directives/style-map.js";

import "./index.css";

export interface IButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  onClick
}: IButtonProps): TemplateResult => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";

  return html`
    <button
      type="button"
      class=${[
    "storybook-button", `storybook-button--${size || "medium"}`, mode
  ].join(" ")}
      style=${styleMap({
    backgroundColor
  })}
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};

export default Button;
