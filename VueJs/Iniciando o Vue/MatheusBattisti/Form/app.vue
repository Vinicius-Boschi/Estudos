<script>
    export default {
        data() {
            return {
                text: '' // Valor que será adicionado ao input.
            }
        },
        methods: {
            onInput(e) {
                this.text = e.target.value // Tudo que for digitado no input irá aparecer na tela.
            }
        }
    }
</script>

<template>
    <input :value="text" @input="onInput" placeholder="Type here"> <!--:value é a mesma coisa que v-model='text', que irá sincronizar automaticamente o <input> com o valor digitado nele -->
    <p>{{ text }}</p> <!--Onde o valor do input será mostrado.-->
</template>