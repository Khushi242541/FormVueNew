<template>
  <div>
    <h1>
      <form>
        <input type="text" v-model="username" placeholder="Enter your name" />
        <button type="button" @click="handleSubmit">Submit</button>
        
        <p v-if="submittedName">Hello, this is a VUE Website, {{ submittedName }}! <br>Welcome to the page.</p>
      </form>
      <Historybox :history="historyList"/>
      
      <!-- The Form Interface!! -->
      <!-- {{name}} -->
      <!-- <input type= "text" v-model="name" placeholder="Enter your name" />  -->
    </h1>
  </div>

</template>

<!-- works but sayHi isn't generating-->
<script>
import HistoryBox from "./components/Historybox.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Dropdown from "./components/Dropdown.vue";
import Calender from "./components/Calender.vue";
// import HelloWorld from "./componenets/HelloWorld"; 

export default{
  data(){
    return{
      username:"",
      submittedName:"",
      historyList: []
    }
  },  
  methods:{
    handleSubmit(){
      this.submittedName = this.username;
      this.username = "";
    }
  },
  components:{
    HistoryBox,
    TheWelcome,
    Dropdown,
    Calender
  }  
}
</script>
<style>
h1 {
  color: darkviolet;
  font-family: Arial, sans-serif;
  text-align: center;
}

button {
  padding: 8px 15px;
  background: darkviolet;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: mediumvioletred;
}

</style>
 