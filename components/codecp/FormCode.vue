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
        <v-card-text v-model="formValid">
          <v-text-field
            ref="code"
            v-model="$record.code"
            label="Code"
            box
          />
          <v-text-field
            ref="url"
            v-model="$record.url"
            label="Url"
            box
          />
          <v-text-field
            ref="key"
            v-model="$record.key"
            label="Key"
            box
          />
        </v-card-text>
        <v-divider/>
        <v-card-actions>
          <v-spacer/>
          <v-layout
            v-if="addMode"
          >
            <v-btn
              :rules="rules.add"
              :counter="10"
              required
              color="blue darken-1"
              flat
              @click="update">Add</v-btn>
            <v-spacer/>
            <v-btn
              :rules="rules.update"
              :counter="10"
              required
              color="blue darken-1"
              flat
              @click="add">Update</v-btn>
          </v-layout>
          <v-layout v-else>
            <v-spacer/>
            <v-btn
              :rules="rules.save"
              :counter="10"
              :error-messages="nameErrors"
              :disabled="!valid"
              required
              color="blue darken-1"
              flat
              @click="save">Save</v-btn>
          </v-layout>
        </v-card-actions>
      </v-card>
  </v-flex></v-layout>

</template>

<script type="module">
    import {mapActions, mapState} from 'vuex'
    export default {
        data () {
            return {
                valid: true,
                rules: {
                    add: [v => !!v || this.$vuetify.t('required')],
                    update: [v => !!v || this.$vuetify.t('required')],
                    save: [v => !!v || this.$vuetify.t('required')]
                },
                formValid: true,
                nameErrors () {
                    const errors = []
                    if (!this.$v.name.$dirty) return errors
                    !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
                    !this.$v.name.required && errors.push('Name is required.')
                    return errors
                },
            }
        },
        computed: {
            ...mapState('code', ['$record', 'record'])
        },

        methods: {
            ...mapActions('code', ['cancel', 'save', 'update', 'add'])
        },

    }
</script>

<style scoped>
</style>
