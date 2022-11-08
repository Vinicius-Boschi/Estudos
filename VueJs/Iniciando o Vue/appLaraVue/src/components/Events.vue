<template>
    <div>
        <button @click.once="onClick">Send</button>
    </div><br>

    <div @mouseover="onMouseOver" @mouseout="onMouseOut">
        Mouse Over
    </div>

    <br><br>

    <div>
        <form action="https://google.com" @submit.prevent="onSubmit">
            <input type="text" @keyup="onKeyUp">
            <button type="submit">Send</button>
        </form>
    </div>

</template>

<script>
    export default {
        name: 'Events',
        methods: {
            onClick($event) {
                console.log('click', $event)
            },
            onMouseOver($event) {
                console.log('mouse over', $event)
            },
            onMouseOut($event) {
                console.log('mouse out', $event)
            },
            onSubmit($event) {
                console.log('submit', $event)
            },
            onKeyUp($event) {
                console.log('onKeyUp', $event)
            }
        }
    }
</script>

<style>

</style>