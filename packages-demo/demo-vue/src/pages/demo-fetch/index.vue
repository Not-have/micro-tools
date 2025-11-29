<script setup lang="ts">

import {
  SelectFetch
} from "@/components";
import {
  ElTable,
  ElTableColumn
} from "element-plus";

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
];
</script>

<template>
  <div>
    <ElTable
      :data="tableData"
      border
    >
      <ElTableColumn
        prop="date"
        label="Date"
      />
      <ElTableColumn
        prop="name"
        label="Name"
      />
      <ElTableColumn
        prop="address"
        label="Address"
      >
        <template #default="{ row }">
          <SelectFetch :value="row.address" />
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>
