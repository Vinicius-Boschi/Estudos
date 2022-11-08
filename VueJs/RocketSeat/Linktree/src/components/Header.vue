<template>
    <header>
        <div class="myImage">
            <img :src='image' :alt="alt">
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {
                image: 'https://i.pinimg.com/736x/dc/4f/21/dc4f218ebec787d040ed6296e045375a.jpg',
                alt: 'Danny Phantom'
            }
        }
    }
</script>

<style>
    .myImage {
        text-align: center;
    }

    .myImage img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        background-image: linear-gradient(to right, #9572FC, #43E7AD, #E2D45C);
        border: 3px solid transparent;
        border-radius: 50%;
        margin-top: 2rem;
    }
</style>