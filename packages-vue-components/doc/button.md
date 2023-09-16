# Button

> ## Button
>
> | 属性名      | 说明                      | 类型                                                         |
> | ----------- | ------------------------- | ------------------------------------------------------------ |
> | label       | 按钮内容                  | string                                                       |
> | type        | 按钮类型                  | 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text' |
> | size        | 按钮大小                  | 'large' \| 'small' \| 'default'                              |
> | loading     | 是否为加载中状态          | boolean                                                      |
> | disabled    | 是否为禁止中状态          | boolean                                                      |
> | icon        | 按钮前面的 icon           | VNode \| object                                              |
> | tooltip     | 按钮上方的提示            | string                                                       |
> | disabledTip | 按钮禁止时上方的提示      | string                                                       |
> | confirm     | 弹出框 和 文字提示 的配置 | <abbr title="interface IDialogProps {title?: string; content: string; ok?: string; cancel?: string; byDialog?: boolean; }">IDialogProps</abbr> \| string |
> | onClick     | 点击事件                  | Function                                                     |
>
> ## ButtonOps
>
> | 属性名     | 说明                                              | 类型                                                            |
> | ---------- | ------------------------------------------------- |---------------------------------------------------------------|
> | items      | 按钮集合                                          | [Button](#Button)                                            |
> | type       | 按钮类型 - <abbr title='低优先级！！！'>LP</abbr> | 'primary' \|'success' \|'warning' \|'danger' \|'info' \|'text' |
> | disabled   | 是否为禁止中状态 - LP                             | boolean                                                       |
> | maxVisible | 最多可见个数，其余的收起                          | number                                                        |
> | extra      | 额外的组件，放在按钮列表末尾                      | VNode \|object                                                |
>
