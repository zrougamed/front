
<template>
  <q-card>
    <q-toggle v-model="loading" label="Loading state" class="q-mb-md" />
    <q-table
      title="Customer Management"
      :rows="discordUsers"
      :hide-header="mode === 'grid'"
      :columns="columns"
      row-key="name"
      :grid="mode=='grid'"
      :filter="filter"
      :v-model="pagination"
      :loading="loading"
    >
      <template v-slot:top-right="props">
        <q-input outlined dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>

        <q-btn
          flat
          round
          dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          v-if="mode === 'list'"
        >
          <q-tooltip
            :disable="$q.platform.is.mobile"
            v-close-popup
          >{{props.inFullscreen ? 'Exit Fullscreen' : 'Toggle Fullscreen'}}</q-tooltip>
        </q-btn>

        <q-btn
          flat
          round
          dense
          :icon="mode === 'grid' ? 'list' : 'grid_on'"
          @click="mode = mode === 'grid' ? 'list' : 'grid'; separator = mode === 'grid' ? 'none' : 'horizontal'"
          v-if="!props.inFullscreen"
        >
          <q-tooltip
            :disable="$q.platform.is.mobile"
            v-close-popup
          >{{mode==='grid' ? 'List' : 'Grid'}}</q-tooltip>
        </q-btn>

        <q-btn
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          @click="exportTable"
        />
      </template>
    </q-table>
  </q-card>
</template>

<script>
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */

import { defineComponent } from "vue";
import { exportFile } from "quasar";

function wrapCsvValue(val, formatFn) {
  let formatted = formatFn !== void 0 ? formatFn(val) : val;

  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);

  formatted = formatted.split('"').join('""');

  return `"${formatted}"`;
}

export default defineComponent({
  name: "listusers",
  data() {
    return {
      loading: true,
      filter: "",
      customer: {},
      new_customer: false,
      mode: "list",
      columns: [
        {
          name: "name",
          required: true,
          label: "Customer Name",
          align: "left",
          field: "name",
          sortable: true,
        },
        {
          name: "city",
          align: "left",
          label: "City",
          field: "city",
          sortable: true,
        },
        {
          name: "state",
          align: "left",
          label: "State",
          field: "state",
          sortable: true,
        },
        {
          name: "last_call",
          align: "left",
          label: "Last Call",
          field: "last_call",
          sortable: true,
        },
      ],
      pagination: {
        rowsPerPage: 10,
      },
    };
  },
  computed: {
    discordUsers() {
      let users = [];
      this.$store.state.discord.data.forEach(function (element) {
        let user = {};
        Object.keys(element).forEach(function (key) {
          let part = element[key];
          user[key] = part;
        });
        users.push(user);
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return users;
    },
  },
  methods: {
    exportTable() {
      // naive encoding to csv format
      const content = [this.columns.map((col) => wrapCsvValue(col.label))]
        .concat(
          this.discordUsers.map((row) =>
            this.columns
              .map((col) =>
                wrapCsvValue(
                  typeof col.field === "function"
                    ? col.field(row)
                    : row[col.field === void 0 ? col.name : col.field],
                  col.format
                )
              )
              .join(",")
          )
        )
        .join("\r\n");

      const status = exportFile("users.csv", content, "text/csv");

      if (status !== true) {
        this.$q.notify({
          message: "Browser denied file download...",
          color: "negative",
          icon: "warning",
        });
      }
    },
  },
});
</script>

<style>
</style>
