<script setup lang="ts">
import {
  ElTable,
  ElTableColumn
} from "element-plus";
import {
  computed,
  CSSProperties,
  defineEmits,
  defineProps,
  onMounted,
  PropType,
  ref,
  RendererElement,
  RendererNode,
  unref,
  VNode
} from "vue";

import {
  Splitpanes
} from "../components";
import {
  EDataType, ESlotType, ETableType
} from "../enum";
import {
  findDataByChildIds,
  findDataByIds,
  fixScope,
  KeyBoard
} from "../utils";

interface IData extends Record<never, any> {
  children?: Record<never, any>[];
  id: number | string;
}

interface TElTableColumn extends Partial<InstanceType<typeof ElTableColumn>> {
  cell?: ({
    $index, column, row
  }) => VNode<
    RendererNode,
    RendererElement,
    {
      [key: string]: any;
    }
  >;
  header?: ({
    $index, column
  }) => VNode<
    RendererNode,
    RendererElement,
    {
      [key: string]: any;
    }
  >;
}

const props = defineProps({
  column: {
    default: () => [],
    required: true,
    type: Array as PropType<TElTableColumn[]>
  },
  columnChildren: {
    default: () => [],
    required: true,
    type: Array as PropType<TElTableColumn[]>
  },
  data: {
    default: () => [],
    required: true,
    type: Array as PropType<IData[]>
  },
  headerHeight: {
    default: 34,
    type: Number
  },
  rowHeight: {
    default: 40,
    type: Number
  }
});

const emits = defineEmits(["change", "scroll", "headerContextmenu"]);

const _headerHeight = computed(() => `${props.headerHeight }px`);

const _childrenData = computed(() => {
  const arr: Record<never, any>[] = [];

  props.data.forEach(item => {
    if (item.children?.length) {
      const child = item.children.map(childItem => ({
        parentId: item.id,
        ...childItem
      }));

      arr.push(...child);
    } else {
      arr.push({
        dataType: EDataType.NO_DATA,
        parentId: item.id
      });
    }
  });

  return arr;
});

const arraySpanMethod = value => {
  if (value.row?.dataType === EDataType.NO_DATA) {
    return [1, props.columnChildren.length];
  }

  return [1, 1];
};

const childId = ref<number | string>();

const parentId = ref<number | string>();

const handleParentCellMouseEnter = row => {
  childId.value = row.id;
};

const handleParentCellMouseLeave = () => {
  childId.value = undefined;
};

const handleChildCellMouseEnter = row => {
  parentId.value = row.parentId;
};

const handleChildCellMouseLeave = () => {
  parentId.value = undefined;
};

const parentRowStyle = (data): CSSProperties | undefined => {
  if (data?.row?.id === unref(parentId)) {
    return {
      backgroundColor: "rgba(38, 117, 217, 0.2)"
    };
  }
};

const childRowStyle = (data): CSSProperties | undefined => {
  if (data?.row?.parentId === unref(childId)) {
    return {
      backgroundColor: "rgba(38, 117, 217, 0.2)"
    };
  }
};

const chileSelect = ref<string[]>([]);

const parentSelect = ref<string[]>([]);

const rowClassName = ({
  row
}): string => {
  if (parentSelect.value.includes(row.id) || chileSelect.value.includes(row.id)) {
    return "row-select";
  }

  return "";
};

const handleRowClick = (row, event, type: ETableType) => {
  const isKeyBoard = KeyBoard.withCtrlKey(event) || KeyBoard.withShiftKey(event);

  if (ETableType.PARENT === type) {
    if (parentSelect.value.includes(row.id) && isKeyBoard) {
      parentSelect.value = parentSelect.value.filter(item => item !== row.id);
    } else if (isKeyBoard) {
      parentSelect.value.push(row.id);
    } else {
      parentSelect.value = [row.id];
    }

    chileSelect.value = [];

    emits("change", findDataByIds(props.data, unref(parentSelect)));
  }

  if (ETableType.CHILD === type) {
    if (row?.dataType === EDataType.NO_DATA) {
      return;
    }

    if (chileSelect.value.includes(row.id) && isKeyBoard) {
      chileSelect.value = chileSelect.value.filter(item => item !== row.id);
    } else if (isKeyBoard) {
      chileSelect.value.push(row.id);
    } else {
      chileSelect.value = [row.id];
    }

    parentSelect.value = [];

    emits("change", findDataByChildIds(props.data, unref(chileSelect)));
  }
};

const childRef = ref();

const parentRef = ref();

onMounted(() => {
  try {
    parentRef.value.scrollBarRef.wrap$.onscroll = event => {
      childRef.value.setScrollTop(event.target.scrollTop);
      emits("scroll", ETableType.PARENT, event);
    };

    childRef.value.scrollBarRef.wrap$.onscroll = event => {
      parentRef.value.setScrollTop(event.target.scrollTop);
      emits("scroll", ETableType.CHILD, event);
    };
  } catch (e) {
    console.error(e);
  }
});

const handleHeaderContextmenu = (type, column, event) => {
  emits("headerContextmenu", type, column, event);
};

function isRowShowType(scope, item) {
  if (scope.row?.dataType === EDataType.NO_DATA) {
    return EDataType.NO_DATA;
  }

  if (item?.cell) {
    return ESlotType.CELL;
  }

  return ESlotType.TEXT;
}
</script>

<template>
  <div style="width: 100%; height: 100%">
    <Splitpanes
      :first-splitter="false"
      :horizontal="false"
    >
      <template #left>
        <ElTable
          ref="parentRef"
          :data="data"
          :row-class-name="rowClassName"
          :row-style="parentRowStyle"
          class="diy-parent"
          style="width: 100%; height: 100%"
          @cell-mouse-enter="handleParentCellMouseEnter"
          @cell-mouse-leave="handleParentCellMouseLeave"
          @header-contextmenu="(column: any, event: Event) => handleHeaderContextmenu(ETableType.PARENT, column, event)"
          @row-click="(row: any, _column: any, event: Event) => handleRowClick(row, event, ETableType.PARENT)"
        >
          <ElTableColumn
            v-for="({ cell, header, ...rest }, index) in column"
            :key="index"
            v-bind="{ ...rest }"
          >
            <template #header="head">
              <div
                v-if="header"
                class="header"
              >
                <component :is="header(head)" />
              </div>
              <slot
                v-if="$slots[ESlotType.HEADER]"
                :header="head"
                :name="ESlotType.HEADER"
              ></slot>
            </template>
            <template #default="scope">
              <div
                :style="{
                  height: `${scope.row?.children.length ? scope.row.children.length * rowHeight : rowHeight}px`,
                  overflow: 'hidden',
                  'line-height': `${scope.row?.children.length ? scope.row?.children.length * rowHeight : rowHeight}px`,
                }"
              >
                <component
                  :is="cell(scope)"
                  v-if="isRowShowType(scope, rest) === ESlotType.CELL && cell"
                  :key="index"
                />
                <slot
                  v-if="$slots[ESlotType.DEFAULT]"
                  :key="index"
                  :column="fixScope(scope.column)"
                  :name="`${ESlotType.DEFAULT}`"
                  :row="fixScope(scope.row)"
                ></slot>
                <template v-if="isRowShowType(scope, rest) === ESlotType.TEXT">
                  {{ scope.row[rest?.prop as string] }}
                </template>
              </div>
            </template>
          </ElTableColumn>
        </ElTable>
      </template>
      <template
        v-if="columnChildren.length !== 0"
        #right
      >
        <ElTable
          ref="childRef"
          :data="_childrenData"
          :row-class-name="rowClassName"
          :row-style="childRowStyle"
          :span-method="arraySpanMethod"
          scrollbar-always-on
          style="width: 100%; height: 100%"
          @cell-mouse-enter="handleChildCellMouseEnter"
          @cell-mouse-leave="handleChildCellMouseLeave"
          @header-contextmenu="(column: any, event: Event) => handleHeaderContextmenu(ETableType.CHILD, column, event)"
          @row-click="(row: any, _column: any, event: Event) => handleRowClick(row, event, ETableType.CHILD)"
        >
          <ElTableColumn
            v-for="({ cell, header, ...rest }, index) in columnChildren"
            :key="rest.prop"
            v-bind="{ ...rest }"
          >
            <template #header="head">
              <div
                v-if="header"
                class="header"
              >
                <component :is="header(head)" />
              </div>
              <slot
                v-if="$slots[ESlotType.HEADER]"
                :header="head"
                :name="ESlotType.HEADER_CHILD"
              ></slot>
            </template>
            <template #default="scope">
              <div
                :key="index"
                :style="{
                  height: `${rowHeight}px`,
                  overflow: 'hidden',
                  'line-height': `${rowHeight}px`,
                  'text-align': `${scope.row?.dataType === EDataType.NO_DATA ? 'center' : 'justify'}`,
                }"
              >
                <template
                  v-if="isRowShowType(scope, rest) === EDataType.NO_DATA"
                >
                  暂无数据
                </template>
                <component
                  :is="cell(scope)"
                  v-if="isRowShowType(scope, rest) === ESlotType.CELL && cell"
                />
                <slot
                  v-if="$slots[ESlotType.DEFAULT_CHILD]"

                  :column="fixScope(scope.column)"
                  :name="`${ESlotType.DEFAULT_CHILD}`"
                  :row="fixScope(scope.row)"
                ></slot>
                <template
                  v-if="isRowShowType(scope, rest) === ESlotType.TEXT"
                >
                  {{ scope.row[rest?.prop as string] }}
                </template>
              </div>
            </template>
          </ElTableColumn>
        </ElTable>
      </template>
    </Splitpanes>
  </div>
</template>
<style scoped lang="scss">
.header {
  height: v-bind(_headerHeight);
  line-height: v-bind(_headerHeight);
}

:deep(.splitpanes) {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .splitpanes__splitter {
    width: 14px;
    cursor: col-resize;
    position: relative;
  }
}

:deep(.diy-parent) {
  .el-scrollbar__bar.is-vertical {
    display: none !important;
  }
}

:deep(.el-table) {
  background: #282828;
  .el-table__header {
    height: v-bind(_headerHeight);
    line-height: v-bind(_headerHeight);

    .cell {
      padding: 0 12px;
    }
  }

  .el-table__cell {
    padding: 0;
  }

  .cell {
    padding: 0;
    white-space: nowrap;
  }

  .row-select {
    background-color: rgba(38, 117, 217, 0.2) !important;
    & .el-table__cell:nth-child(1) {
      border-left: 2px solid #2b88ff !important;
    }
  }

  .el-table__row {
    transition: all 0s;
    background-color: transparent;
    &:hover > td.el-table__cell {
      background-color: rgba(38, 117, 217, 0.2);
    }
    &:hover {
      .el-table__empty-block {
        background-color: #29374c;
      }
    }
  }

  tr {
    background: #2c2c2c;
    th {
      background-color: transparent;
      border-bottom: 1px solid #171717 !important;
      border-right: 1px solid hsla(0, 0%, 59%, 0.12) !important;
    }

    .el-table__cell {
      background-color: transparent;
      border-bottom: 0;
      border-right: 1px solid hsla(0, 0%, 59%, 0.12) !important;
      color: #c4c4c4;
      position: relative;
    }
    .el-table__cell::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-bottom: 1px solid #171717 !important;
    }
  }
}
</style>
