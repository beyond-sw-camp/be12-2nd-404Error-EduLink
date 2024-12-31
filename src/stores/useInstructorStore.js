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
                'https://run.mocky.io/v3/496abf82-a1fa-4504-87fc-6b43a1a07e21');
            this.hw_list = response.data.assignments;
        },
        async fetchDt() {
            const response = await axios.get(
                'https://run.mocky.io/v3/496abf82-a1fa-4504-87fc-6b43a1a07e21');
            this.dt_list = response.data.datas;
        },
        async fetchStudent() {
            const response = await axios.get(
                'https://run.mocky.io/v3/496abf82-a1fa-4504-87fc-6b43a1a07e21');
            this.student_list = response.data.students;
        }
    }
});