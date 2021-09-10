const app = Vue.createApp({
    data(){
        return{
            input_class:"",
            Q2_HV:true,
            Q3_color: ""
        };
    },
    computed:{
        Q_classes(){
            return {
                user1: this.input_class ==='user1',
                user2: this.input_class ==='user2',
                visible: this.Q2_HV,
                hidden: !this.Q2_HV
            };
        },
    },
    methods:{
        toggle(){
            this.Q2_HV = !this.Q2_HV
        }
    }
});
app.mount("#assignment")