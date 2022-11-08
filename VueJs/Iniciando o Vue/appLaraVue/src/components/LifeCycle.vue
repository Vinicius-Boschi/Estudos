<template>
  <Header v-if="showHeader" />
  <div>
    <h1>Hello World!</h1><br>
    <input v-model="name" type="text">
    {{ name }}<br>

    <button @click="showHeader = !showHeader">
        Enable e Disable header
    </button>

  </div>
</template>

<script>
    import Header from './Header.vue'

    export default {
    name: "LifeCycle",
    components: { 
        Header
    },
    data() {
        return {
            name: 'Tony Stark',
            showHeader: true
        }
    },
    // HOOKS
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    }
}
</script>

<style>
        
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

</style>