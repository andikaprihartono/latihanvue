const App={
    data(){
        return{
jokes:{
    question: 'What did one baby prototype say to the other?',
    answer : 'I ll race you to class!',
    response : 'groan'
}
        }
    }
}
Vue.createApp(App).mount('#app');