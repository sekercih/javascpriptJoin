const paragraf = document.getElementById("par");
paragraf.style.backgroundColor="black";
paragraf.style.color="white";

const buton=document.getElementById("btn");
buton.style.width="100px";
buton.style.height="30px";
buton.style.backgroundColor="red"
buton.style.color="yellow";
buton.style.fontSize="16px";
buton.innerHTML="Ara"

const resim=document.getElementsByTagName("img");
resim[0].style.width="300px";
resim[0].style.height="300px";
resim[1].style.height="300px";
resim[1].style.border="3px solid red";

const h1=document.getElementsByTagName("h1");
h1[0].style.color="red";
h1[0].style.textAlign="center";

const baslik=document.querySelector(".title");
baslik.innerHTML = "DOM Selector 🛫🛫🛫🛫";

// const body=document.querySelector("body");
// body.style.backgroundImage = "linear-gradient(green, blue)";

document.querySelector(".h1").onmouseover=function(){
 document.querySelector(".h1").style.color="white"
  h1.style.backgroundColor="yellow";


}

document.querySelector(".h1").onmouseover=function(){
 h1.style.color="white";
 h1.style.backgroundColor="pink";
}

document.querySelector("#btn").addEventListener("mouseover",function(){
 const buton=document.querySelector("#btn").style.width="150px"
});

document.querySelector("#btn").addEventListener("mouseout",function (){
 const buton=document.querySelector("#btn").style.width="100px"
});

