<script>
    export default {
        emits: ['response'], // Declara emits eventos.
        created() {
            // Emit com argumento.
            this.$emit('response', 'hello from child')
        }
    }
</script>

<template>
    <h2>Child component</h2>
</template>