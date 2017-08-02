<template>
  <div class="member">

    <h1>{{renderTitle()}}</h1>
    <p/>
    <input class="text-input" type="text" v-model="msg"/>
    <p/>
    <table>
      <tr>
        <th>項目名稱</th>
        <th>語法</th>
        <th>效果</th>
        <th>說明</th>
      </tr>
      <tr>
        <td>單向綁定</td>
        <td v-text="'{{msg}}'"></td>
        <td>{{msg}}</td>
        <td></td>
      </tr>
      <tr>
        <td>單次綁定</td>
        <td v-text="'<p v-once>單次綁定:{{ msg }}</p>'"></td>
        <td><p v-once>{{ msg }}</p></td>
        <td></td>
      </tr>
      <tr>
        <td>運算</td>
        <td v-text="'{{ msg.length>6 ? `YES` : `NO` }}'"></td>
        <td>{{ msg.length>6 ? 'YES:'+msg.length : 'NO:'+msg.length }}</td>
        <td>運算(length>6)</td>
      </tr>


      <tr>
        <td>HTML 解析</td>
        <td v-text="'<p v-html=`raw_htm`></p>'"></td>
        <td><p v-html="raw_html"></p></td>
        <td></td>
      </tr>
      <tr>
        <td>屬性綁定</td>
        <td v-text="'<a v-bind:href=`api_url`>link</a>'"></td>
        <td><a v-bind:href="api_url">link</a></td>
        <td></td>
      </tr>
      <tr>
        <td>按鈕綁定事件</td>
        <td
          v-text="'<button class=&quot;btn&quot; :class=&quot;[ &quot;btn&quot;, &quot;btn-&quot;+btnType ]&quot; @click=&quot;toggle&quot;>{{ btnType }}</button>'"></td>
        <td>
          <button class="btn" :class="[ 'btn', 'btn-'+btnType ]" @click="toggle">{{ btnType }}</button>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>style屬性連結</td>
        <td v-text="''"></td>
        <td>
          <div :style="{fontSize: msg.length*4  + 'px' }">{{msg}}</div>
        </td>
        <td>隨字體長度變更字型大小</td>
      </tr>
      <tr>
        <td>IF-ELSE</td>
        <td v-text="''"></td>
        <td>
          <h3 v-if="msg.length>6">長</h3>
          <h3 v-else="msg.length<=6">短</h3>
          <h1 v-show="msg.length>6">Long</h1>
          <h1 v-show="msg.length<=6">Short</h1>
        </td>
        <td>字串>6:長 字串<=6:短</td>
      </tr>

      <tr>
        <td>Watch</td>
        <td v-text="''"></td>
        <td v-html="msgWatch"></td>
        <td>變更觸發</td>
      </tr>

      <tr>
        <td>computed</td>
        <td v-text="''"></td>
        <td>{{userMsg}}</td>
        <td>相依data改變，即更新computed</td>
      </tr>
      <tr>
        <td>按鈕onclick</td>
        <td></td>
        <td>
          <div id="clickEventDemo">
            <button v-on:click="countUserClickon(counter)">Add 1</button>
            <p>The button above has been clicked {{ counter }} times.</p>
          </div>
        </td>
        <td></td>
      </tr>
      <tr>

      <tr>
        <td>常用表單元件</td>
        <td></td>
        <td>
          <div><input type="text" v-model="msg" placeholder="edit here"></div>
          <div><textarea v-model="msg" placeholder="edit here"></textarea></div>

          <div><select v-model="selected">
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
            <span>Selected: {{ selected }}</span></div>


        </td>
        <td></td>
      </tr>
      <tr>
        <td>複選框</td>
        <td v-text="''"></td>
        <td>
          <span v-if="users.length===0">GET API DATA FIRST</span>
          <div >
            <span v-for="user in users">
             <input type="checkbox" v-model="groupSelected" :value="user.name" >
              {{user.id}}
            </span>

          </div>
          <span v-for="s in groupSelected">{{s}}</span>

        </td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td v-text="''"></td>
        <td></td>
        <td></td>
      </tr>


      <tr>
        <td>vue-resource</td>
        <td>
        </td>
        <td>
          <button class="btn" @click="getData">GET</button>
          <h1>{{ status }}</h1>
          <h2 v-for="user in users">{{user['name']}}</h2></td>

        <td></td>
      </tr>

      <tr>
        <td>axios </td>
        <td>
        </td>
        <td>
          <button class="btn" @click="getDataAxios">GET</button>
          <h1>{{ status }}</h1>
          <h2 v-for="user in users">{{user['name']}}</h2></td>

        <td>vue-resource</td>
      </tr>



      <tr>
        <td>For-loop</td>
        <td v-text="''"></td>
        <td><P v-for="(value, key) in users">
          <span v-for="(value, key) in value">{{key}},</span>
        </P>
        </td>
        <td>印出KEY值</td>
      </tr>


    </table>


  </div>


</template>

<script>

  import VueMarkdown from 'vue-markdown'
import axios from 'axios';
  export default {

    name: 'Member',
    data () {
      return {
        groupSelected:[],
        api_url: 'https://jsonplaceholder.typicode.com/users',
        source: '',
        msg: 'defaultMsg',
        memberName: 'Tom',
        raw_html: '<div>html content</div>',
        status: '',
        btnType: 'default',
        users: [],
        msgWatch: '',
        counter: 0,
        selected: "A"

      }
    },

    methods: {
      renderTitle() {
        return '練習'
      },
      countUserClickon(c) {
        this.counter += 1;
        console.log('Count', c);
      },

      toggle(){
        this.btnType = ( this.btnType === 'default' ) ? 'primary' : 'default';
      },
      getDataAxios(){
        var self = this;
        axios.get(this.api_url)
          .then(function (response) {

            self.users = response.data;
          })
          .catch(function (error) {
            /* 失敗，發生錯誤，然後...*/
          });

      }
    ,
      getData(){
        this.status = '載入中'
        this.users = [];
        this.$http.get(this.api_url).then((response) => {
          response = response.body;

          this.users = response;

        }).catch((response) => {
          /* 失敗，發生錯誤，然後...*/
        }).finally(() => {
          this.status = '載入完成'
        });

      }

    },
    created() {


    },
    watch: {
      msg(val, old) {
        this.msgWatch = '<p>原' + old + '</p><p>變更' + val + '</p>';
      },
      users: {
        handler: (val, oldVal) => {
          console.log('users data change');
        },
        deep: true
      },

    },
    computed: {
      userMsg(){
        return '(length) msg:' + this.msg.length + ' users:' + this.users.length
      }

    },
    components: {
      VueMarkdown
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {

    padding: 40px;
    width: 100vw;
  }

  tr {
    height: 40px;

  }

  td {
    border-bottom: 1px solid #ddd;

  }

  .btn-default {
    color: #fd5d5f;
  }

  .btn-primary {

    color: #42b983;
  }

  .text-input {
    position: fixed;
    top: 0px;
    right: 5px;
    font-size: 30px;

  }


</style>
