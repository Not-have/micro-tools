<script setup lang="ts">
import {
  ref
} from "vue";

import {
  queue
} from "@/utils";
import {
  ElButton,
  ElCard,
  ElDivider,
  ElMessage
} from "element-plus";

const test01Fetch = (): Promise<string> => new Promise(resolve => {
  setTimeout(() => {
    const result = "test01Fetch - 1s";

    resolve(result);
  }, 1000);
});

const test02Fetch = (): Promise<string> => new Promise(resolve => {
  setTimeout(() => {
    const result = "test02Fetch - 2s";

    resolve(result);
  }, 2000);
});

const test03Fetch = (): Promise<string> => new Promise(resolve => {
  setTimeout(() => {
    const result = "test03Fetch - 3s";

    resolve(result);
  }, 3000);
});

const serialLogs = ref<string[]>([]);

// 串行模式测试
const handleSerialTest = (): void => {
  serialLogs.value = [];
  serialLogs.value.push("开始串行测试：按顺序执行，一个完成后再执行下一个");

  // 同时添加三个任务到同一个队列
  queue(test01Fetch, {
    key: "serial-queue"
  }).
      then(res => {
        serialLogs.value.push(`✓ 任务1完成: ${res}`);
      }).
      catch(error => {
        serialLogs.value.push(`✗ 任务1失败: ${error}`);
      });

  queue(test02Fetch, {
    key: "serial-queue"
  }).
      then(res => {
        serialLogs.value.push(`✓ 任务2完成: ${res}`);
      }).
      catch(error => {
        serialLogs.value.push(`✗ 任务2失败: ${error}`);
      });

  queue(test03Fetch, {
    key: "serial-queue"
  }).
      then(res => {
        serialLogs.value.push(`✓ 任务3完成: ${res}`);
      }).
      catch(error => {
        serialLogs.value.push(`✗ 任务3失败: ${error}`);
      });
};

const cancelLogs = ref<string[]>([]);

// 取消模式测试 (现在用 duration 模拟取消模式的效果，只要 duration 时间很短或者为 0，但用户这次要求 duration 默认 5000，如果是想做纯取消模式，可能需要特殊处理。
// 但根据用户指令："删除 cancelPrevious... 只有在 5000s 后... 才会执行"，这意味着原来的 cancel 模式逻辑被新的 duration 逻辑取代了。
//
// 如果用户还想保留原来的"取消模式"（立即执行最后一个，取消前面的），那么可能需要用 duration: 0 或者极短时间来实现类似效果，或者这个 API 就变成了纯粹的 Debounce。
//
// 既然用户说 "放弃 cancelPrevious"，那么旧的 cancel 模式演示代码也需要更新为使用新的 duration 模式。)

const handleCancelTest = (): void => {
  cancelLogs.value = [];
  cancelLogs.value.push("开始防抖测试(原取消模式)：5秒内连续点击，只执行最后一次");

  // 使用 duration: true (默认 5000ms)
  queue(test01Fetch, {
    key: "cancel-queue",
    duration: true
  }).
      then(res => {
        cancelLogs.value.push(`✓ 任务1完成: ${res}`);
      }).
      catch(error => {
        cancelLogs.value.push(`✗ 任务1被取消: ${error.message}`);
      });

  queue(test02Fetch, {
    key: "cancel-queue",
    duration: true
  }).
      then(res => {
        cancelLogs.value.push(`✓ 任务2完成: ${res}`);
      }).
      catch(error => {
        cancelLogs.value.push(`✗ 任务2被取消: ${error.message}`);
      });

  queue(test03Fetch, {
    key: "cancel-queue",
    duration: true
  }).
      then(res => {
        cancelLogs.value.push(`✓ 任务3完成: ${res}`);
        ElMessage.success("5秒后只有最后一个任务执行！");
      }).
      catch(error => {
        cancelLogs.value.push(`✗ 任务3被取消: ${error.message}`);
      });
};

const clickLogs = ref<string[]>([]);

const handleClickTest = (): void => {
  clickLogs.value.push("添加任务1 (duration=1000ms)");

  queue(test01Fetch, {
    key: "click-queue",
    duration: 1000
  }).then(() => {
    clickLogs.value.push("✓ 任务1完成");
  }).catch(error => {
    clickLogs.value.push(`✗ 任务1失败: ${error}`);
  });
};

const handleClickTest2 = (): void => {
  clickLogs.value.push("添加任务2 (duration=1000ms)");

  queue(test02Fetch, {
    key: "click-queue",
    duration: 1000
  }).then(() => {
    clickLogs.value.push("✓ 任务2完成");
  }).catch(error => {
    clickLogs.value.push(`✗ 任务2失败: ${error}`);
  });
};

const handleClickTest3 = (): void => {
  clickLogs.value.push("添加任务3 (duration=1000ms)");

  queue(test03Fetch, {
    key: "click-queue",
    duration: 1000
  }).then(() => {
    clickLogs.value.push("✓ 任务3完成");
  }).catch(error => {
    clickLogs.value.push(`✗ 任务3失败: ${error}`);
  });
};

const durationLogs = ref<string[]>([]);

// 时间窗口模式测试 -> 现在变成了防抖测试
const handleDurationTest = (): void => {
  durationLogs.value = [];
  durationLogs.value.push("开始防抖测试：");

  // 1. 立即加入任务1
  queue(test01Fetch, {
    key: "duration-queue",
    duration: 200
  }).
      then(res => {
        durationLogs.value.push(`✓ 任务1完成: ${res}`);
      }).
      catch(error => {
        durationLogs.value.push(`✗ 任务1被取消: ${error.message}`);
      });

  // 2. 100ms后加入任务2 (会取消任务1，因为在200ms内)
  setTimeout(() => {
    queue(test02Fetch, {
      key: "duration-queue",
      duration: 200
    }).
        then(res => {
          durationLogs.value.push(`✓ 任务2完成: ${res}`);
        }).
        catch(error => {
          durationLogs.value.push(`✗ 任务2被取消: ${error.message}`);
        });
  }, 100);

  // 3. 400ms后加入任务3 (任务2应该已经执行了，任务3会单独执行)
  setTimeout(() => {
    queue(test03Fetch, {
      key: "duration-queue",
      duration: 200
    }).
        then(res => {
          durationLogs.value.push(`✓ 任务3完成: ${res}`);
        }).
        catch(error => {
          durationLogs.value.push(`✗ 任务3被取消: ${error.message}`);
        });
  }, 400);
};
</script>
<template>
  <div class="demo-queue">
    <ElCard class="demo-card">
      <template #header>
        <span>串行模式 (无 duration)</span>
      </template>
      <p>按顺序执行，一个完成后再执行下一个</p>
      <ElButton
        type="primary"
        @click="handleSerialTest"
      >
        测试串行模式
      </ElButton>
      <ElDivider />
      <div class="logs">
        <div
          v-for="(log, index) in serialLogs"
          :key="index"
          class="log-item"
        >
          {{ log }}
        </div>
      </div>
    </ElCard>

    <ElCard class="demo-card">
      <template #header>
        <span>防抖模式 (duration = true / 5000ms)</span>
      </template>
      <p>5秒内连续点击，前面的会被取消，只有最后一次点击在5秒后执行。</p>
      <ElButton
        type="primary"
        @click="handleCancelTest"
      >
        测试默认防抖 (5s)
      </ElButton>
      <ElDivider />
      <div class="logs">
        <div
          v-for="(log, index) in cancelLogs"
          :key="index"
          class="log-item"
        >
          {{ log }}
        </div>
      </div>
    </ElCard>

    <ElCard class="demo-card">
      <template #header>
        <span>手动点击测试 (duration = 1000ms)</span>
      </template>
      <p>点击按钮后，等待1秒执行。如果1秒内再次点击，重置等待时间。</p>
      <ElButton
        type="primary"
        @click="handleClickTest"
      >
        测试点击 test01
      </ElButton>
      <ElButton
        type="primary"
        @click="handleClickTest2"
      >
        测试点击 test02
      </ElButton>
      <ElButton
        type="primary"
        @click="handleClickTest3"
      >
        测试点击 test03
      </ElButton>
      <ElDivider />
      <div class="logs">
        <div
          v-for="(log, index) in clickLogs"
          :key="index"
          class="log-item"
        >
          {{ log }}
        </div>
      </div>
    </ElCard>

    <ElCard class="demo-card">
      <template #header>
        <span>自动防抖流程测试 (duration = 200ms)</span>
      </template>
      <p>模拟脚本调用：T0调用A -> T100调用B (A被取消) -> T400调用C (B已执行，C单独执行)</p>
      <ElButton
        type="primary"
        @click="handleDurationTest"
      >
        测试防抖流程
      </ElButton>
      <ElDivider />
      <div class="logs">
        <div
          v-for="(log, index) in durationLogs"
          :key="index"
          class="log-item"
        >
          {{ log }}
        </div>
      </div>
    </ElCard>
  </div>
</template>

<style scoped>
.demo-queue {
  padding: 20px;
}

.demo-card {
  margin-bottom: 20px;
}

.logs {
  padding: 10px;
  border-radius: 4px;
  background-color: #f5f5f5;
  max-height: 300px;
  overflow-y: auto;
}

.log-item {
  padding: 4px 0;
  line-height: 1.5;
  font-family: monospace;
  font-size: 12px;
}
</style>
