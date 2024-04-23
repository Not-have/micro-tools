<script setup lang="ts">
import {
    ElButton
} from 'element-plus';
import { onMounted, ref } from 'vue';

const draggableElement = ref(null);

onMounted(() => {
    let offsetX, offsetY, isDragging = false;
    
    draggableElement.value.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - draggableElement.value.getBoundingClientRect().left;
        offsetY = e.clientY - draggableElement.value.getBoundingClientRect().top;
    });
    
    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;
            
            // 限制元素在 body 范围内
            const maxX = document.body.clientWidth - draggableElement.value.clientWidth;
            const maxY = document.body.clientHeight - draggableElement.value.clientHeight;
            
            // 让元素可以出去三分之二
            const minX = 0;
            const minY = 0;
            
            draggableElement.value.style.left = `${Math.min(Math.max(minX, newX), maxX)}px`;
            draggableElement.value.style.top = `${Math.min(Math.max(minY, newY), maxY)}px`;
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
});
</script>

<template>
    <div ref="draggableElement">
        <ElButton>222</ElButton>
    </div>
</template>

<style scoped>
div {
    position: absolute;
    cursor: move;
}
</style>
