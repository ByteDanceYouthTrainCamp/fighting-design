/**
 * MouseEvent 鼠标事件接口
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent
 *
 * 接口的常见事件包括：click、dblclick、mouseup、mousedown
 * 
 * @param evt 事件参数
 * @return { void } 无返回值
 */
export interface HandleMouseEventInterface {
  (evt: MouseEvent): void
}

/**
 * Event 普通事件接口
 * 
 * @param evt 事件参数
 * @return { void } 无返回值
 */
export interface HandleEventInterface {
  (evt: Event): void
}

/**
 * DragEvent 拖放事件接口
 *
 * 主要用在拖动文件上传
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/API/DragEvent
 * 
 * @param evt 事件参数
 * @return { void } 无返回值
 */
export interface HandleDragEventInterface {
  (evt: DragEvent): void
}

/**
 * FocusEvent 焦点事件接口
 *
 * 主要处理获取焦点和失去焦点类型方法
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/API/FocusEvent
 * 
 * @param evt 事件参数
 * @return { void } 无返回值
 */
export interface HandleFocusEventInterface {
  (evt: FocusEvent): void
}

/**
 * WheelEvent 鼠标滚轮事件接口
 *
 * 目前用作 image-preview 组件滚轮放大缩小
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/API/WheelEvent
 * 
 * @param evt 事件参数
 * @return { void } 无返回值
 */
export interface HandleWheelEventInterface {
  (evt: WheelEvent): void
}
