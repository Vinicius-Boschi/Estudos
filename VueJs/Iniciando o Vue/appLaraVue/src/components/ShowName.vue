<template>
    <div v-show="showName">
        Nome: {{ firstName }} <br>
        Sobrenome: {{ lastName }}
    </div>

    <div v-if="accessLevel === 'admin'">Usuário Admin</div>
    <div v-else-if="accessLevel === 'marketing'">Usuário Marketing</div>
    <div v-else>Usuário normal</div>
</template>

<script>
    export default {
        name: 'ShowName',
        data() {
            return {
                firstName: 'Tony',
                lastName: 'Stark',
                showName: false,
                accessLevel: ''
            }
        }
    }
</script>

<style>

</style>