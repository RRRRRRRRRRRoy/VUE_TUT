// 使用vue.app创建一个应用
const app = Vue.createApp({
    data(){
        return {
            courseGoal1: 'Finish the course and learn vue',
            courseGoal2: 'Master Vue and creating great app',
            vueLink: "https://cn.vuejs.org/"
        };
    },
    // 这里的method是js中的object
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoal1
            }else{
                return this.courseGoal2
            }
        }
    }
});

// 使用id unique selector
// 将这部分与vue相连
app.mount('#user-goal');