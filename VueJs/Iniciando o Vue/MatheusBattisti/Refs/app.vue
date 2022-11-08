<script>
    export default {
        mounted() {
            this.$refs.p.texContent = 'Mounted' // É chamado de gancho de vida, permitindo registrar um retorno de chamada para ser chamado em determinados momentos.
        }
    }
</script>

<template>
    <p ref="p">Hello!</p> <!--Ref é uma referência de modelo-->
</template>