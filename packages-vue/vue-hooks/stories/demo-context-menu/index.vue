<script lang="tsx" setup>
import {
  Button
}from "ant-design-vue";
import {
  useContextMenu
} from "../../src";

import {
  Menu
} from "./components";

const [createContextMenu] = useContextMenu();

const handleContextmenu = (e: MouseEvent): void => {
  createContextMenu({
    event: e,
    menu: <Menu theme="light" />,
    style: {
      backgroundColor: "red"
    }
  });
};
</script>
<template>
  <Button @contextmenu="handleContextmenu">
    Right Click on me
  </Button>

  <hr />

  <Button @contextmenu="handleContextmenu">
    Right Click on me
  </Button>
</template>
