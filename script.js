const btnTop = document.querySelector(".button-top");
const btnBottom = document.querySelector(".button-bottom");
const leftBar = document.querySelector(".left-sidebar");
const rigthBarItems = document.querySelectorAll(".right-sidebar-img").length;
const rightBar = document.querySelector(".right-sidebar");
let activeItem = 0;
const container = document.querySelector(".content");

leftBar.style.top = `-${(rigthBarItems - 1) * 100}vh`;

btnTop.addEventListener("click", () => {
  changeSlide("top");
});
btnBottom.addEventListener("click", () => {
  changeSlide("bottom");
});

function changeSlide(direct) {
  if (direct === "top") {
    activeItem++;
    if (activeItem === rigthBarItems) {
      activeItem = 0;
    }
  } else if (direct === "bottom") {
    activeItem--;
    if (activeItem < 0) {
      activeItem = rigthBarItems - 1;
    }
  }
  const height = container.clientHeight;

  rightBar.style.transform = `translateY(-${activeItem * height}px)`;
  leftBar.style.transform = `translateY(${activeItem * height}px)`;
}
