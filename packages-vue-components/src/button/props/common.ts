import type {
    PropType,
    VNode
} from 'vue';

export const IRcChildrenProps = {
    children: {
        type: Object as PropType<VNode | Object | String>
    }
};

export const IRcOnClickProps = {
    onClick: {
        type: Function
    }
};