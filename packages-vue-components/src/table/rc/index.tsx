import type {
    PropType,
    VNode,
    ExtractPropTypes
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

type ElTableProps = ExtractPropTypes<typeof ElTable>;
/**
 * 可拖拽的 ElTable
 *
 * draggableChange
 */
export default defineComponent({
    props: {
        /**
         * 拖动改变监听
         *
         * 只有传入的时候，才可以拖拽
         */
        draggableChange: {
            type: Function
        },
        /**
         * 数据源
         */
        data: {
            type: Array as PropType<any[]>
        },
        /**
         * 声明 ElTable 原有的属性
         */
        ...ElTable.props as ElTableProps
    },
    setup(props, {
        slots
    }): () => VNode {
        const {
                draggableChange,
                data,
                ...params
            } = props,
            _draggableChange = (value: any) => {
                const tbody = document.querySelector('.el-table__body-wrapper tbody');

                if (!tbody) {
                    return new Error('Use \'document.querySelector(\'.el-table__body-wrapper tbody\')\' no element obtained');
                }

                const tableData = value;

                new Sortable(tbody as HTMLElement, {
                    animation: 150,
                    onEnd: ({newIndex, oldIndex}) => {
                        const targetRow = tableData[oldIndex || 0];
                        tableData.splice(oldIndex, 1);
                        tableData.splice(newIndex, 0, targetRow);
                        // console.table(data);
                        draggableChange!(tableData);
                    }
                });
            };
        onMounted(() => {
            if (draggableChange) {
                _draggableChange(data);
            }
        });

        return (): VNode => <ElTable {...params} data={data}>
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

// 使用 PropType 获取 column 的类型
type ElTableColumnProps = typeof ElTableColumn.props;
type ColumnType = PropType<ElTableColumnProps>;
export const Column: ColumnType = ElTableColumn;