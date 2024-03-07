const slide = document.querySelector(".slide");
const arrowsBtns = document.querySelectorAll(".box6 i");
const firstCardWidth = slide.querySelector(".card").offsetWidth;
  let isDragging = false, startX, startScrollLeft;


  arrowsBtns.forEach(btn => {
    btn.addEventListener("click" , () =>{
      slide.scrollLeft += btn.id ==="left" ? -firstCardWidth:firstCardWidth;
    });
  });
  const dragStart = () => {
    isDragging = true;
    startX =e.pageX;
    startScrollLeft = slide.scrollLeft;
    slide.classList.add("dragging");
  }
  const dragStop = () => {
    isDragging = false;
    slide.classList.remove("dragging");
  }
   const dragging = (e) => {
    if(!isDragging) return;
    slide.scrollLeft =startScrollLeft - (e.pageX - startX);
   }
  slide.addEventListener("mousedown",dragStart);
  slide.addEventListener("mousemove",dragging);
  document.addEventListener("mouseup",dragStop);
