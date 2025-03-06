import { defineStore } from "pinia";
import axios from "axios";

export const useInstructorStore = defineStore('instructor', {
    state: () => ({
        hw_res: [],
        dt_res: [],
        student_res: []
    }),
    actions: {
        async fetchHw() {
            const response = await axios.get(
                '/api/board/list/1?page=0&size=10');
            this.hw_res = response.data;
        },
        async fetchDt() {
            const response = await axios.get(
                '/api/board/list/1?page=0&size=10');
            this.dt_res = response.data;
        },
        async fetchStudent() {
            const response = await axios.get(
                '/api/student/list?page=0&size=8');
            this.student_res = response.data;
        }
    }
});