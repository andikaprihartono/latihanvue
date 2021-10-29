const App = {
    data(){
        return{
            tacos:`I like it <a href="#" onclick="alert('salah kirim')"> Al pastor</a>
            tacos`
        }
    }
}
Vue.createApp(App).mount('#app');