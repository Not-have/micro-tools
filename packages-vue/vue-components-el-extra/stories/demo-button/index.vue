<script lang="ts" setup>
import {
  Button,
  ButtonOps
} from "../../src";

const handleClick = (e: Event): void => {
  // eslint-disable-next-line no-console
  console.log(e);
};

</script>
<template>
  <div class="demo">
    <Button
      label="按钮"
      type="danger"
      :on-click="handleClick"
    />
    <br />
    <br />
    <br />
    <ButtonOps
      :items="[
        {label: '222'},
        {label: '33', isThrottle: true},
        '|',
        {label: '44'},
        {label: '55'},
        {label: '66'},
        {label: '77',onClick: handleClick},
        '|'
      ]"
    />
  </div>
</template>
<style scoped>
.demo {
  margin-top: 40px;
}
</style>
