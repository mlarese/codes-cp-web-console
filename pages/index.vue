<template>
  <div>
    <div><list-code-cp/></div>
  </div>
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
    }
}
</script>
