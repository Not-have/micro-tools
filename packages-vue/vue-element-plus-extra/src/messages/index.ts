import {
  ElMessage,
  type MessageOptions,
  type MessageHandler
} from "element-plus";

/**
 * ElMessage 单例类
 * 确保全局每次只能弹出一个消息
 */
class MessageController {
  private currentMessage: MessageHandler | null = null;

  /**
   * 关闭所有现有消息
   */
  private closeAllMessages(): void {

    // 关闭当前消息
    if (this.currentMessage) {
      this.currentMessage.close();
      this.currentMessage = null;
    }

    // 使用 ElMessage 的 closeAll 方法关闭所有消息
    ElMessage.closeAll();
  }

  /**
   * 显示消息
   * @param options 消息配置选项
   * @returns MessageHandler
   */
  show(options: string | MessageOptions): MessageHandler {

    // 若有正在显示的消息，则忽略新的消息请求，直接返回当前实例
    if (this.currentMessage) {
      return this.currentMessage;
    }

    // 创建新的消息
    this.currentMessage = ElMessage(options);

    // 监听消息关闭事件，确保在关闭时清空当前实例
    const originalClose = this.currentMessage.close;

    this.currentMessage.close = () => {
      this.currentMessage = null;
      originalClose();
    };

    return this.currentMessage;
  }

  /**
   * 显示成功消息
   * @param message 消息内容
   * @param options 额外配置选项
   */
  success(message: string, options?: Omit<MessageOptions, "message" | "type">): MessageHandler {
    return this.show({
      message,
      type: "success",
      ...options
    });
  }

  /**
   * 显示警告消息
   * @param message 消息内容
   * @param options 额外配置选项
   */
  warning(message: string, options?: Omit<MessageOptions, "message" | "type">): MessageHandler {
    return this.show({
      message,
      type: "warning",
      ...options
    });
  }

  /**
   * 显示错误消息
   * @param message 消息内容
   * @param options 额外配置选项
   */
  error(message: string, options?: Omit<MessageOptions, "message" | "type">): MessageHandler {
    return this.show({
      message,
      type: "error",
      ...options
    });
  }

  /**
   * 显示信息消息
   * @param message 消息内容
   * @param options 额外配置选项
   */
  info(message: string, options?: Omit<MessageOptions, "message" | "type">): MessageHandler {
    return this.show({
      message,
      type: "info",
      ...options
    });
  }

  /**
   * 手动关闭当前消息
   */
  close(): void {
    this.closeAllMessages();
  }

  /**
   * 检查是否有消息正在显示
   */
  isShowing(): boolean {
    return this.currentMessage !== null;
  }
}

// 创建单例实例
const messageController = new MessageController();

// 导出单例实例
export default messageController;

// 也可以导出类，以便在需要时创建多个实例
export {
  MessageController
};
