<template>
    <div class="demo">
        <Input type="text"
               v-model="str"
               size="large"
               :onChange="handleChange" />
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import {
    Input
} from '../../src';

const str = ref(1);

const handleChange = function(value: number){
    console.log(value);
};

</script>
<style scoped>
.demo {
    margin-top: 40px;
}
</style>


