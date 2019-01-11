<template>
  <div class="dashboard-container">
    <adminDashboard></adminDashboard>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'

export default {
  name: 'dashboard',
  components: { adminDashboard },
  data() {
    return { };
  },
  computed: {
    ...mapGetters([
      'role'
    ])
  },
  created() { }
}
</script>
