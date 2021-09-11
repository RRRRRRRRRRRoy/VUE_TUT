const app = Vue.createApp({
  data(){
    return{
      enterTask:"",
      Task:[],
      hideNshow: true
    };
  },
  computed:{
    SH_situation(){
      return this.hideNshow ? "hide" : "show"
    }
  },
  methods:{
    addTask(){
      this.Task.push(this.enterTask);
      this.enterTask = '';
    },
    ChangeSituation(){
      this.hideNshow = !this.hideNshow;
    }
  }
});

app.mount("#assignment");