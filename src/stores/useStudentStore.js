import { defineStore } from "pinia";
import axios from "axios";





export const useStudentStore = defineStore('student', {
    state: () => ({
        student_check: []
        ,curry_check: []
        ,homework_check: []
    }),
    actions: {
        async getStudent() {
            const response = await axios.get(
                'https://2d667f41-5cc9-4f00-9851-c2d1ea285149.mock.pstmn.io/get_huga');
            this.student_check = response.data;

            console.log(response.data);
        }
        ,async get_curry(){

            const response = await axios.get(
                'https://2d667f41-5cc9-4f00-9851-c2d1ea285149.mock.pstmn.io/get_curry');
            this.curry_check = response.data;

            console.log(response.data);
        }
        ,async get_homework(){
            const response = await axios.get(
                'https://2d667f41-5cc9-4f00-9851-c2d1ea285149.mock.pstmn.io/get_homework');
            this.homework_check = response.data;

            console.log(response.data);

        }
    }
    
});