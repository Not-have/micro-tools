import type {
    PropType,
    VNode
} from 'vue';

export const IRcChildrenProps = {
    children: {
        type: Object as PropType<VNode | String | Object>
    }
};

export const IRcOnClickProps = {
    onClick: {
        type: Function
    }
};