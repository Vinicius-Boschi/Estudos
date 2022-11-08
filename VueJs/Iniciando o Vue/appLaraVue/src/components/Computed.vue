<template>
    {{ fullName }} <br><br>

    <h2>Incomplete Todo</h2>
    <div v-for="todo in incompleteTodo" :key="todo.id">
        {{ todo.title }} <span>{{ todo.completed }}</span>
    </div>

    <br><br>

    <h2>Completed Todo</h2>
    <div v-for="todo in completeTodo" :key="todo.id">
        {{ todo.title }}
    </div>

    <br><br>

    <h2>Todos</h2>
    <div v-for="todo in todos" :key="todo.id">
        <input v-model="todo.completed" type="checkbox">

        {{ todo.title }}
    </div>

</template>

<script>
    export default {
        name: 'Computed',
        data() {
            return {
                user: {
                    firsName: 'Tony',
                    lastName: 'Stark'
                },
                todos: [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "delectus aut autem",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 2,
                        "title": "quis ut nam facilis et officia qui",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 3,
                        "title": "fugiat veniam minus",
                        "completed": false
                    },
                    {
                        "userId": 1,
                        "id": 4,
                        "title": "et porro tempora",
                        "completed": true
                    },
                    {
                        "userId": 1,
                        "id": 5,
                        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                        "completed": false
                    }
                ]
            }
        },
        computed: {
            fullName() {
                return `${this.user.firsName} ${this.user.lastName}`
            },
            incompleteTodo() {
                return this.todos.filter(todo => !todo.completed)
            },
            completeTodo() {
                return this.todos.filter(todo => todo.completed)
            }
        }
    }
</script>

<style>

</style>