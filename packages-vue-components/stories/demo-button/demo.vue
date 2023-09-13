<template>
    <div class="demo">
        <Button label="按钮"
                tooltip="111"
                :disabled="false"
                disabled-tip="222"
        />
        <!--        <ButtonOps :items="[-->
        <!--            {label: '222'},-->
        <!--            {label: '33'},-->
        <!--            {label: '44'},-->
        <!--            {label: '55'},-->
        <!--            {label: '66'},-->
        <!--            {label: '77'},-->
        <!--            '|'-->
        <!--        ]" />-->
    </div>
</template>
<script lang="ts" setup>
import {
    Button
    // ButtonOps
} from '../../src';

</script>
<style scoped>
.demo {
    margin-top: 40px;
}
</style>


