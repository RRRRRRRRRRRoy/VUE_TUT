const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: "",
      fullname: ""
    };
  },

  // watcher是一个函数，当其中的属性发生变化时，你可以告诉vue进行执行。
  watch: {
    // 当name发生变化时，watcher也会进行变化
    // watch函数一般格式如下
    // name(new property, old property)
    // 当我们既要watch名字又要watch姓，这时使用computed property更方便
    // name(value){
    //   if(value === ""){
    //     this.fullname = '';
    //   }else{
    //     // 这里因为不是return 要用else
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value){
    //   if(value === ""){
    //     this.fullname = '';
    //   }else{
    //     // 这里因为不是return 要用else
    //     this.fullname = this.name + " " + value;
    //   }
    // }
      counter(value){
        if(value > 50){
          const that = this;
          setTimeout(function(){
            that.counter = 0;
          },2000);
        }
      }
    },
  // 添加计算属性避免使用函数进行动态输出
  // 这种方式只更改和重新计算属性值，并不会重新执行整个函数
  // name是一个属性，computed中的fullname只是对name进行修改
  // 通常情况下 computed用作输出比method更好
  // 特例：当事件event发生时，需要触发某些函数，这个时候需要定义在methods中
  computed:{
    // 在这里面可以定方法，但是方法执行的方式与methods不同
    // 此处的更像是data property数据属性
    // 一般计算属性函数命名不带动词，类似属性命名
    fullName(){
      if(this.name ==="" || this.lastName ===""){
        return '';
      }
      return this.name + " " + this.lastName;
    }
 
  },

  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      //可以用JS queryselector进行选择晴空input
      this.name = '';
    },
    // 通过这种方法进行实现可以保证显示全名
    // 且不影响reset btn
    outputFullName(){
      console.log("Running again!");
      if(this.name ===""){
        return '';
      }
      return this.name + " " + "Lou";
    }
  }
});

app.mount('#events');
