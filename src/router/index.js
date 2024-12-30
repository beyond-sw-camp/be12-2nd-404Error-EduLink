import { createRouter, createWebHistory } from 'vue-router'



import LoginForm from '../pages/LoginForm.vue';

import Aside from '../pages/Aside.vue';
import FormsView from '../pages/FormsView.vue';
import SignupForm from '../pages/SignupForm.vue';
import { h } from 'vue';
import Studentdashboard from '../pages/Student/Studentdashboard.vue';
import BootcampInfo from '../pages/Student/BootcampInfo.vue';
import ManagerDashboard from '../pages/manager/ManagerDashboard.vue';
import StudentList from '../pages/manager/StudentList.vue';
import InstructorList from '../pages/manager/InstructorList.vue';
import ManagerList from '../pages/manager/ManagerList.vue';
import AttendanceManage from '../pages/manager/AttendanceManage.vue';

import InstructorDash from '../pages/instructor/InstructorDash.vue';

import ExamList from '../pages/manager/ExamList.vue';
import ExamDetails from '../pages/manager/ExamDetails.vue';



import InstStudInform from '../pages/Instructor/InstStudInform.vue';
import StudentAside from '../pages/Student/StudentAside.vue';
import bootcampList from '../pages/bootcampList.vue';



import bbboard from '../pages/board/bbboard.vue';
import notice from '../pages/board/notice.vue';
import freeboard from '../pages/board/freeboard.vue';
import managerboard from '../pages/board/managerboard.vue';
import bbnoticeboard from '../pages/board/bbnoticeboard.vue';
import boardform from '../pages/board/boardform.vue';
import deleteboard from '../pages/board/deleteboard.vue';


import common from '../pages/commondashboard.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/a', component: FormsView },
        { path: '/', component: LoginForm, meta: { hideAside: true, hideNav: true } },
        { path: '/Signup', component: SignupForm, meta: { hideAside: true, hideNav: true } },
        {
            path: '/studentdashboard',
            component: Studentdashboard,

            meta: { asideComponent: StudentAside  ,hideAside: false }, // StudentAside를 항상 사용
        },     

          

        { path: '/inst/dashboard', component: InstructorDash },
        { path: '/inst/studinform', component: InstStudInform },
        { path: '/manager/dashboard', component: ManagerDashboard },
        { path: '/manager/studentList', component: StudentList },
        { path: '/manager/instructorList', component: InstructorList },
        { path: '/manager/managerList', component: ManagerList },

        { path: '/manager/attendanceManage', component: AttendanceManage},

        { path: '/manager/examList', component: ExamList},
        { path: '/manager/examDetails', component: ExamDetails},

        { path: '/bootcamp', component : bootcampList },

        { path: '/manager/attendanceManage', component: AttendanceManage },

        { path: '/bootcamp', component : bootcampList },
        { path: '/board/bbboard', component : bbboard },
        { path: '/board/bbnoticeboard', component : bbnoticeboard },
        { path: '/board/boardform', component : boardform },
        { path: '/board/deleteboard', component : deleteboard },
        { path: '/board/freeboard', component : freeboard },
        { path: '/board/managerboard', component : managerboard },
        { path: '/board/notice', component : notice },
 

        { path: '/common', component: common },
        { path: '/bootcampInfo', component: BootcampInfo },



        // { path: '/c', component: Create },
        // { path: '/d', component: Signup },
        // { path: '/e', component: Login },
        // { path: '/f', component: Create },
        // { path: '/g', component: Signup }

    ]
})

export default router;