<template>
  <q-page class="memebers">
    <div>
      <MembersTable/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import MembersTable from "../components/providers/MembersTable.vue";



export default defineComponent({
  name: "PageIndex",
  components: {
    MembersTable,
  }
});
</script>

<style lang="sass" scoped>
.memebers
  padding : 40px

</style>