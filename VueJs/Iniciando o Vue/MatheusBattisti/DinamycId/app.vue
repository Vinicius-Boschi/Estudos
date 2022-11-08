<script>
    export default {
      data() {
        return {
          titleClass: 'title' 
        }
      }
    }

</script>

<script type="importmap">
    {
      "imports": {
        "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"
      }
    }
</script>
    
<template>
    <h1 :class='titleClass'>{{titleClass}}</h1> <!--Esse :class vem do v-bind, pra dizer que ele é uma diretiva.--->
</template>
    
<style>
    .title {
        color: red;
    }
</style>