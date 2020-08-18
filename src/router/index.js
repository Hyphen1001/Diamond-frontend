import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import IntimatePage from "@/views/IntimatePage";
import Regist from "@/views/Regist";
import Navigation from "@/components/Navigation";
import ChangeInfo from "@/views/ChangeInfo";
import work from "@/views/work";
import recent from "@/views/recent"
import createdoc from "@/views/createdoc";
import favorites from "@/views/favorites";
import mycreate from "@/views/mycreate";
import test from "@/views/test";
import bin from "@/views/bin"
import showdoc from "../views/showdoc";
import Header from "@/components/Header";
import template from "@/views/template";
import setteam from "@/views/setteam";
import blank from "@/views/blank";
import viewdoc from "@/views/viewdoc";


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
    {
      path: '/intimate',
      name: 'IntimatePage',
      component: IntimatePage
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/navigation',
      name: 'Navigation',
      component:Navigation
    },
    {
      path: '/changeinfo',
      name: 'ChangeInfo',
      component: ChangeInfo
    },
    {
      path:'/work',
      name:'work',
      component: work
    },
    {
      path:'/work/recent',
      name:'workrecent',
      component: recent
    },
    {
      path:'/work/mycreate',
      name:'mycreate',
      component: mycreate
    },
    {
      path:'/work/favorites',
      name:'favorites',
      component: favorites
    },
    {
      path:'/work/createdoc',
      name:'createdoc',
      component: createdoc
    },
    {
      path:'/test',
      name:'test',
      component: test
    },
    {
      path:'/work/bin',
      name:'bin',
      component: bin
    },
    {
      path:'/work/showdoc',
      name:'showdoc',
      component: showdoc
    },
    {
      path:'/work/recent',
      name:'recent',
      component: recent
    },

    {
      path:'/header',
      name:'header',
      component: Header
    },
    {
      path:'/work/template',
      name:'template',
      component: template
    },
    {
      path: '/work/setteam',
      name: 'setteam',
      component: setteam
    },
    {
      path: '/blank',
      name: 'blank',
      component: blank
    },
    {
      path: '/work/viewdoc',
      name: 'viewdoc',
      component: viewdoc
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
