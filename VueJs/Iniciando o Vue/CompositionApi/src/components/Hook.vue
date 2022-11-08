<template>
    <div>
        <h1>Hook</h1>
    </div>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from '@vue/runtime-core'

    export default {
        setup() {
            onBeforeMount(() => {
                console.log('onBeforeMount')
            })
            onMounted(() => {
                console.log('onMounted')
            })
            onBeforeUnmount(() => {
                console.log('onBeforeUnmount')
            })
            onUnmounted(() => {
                console.log('onUnmounted')
            })
        }
    }
</script>

<style>

</style>