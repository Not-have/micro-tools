import type {
    VNode
} from 'vue';
import {
    defineComponent,
    unref
} from 'vue';
import {
    QuestionFilled
} from '@element-plus/icons-vue';
import {
    isUndefined as _isUndefined
} from 'lodash-es';

import {
    Button,
    Tooltip
} from '../../rc';
import {
    useContext
} from '../../hook';

export default defineComponent({
    setup(): () => VNode {
        const context = useContext();
        const disabled = context.disabled;
        const icon = disabled && !_isUndefined(context.disabledTip);

        return (): VNode => {
            const children = <Button {...unref({
                ...context,
                icon: icon ? QuestionFilled : undefined
            })} />;

            if (disabled && _isUndefined(context.disabledTip)) {
                return children;
            }

            return <Tooltip {...{
                tooltip: context.disabled ? context.disabledTip : context.tooltip,
                children
            }} />;
        };
    }
});