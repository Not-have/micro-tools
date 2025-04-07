import {
  css
} from "@emotion/css";

/**
 * 文本超出行就隐藏并且显示省略号
 * @param lineClamp
 * @returns
 */
export default function ellipsis(lineClamp: number = 1): string {
  return css`
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    -webkit-box-orient: vertical;
    /* stylelint-disable-next-line value-keyword-case */
    -webkit-line-clamp: ${lineClamp};
  `;
}
