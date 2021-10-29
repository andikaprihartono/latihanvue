const App ={
    data(){
        return {
            counter:0
        }
    },
    watch: { //mengembalikan nilai secara langsung
        counter(){
            // this.counter+=3;
            console.log('The counter has changed')
        }
    }
}
Vue.createApp(App).mount('#app')