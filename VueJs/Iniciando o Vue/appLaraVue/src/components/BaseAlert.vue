<template>
  <div :class="baseClass">
    {{ text }}

    <button @click="onClick()">X</button>

  </div>
</template>

<script>
    export default {
        name: 'BaseAlert',
        props: ['variant', 'text'],
        computed: {
            baseClass() {
                return [
                    'alert',
                    this.variant ? `alert-${this.variant}` : ''
                ]
            }
        },
        methods: {
            onClick() {
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
    .alert {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 30%;
        padding: 5px;
        border-radius: 6px;
        color: #FFF;
        background-color: #DDD;
    }

    .alert-success {
        background-color: #42B983;
    }

    .alert-danger {
        background-color: #FF0000;
    }

    .alert-warning {
        background-color: #FFA500;
    }

</style>