<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">SaveChanges</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data(){
    return{
      saveChange: false
    }
  },  
  inject: ['users'],
  methods:{
    confirmInput(){
      this.$router.push('/teams');
    },
    saveChanges(){
      this.saveChange = true;
    }
  },
  beforeRouteEnter(to,from,next){
    console.log('before route enter');
    console.log(to,from);
    next();
  },
  beforeRouteLeave(to,from,next){
    console.log('before route leave');
    console.log(to, from);
    if(this.saveChange){
      next();
    }else{
      const confirmChange = confirm('are you sure you want to leave?Changes you made will not be saved');
      next(confirmChange);
    }
    
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>