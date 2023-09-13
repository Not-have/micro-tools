import type {
    IDialogProps

} from '../props';

export type IButtonType = {
    /**
     * 按钮内容
     */
    label: string,
    /**
     * 按钮类型
     */
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text',
    /**
     * 按钮大小
     */
    size?: 'small' | 'large',
    loading?: boolean,
    disabled?: boolean,
    /**
     * 定义传入的是一个组件
     */
    icon?: Object,
    /**
     * 按钮上方的提示
     */
    tooltip?: string;
    /**
     * 按钮禁止时上方的提示
     */
    disabledTip?: string;
    /**
     * 弹出框 和 文字提示 的配置
     */
    confirm: IDialogProps | string;
    /**
     * 点击事件
     */
    onClick?: Function
}
