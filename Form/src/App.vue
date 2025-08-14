  <template>
    <div class="form-container">
      <h2>Contact Form</h2>

      <!-- <form @submit.prevent="handleSubmit"> -->
        <form>

        <label>Name *</label>
        <input v-model="name" type="text" placeholder="Enter name" />
        <p v-if="errorName" class="error">{{ errorName }}</p>

        <label>Age *</label>
        <input v-model="age" type="number" placeholder="Enter age" />
        <p v-if="errorAge" class="error">{{ errorAge }}</p>

        <label>Address</label>
        <input v-model="address" type="text" placeholder="Enter address" />

        <label>Phone *</label>
        <input v-model="phone" type="tel" placeholder="Enter phone number" />
        <p v-if="errorPhone" class="error">{{ errorPhone }}</p>

        <label>Date of Birth *</label>
        <input v-model="dob" type="date" />
        <p v-if="errorDob" class="error">{{ errorDob }}</p>

        <label>Message</label>
        <textarea v-model="message" placeholder="Type message..."></textarea>
  
        <label>
          <input type="checkbox" v-model="agree" /> I agree to the terms
        </label>
        <p v-if="errorAgree" class="error">{{ errorAgree }}</p>

        <!-- <button type="submit">Submit</button> -->
        <button type="button" @click="handleSubmit">Submit</button>
        <button type="button" @click="resetForm">Reset</button>
        <!-- <router-link to="/history" class="history-btn">View History</router-link> -->
        <button type="History" @click="historyButton">View History</button>
      </form>

      <!-- <div v-if="success == true" class="success">
        Form submitted successfully!
      </div> -->
    </div>
  </template>

  <script>
  // import submitHandler from "./components/submitHandler.vue";
  import axios from "axios";
  // import new_screen from "./components/New screen2"
  
  // const { MongoClient } = require('mongodb');
  export default {
    name: "FormPage",
    components: {},
    data() {
      return {
        // form fields
          name: "",
          age: "",
          address: "",
          phone: "", 
          dob: "",
          message: "",
          agree: true,   
        
          errorName: "",
          errorAge: "",
          errorAddress: "",
          errorPhone: "",
          errorDob: "",
          errorAgree: "",
          success: true
      };
    },
    methods: {
      async handleSubmit() {
        // clear errors
        this.errorName = "";
        this.errorAge = "";
        this.errorPhone = "";
        this.errorDob = "";
        this.errorAddress= "";
        this.errorAgree = "";

        if (!this.name) this.errorName = "Name is required.";
        if (!this.age) this.errorAge = "Age is required.";
        if (!this.phone) this.errorPhone = "Phone is required.";
        if (!this.dob) this.errorDob = "Date of birth is required.";
        if (!this.agree) this.errorAgree = "Please agree before submitting.";
        let register 
        if(!(!this.name && !this.age && !this.phone && !this.dob && !this.agree)){
          register = await axios.post("http://localhost:5000/api/newusers",{
            name: this.name,
            age: this.age,
            address: this.address,
            phone: this.phone,
            dob: this.dob,
            message:this.message,
            agree: this.agree
          })
        }
        // let register = await axios.post("http://localhost:5000/api/users",{
        //   name1: this.name,
        //   age1: this.age,
        //   address1: this.address,
        //   phone1: this.phone,
        //   dob1: this.dob,
        //   agree1: this.agree
        // })
        console.log('register::: ', register);
        await this.resetForm();
        // return register;  
        },
      
      resetForm() {
        console.log('Remove data console::: ');
        this.name = "";
        this.age = "";
        this.address = "";
        this.phone = "";
        this.dob = "";
        this.message = "";
        this.agree = false;
        this.errorName = "";
        this.errorAge = "";
        this.errorPhone = "";
        this.errorDob = ""; 
        this.errorAgree = "";
      },
      async historyButton() {
        // app.get("://localhost:27017/api/newusers", async (req, res)=>{
        //   const newusers=await db.collection.findall();
        //   res.json(newusers);
        // })
        console.log('1::: ', 1);
        let register = await axios.get("http://localhost:5000/api/getusers")
        console.log('register::: ', register);
      }
    },

      // async handleSubmit() {
      //   try {
      //     const response= await fetch("http://localhost:5000/api/users",{
      //       method: "POST",
      //       headers: {"Content-Type":"application/json"},
      //       body: JSON.stringify(this.formData)
      //     });
      //       const result = await response.json();
      //       this.message = result.message || "Data saved successfully!";
      //       console.log('Refresh::: ', );

        
      //   //   this.formData = {
      //   //   name: "",
      //   //   age: "",
      //   //   address: "",
      //   //   phone: "",
      //   //   dob: "",
      //   //   message: "",
      //   //   agree: false,
      //   //   errorName: "",
      //   //   errorAge: "",
      //   //   errorPhone: "",
      //   //   errorDob: "",
      //   //   errorAgree: "",
      //   //   success: false
      //   // }; 
      // }catch (error) {
      //     this.message = "Error: " + error.message;
      //   }
      // }
  };
  </script>


  <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
  <style scoped>
  .form-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 8px;
  }
  label {
    display: block;
    margin-top: 10px;
    font-weight: bold;
  }
  input, textarea {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    border: 2px solid #cfa8a8;
    border-radius: 4px;
  }
  textarea {
    min-height: 50px;
  }
  button {
    margin-top: 12px;
    padding: 10px;
    border: none;
    cursor: pointer;
    background: #42b883;
    color: white;
    border-radius: 4px;
  }
  button[type="button"] {
    background: #ff4d4d;
    margin-left: 10px;
    margin-right: 10px;
    padding: 8 px;
  }
  .history-btn {
    display: inline-block;
    margin-top: 10px;
    padding: 8px;
    background: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }
  .error {
    color: red;
    font-size: 0.85em;
  }
  .success {
    margin-top: 15px;
    padding: 10px;
    background: #d4edda;
    color: #155724;
    border-radius: 4px;
    text-align: center;
  }

  </style>
