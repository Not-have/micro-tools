<template>
    <el-dropdown>
        <el-icon :class="[_isUndefined(props.dropdown) ? 'icon-transform' : '', 'icon-space']"
                 :style="`--icon-margin: ${SPACE}px`">
            <div v-if="_isString(props.dropdown)">
                {{ props.dropdown }}
            </div>
            <div v-else>
                <component :is="props.dropdown || MoreFilled as Object"/>
            </div>
        </el-icon>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>
                    111
                </el-dropdown-item>
                <el-dropdown-item>
                    111
                </el-dropdown-item>
                <el-dropdown-item>
                    111
                </el-dropdown-item>
                <el-dropdown-item>
                    111
                </el-dropdown-item>
                <el-dropdown-item>
                    11112222222222222222222
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
<script setup lang="ts">
import type {
    PropType
} from 'vue';
import {
    ElIcon,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem
} from 'element-plus';
import { MoreFilled } from '@element-plus/icons-vue';
import {
    isString as _isString,
    isUndefined as _isUndefined
} from 'lodash-es';
import {
    SPACE
} from '../../../const';

const props = defineProps({
    dropdown: {
        type: String as PropType<String | Object>
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
