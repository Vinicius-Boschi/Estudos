<script>
    import ChildComp from './ChildComp.vue'

    export default {
        components: {
            ChildComp
        },
        data() {
            return {
                childMsg: 'No childs msg yet!'
            }
        }
    }

</script>

<template>
    <ChildComp @response="(msg) => childMsg = msg" />
    <p>{{ childMsg }}</p>
</template>