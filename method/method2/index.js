const App ={
    data(){
        return{
            newComment:'',
            comments: [
                'Looks great Julianne!',
                'I love the sea',
                'Where are you at?'
            ]
        }
    },
    methods:{
        addComment(){
            this.comments.push(this.newComment)
            this.newComment=''
        }
    }
}
vue.createApp(App).mount('#app')