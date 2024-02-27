import type {
    VNode,
    PropType
} from 'vue';
import {
    defineComponent
} from 'vue';
import {
    EIconType,
    ICONFONT_URL
} from 'micro-conf';
import {
    injectIconfont
} from 'micro-util-ts';

import '../style/index.css';
import {
    ECursorType
} from 'micro-ts-enum';

export default defineComponent({
    props: {
        /**
         * icon 样式
         *
         * 根据 injectIconfont 中已经存在的 icon 定义
         */
        type: {
            type: String as PropType<EIconType>,
            required: true
        },
        /**
         * icon 大小
         */
        size: {
            type: Number
        },
        color: {
            type: String
        },
        /**
         * 旋转
         */
        rotate: {
            type: Number,
            default: 0
        },
        /**
         * 转圈
         */
        continuousRotate: {
            type: Boolean,
            default: false
        },
        /**
         * 划过放大
         */
        isHover: {
            type: Boolean,
            default: false
        },
        /**
         * 鼠标形状
         */
        cursor: {
            type: String as PropType<ECursorType>,
            default: ECursorType.DEFAULT
        }
    },
    setup(props, {
        slots
    }): () => VNode {
        const typeArray: string[] = Object.values(EIconType);
        const cursorArray: string[] = Object.values(ECursorType);

        if (!typeArray.includes(props.type)) {
            throw new Error(`The character ${props.type} is not in the type enum.`);
        }

        if (!cursorArray.includes(props.cursor)) {
            throw new Error(`The character ${props.cursor} is not in the cursor enum.`);
        }

        injectIconfont(ICONFONT_URL);

        return (): VNode => <>
            <span style={`--micro-iconfont-rotate: ${props.rotate}deg; font-size: ${props.size}px; color: ${props.color}; cursor: ${props.cursor};`}
                  class={`iconfont micro-iconfont-rotate
                  ${props.type}
                  ${props.continuousRotate ? 'micro-iconfont-continuous-rotate' : ''}
                  ${props.isHover ? 'micro-iconfont-overturn-hover' : ''}`}
            ></span>
            <span class="micro-iconfont-text">
                {/* 将插槽内容转为数组并进行渲染 */}
                {Object.values(slots).map(el => {
                    if (el) {
                        return el();
                    }
                    return;
                })}
            </span>
        </>;
    }
});