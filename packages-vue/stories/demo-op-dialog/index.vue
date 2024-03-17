<script lang='ts' setup>
import {
    Button,
    opDialog
} from '../../src';
import Form from './form.vue';

const handleClick = () => {
    opDialog({
        content: Form
    });
};
</script>
<template>
    <div>
        <Button label="按钮"
                @click="handleClick"></Button>
    </div>
</template>

<style scoped>

</style>
