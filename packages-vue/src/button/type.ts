export interface IButtonProps {
    /**
     * 内容
     */
    label: string,
    /**
     * 主要或辅助按钮
     */
    primary?: boolean,
    /**
     * 按钮大小
     */
    size?: 'small' | 'medium' | 'large',
    /**
     * 按钮的背景颜色
     */
    backgroundColor?: string,

}