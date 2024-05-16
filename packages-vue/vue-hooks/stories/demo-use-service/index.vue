<script lang="ts" setup>
import {
  useService
} from "../../src";
import {
  dataDemo,
  dataDemoList
} from "./fetch";

const {
  data
} = useService(dataDemo);

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
  </div>
</template>
