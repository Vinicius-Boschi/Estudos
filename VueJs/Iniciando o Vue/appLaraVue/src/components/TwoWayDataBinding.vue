<template>
    <div>
        <h3>Two way data-binding</h3>
        <p>v-model -> formulários</p>
    </div>

    <br><br><br>

    <div>
        <label>Name</label><br>
        <input v-model="name" type="text"><br>
        {{ name }}

        <br><br>
        
        <div>
            <label>Sports</label> <br>
            <select v-model="sports">
                <option value="">Choose</option>
                <option value="futebol">futebol</option>
                <option value="skate">skate</option>
                <option value="tenis">tenis</option>
            </select><br>
            {{ sports }}
        </div>

        <br><br>

        <div>
            <label>Newsletter</label><br>
            <input v-model="newsletter" type="radio" value="yes"> Yes
            <input v-model="newsletter" type="radio" value="no"> No <br>
            {{ newsletter }}
        </div>

        <br><br>

        <div>
            <label>Contract</label><br>
            <input v-model="contract" type="checkbox"> Accept our terms...<br>
            {{ contract }}
        </div>

        <br><br>

        <div>
            <label>Colors you like the most</label><br>
            <input v-model="colors" type="checkbox" value="blue"> Blue
            <input v-model="colors" type="checkbox" value="red"> Red <br>
            {{ colors }}
        </div>

    </div>
</template>

<script>
    export default {
        name: 'TwoWayDataBinding',
        data() {
            return {
                name: 'Tony Stark',
                sports: '',
                newsletter: '',
                contract: false,
                colors: []
            }
        }
    }
</script>

<style>

</style>