import { defineStore } from "pinia";
import axios from "axios";

export const useInstructorStore = defineStore('instructor', {
    state: () => ({
        hw_res: [],
        dt_res: [],
        student_res: []
    }),
    actions: {
        async fetchHw(page = 0, size = 5) {
            const response = await axios.get(`/api/board/list/1?page=${page}&size=${size}`);
            this.hw_res = response.data;
        },
        async fetchDt(page = 0, size = 5) {
            const response = await axios.get(`/api/board/list/1?page=${page}&size=${size}`);
            this.dt_res = response.data;
        },
        async fetchStudent() {
            const response = await axios.get('/api/student/list?page=0&size=8');
            this.student_res = response.data;
        }
    }
});