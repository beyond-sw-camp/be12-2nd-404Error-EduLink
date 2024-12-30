import { defineStore } from "pinia";
import axios from "axios";





export const usebootcamp = defineStore('bootcamp', {
    state: () => ({
        boot_campList:[],
        boot_camp_curry:[]


    }),
    actions: {
        async getBootcamp() {
            const response = await axios.get(
                'https://2d667f41-5cc9-4f00-9851-c2d1ea285149.mock.pstmn.io/bootcamp');
            this.boot_campList = response.data;

            console.log(response.data);
        } ,
        async getBootcampcurry() {
            const response = await axios.get(
                'https://2d667f41-5cc9-4f00-9851-c2d1ea285149.mock.pstmn.io/get_curryday');
            this.boot_camp_curry = response.data;

            console.log(response.data);
        } 
    }
    
});