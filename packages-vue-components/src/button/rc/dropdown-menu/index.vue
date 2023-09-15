<template>
    <el-dropdown trigger="click">
        <el-icon :class="[slot ? '' : 'icon-transform', 'icon-space']"
                 :style="`--icon-margin: ${props.space}px`">
            <slot name="dropdown">
                <MoreFilled/>
            </slot>
        </el-icon>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="(v, i) in props.items"
                                  :key="i">
                    <component :is="v" />
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
<script setup lang="ts">
import type {
    PropType,
    VNode
} from 'vue';
import {
    useSlots
} from 'vue';
//判断<slot/>是否有传值
const slot = !!useSlots().dropdown;
import {
    ElIcon,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem
} from 'element-plus';
import {
    MoreFilled
} from '@element-plus/icons-vue';
import {
    SPACE
} from '../../../const';

const props = defineProps({
    space: {
        type: Number,
        default: SPACE
    },
    /**
     * 直接传进来的时 Button 数组
     */
    items: {
        type: Array as PropType<VNode[]>
    }
});
</script>
<style scoped>
@import "./index.css";

.icon-transform {
    transform: rotate(90deg); /* 将元素直接旋转 90 度 */
}

/* TODO 这个报错待解决 */
.icon-space {
    margin-left: var(--icon-margin);
}
</style>
