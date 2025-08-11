<template>
  <form @submit.prevent="handleSubmit">
    <button type="submit">Submit</button>
    <p v-if="message">{{ message }}</p>
  </form>
</template>

<script>
export default {
    data() {
      return {
          formData: {
    
      name: "",
      age: "",
      address: "",
      phone: "",
      dob: "",
      message: "",
      agree: false,
    

      errorName: "",
      errorAge: "",
      errorPhone: "",
      errorDob: "",
      errorAgree: "",

      success: false
    }
  }
},
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch("http://localhost:5000/api/users", {
          method: "POST",
          console.log(req.body),
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.formData)
        });
        const result = await response.json();
        this.message = result.message || "Data saved successfully!";
        
        // Clear form after saving
        this.formData.name = "";
        this.formData.email = "";
        // clear other fields similarly
        
      } catch (error) {
        this.message = "Error saving data: " + error.message;
      }
    }
  }
};
</script>
