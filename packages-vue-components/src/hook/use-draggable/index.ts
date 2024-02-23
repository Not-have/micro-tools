import type { Ref } from 'vue';
import { onBeforeUnmount, onMounted, watchEffect } from 'vue';

/**
 * 拖拽功能
 * @param {Ref<HTMLElement>} targetRef 一个指向需要被拖拽的 DOM 元素的引用
 * @param {Ref<HTMLElement | undefined>} dragRef  一个指向用于触发拖拽的 DOM 元素的引用
 *
 * 这个元素是 targetRef 的子元素
 *  `<div ref="targetRef">
 *      <div ref="dragRef">触发元素</div>
 *  </div>`
 * @param {boolean} overflow 一个计算属性，表示是否允许拖拽元素超出边界
 *
 * 记得给拖动元素设置 cursor: move;
 */
export default function useDraggable(
    targetRef: Ref<HTMLElement>,
    dragRef?: Ref<HTMLElement | undefined>,
    overflow?: boolean
): void {
    console.log(targetRef.value);

    /**
     * 记录之前的元素位置
     *
     * 但是估计要记录两个位置了（增加了平级关系的存在）
     */
    let transform = {
        offsetX: 0,
        offsetY: 0
    };

    const htmlElement = document.documentElement; // 表示文档的根元素，通常是 <html>

    /**
     * 移动处理
     * @param {MouseEvent} e 移动元素
     * 抽离出来，根据元素，返回坐标
     */
    function onMousedown(this: Element, e: MouseEvent) {
        // clientX 设置或获取鼠标指针位置相对于窗口客户区域的 x 坐标，其中客户区域不包括窗口自身的控件和滚动条
        const downX = e.clientX;
        //设置或获取鼠标指针位置相对于窗口客户区域的 y 坐标，其中客户区域不包括窗口自身的控件和滚动条。
        const downY = e.clientY;

        const {offsetX, offsetY} = transform;

        const targetRect = this.getBoundingClientRect();

        const targetLeft = targetRect.left; // 矩形左边距离视口左侧的距离
        const targetTop = targetRect.top; // 矩形上边距离视口顶部的距离
        const targetWidth = targetRect.width; // 矩形的宽度
        const targetHeight = targetRect.height; // 矩形的高度

        const clientWidth = htmlElement.clientWidth; // 表示文档的根元素的宽，通常是 <html>
        const clientHeight = htmlElement.clientHeight; // 表示文档的根元素的高，通常是 <html>

        /**
         * 让鼠标到边界的时候，这个元素就不能在给外移了
         */
        const onMousemove = (e: MouseEvent) => {
            let moveX = offsetX + e.clientX - downX;
            let moveY = offsetY + e.clientY - downY;

            const minLeft = -targetLeft + offsetX;
            const minTop = -targetTop + offsetY;

            const maxLeft = clientWidth - targetLeft - targetWidth + offsetX;
            const maxTop = clientHeight - targetTop - targetHeight + offsetY;

            /**
             * 不允许超出边界
             * 没想好怎么实现啊 😫
             */
            if (!overflow) {
                moveX = Math.min(Math.max(moveX, minLeft), maxLeft);
                moveY = Math.min(Math.max(moveY, minTop), maxTop);
            }

            transform = {
                offsetX: moveX,
                offsetY: moveY
            };

            if (targetRef.value) {
                targetRef.value.style.transform = `translate(${transform.offsetX}px, ${transform.offsetY}px)`;
            }
        };

        // 松开鼠标键时移除下面添加的方法
        const onMouseup = () => {
            document.removeEventListener('mousemove', onMousemove);
            document.removeEventListener('mouseup', onMouseup);
        };

        // 当鼠标在文档内移动时，执行名为 onMousemove 的函数
        document.addEventListener('mousemove', onMousemove);
        // 当鼠标在文档内释放（松开鼠标键）时，执行名为 onMouseup 的函数
        document.addEventListener('mouseup', onMouseup);
    }

    /**
     * 在这监听移动
     */
    const onDraggable = () => {
        if (dragRef && dragRef.value && targetRef.value) {
            dragRef.value.addEventListener('mousedown', onMousedown);
            return;
        }
        if (targetRef.value) {
            targetRef.value.addEventListener('mousedown', onMousedown);
        }
    };

    /**
     * 移除元素的监听
     */
    const offDraggable = () => {
        if (dragRef && dragRef.value && targetRef.value) {
            dragRef.value.removeEventListener('mousedown', onMousedown);
        }
        targetRef.value.removeEventListener('mousedown', onMousedown);
    };

    /**
     * 监听 targetRef、dragRef
     * 1、如果只有 targetRef 就只移动他
     * 2、targetRef、dragRef 都存在，让其一块移动，但是只有在拖拽 dragRef 时才能移动
     */
    onMounted(() => {
        watchEffect(() => {
            if (targetRef.value) {
                onDraggable();
            }
        });
    });

    onBeforeUnmount(() => {
        offDraggable();
    });
}