<template>
  <layout>
    <div><list-code-cp/></div>
    <div class="my-5"><ViewCodeCp/></div>
  </layout>
</template>

<script>
import ListCodeCp from '../components/codecp/ListCodeCp'
import ViewCodeCp from '../components/codecp/ViewCodeCp'
export default {
  components: {
        ListCodeCp,
        ViewCodeCp
  }
}
</script>
