<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <button @click="updateUser()">Save user</button>
    <br><br>
  </header>

  <AppProducts />
  <br>
  <p>Total: {{ $store.getters.total }}</p>
  
  <br><br>

  {{ $store.state.user.firstName }} {{ $store.state.user.lastName }}

</template>

<script>
  import AppProducts from "./components/Products/AppProducts.vue"

  export default {
    methods: {
      updateUser() {
        const newUser = {
          firstName: "Steve",
          lastName: "Rogers",
          email: "steve@rogers.com"
      }
      this.$store.dispatch('storeUser', newUser).then(() => {
        console.log('FINISH HIM!!!')
      })
    }
  },
  components: { AppProducts }
}

</script>

<style scoped>
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style>