const body = document.querySelector("body");
const IMG_NUMBER = 4;

const genrandom = () => Math.floor(Math.random()*IMG_NUMBER);
const pintImage = (randomNumber) =>{
  const image = new Image();
  image.classList.add("bgImage");
  image.src = `./img/${randomNumber+1}.jpg`;
  body.appendChild(image);
  
}

(function(){
  const randomNumber = genrandom();
  pintImage(randomNumber);
})();