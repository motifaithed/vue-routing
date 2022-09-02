import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import four0four from './components/nav/404.vue';

const router = createRouter({
    history: createWebHistory(), //to identify web history
    routes: [
        {path:'/', redirect:'/teams'},
        {path:'/teams', component: TeamsList, children:[
            {path:':teamId', component: TeamMembers, props: true}
        ]},
        {path:'/users', component: UsersList},
        {path:'/:notFound(.*)', component: four0four}
    ]
})

const app = createApp(App)
app.use(router);
app.mount('#app');
