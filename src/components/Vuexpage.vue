<template>
  <div id="app">
    <!--file : /my-project/src/vuex-demo/v02_counter.vue -->
    <h1>點擊: {{ $store.state.count }} 次數,此為 {{ evenOrOdd }}, {{bigNumber}} <br></h1>
    <button class="btn"  @click="increment">+</button>
    <button class="btn"  @click="decrement">-</button><br>
    <button class="btn"  @click="incrementIfOdd">奇數時增加</button><br>
    <button class="btn"  @click="incrementAsync">1秒後增加</button><br>

    <button class="btn"  @click="getUserData">async getUserData</button>

    <button class="btn"  @click="getUserDataFailed">async failed getUserData</button>
    <div  v-if="showLoading">載入中</div>
    <div v-for="user in $store.state.userData">{{user.name}}</div>
    <div>{{msg}}</div>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import  fetch  from '../config/fetch'

  export default {
    data () {
      return {
        showLoading: false,
        users: [],
        msg:'',
      }
    },
    computed: mapGetters([
      'evenOrOdd',
      'bigNumber'
    ]),
    methods:{...mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync',
      'setUserData',

    ]),
      async getUserData(){
        this.showLoading=true;
        this.users = await fetch('https://jsonplaceholder.typicode.com/users');
        this.showLoading=false;
        this.setUserData(this.users);


      },
      async getUserDataFailed(){
        this.showLoading=true;
        let response  = await fetch('https://jsxxxxx');
        if(response)
          this.users=response;
        else
          this.msg=response;

        this.showLoading=false;

      }
    }






  }
</script>

<style scoped>
  button.btn {
    margin: 10px;
    font-size: larger;
  }
</style>
