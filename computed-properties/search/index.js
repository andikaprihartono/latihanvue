const App = {
    data() {
        return {
            columns: ["title", "rating"],
            ratingsInfo: [{
                    title: `White Chicks`,
                    rating: 82
                },
                {
                    title: `Grey's Anatomy`,
                    rating: 98
                },
                {
                    title: `Prison Break`,
                    rating: 98
                },
                {
                    title: `How I Met Your Mother`,
                    rating: 94
                },
                {
                    title: `Marvel's Iron Fist`,
                    rating: 98
                }
            ],
            filterText: ''
        }
    },
    methods: {
        sortLowest() {
            this.ratingsInfo.sort((a, b) => a.rating > b.rating ? 1 : -1);
        },
        sortHighest() {
            this.ratingsInfo.sort((a, b) => a.rating < b.rating ? 1 : -1);
        }
    },
    computed: {
        filteredFilms() {
            let filter = new RegExp(this.filterText, 'i')
            return this.ratingsInfo.filter(el => el.title.match(filter))
        }
    }
}

Vue.createApp(App).mount('#app')