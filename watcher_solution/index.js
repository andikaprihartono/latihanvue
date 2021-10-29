const App={
    data(){
        return{
            orderstatus:'where is my taco',
            ordersubmitted:'🎂'
        }
    },
    methods:{
        getTaco(){
            this.orderstatus='🎂'
        }
    },
    watch:{
        orderstatus(newValue,oldValue){
            this.ordersubmitted='your order was submitted'
            // setTimeout(function(){
                
            // },1000);
            setTimeout(()=> this.ordersubmitted =null,1000);
        }
    }
}
Vue.createApp(App).mount('#app')