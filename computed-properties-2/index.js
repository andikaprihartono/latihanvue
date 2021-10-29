// new Vue({
//     el: '#app',
//     data(){
//         return{
//             customertotal : 35.43
//         }
//     },
//     filters:{
//         tip20(value){
//             return (value*.2).toFixed(2)
//         },
//     }
// });

const App = {
    data(){
        return{
            customertotal : 35.43
        }
    },
    filters:{
        tip20(value){
            return (value*.2)
        },
    }   
}
Vue.createApp(App).mount('#app');
