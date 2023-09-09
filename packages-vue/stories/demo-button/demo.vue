<template>
    <div class="demo">
        <Button label="按钮"
                disabledTip="你好"
                :disabled="true"
        />
    </div>
</template>
<script lang="ts" setup>
import {
    Button
} from '../../src';
</script>
<style scoped>
.demo {
    margin-top: 40px;
}
</style>