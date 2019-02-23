<template>
  <v-layout>
    <v-layout>
      <v-flex>
        <v-toolbar
          flat
        >
          <v-toolbar-title>{{ $vuetify.t (' Code CP Web Console' ) }}</v-toolbar-title>
        </v-toolbar>
        <v-data-table
          :headers="headers"
          :hide-actions="false"
          class="elevation-0"
        >

          <template
            slot="items"
            slot-scope="{item}">
            <td>{{ item.code }}</td>
            <td>{{ item.url }}</td>
            <td>{{ item.key }}</td>
          </template>
          <template
            slot="pageText"
            slot-scope="{ pageStart, pageStop, itemsLength }">
            {{ $t('From') }} {{ pageStart }} {{ $t('To') }} {{ pageStop }}  {{ $t('Of') }} {{ itemsLength }}
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <v-layout
      class="mx-5">
      <v-card
        class="elevation-0"
        max-width="500px">
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
    </v-layout>
  </v-layout>
</template>

<script>
    const root = {root: true}
    export default {components: {

        },
        fetch ({store}) {
            store.dispatch('code/load', {}, root)
        },
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
