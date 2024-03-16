import {
    css
} from '@emotion/css';

/**
 * 文本超出行就隐藏并且显示省略号
 * @param lineClamp 
 * @returns 
 */
export default function ellipsis(lineClamp: number = 1): string {
    return css`
        word-wrap: break-word;
        overflow: hidden; 
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${lineClamp};
    `;
}