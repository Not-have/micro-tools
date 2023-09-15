/* eslint-disable semi */
/**
 * 弹出框 的配置
 */
export interface IDialogProps {
    /**
     * 只在 Dialog 有效
     */
    title?: string;
    content: string;
    ok?: string;
    cancel?: string;
    /**
     * 为 true 时，弹出 Dialog 对话框
     */
    byDialog?: boolean;
}

export interface IDialogExtendedProps extends IDialogProps {
    onClick?: Function
}

export default interface IRcDialogProps extends IDialogExtendedProps {}