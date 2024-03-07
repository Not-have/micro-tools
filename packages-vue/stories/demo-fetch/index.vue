<script lang='ts' setup>
/**
 * https://mock.mengxuegu.com/mock/60434bccf340b05bceda3906/practise-nuxtjs/list
 * https://mock.mengxuegu.com/mock/60434bccf340b05bceda3906/practise-nuxtjs/test
 * https://mock.mengxuegu.com/mock/61922927f126df7bfd5b79ef/promise/promise3#!method=get
 */

import { reactive } from 'vue';
import {
    useService
} from '../../src/hooks';

 function fun(params) {
    // 构建 URL，将查询参数附加到 URL 上
    const url = new URL('https://mock.mengxuegu.com/mock/61922927f126df7bfd5b79ef/promise/promise3');
    url.search = new URLSearchParams({ ...params, method: 'get' }).toString();

    return new Promise((resolve, reject) =>{
        fetch(url).then(req => {
            return req.json();
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err);
        });
    });
}


let obj = reactive({
    value: 'test'
});


const {
    run,
    data,
    loading
} = useService(fun, obj);

function handleEdit() {
    run();
}

// console.log(data, loading);

</script>
<template>
    <div>数据请求</div>
    <button @click="handleEdit">修改数据</button>
    <br />
    {{ loading }}
    {{ data }}



</template>

<style scoped>

</style>
