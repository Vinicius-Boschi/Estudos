<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <h3>User</h3>
    {{ user.firstName }}
    {{ user.lastName }}
    <br><br>

    <h4>Full Name</h4>
    {{ fullName }} 
    <br><br>
    <button @click="user.firstName = 'Pepper'">Change name</button>
  </main>

  <Button data-vue="Jon" @update="getUpdate">Click me</Button>

</template>

<script>
  import { ref, computed, watch } from 'vue'
  import Button from './components/Button.vue'

  export default {
    setup() {
        const user = ref({
          firstName: "Tony",
          lastName: "Stark"
        })

        const fullName = computed(() => {
          return `${user.value.firstName} ${user.value.lastName}`;
        })

        const getUpdate = (data) => {
          console.log("getUpdate", data)
        }
        
        watch(user, () => {
          console.log("User changed");
        }, {
          deep: true // Pra poder observar o objeto inteiro.
        })

        return {
          user,
          fullName,  
          getUpdate 
        }
    },
    components: { Button }
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

button {
  width: 7rem;
  height: 2rem;
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