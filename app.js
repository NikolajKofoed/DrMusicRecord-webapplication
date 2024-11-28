const baseUrl = "https://2ndattemptdrmusicrecord-guc7bmh7cpf6d0e6.canadacentral-01.azurewebsites.net/MusicRecord"

const app = Vue.createApp({
    data() {
        return {
            records: [],
            sortByArtist: null,
            sortByTitle: null,
        }
    },
    methods: {
        async GetRecords(){
            try {
                var response = null
                if(this.sortByArtist != null && this.sortByTitle == null){
                    response = await axios.get(baseUrl + "?" + `artist=${this.sortByArtist}`)
                }
                else if(this.sortByArtist == null && this.sortByTitle != null){
                    response = await axios.get(baseUrl + "?" + `title=${this.sortByTitle}`)
                }
                else if(this.sortByArtist != null && this.sortByTitle != null){
                    response = await axios.get(baseUrl + "?" + `artist=${this.sortByArtist}&title=${this.sortByTitle}`)
                }
                else {
                    response = await axios.get(baseUrl);
                }
                this.records = response.data
            } catch (ex){
                console.error("fejl ved hentning af records" + ex)
            }
            finally{
                this.sortByArtist = null
                this.sortByTitle = null
            }
        }
    }

}).mount("#app");