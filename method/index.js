const App={
    data(){
        return{
            counter:0,
            x:0
        }
    },
    methods:{
        increment(){
            this.counter++;
        },
        decrement(){
            this.counter--;
        },
        xCoordinate(e){
            this.x = e.clientX;
        }
    }
}
Vue.createApp(App).mount('#app')