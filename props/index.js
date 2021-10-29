const app = Vue.createApp({
    data() {
        return {
            message: 'Give me a taco!'
        }
    }
})

app.component('app-child', {
    props: ['text'],
    template: `<div>{{ text }}</div>`
})

app.mount('#app')