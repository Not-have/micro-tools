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

export default defineComponent({
    props: {
        type: {
            type: String as PropType<EIconType>,
            required: true
        },
        size: {
            type: Number
        },
        color: {
            type: String
        },
        rotate: {
            type: Number,
            default: 0
        },
        continuousRotate: {
            type: Boolean,
            default: false
        }
    },
    setup(props, {
        slots
    }): () => VNode {
        injectIconfont(ICONFONT_URL);

        return (): VNode => <>
            <span style={`--micro-icon-rotate: ${props.rotate}deg; font-size: ${props.size}px; color: ${props.color};`} class={`iconfont micro-iconfont-rotate ${props.type} ${props.continuousRotate ? 'micro-iconfont-continuous-rotate' : ''}`}></span>
            {/* 将插槽内容转为数组并进行渲染 */}
            {Object.values(slots).map(el => {
                if (el) {
                    return el();
                }
                return; 
            })}
        </>;
    }
});