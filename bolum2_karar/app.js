// const yas = 19;
// let sonuc;

// if (yas <= 3) {
//   sonuc = "bebek";
// } else if (yas < 18) {
//   sonuc = "ergen";
// } else if (yas < 14) {
//   sonuc = "çocuk";
// } else {
//   sonuc = "yetişkin";
// }

// console.log(sonuc);

// const s1 = +prompt("Birinci Sayi");
// const islem = prompt("İşlemi giriniz");
// const s2 = +prompt("İkinci Sayi");

// let sonuclar = 0;
// if (islem == "+") {
//   sonuclar = s1 + s2;
// } else if (islem == "-") {
//   sonuclar = s1 - s2;
// } else if (islem == "*") {
//   sonuclar = s1 * s2;
// } else if (islem == "/") {
//   sonuclar = s1 / s2;
// } else {
//   alert("yanlış işlem yaptınız");
// }
// console.log(`${s1} ${islem} ${s2}=${sonuclar}`);

// const yasim = prompt("Yaşinizi giriniz");
// const heat = prompt("Sağlıklımısınız Evet e ve Hayır h");

// const durum =
//   yasim > 18 && heat == "e"
//     ? console.log("Askere gidebilir")
//     : console.log("Askere gidemez");

// const gunNo = +prompt("Günü sayisini giriniz");
// switch (gunNo) {
//   case 1:
//     gün = "Pazartesi";
//     break;
//   case 2:
//     gün = "Salı";
//     break;
//   case 3:
//     gün = "Çarşamba";
//     break;
//   case 4:
//     gün = "Perşembe";
//     break;
//   case 5:
//     gün = "Cuma";
//     break;
//   case 6:
//     gün = "Cumartesi";
//     break;
//   case 7:
//     gün = "Pazar";
//     break;
//   default:
//     alert("Gün 1-7 arasında olmalıdır");
//     break;
// }
// console.log(gün);
// alert(gün);

// const maas = prompt("Lutfen maasinizi giriniz");
// const calismaSuresi = prompt("Calisma Suresini giriniz");

// const zamliMaas =
//   calismaSuresi > 10 ? maas * 1.5 : calismaSuresi > 5 ? maas * 1.2 : maas * 1.1;
// console.log(zamliMaas);
// alert(zamliMaas);

// const borç = 0;
// const maaş = 3000;
// console.log(!borç && maaş > 2825.9 ? "Kredi Alabilir :😇" : "Kredi Alamaz :🔻");

for (let i = 1; i <= 10; i++) {
  console.log(`${i}-Mehmet`);
}

// DÖNGÜLER
// const sayi = prompt("Dongu miktarini giriniz:");
// for (let i = 1; i <= sayi; i++) {
//   console.log(`${i}-Mehmet`);
// }
// Asal sayı tespiti
const number = 7; /*Number(prompt("Sayiyi giriniz:"));*/
let asal = true;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    asal = false;
    break;
  }
}
const sonuc = asal ? "ASAL" : "ASAL DEGIL";
console.log(sonuc);