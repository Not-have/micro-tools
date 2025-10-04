<script lang="ts" setup>
import {
  usePropsContent
} from "../model";

const content = usePropsContent();
</script>
<template>
  <div>
    UI
    {{ content }}
  </div>
</template>
