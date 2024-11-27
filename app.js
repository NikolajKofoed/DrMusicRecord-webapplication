const baseUrl = "https://2ndattemptdrmusicrecord-guc7bmh7cpf6d0e6.canadacentral-01.azurewebsites.net/MusicRecord"

const app = Vue.createApp({
    data() {
        return {
            records: [],
        }
    },
    methods: {
        async GetRecords(){
            try {
                const response = await axios.get(baseUrl);
                this.records = response.data
            } catch (ex){
                console.error("fejl ved hentning af records" + ex)
            }
        }
    }

}).mount("#app");