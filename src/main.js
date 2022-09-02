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
        {path:'/', redirect:'/teams'},
        {name:'teams', path:'/teams', components:{default: TeamsList, footer: TeamsFooter} , children:[
            {name:'team-members', path:':teamId', component: TeamMembers, props: true}
        ]},
        {path:'/users', components:{default: UsersList, footer: UsersFooter } },
        {path:'/:notFound(.*)', component: four0four}
    ],
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition
        }else{
            return {left: 0, top: 0};
        }
    }
})

router.beforeEach((to,from,next)=>{
    console.log('Before Each');
    console.log(to,from);
    // if(to.name === 'team-members'){
    //     next();
    // }else{
    //     next({name:'team-members', params:{teamId:'t2'}});
    // }
    next();
})

const app = createApp(App)
app.use(router);
app.mount('#app');
