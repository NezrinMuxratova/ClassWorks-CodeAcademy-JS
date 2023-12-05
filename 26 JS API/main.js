// const BASE_URL = "https://dog.ceo/api/breeds/image/random";
// let image = document.querySelector(".image");

// let img = document.createElement("img");
// img.src =
//   "https://images.dog.ceo/breeds/terrier-patterdale/patterdale-terrier-1330018870tnN.jpg";
// image.append(img);

// setInterval(() => {
//   fetch(`${BASE_URL}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       img.src = data.message;
//     });
// }, 2000);

const BASE_URL = "https://dog.ceo/api/breeds/image/random";
let image = document.querySelector(".image");
let img = document.createElement("img");
image.append(img);
img.src="https://images.dog.ceo/breeds/terrier-patterdale/patterdale-terrier-1330018870tnN.jpg"
setInterval(
  () => {
    fetch(`${BASE_URL}`)
      .then((response) => response.json())
      .then((data) => {
        img.src = data.message;
      });
  },
  2000
);
