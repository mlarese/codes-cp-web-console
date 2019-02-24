<template>
  <v-layout row>
    <v-flex
      xs12
      sm6
      offset-sm3>

      <v-card>
        <v-toolbar
          color="cyan"
          flat
          class="elevation-0">
          <v-toolbar-side-icon/>
          <v-toolbar-title>{{ $vuetify.t (' Code' ) }}</v-toolbar-title>
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
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            flat>Cancel</v-btn>
          <v-btn
            color="blue darken-1"
            flat>Save</v-btn>
        </v-card-actions>
      </v-card>
  </v-flex></v-layout>
</template>

<script>
    export default {
        name: "FormCode"
    }
</script>

<style scoped>

</style>
