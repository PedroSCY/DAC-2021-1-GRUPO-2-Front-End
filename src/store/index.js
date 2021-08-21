import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from "./actions"

export default new Vuex.Store({
    state:state,
    mutations:mutations,
    actions:actions
})