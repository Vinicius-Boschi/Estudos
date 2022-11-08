<template>
  <Header v-if="showHeader">
    <template v-slot:title>Home</template>
    <template v-slot:description>dasds</template>

    Contend about Header - menu...
  </Header>

  <BaseAlert v-if="showAlert" :variant="variant" @close="onClose()" :text="text"/>

</template>

<script>
  import Header from './components/Header.vue'
  import BaseAlert from './components/BaseAlert.vue'

  export default {
    name: 'App',
    components: {
      Header,
      BaseAlert
    },
    data() {
      return {
        showHeader: false,
        showAlert: true,
        variant: 'success',
        text: 'Your form has been successfully submitted'
      }
    },
    methods: {
      onClose() {
        this.showAlert = false
      }
    }
  }
</script>

<style>

  #app {
    font-family: Arial, Helvetica, sans-serif;
  }

</style>