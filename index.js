const buttonTag = document.querySelector("button");
const jokeTag = document.querySelector("p#chuck-joke");
const chuckNorrisGif = document.querySelector("img#chuck-gif");
const explosionGif =
  "https://media0.giphy.com/media/oe33xf3B50fsc/giphy.webp?cid=790b76111b67150a0248ec9ee0ef44590ee02f1a8febf342&rid=giphy.webp";
const chuckNorrisGifsArray = [
  "https://media3.giphy.com/media/qanrUMM3x50mA/200w.webp?cid=790b761135f69e29284a0c36efae73ddc494a87bb2629a36&rid=200w.webp",
  "https://media3.giphy.com/media/l1J3G5lf06vi58EIE/giphy.gif?cid=790b76114f104dc36f6f3449c8d51735e4c704cbe851ffa2&rid=giphy.gif",
  "https://media1.giphy.com/media/L3cUQlPbQMrwQ/giphy.gif?cid=790b76114f104dc36f6f3449c8d51735e4c704cbe851ffa2&rid=giphy.gif",
  "https://media1.giphy.com/media/AhwuGl0MPNzyg/giphy.gif?cid=790b76114f104dc36f6f3449c8d51735e4c704cbe851ffa2&rid=giphy.gif",
  "https://media2.giphy.com/media/WNuF3KK9NaQ8w/giphy.gif?cid=790b76114f104dc36f6f3449c8d51735e4c704cbe851ffa2&rid=giphy.gif",
  "https://media3.giphy.com/media/7qZ3ZX1Gu3TZm/200w.webp?cid=790b76116af91db6f4eb6dfe5550bff7f07d3599e1320e1d&rid=200w.webp",
  "https://media3.giphy.com/media/r6vy1WrYu0UoM/200.webp?cid=790b76114f104dc36f6f3449c8d51735e4c704cbe851ffa2&rid=200.webp",
  "https://media3.giphy.com/media/l1J3HBqTGW3fXBPZ6/200w.webp?cid=790b7611c999bfbf797d1714b6b60cf4819a266a891c03cc&rid=200w.webp",
  "https://media0.giphy.com/media/PcVGf1Wg7peh2/200.webp?cid=790b761191b15ee5981b8b25911642fc7ff8136d8aff87db&rid=200.webp",
  "https://media1.giphy.com/media/jVJmFAV8xbIys/200w.webp?cid=790b761145497bad01b4239c6de77abe79c7703941a8538c&rid=200w.webp"
];

document.addEventListener("DOMContentLoaded", event => {
  function appendJoke(joke) {
    jokeTag.innerText = `"${joke}"`;
  }

  // function to select random element from an array
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };

  function getRandomChuckNorrisGif() {
    selectedGif = chuckNorrisGifsArray.random();
    chuckNorrisGif.src = selectedGif;
  }

  function getExplosionGif() {
    for (let i = 0; i < 7; i++) {
      let imgTag = new Image(100, 100);
      imgTag.class = "explosion-gif";
      imgTag.src = explosionGif;
      jokeTag.appendChild(imgTag);
    }
  }

  buttonTag.addEventListener("click", event => {
    jokeTag.innerText = "";
    getExplosionGif();
    setTimeout(function() {
      fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(json => appendJoke(json.value));
      getRandomChuckNorrisGif();
    }, 500);
  });
});
