Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    watch:{
        result(){
            console.log("Watcher is watching");
            const that = this;
            setTimeout(function(){
                // 作用域问题
                that.counter = 0;
            },5000);
        }
    },
    computed: {
        result(){
            if(this.counter < 37){
                return "Not there yet!";
            }else if(this.counter ==37){
                return this.counter;
            }else{
                return "Too much!";
            }
        }
    },

    methods:{
        add_5_btn(){
            return this.counter += 5;
        },
        add_1_btn(){
            return this.counter += 1;
        }
    }
}).mount("#assignment");