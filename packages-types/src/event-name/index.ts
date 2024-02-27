type TEventName =
// 鼠标事件：
    | 'click' // 单击事件
    | 'dblclick' // 双击事件
    | 'mousedown' // 鼠标按下事件
    | 'mouseup' // 鼠标松开事件
    | 'mousemove' // 鼠标移动事件
    | 'mouseenter' // 鼠标进入元素事件
    | 'mouseleave' // 鼠标离开元素事件
    | 'mouseover' // 鼠标悬停在元素上事件
    | 'mouseout' // 鼠标离开元素事件
    | 'contextmenu' // 上下文菜单事件
//键盘事件：
    | 'keydown' //  键盘按下事件
    | 'keyup' // 键盘松开事件
    | 'keypress' // 键盘按键事件
// 表单事件：
    | 'input' // 输入框输入事件
    | 'change' // 表单元素值改变事件
    | 'submit' // 表单提交事件
    | 'reset' // 重置表单事件
// 焦点事件（它也存在在 表单事件 中）：
    | 'focus' // 元素获得焦点事件
    | 'blur' // 元素失去焦点事件
// 窗口和文档事件：
    | 'load' // 文档或资源加载完成事件
    | 'unload' // 文档或资源卸载事件
    | 'resize' // 窗口或框架大小改变事件
    | 'scroll' // 滚动事件
    | 'beforeunload' // 文档即将卸载事件
// 触摸事件：
    | 'touchstart' // 触摸开始事件
    | 'touchmove' // 触摸移动事件
    | 'touchend' // 触摸结束事件
    | 'touchcancel' // 触摸取消事件
// 拖拽事件：
    | 'dragstart' // 拖拽开始事件
    | 'drag' // 拖拽中事件
    | 'dragend' // 拖拽结束事件
    | 'dragenter' // 进入目标元素事件
    | 'dragover' // 在目标元素上悬停事件
    | 'dragleave' // 离开目标元素事件
    | 'drop' // 放置拖拽元素事件
// 媒体事件：
    | 'play' // 媒体播放事件
    | 'pause' // 媒体暂停事件
    | 'ended' // 媒体播放结束事件
    | 'timeupdate'; // 媒体时间更新事件

export default TEventName;