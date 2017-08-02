import {
	INCREMENT,RECEIVE_USER_DATA
} from './mutation-types.js'



export default {
  [INCREMENT](state) {
    state.count++
  },
  [RECEIVE_USER_DATA](state,userData) {
    state.userData=userData;
  },
  decrement(state) {
    state.count--
  },

}
