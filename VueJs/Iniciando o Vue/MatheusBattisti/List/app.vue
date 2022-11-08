<script>
    let id = 0 // Vai dar um id único para cada item da lista.

    export default {
        data() {
            return {
                newTodo: '',
                hideCompleted: false,
                todos: [
                    { id: id++, text: 'Learn HTML' }, // Vai ser adicionado um id único em cada texto.
                    { id: id++, text: 'Learn JavaScript' },
                    { id: id++, text: 'Learn Vue'}
                ]
            }
        },
        computed: {
            filteredTodos() {
                return this.hideCompleted ? this.todos.filter((t) => t !== t.done) : this.todos // Se já tiver sido concluído a task, ele vai ocultar a linha quando clicar no botão
            }
        },
        methods: {
            addTodo() { // Vai adicionar novos texto que forem digitados no input.
                this.todos.push({ id: id++, text: this.newTodo, done: false})
                this.newTodo = ''
            },
            removeTodo() { // Vai remover os itens da lista quando clicado no X.
                this.todo = this.todo.filter((t) => t !== todo)
            }
        }
    }
</script>

<template>
    <form @submit.prevent="addTodo"> <!--Vai enviar as informações digitadas no input.-->
        <input v-model="newTodo"> <!--Vai adicionar na tela o conteúdo digitado.-->
        <button>Add Todo</button>
    </form>
    <ul>
        <li v-for="todo in filteredTodos" :key="todo.id"> <!--key vincula o id ao li. -->
            <input type="checkbox" v-model="todo.done">
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
            {{ todo.text }} <!--Texto digitado no input-->
            <button @click="removeTodo(todo)">X</button> <!--Vai remover o item do li.-->
        </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted"> <!--Quando botão for clicado ele vai mudar o texto dele.-->
        {{ hideCompleted ? 'Show all' : 'Hide completed'}}
    </button>
</template>

<style>
    .done {
        text-decoration: line-through;
    }
</style>