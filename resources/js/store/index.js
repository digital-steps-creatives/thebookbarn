import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import cart from '@/store/cart'

const store = createStore({
    plugins:[
        createPersistedState()
    ],
    modules:{
     cart
    }
})

export default store