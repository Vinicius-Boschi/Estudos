<script>
    export default {
        data() {
            return {
                awesome: true
            }
        },
        methods: {
            toggle() {
                this.awesome = !this.awesome // Se for diferente de true, ele muda o conteúdo da página.
            }
        }
    }
</script>

<template>
    <button @click="toggle">toggle</button>
    <h1 v-if="awesome">Vue is awesome</h1> <!--Se for verdadeiro ele mostra esse texto-->
    <h1 v-else>Oh no 😢</h1> <!--Se não ele mostra esse.-->
</template>