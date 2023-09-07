import {
    defineComponent
} from 'vue';
import '@element-plus/theme-chalk/dist/el-button.css';

import {
    ElButton,
    ElTooltip,
    Effect
} from "@element-plus/components";
import {
    Loading
} from "@element-plus/icons-vue"

export default defineComponent({
    props: {
        label: {
            type: String
        },
        tooltip: {
            type: String
        }
    },
    setup(props) {
        return () => {
            if (props.tooltip) {
                return <ElTooltip content={props.tooltip}
                                  placement="top"
                                  effect={Effect.LIGHT}>
                    <ElButton loading>{props.label}</ElButton>
                </ElTooltip>
            }
            return <ElButton>
                <Loading /> {props.label}
            </ElButton>
        }
    }
});