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
    <spacer/>
    <v-layout class="mx-5">
      <v-card>
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
        <v-divider/>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="blue darken-1"
            flat
            @click="close">Cancel</v-btn>
          <v-btn
            color="blue darken-1"
            flat
            @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-layout>
</template>

<script>
    export default {components: {

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
