<template>
  <div>
    <v-data-table
      :headers="headers"
      :hide-actions="false"
      class="elevation-0"
    >
      <template
        slot="items"
        slot-scope="props">
        <td>
          <v-edit-dialog
            lazy
            persistent
            class="edit-dialog"
          > <v-card>
            <v-card-title>
              <span class="headline">{{ $vuetify.t('Insert Code') }}</span>
            </v-card-title>

            <v-card-text>
              <v-text-field
                ref="code"
                label="Code"
              />
              <v-text-field
                ref="url"
                label="Url"
              />
              <v-text-field
                ref="key"
                label="Key"
              />
            </v-card-text>
            <v-divider class="mt-5"/>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                color="blue darken-1"
                flat
                @click="close">Add</v-btn>
              <v-btn
                color="blue darken-1"
                flat
                @click="save">Update</v-btn>
            </v-card-actions>
          </v-card>
          </v-edit-dialog>
        </td>
        <td>{{ item.code }}</td>
        <td>{{ item.url }}</td>
        <td>{{ item.key }}</td>
        <v-edit-dialog
          large
          lazy
          persistent
        >
          <div
            slot="input"
            class="mt-3 title">Update Iron</div>
          <v-card-text>
            <v-text-field
              ref="code"
              label="Code"
            />
            <v-text-field
              ref="url"
              label="Url"
            />
            <v-text-field
              ref="key"
              label="Key"
            />
          </v-card-text>
        </v-edit-dialog>
      </template>
    </v-data-table>

  </div>
</template>

<script>
    export default {
        name: "ViewCodeCp",
        data () {
            const headers = [
                { text: this.$vuetify.t('Code'), value: 'code' },
                { text: this.$vuetify.t('Url'), value: 'url' },
                { text: this.$vuetify.t('Key'), value: 'key' }
            ]
            return {
                headers
            }
        }
    }
</script>

<style scoped>

</style>
