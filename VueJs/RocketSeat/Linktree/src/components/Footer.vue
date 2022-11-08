<template>
    <footer class="footer">
        <div class="titleFooter">
            <h3>Feito por Vinícius <span>Boschi</span></h3>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style>
    .footer {
        background-color: #2A2634;
        height: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .titleFooter {
        color: #FFF;
        font-weight: 100;
    }

    .titleFooter h3 {
        font-weight: normal;
    }

    .titleFooter span {
        font-weight: bold;
    }
</style>