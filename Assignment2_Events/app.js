Vue.createApp({
    data(){
        return{
            output_q2:"",
            output_q3:"",
            confirmedOutput:""
        }
    },
    methods:{
        showAlert(){
            alert("The button has been pressed !");
        },
        setOutput_q2(event){
            this.output_q2 = event.target.value;
        },
        setOutput_q3(event){
            this.output_q3 = event.target.value;
        },
        setConfirmed(){
            this.confirmedOutput = this.output_q3;
        }
    }
}).mount("#assignment");