const animeSDK = require('./animeSDK');
const apiUrl = ""

const sdk = new animeSDK();

sdk.fetchQuotes().then(() => {
    console.log('Random Quote:', sdk.getRandomQuote());
});
