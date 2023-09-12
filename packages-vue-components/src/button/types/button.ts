export type IButtonType = {
    label: string,
    type?: 'primary'| 'success'| 'warning'| 'danger'| 'info'| 'text',
    size?: 'small' | 'large',
    loading?: boolean,
    disabled?: boolean,
    /**
     * 定义传入的是一个组件
     */
    icon?: Object,
    onClick?: Function
}
