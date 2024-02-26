import type {
    VNode
} from 'vue';
import {
    onMounted,
    defineComponent
} from 'vue';

import {
    ElTable,
    ElTableColumn
} from 'element-plus';
/**
 * 配置项：https://sortablejs.com/options.html
 */
import Sortable from 'sortablejs';
/**
 * 可拖拽的 ElTable
 *
 * draggableChange
 */
export default defineComponent({
    props: {
        /**
         * 拖动改变监听
         */
        draggableChange: {
            type: Function
        },
        /**
         * 数据源
         */
        data: {
            type: Array<any>
        },
        /**
         * 声明 ElTable 原有的属性
         */
        ...ElTable.props
    },
    setup(props, {
        slots
    }): () => VNode {
        const {
            draggableChange,
            data
        } = props;
        onMounted(() => {
            const tbody = document.querySelector('.el-table__body-wrapper tbody');

            new Sortable(tbody, {
                animation: 150,
                onEnd: ({newIndex, oldIndex}) => {
                    const targetRow = data[oldIndex];
                    data.splice(oldIndex, 1);
                    data.splice(newIndex, 0, targetRow);
                    // console.table(data);

                    if (draggableChange) {
                        // 返回修改过的数据
                        draggableChange(data);
                    }
                }
            });
        });
        return (): VNode => <ElTable v-bind="$attrs" data={data}>
            {/* 将插槽内容转为数组并进行渲染 */}
            {Object.values(slots).map(el => {
                if (el) {
                    return el();
                }
                return;
            })}
        </ElTable>;
    }
});

export const Column = ElTableColumn;