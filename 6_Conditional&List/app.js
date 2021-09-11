const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enterGoals: ''
    };
  },
  methods:{
    addGoal(){
      this.goals.push(this.enterGoals);
      this.enterGoals=''
    },
    removeGoal(index){
      // 指定index的元素
      this.goals.splice(index,1);
    }
  }
});

app.mount('#user-goals');
