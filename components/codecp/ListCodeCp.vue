<template class="list-code">
  <v-layout>
    <v-layout>
      <v-flex
        xs12
        sm12>
        <v-toolbar
          flat
          color="blue"

        >  <v-toolbar-side-icon/>
          <v-toolbar-title >{{ $vuetify.t(' Code CP Web Console' ) }}</v-toolbar-title>
        </v-toolbar>
        <v-data-table
          :headers="headers"
          :hide-actions="false"
          :items="list"
          class="elevation-0"
        >

          <template
            slot="items"
            slot-scope="{item}">
            <td @click="selectItem(item)">{{ item.code }}</td>
            <td @click="selectItem(item)">{{ item.url }}</td>
            <td @click="selectItem(item)">{{ item.key }}</td>
          </template>
          <template
            slot="pageText"
            slot-scope="{ pageStart, pageStop, itemsLength }">
            {{ $vuetify.t('From') }} {{ pageStart }} {{ $vuetify.t('To') }} {{ pageStop }}  {{ $vuetify.t('Of') }} {{ itemsLength }}
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>

    <form-code/>

  </v-layout>
</template>

<script>
    import FormCode from './FormCode'
    import {mapState, mapActions} from 'vuex'
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
            ...mapState('code', ['list', 'record'])
        },
        methods: {
            ...mapActions('code', ['selectItem'])
        }
    }
</script>

<style scoped>

</style>
