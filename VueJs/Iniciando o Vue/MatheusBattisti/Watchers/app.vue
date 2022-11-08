<script>
    export default {
        data() {
            return {
                todoId: 1, // Defini o id inicial.
                todoData: null
            }
        },
        methods: { // Faz a requisição da api.
            async fetchData() {
                this.todoData = null
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/todos/${this.todoId}`
                )
                this.todoData = await res.json()
            }
        },
        mounted() { // Deixa a primeira requisição já tela.
            this.fetchData()
        },
        watch: { // Vai assistir o conteúdo toda hora pra ver se ele muda, se mudar ele mostra as próximas informações da api.
            todoId() {
                this.fecthData()
            }
        }
    }
</script>

<template>
    <p>Todo id: {{ todoId }}</p>
    <button @click='todoId++'>Fetch next todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
</template>