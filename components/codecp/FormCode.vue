<template class="form-code">
  <v-layout row>
    <v-flex
      xs12
      sm12
      class="mx-5">

      <v-card
        class="mx-auto">
        <v-toolbar
          color="blue"
          flat
          class="elevation-0">
          <v-toolbar-side-icon/>
          <v-toolbar-title>{{ $vuetify.t(' Code' ) }}</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field
            ref="code"
            label="Code"
            box
          />
          <v-text-field
            ref="url"
            label="Url"
            box
          />
          <v-text-field
            ref="key"
            label="Key"
            box
          />
        </v-card-text>
        <v-divider/>
        <spacer/>
        <v-card-actions>
          <v-btn
            flat
          >
            Clear
          </v-btn>
          <v-spacer/>
          <v-btn
            color="blue darken-1"
            flat
            @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
  </v-flex></v-layout>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "FormCode",
        methods: {
            ...mapActions('code', ['cancel', 'save'])
        }
    }
</script>

<style scoped>

</style>
