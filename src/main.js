import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import four0four from './components/nav/404.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(), //to identify web history
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      components: { default: TeamsList, footer: TeamsFooter },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    { path: '/users', components: { default: UsersList, footer: UsersFooter } ,
    beforeEnter(to,from,next){
        console.log('users before enter');
        console.log(to, from);
        next();
    }},
    { path: '/:notFound(.*)', component: four0four },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  console.log('Global Before Each');
  console.log(to, from);
  // if(to.name === 'team-members'){
  //     next();
  // }else{
  //     next({name:'team-members', params:{teamId:'t2'}});
  // }
  next();
});

router.afterEach((to,from)=>{
    //you can use this to send analytics to where your users routed;
    console.log('Global after each');
    console.log(to,from);
})

const app = createApp(App);
app.use(router);
app.mount('#app');
