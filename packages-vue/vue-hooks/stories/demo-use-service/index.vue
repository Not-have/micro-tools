<script lang="ts" setup>
import {
  useService
} from "../../src";
import {
  DataDataDemo,
  dataDemo,
  dataDemoList
} from "./fetch";

const {
  data
} = useService<DataDataDemo>(dataDemo);

const {
  data: list
} = useService(dataDemoList, undefined, []);

</script>

<template>
  <div>
    useService
    <hr />
    <div>{{ data?.title }}</div>
    <div>{{ data?.content }}</div>
    <div>{{ data?.author }}</div>
    <hr />
    {{ list?.length }}
    <hr />
    <p
      v-for="item in list"
      :key="item.title"
    >
      {{ item.title }}
    </p>
  </div>
</template>
