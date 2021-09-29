<template>
  <q-page class="memebers">
    <div>
      <MembersTable/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import MembersTable from "../components/members/MembersTable.vue";
import Header from "../components/members/Header.vue";


export default defineComponent({
  name: "PageIndex",
  components: {
    Header,
    MembersTable,
  }
});
</script>

<style lang="sass" scoped>
.memebers
  padding : 40px

</style>