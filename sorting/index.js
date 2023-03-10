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
                    title: `Supernatural`,
                    rating: 95
                },
                {
                    title: `Breaking Bad`,
                    rating: 97
                },
                {
                    title: `The Vampire Diaries`,
                    rating: 91
                },
                {
                    title: `The Walking Dead`,
                    rating: 98
                },
                {
                    title: `Pretty Little Liars`,
                    rating: 96
                },
                {
                    title: `Once Upon a Time`,
                    rating: 98
                },
                {
                    title: `Sherlock`,
                    rating: 95
                },
                {
                    title: `Death Note`,
                    rating: 77
                },
                {
                    title: `Naruto`,
                    rating: 88
                },
                {
                    title: `Arrow`,
                    rating: 96
                }
            ]
        }
    },
    methods: {
        sortLowest() {
            this.ratingsInfo.sort((a, b) => a.rating > b.rating ? 1 : -1);
        },
        sortHighest() {
            this.ratingsInfo.sort((a, b) => a.rating < b.rating ? 1 : -1);
        }
    }
}

Vue.createApp(App).mount('#app')