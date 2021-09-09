Vue.createApp({
        data(){
            return{
                myName : "Roy",
                myAge: 24,
                Panda: "./panda.JPG"
            }
        },
        methods:{
            AgeInFive(){
                return this.myAge + 5;
            },
            GetRandomNum(){
                const num = Math.random();
                return num;
            }
        }
    }
).mount("#assignment");