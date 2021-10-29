const App = {
    data() {
        return {
            name: '',
            email: '',
            caps: '',
            response: '',
            activeClass: 'active'
        }
    },
    methods: {
        submitForm() {
            axios.post('//jsonplaceholder.typicode.com/posts', {
                name: this.name,
                email: this.email,
                caps: this.caps
            }).then(response => {
                this.response = JSON.stringify(response, null, 2)
            }).catch(error => {
                this.response = 'Error: ' + error.response.status
            })
        }
    }
}
Vue.createApp(App).mount('#app')