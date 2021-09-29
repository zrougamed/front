

<template>
  <router-view />
</template>
<script>
/* eslint-disable @typescript-eslint/explicit-member-accessibility, @typescript-eslint/no-use-before-define, @typescript-eslint/explicit-function-return-type */

import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
