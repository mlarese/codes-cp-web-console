<template>
  <layout>
    <div><list-code-cp/></div>
  </layout>
</template>

<script>
import ListCodeCp from '../components/codecp/ListCodeCp'
const root = {root: true}
export default {
  components: {
        ListCodeCp
  },
    // fetch ({store}) {
    //    store.dispatch('code/load', {}, root)
   // }
}
</script>
