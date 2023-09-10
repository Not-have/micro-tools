<template>
    <div class="demo">
        <Button label="按钮"
                :confirm="{
                    title: 'TISHI',
                    content: 'aa',
                    byDialog: false
                }"
                tooltip="2222"
                disabled-tip="222111"
                :onClick="handleClick"
        />
        <DropdownMenu />
    </div>
</template>
<script lang="ts" setup>
import {
    Button
} from '../../src';
import {
    DropdownMenu
} from '../../src/button/rc';

const handleClick = () => {
    console.log(11);
};

</script>
<style scoped>
.demo {
    margin-top: 40px;
}
</style>


