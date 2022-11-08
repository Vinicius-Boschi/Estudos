<template>
  <button @click="sendData">
    <slot>
        {{ variant }}
    </slot>
    <slot name="icon"></slot>
  </button>
</template>

<script>
    export default {
        props: {
            variant: {
                type: String,
                default: "success"
            }
        },
        setup(props, { emit }) {
                    
            const sendData = () => {
                emit("update", "Hello from child")
            }  

            return {
                sendData
            }
        }
    }
</script>

<style>

</style>