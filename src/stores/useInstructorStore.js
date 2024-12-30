import { defineStore } from "pinia";
import axios from "axios";

export const useInstructorStore = defineStore('instructor', {
    state: () => ({
        hw_list: [],
        dt_list: [],
        student_list: []
    }),
    actions: {
        async fetchHw() {
            const response = await axios.get(
                'https://run.mocky.io/v3/ddd5c56e-a28f-406d-846c-7679d09bbc79');
            this.hw_list = response.data.assignments;
        },
        async fetchDt() {
            const response = await axios.get(
                'https://run.mocky.io/v3/4d90b812-3813-4d73-95f3-4e826b9a4328');
            this.dt_list = response.data;
        },
        async fetchStudent() {
            const response = await axios.get(
                'https://run.mocky.io/v3/39521bda-d488-4de9-9bba-6fb99a169347');
            this.student_list = response.data;
        }
    }
});