const app = Vue.createApp({
  
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // proxies代理是定义在JS中但是使用在Vue中的一种方法
      // this.message = this.currentUserInput;

      // Vue使用$符号标识内部属性 其默认值为object
      // 通过value方法获取对象内部值
      this.message = this.$refs.userText.value;
      // 可以通过dir查看属性
      // console.dir(this.$refs.userText);
    },
  },
  beforeCreate(){
    // 可以在source里面打断点进行查看
    console.log("beforeCreate()");
  },
  created(){
    console.log("created()");
  },
  beforeMount(){
    console.log("beforeMount()");
  },
  mounted(){
    console.log("mounted()");
  },
  beforeUpdate(){
    console.log("beforeUpdated()");
  },
  updated(){
    console.log("updated()");
  },
  beforeUnmount(){
    console.log("beforeUnmount()");
  },
  unmounted(){
    console.log("unmounted()");
  }

});

app.mount('#app');

setTimeout(function(){
  app.unmount();
},3000);


const app2 = Vue.createApp({
  // app2 控制的section会展示我们的template
  template: `
    <p> {{ favoriteMeal }}</p>
  `,
  data(){
    return {
      favoriteMeal:"KFC"
    };
  }
});

app2.mount("#app2");

// js实现响应式

let message = "Hello!";

let longMessage = message + "World!";

// console.log(longMessage);

// 这里的message虽然改变了 但是longMessage并没有re-executed
// 因为默认的Javascript并不是响应式的 not reactive
// 同样的代码 放到vue里面就是响应式的，当一部分更新时，另一部分也会随之改变
message = "Hello !!!";

// console.log(longMessage);

const data = {
  message: "hello",
  longMessage: "hello world"
};

const handler ={
  set(target, key, value){
    // // 对应data
    // console.log(target);
    // // 对应key message
    // console.log(key);
    // // 对应value hello！！！
    // console.log(value);
    if(key === 'message'){
      target.longMessage = value + "world";
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler );

proxy.message = 'hello!!!';

// console.log(proxy.longMessage)
