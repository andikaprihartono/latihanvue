const App ={
    data(){
        return{
            message:'Hello World!',
            checkedNames:[],
            options:[
                {value:'John'},
                {value:'Paul'},
                {value:'George'},
            ]
        }
    }
}
Vue.createApp(App).mount('#app')

// 