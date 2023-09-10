<template>
    <div class="demo">
        <Button label="按钮"
                :confirm="{
                    content: 'aa',
                    byDialog: true
                }"
                :onClick="handleClick"
        />
    </div>
</template>
<script lang="ts" setup>

import {
    Button
} from '../../src';

const handleClick = () => {
    console.log(11);
};

</script>
<style scoped>
.demo {
    margin-top: 40px;
}
</style>