<template>
    <div class="card">
        {{ product.name }} - {{ product.price }}
        <button @click="addProduct()">AddProduct</button>
        <button @click="removeProduct()">RemoveProduct</button>

    </div>
</template>

<script>
    export default {
        props: {
            product: Object
        },
        methods: {
            addProduct() {
                this.$store.commit('addProduct', this.product)
            },
            removeProduct() {
                this.$store.commit('removeProduct', this.product.id)
            }
        }
    }
</script>

<style>
    .card {
        background-color: bisque;
        padding: 6px;
        margin-bottom: 5px;
        color: #000;
    }
</style>