<template>
  <div>

    <ul>
      <li v-for="s in sites"><a :href="s.url" target="_blank">{{s.title}}</a></li>
    </ul>

  </div>


</template>

<script>



export default {

  name: 'Member',
  data () {
    return {
      sites:[
        {
            title:'Chrome擴充功能 Vue.js devtools',
            url:'https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd',
        },
        {
          title:'github vuex',
          url:'https://github.com/vuejs/vuex',
        },
        {
          title:'告別 JavaScript 的 Promise！迎接 Async/Await 的到來',
          url:'https://jigsawye.com/2016/04/18/understanding-javascript-async-await/',
        },
        {
          title:'github vuex-learn ',
          url:'https://github.com/bhnddowinf/vuejs2-learn/blob/master/learn-vuex/vuex-learn.md',
        },
        {
          title:'mapActions with local Component methods? ',
          url:'https://github.com/vuejs/vuex/issues/367',
        },

      ]
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  ul{
    text-align: left;
  }

  li {
    display: block;
    margin: 0 10px;
    line-height: 40px;
  }



  a{
   font-size: 20px;
    color: #1646ff;
  }

</style>
