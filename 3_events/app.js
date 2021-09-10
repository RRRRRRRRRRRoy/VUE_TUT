const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      myName: '',
      confirmedName: ''
    };
  },
  methods:{
    add_btn(num){
      return this.counter += num;
    },
    reduce_btn(num){
      if(this.counter - num < 0){
        this.counter = 0;
        return this.counter;
      }else{
        return this.counter -= num;
      }
    },
    remove_btn(){
      this.counter = 0;
      return this.cournter;
    },
    // 此处event object是由浏览器默认定义的，参考JS
    setName(event, Lastname){
      this.myName = event.target.value + " " + Lastname;
    },
    // 防止页面刷新导致数据丢失的一种JS方法 
    // 在VUE中可以参考event modifier来避免页面刷新
    submitForm(event){
      // JS方法阻止刷新
      // event.preventDefault();
      alert("Submitted!");
    },
    confirmedInput(){
      this.confirmedName = this.myName;
    }
  }
});

app.mount('#events');
