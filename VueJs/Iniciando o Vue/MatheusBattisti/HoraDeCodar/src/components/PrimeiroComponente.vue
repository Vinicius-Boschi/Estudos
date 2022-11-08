<template>
    <h1>Olá Vue!</h1>
    <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
    <MultiplosEventos />
    <Reutilizacao />
</template>

<script>

    import MultiplosEventos from './MultiplosEventos.vue'
    import Reutilizacao from './Reutilizacao.vue'

    export default {
        name: 'Primeiro Componente',
        components: {
            MultiplosEventos,
            Reutilizacao
        },
        data() {
            return {
                nome: 'Vinícius',
                profissao: 'Programador'
            }
        }
    }
</script>