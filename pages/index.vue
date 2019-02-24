<template>
  <div><list-code-cp/></div>
</template>

<script>
import ListCodeCp from '../components/codecp/ListCodeCp'
const root = {root: true}
export default {
  components: {
        ListCodeCp
  },
    fetch ({store}) {
       store.dispatch('code/load', {}, root)
       store.commit('code/setMode', 'add', {root: true})
    }
}
</script>
