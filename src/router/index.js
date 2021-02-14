import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import ExamList from '../views/ExamList.vue'
import AddExam from '../views/AddExam.vue'
import EditExam from '../views/EditExam.vue'
import ExamMgm from '../views/ExamMgm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ExamMgm',
    component: ExamMgm,
    children:[
      {
        path: 'exam',
        name: 'ExamList',
        component: ExamList
      },
      {
        path: 'exam/ajout',
        name: 'AddExam',
        component: AddExam
      },
      {
        path: 'exam/edit',
        name: 'EditExam',
        component: EditExam
      }
    ]

  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
