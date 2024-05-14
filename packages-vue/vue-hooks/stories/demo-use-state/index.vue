<script lang="ts" setup>
import {
  watch
} from "vue";
import {
  useState
} from "../../src";

const [state, setState] = useState({
  age: 1
});

const handleClick = (): void => {
  setState({
    age: 2
  });
};

const handleReductionClick = (): void => {
  setState();
};

watch(() => state.age, (newValue, oldValue) => {
  // eslint-disable-next-line no-console
  console.log(newValue, oldValue);

});

</script>

<template>
  <div>
    useState
    <hr />
    {{ state.age }}
    <br />
    <br />
    <button @click="handleClick">
      修改
    </button>
    <br />
    <button @click="handleReductionClick">
      还原
    </button>
  </div>
</template>
