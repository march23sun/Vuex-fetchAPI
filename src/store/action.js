import {
  INCREMENT,RECEIVE_USER_DATA
} from './mutation-types.js'

export default {
  setUserData(i,data){
    let {commit}=i;
    commit(RECEIVE_USER_DATA,data)
  },
  increment: ({
    commit
  }) => commit(INCREMENT),
  decrement: ({
    commit
  }) => commit('decrement'),
  incrementIfOdd({
    commit,
    state
  }) {
    if ((state.count + 1) % 2 === 0) {
      commit(INCREMENT)
    }
  },
  //異步
  incrementAsync({
    commit
  }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(INCREMENT)
        resolve()
      }, 1000)
    })
  }

}
