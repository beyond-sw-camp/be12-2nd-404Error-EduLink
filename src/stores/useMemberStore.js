import { defineStore } from "pinia";
import axios from "axios";

export const useMemberStore = defineStore("member", {
  state: () => ({
    token: null,
    role: null,
    email: null,
  }),
  actions: {
    async signup(user, role) {
      try {
        const response = await axios.post(`/user/signup/${role}`, user);
        return response.data;
      } catch (error) {
        console.error("Signup error", error.response ? error.response.data : error.message);
        throw error;
      }
    },

    async login(user) {
      try {
        const response = await axios.post("/login", user);
        this.token = response.data.token;
        this.role = response.data.role;
        this.email = response.data.email;
        console.log("Login success", response.data);
        return { isSuccess: true, ...response.data };
      } catch (error) {
        console.error("Login error", error.response ? error.response.data : error.message);
        return { isSuccess: false, error: error.response ? error.response.data : error.message };
      }
    }
    
  },
});
