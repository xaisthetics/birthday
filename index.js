onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
  const button=document.querySelector('#box');
  const gift=document.querySelector('.gift');
  const letter=document.querySelector("#letter")
  button.addEventListener("click",()=>{
    letter.style.display="block"
    letter.style.animation="0.5s linear fade_in";
    console.log("clicked")
    gift.style.display="none"
  })

  const exit=document.querySelector(".exit");
  exit.addEventListener("click",()=>{
    letter.style.display="none"
    gift.style.display="block";

  })