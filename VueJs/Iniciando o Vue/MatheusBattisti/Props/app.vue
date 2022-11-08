<script type="module">
    import ChildComp from './ChildComp.vue'

    export default {
        components: { // É definido o componente.
            ChildComp
        },
        data() {
            return {
                greeting: 'Hello from parent!' // Aqui é onde é definido o conteúdo da mensagem.
            }
        }
    }

</script>

<template>
    <ChildComp :msg="greeting" /> <!--Esse :msg é a mesma coisa de que colocar o conteúdo da mensagem dentro da tag.-->
</template>