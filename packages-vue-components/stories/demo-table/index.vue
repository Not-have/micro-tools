
<script setup lang="ts">

import { Table, Column } from '../../src/table/index';

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
    }
];
const change = (value: typeof tableData) => {
    console.log(value);
};
</script>

<template>
    <Table :data="tableData"
           stripe
           border
           style="width: 100%"
           :draggable-change="change">
        <Column prop="date"
                label="Date"
                width="180" />
        <Column prop="name"
                label="Name"
                width="180" />
        <Column prop="address"
                label="Address" />
    </Table>
</template>

<style scoped></style>