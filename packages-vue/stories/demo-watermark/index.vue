<template>
    <div>
        <Button type="primary"
                label="创建 Watermark1"
                @click="setWatermark('WaterMark 1')">
        </Button>
        <Button type="primary"
                label="创建 Watermark2"
                @click="setWatermark2('WaterMark 2')">
        </Button>
        <Button type="primary"
                label="Create custom style Watermark"
                @click="setWatermark3('创建 样式 WaterMark')">
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
