/* jshint esversion : 6 */
const url = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
const btn = document.querySelector("#btn");
const quoteText = document.querySelector("#quote-text");

function updateQuote(text) {
  quoteText.innerHTML = text;
}

function getQuote() {
  axios
    .get(url)
    .then((res) => {
      let data = res.data;
      updateQuote(data);
    })
    .catch((err) => console.log(err));
}

btn.addEventListener("click", getQuote);
