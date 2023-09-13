/* eslint-disable semi */
export interface IDialogProps {
    /**
     * 只在 Dialog 有效
     */
    title?: string;
    content: string;
    ok?: string;
    cancel?: string;
    byDialog?: boolean;
}

export interface IDialogExtendedProps extends Required<IDialogProps> {
    onClick?: Function
}

export default interface IRcDialogProps extends IDialogExtendedProps {}