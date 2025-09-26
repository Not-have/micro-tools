interface IDeviceI18n {

  /**
   * 时区
   */
  timeZone: string;

  /**
   * 夏令时
   */
  daylightSaving: boolean;

  /**
   * 数字格式
   */
  numberFormat: string;

  /**
   * 货币格式
   */
  currencyFormat: string;

  /**
   * 日期格式
   */
  dateFormat: string;

  /**
   * 时间格式
   */
  timeFormat: string;
}

/**
 * 🌐 国际化信息
 */
export default function deviceI18n(): IDeviceI18n {
  return {
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    daylightSaving: new Date().getTimezoneOffset() < new Date(2024, 6, 1).getTimezoneOffset(),
    numberFormat: new Intl.NumberFormat().format(1234.56),
    currencyFormat: new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY"
    }).format(1234.56),
    dateFormat: new Intl.DateTimeFormat("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(new Date()),
    timeFormat: new Intl.DateTimeFormat("zh-CN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date())
  };
}
