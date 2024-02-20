import type{
    PropType
} from 'vue';

const IRcButtonProps = {
    /**
     * 按钮内容
     */
    label: {
        type: String,
        required: true
    },
    /**
     * 按钮类型
     */
    type: {
        type: String as PropType<'primary'| 'success'| 'warning'| 'danger'| 'info'| 'text'>
    },
    /**
     * 按钮大小
     */
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
    /**
     * 是否进行节流处理
     */
    isThrottle: {
        type: Boolean
    }
};

export default IRcButtonProps;