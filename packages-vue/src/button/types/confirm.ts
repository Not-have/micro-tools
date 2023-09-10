export interface IConfirmType {
    content: string;
    title?: string;
    ok?: string;
    cancel?: string;
    byDialog?: boolean;
}

export interface IConfirmExtendedType extends Required<IConfirmType> {
    onClick?: Function
}
