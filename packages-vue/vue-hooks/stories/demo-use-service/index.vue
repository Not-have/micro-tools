<script lang="ts" setup>
import {
  useService
} from "../../src";
import {
  dataDemo
} from "./fetch";

const {
  data
} = useService(dataDemo);

</script>

<template>
  <div>
    useService
    <hr />
    <div>{{ data?.title }}</div>
    <div>{{ data?.content }}</div>
    <div>{{ data?.author }}</div>
  </div>
</template>
