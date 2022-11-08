<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes tecnologias para backend: </p>
        <ul>
            <li v-for="(tecnologia, index) in backend_tecnologias" :key="index">{{ tecnologia }}</li>
        </ul>
        <p>Utilizo as seguintes tecnologias para front-end:</p>
        <ul>
            <li v-for="tecnologia in frontend_tecnologias" :key="tecnologia.id">
                {{ tecnologia.linguagem }}
            </li>
        </ul>
        <div>
            <button @click="showEmail">{{ textoBotao }}</button>
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <p>Para acessar meu portfólio <a :href="meu_link" target='_blank'>basta clicar aqui</a></p>
        <Picture />
    </div>
</template>

<script>
    
    import Picture from './Picture.vue'
    
    export default {
        name: 'Info',
        components: {
          Picture  
        },
        props: {
            email: String,
            esta_trabalhando: Boolean
        },
        data() {
            return {
                mostrar_email: false,
                meu_link: 'http://google.com',
                textoBotao: 'Mostrar email',
                backend_tecnologias: ['JavaScript', 'PHP', 'Python'],
                frontend_tecnologias: [
                    {id: 1, linguagem: 'HTML'},
                    {id: 2, linguagem: 'CSS'},
                    {id: 1, linguagem: 'Vue'}
                ]
            }
        },
        methods: {
            showEmail() {
                this.mostrar_email = !this.mostrar_email
                if(!this.mostrar_email) {
                    this.textoBotao = 'Mostrar email'
                } else {
                    this.textoBotao = 'Esconder email'
                }
            }
        }
    }
</script>