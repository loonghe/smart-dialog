<script lang="ts">
import { defineComponent } from 'vue';
import SmartDialog from '@/smart-dialog.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    SmartDialog
  }
});
</script>

<template>
  <div id="app">
    <smart-dialog />
  </div>
</template>
