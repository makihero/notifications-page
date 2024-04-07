const mark = document.querySelector("#mark");
const number = document.querySelector("#number");
const posts = document.querySelectorAll(".posts");

posts.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.remove('bg-light-grayish-blue-1');
    element.querySelector(".inline-block").classList.remove("inline-block");
    update();
  });
});

mark.addEventListener("click", () => {
  const notRead = document.querySelectorAll(".inline-block");
  notRead.forEach((element) => {
    element.classList.remove("inline-block");
  });

  update();
});

const update = () => {
  const notReadActual = document.querySelectorAll(".inline-block");
  number.innerText = notReadActual.length;
};
