import { createStore } from 'vuex'

export default createStore({
    state: {
        user: {
            firstName: 'Tony',
            lastName: 'Stark',
            email: 'tony@stark.com'
        },
        products: [
            {
                id: 1,
                name: 'Bola',
                price: 100
            },
            {
                id: 2,
                name: 'Chuteira',
                price: 200
            },
            {
                id: 3,
                name: 'Meião',
                price: 50
            }
        ],
        cart: []
    },
    mutations: {
        storeUser(state, data) {
            state.user = data   
        },
        addProduct(state, data) {
            state.cart.push(data)
        },
        removeProduct(state, id) {
            const index = state.cart.findIndex(obj => obj.id === id)
            state.cart.splice(index, 1)
        }
    },
    getters: {
        total(state) {
            return state.cart.reduce((total, item) => total += item.price, 0)
        }
    },
    actions: {
        storeUser({commit}, data) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                    commit('storeUser', data)
                }, 3000)
            })
        }
    }
}) 