<template class="list-code">
  <v-layout>
    <v-layout>
      <v-flex>
        <v-toolbar
          flat
          color="cyan"
        >  <v-toolbar-side-icon/>
          <v-toolbar-title>{{ $vuetify.t (' Code CP Web Console' ) }}</v-toolbar-title>
        </v-toolbar>
        <v-data-table
          :headers="headers"
          :hide-actions="false"
          class="elevation-0"
        >

          <template
            slot="list"
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

    <form-code/>

  </v-layout>
</template>

<script>
    import FormCode from './FormCode'
    import {mapState} from 'vuex'
    const root = {root: true}
    export default {components: {
        FormCode
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
        },
        computed: {
            ...mapState('code', ['$record', 'record'])
        },
    }
</script>

<style scoped>

</style>
