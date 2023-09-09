<template>
    <div class="demo">
        <Button label="按钮"
                disabledTip="你好"
                :disabled="true"
        />
        <ElPopconfirm />
    </div>
</template>
<script lang="ts" setup>
import {
    Button
} from '../../src';
import ElPopconfirm from '../../src/button/rc/rc-button-confirm';
</script>
<style scoped>
.demo {
    margin-top: 40px;
}
</style>