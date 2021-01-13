let vm = new Vue({
    el: "#app",
    data: {
        films: [],
        series: [],
        search: ""
    },
    methods: {
        filmCall(){
            axios.get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key: "3bc4b75887deae6d9b5830490b66e695",
                    language: "it-IT",
                    query: this.search
                }
            })
            .then(response =>{
                this.films = response.data.results;
            })
            .catch(error => {
                console.log(error);
            });
        },
        seriesCall(){
            axios.get("https://api.themoviedb.org/3/search/tv", {
                params: {
                    api_key: "3bc4b75887deae6d9b5830490b66e695",
                    language: "it-IT",
                    query: this.search
                }
            })
            .then(response =>{
                this.series = response.data.results;
            })
            .catch(error => {
                console.log(error);
            });
        },
    },
    mounted(){
        this.filmCall();
        this.seriesCall();
    },
});