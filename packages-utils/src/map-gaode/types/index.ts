export interface IParams {
    /**
     * 申请好的 Web 端开发者 Key，调用 load 时必填
     */
    key: string,
    /**
     * 安全密钥
     */
    securityCode?: string,
    /**
     * 指定要加载的 JS API 的版本，缺省时默认为 2.0
     */
    version?: string,
    /**
     * 需要使用的的插件列表
     */
    plugins?: Array<string>
}