import isElement from '../is-element';

type ITransform = {
    offsetX: number,
    offsetY: number
};

interface IDraggable extends ITransform {
    offDraggable: Function;
}

interface IOptions {
    observer?: boolean,
    /**
     * @todo Implement this feature in future releases.
     */
    initTransform?: ITransform;
}

/**
 * 拖动当前传入的元素
 * @param {unknown} el
 * @param {boolean} overflow
 * @param {IOptions} options
 * @return {offsetX: number, offsetY: number} 返回当前元素的位置
 *
 * 注：要设置 html, body {
 *              height: 100%;
 *              width: 100%;
 *              overflow: hidden;
 *          }
 */
export default function draggable(el: Element, overflow?: boolean, options?: IOptions): ITransform | IDraggable {
    if (!isElement(el)) {
        throw new Error('Element(' + el + ')not DOM.');
    }

    const htmlElement = el as HTMLElement;

    // 记录元素的移动
    let transform: ITransform = {
        offsetX: 0,
        offsetY: 0
    };

    const onMousedown = (e: MouseEvent) => {
        htmlElement.style.position = 'relative';

        // clientX 设置或获取鼠标指针位置相对于窗口客户区域的 x 坐标，其中客户区域不包括窗口自身的控件和滚动条
        const downX = e.clientX;
        //设置或获取鼠标指针位置相对于窗口客户区域的 y 坐标，其中客户区域不包括窗口自身的控件和滚动条。
        const downY = e.clientY;


        const {offsetX, offsetY} = transform; // 每次移动只先获取一次

        const targetRect = htmlElement.getBoundingClientRect();
        const targetLeft = targetRect.left; // 矩形左边距离视口左侧的距离
        const targetTop = targetRect.top; // 矩形上边距离视口顶部的距离
        const targetWidth = targetRect.width; // 矩形的宽度
        const targetHeight = targetRect.height; // 矩形的高度

        // 可以考虑使用，指定的 html
        const clientWidth = document.documentElement.clientWidth; // 表示文档的根元素的宽，通常是 <html>
        const clientHeight = document.documentElement.clientHeight; // 表示文档的根元素的高，通常是 <html>

        /**
         * 获取当前鼠标的移动，并同步给 el
         * @param {MouseEvent} e
         */
        const onMousemove = (e: MouseEvent) => {
            let moveX = offsetX + e.clientX - downX,
                moveY = offsetY + e.clientY - downY;

            const minLeft = -targetLeft + offsetX,
                minTop = -targetTop + offsetY,
                maxLeft = clientWidth - targetLeft - targetWidth + offsetX,
                maxTop = clientHeight - targetTop - targetHeight + offsetY;

            // 默认不允许超出 body
            if (!overflow) {
                moveX = Math.min(Math.max(moveX, minLeft), maxLeft);
                moveY = Math.min(Math.max(moveY, minTop), maxTop);
            }

            transform = {
                offsetX: moveX,
                offsetY: moveY
            };

            htmlElement.style.transform = `translate(${transform.offsetX || 0}px, ${transform.offsetY || 0}px)`;
        };


        const onMouseup = () => {
            document.removeEventListener('mousemove', onMousemove);
            document.removeEventListener('mouseup', onMouseup);
        };

        document.addEventListener('mousemove', onMousemove);
        document.addEventListener('mouseup', onMouseup);
    };

    /**
     * 元素内按下鼠标触发
     */
    const onDraggable = () => {
        htmlElement.addEventListener('mousedown', onMousedown);
    };

    /**
     * 移除元素内按下鼠标的触发
     */
    const offDraggable = () => {
        htmlElement.removeEventListener('mousedown', onMousedown);
        htmlElement.style.position = 'static';
    };

    if (options?.observer) {
        onDraggable();

        return {
            offDraggable,
            ...transform
        };
    }

    // 判断元素是否隐藏
    const intersectionObserver = new IntersectionObserver((entries) => {
        // 如果 intersectionRatio 为 0，则目标在视野外，
        // 我们不需要做任何事情。
        if (entries[0].intersectionRatio <= 0) {

            offDraggable();
            return;
        }

        onDraggable();
    });
    // 开始监听
    intersectionObserver.observe(htmlElement);

    return transform;
}