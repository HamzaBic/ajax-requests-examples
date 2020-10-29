/*jshint esversion: 6 */
const url = "http://aws.random.cat/meow";
const btn = $("#btn");
const image = $("#img");

function updateImage(data) {
  image.attr("src", data);
}

function handleClick() {
  $.getJSON(url)
    .done((res) => updateImage(res.file))
    .fail((err) => console.log(err));
}

btn.click(handleClick);
