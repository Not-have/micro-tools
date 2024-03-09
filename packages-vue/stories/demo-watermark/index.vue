<template>
    <div>
        <Button type="primary"
                label=" Create Watermark1"
                @click="setWatermark('WaterMark Info1')">
        </Button>
        <Button type="primary"
                label="Create Watermark2"
                @click="setWatermark2('WaterMark Info2')">
        </Button>
        <Button type="primary"
                label="Create custom style Watermark"
                @click="setWatermark3('Custome Style WaterMark')">
        </Button>

        <Button label="Clear Watermark1"
                @click="clear"></Button>
        <Button label="ClearAll"
                @click="clearAll"></Button>

        <Button label="Update Watermark1"
                @click="setWatermark('WaterMark Info New')">
        </Button>
    </div>
</template>
<script lang="ts" setup>
import { onUnmounted, ref } from 'vue';

import { 
    useWatermark,
    Button
} from '../../src';

const app = ref(document.body);

const { setWatermark, clear, clearAll } = useWatermark();
const { setWatermark: setWatermark2 } = useWatermark();
const { setWatermark: setWatermark3 } = useWatermark(app, {
    fontColor: 'red',
    fontSize: 12,
    rotate: 30
});

onUnmounted(() => {
    clearAll();
});
</script>
