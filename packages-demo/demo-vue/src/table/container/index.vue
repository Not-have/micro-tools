<script setup lang="ts">
import {
  ElTable,
  ElTableColumn
} from "element-plus";
import {
  computed,
  defineProps,
  PropType
} from "vue";

import {
  Splitpanes
} from "../components";
import {
  TElTableColumn
} from "../types";

interface IData extends Record<never, any> {
  children: Record<never, any>
}

// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-vars
const props = defineProps({
  data: {
    default: () => [],
    type: Array as PropType<IData[]>
  },
  rowHeight: {
    default: 40,
    type: Number
  }
});

const tableData = [
  {
    address: "No. 189, Grove St, Los Angeles",
    date: "2016-05-03",
    name: "Tom",
    children: [
      {
        age: 18,
        friend: "小明"
      },
      {
        age: 18,
        friend: "笑话"
      }
    ]
  },
  {
    address: "No. 189, Grove St, Los Angeles",
    date: "2016-05-02",
    name: "Tom"
  },
  {
    address: "No. 189, Grove St, Los Angeles",
    date: "2016-05-04",
    name: "Tom",
    children: [
      {
        age: 90,
        friend: "小话"
      },
      {
        age: 20,
        friend: "哈哈哈"
      }
    ]
  },
  {
    address: "No. 189, Grove St, Los Angeles",
    date: "2016-05-01",
    name: "Tom"
  }
];

const column: TElTableColumn[] = [
  {
    label: "Date",
    prop: "date",
    width: "180"
  },
  {
    label: "Name",
    prop: "name",
    width: "180"
  },
  {
    label: "Address",
    prop: "address",
    width: "250"
  }
];

const columnChildren: TElTableColumn[] = [
  {
    label: "age",
    prop: "age",
    width: "180"
  },
  {
    label: "friend",
    prop: "friend",
    width: "180"
  }
];

const _childrenData = computed(() => {
  const arr = tableData.flatMap(item => item.children);

  return arr;
});

const arraySpanMethod = value => {
  if(!value.row) {

    return [1, 2];
  }

  return [1, 1];
};
</script>

<template>
  <div class="box">
    <Splitpanes
      :push-other-panes="false"
      style="height: 400px"
    >
      <template #left>
        <ElTable
          :data="tableData"
          style="width: 100%; height: 100%;"
        >
          <ElTableColumn
            v-for="item in column"
            :key="item.prop"
            v-bind="{...item}"
          >
            <template #default="scope">
              <div
                :style="{
                  height: `${scope.row?.children ? scope.row.children.length * rowHeight : rowHeight}px`,
                  overflow: 'hidden',
                  'line-height': `${scope.row?.children ? scope.row.children.length * rowHeight : rowHeight}px` }"
              >
                {{ scope.row[item?.prop as string] }}
              </div>
            </template>
          </ElTableColumn>
        </ElTable>
      </template>
      <template #right>
        <ElTable
          :data="_childrenData"
          :span-method="arraySpanMethod"
          style="width: 100%; height: 100%;"
        >
          <ElTableColumn
            v-for="item in columnChildren"
            :key="item.prop"
            v-bind="{...item}"
          >
            <template #default="scope">
              <div
                :style="{
                  height: `${rowHeight}px`,
                  overflow: 'hidden',
                  'line-height': `${rowHeight}px`,
                  'text-align': `${scope.row ? 'justify' : 'center'}`
                }"
              >
                {{ scope.row ? scope.row[item?.prop as string] : '暂无数据' }}
              </div>
            </template>
          </ElTableColumn>
        </ElTable>
      </template>
    </Splitpanes>
  </div>
</template>
<style scoped>
.box {
  width: 100%;
  height: 100%;
}

.el-table :deep(.el-table__cell) {
  padding: 0;
}
</style>
