<template>
    <div>
       <input v-model="name" type="text"><br>
    {{ name }} <br>

        <input v-model="user.firstName" type="text"><br>
        <input v-model="user.lastName" type="text"><br>
        {{ user.firstName }} {{ user.lastName }}

    </div>
    
    <br><br><br>

    <select v-model="pageCount">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
    </select>

</template>

<script>
    export default {
        name: 'Watch',
        data() {
            return {
                name: '',
                pageCount: 5,
                user: {
                    firstName: '',
                    lastName: ''
                }
            }
        },
        watch: {
            name(vl) {
                if (vl.length >= 3) {
                    this.saveUserName()
                }
            },
            pageCount() {
                this.changePage()
            },
            user: {
               handler() {
                console.log('User alterado')
               },
               deep: true
            }
        },
        methods: {
            saveUserName() {
                console.log('Ajax')
                console.log(this.name)
            },
            changePage() {
                console.log('Ajax changePage')
            }
        }
    }
</script>

<style>

</style>