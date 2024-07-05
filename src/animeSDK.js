const axios = require('axios');

class animeSDK {
    constructor(apiUrl) {
        this.apiUrl = "https://raw.githubusercontent.com/wolfgunblood/anime-quotes/main/data.json";
        this.allQuotes = [];
    }

    async fetchQuotes() {
        try {
            const response = await axios.get(this.apiUrl);
            this.allQuotes = response.data;
            return this.allQuotes;
        } catch (error) {
            console.error('Error fetching quotes:', error);
            return [];
        }
    }

    getRandomQuote() {
        if (this.allQuotes.length === 0) {
            console.warn('No quotes available. Fetching quotes.');
            return this.fetchQuotes().then(() => {
                return this.getRandomQuote();
            });
        }
        const randomIndex = Math.floor(Math.random() * this.allQuotes.length);
        return this.allQuotes[randomIndex];
    }
}

module.exports = animeSDK;
