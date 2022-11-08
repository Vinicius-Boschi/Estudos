<script>
    export default {
        data() {
            return {
                count: 0 // Inicia o botão com o valor 0.
            }
        },
        methods: {
            increment() { // Função que vai incrementar números ao botão de um em um.
                this.count++ // Adiciona de um em um ao botão.
            }
        }
    }
</script>

<template>
    <button @click="increment">Número {{count}}</button> <!--Aqui é adicionado uma função através do @click para poder ir adicionando números ao botão.-->
</template>