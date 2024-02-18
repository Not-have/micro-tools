<template>
    <div class="demo">
        <Button label="按钮"
                type="danger"
                :onClick="handleClick"
        />
        <br />
        <br />
        <br />
        <ButtonOps :items="[
            {label: '222'},
            {label: '33'},
            '|',
            {label: '44'},
            {label: '55'},
            {label: '66'},
            {label: '77', onClick: handleClick},
            '|'
        ]" />
        <Input type="textarea" />
    </div>
</template>
<script lang="ts" setup>
import {
    Button,
    ButtonOps,
    Input
} from '../../src';
const handleClick = () => {
    console.log(22);
};

</script>
<style scoped>
.demo {
    margin-top: 40px;
}
</style>


