import type{
    PropType
} from 'vue';

const IRcButtonProps = {
    label: {
        type: String,
        required: true
    },
    type: {
        type: String as PropType<'primary'| 'success'| 'warning'| 'danger'| 'info'| 'text'>
    },
    size: {
        type: String as PropType<'small' | 'large'>
    },
    loading: {
        type: Boolean
    },
    disabled: {
        type: Boolean
    },
    /**
     * 定义传入的是一个组件
     */
    icon: {
        type: Object
    },
    onClick: {
        type: Function
    }
};

export default IRcButtonProps;