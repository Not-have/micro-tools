// TODO 这俩名字待优化
export interface IConfirmProps {
    content: string;
    title?: string;
    ok?: string;
    cancel?: string;
    byDialog?: boolean;
}

export interface IConfirm extends Required<IConfirmProps> {
    onClick?: Function
}
