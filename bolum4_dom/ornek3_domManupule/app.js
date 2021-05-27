// Ac butonuna her tiklandiginda lamba_on resmini goster.
document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
};
// Kapa butonuna her tiklandiginda lamba_off resmini goster.
document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
};
// resmin uzerine mouse her geldiginde lamba_on resmini goster.
document.querySelector(".resim").addEventListener("mouseover", () => {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
});
// resmin uzerinden mouse her ayrıldiginda lamba_off resmini goster.
document.querySelector(".resim").addEventListener("mouseout", function () {
  document.querySelector(".resim").src = "img/lamba_off.gif";
});
// Klavyeden her bir tusa basildiginda bu fonksiyon tetiklenecek.
document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");
  if (checkbox.checked == true) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};

const sonDiv = document.querySelector(".input-1");
const h1 = document.createElement("h1");
const yazi = document.createTextNode("Programlama Dilleri");

h1.style.color = "red";
h1.style.marginTop = "20px";
h1.style.backgroundColor = "yellow";
h1.style.textAlign = "left";

document.querySelector(".ekle").onclick = function () {
  const liste = document.querySelector(".liste");
  const satir = document.querySelector(".dil").value;
  const yeniLi = document.createElement("li");
  const textNode = document.createTextNode(satir);
  yeniLi.appendChild(textNode);
  liste.appendChild(yeniLi);
};

document.querySelector(".sil").onclick = function () {
  const liste = document.querySelector(".liste");
  liste.removeChild(liste.firstElementChild);
};
h1.className = "yeni-h1"; // olustrdugumuz h1 elemanına bir class adı atadık.