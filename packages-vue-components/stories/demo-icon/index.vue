<script lang="ts" setup>
import {
    EIconType,
    Icon
} from '../../src';

</script>
<template>
    <div class="demo">
        <Icon :type="EIconType.ARROW">1111</Icon>
        <Icon :type="EIconType.LOADING"
              color="red"
              size="40"
              :continuous-rotate="true"></Icon>
    </div>
</template>
<style scoped>
.demo {
    margin-top: 40px;
}
.iconfont.test {
    color: red;
    font-size: 30px;
}
</style>
