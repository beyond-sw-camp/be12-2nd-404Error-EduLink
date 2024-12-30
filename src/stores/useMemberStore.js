import { defineStore } from "pinia";
import axios from "axios";

export const usememberStore = defineStore("user", {
  state: () => ({
  }),
  actions: {
    async signup(User) {
      const response = await axios.post(
        "http://localhost:8080/user/signup" ,User

        

      );
      return response.data;
    },

    async Login(user){
      const response = await axios.post(  
        "http://localhost:8080/login", user
      );
      return response.data;
    }
  },
});



