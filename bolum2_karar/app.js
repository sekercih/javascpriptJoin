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

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}-Mehmet`);
// }

// DÖNGÜLER
// const sayi = prompt("Dongu miktarini giriniz:");
// for (let i = 1; i <= sayi; i++) {
//   console.log(`${i}-Mehmet`);
// }
// Asal sayı tespiti
// const number = 7; /*Number(prompt("Sayiyi giriniz:"));*/
// let asal = true;
// for (let i = 2; i < number; i++) {
//   if (number % i == 0) {
//     asal = false;
//     break;
//   }
// }
// const sonuc = asal ? "ASAL" : "ASAL DEGIL";
// console.log(sonuc);

/*  Soru-4: Girilen sayıların tek veya çift olduğunu bildiren programı tasarlayınız. (Ternary
deyimi ile yapınız).*/
// const girNum = prompt("Sayi giriniz");

// let result = girNum % 2 == 0 ? "Çift sayidir" : "Tek Sayidir";
// console.log(result);
// alert(result);

/* Soru-3: Girilen farklı 3 tamsayının toplamını, çarpımını, en küçüğünü ve en
büyüğünü yazdıran programı yazınız*/

// const num1 = +prompt("birinci sayıyı giriniz");
// const num2 = +prompt("ikinci sayıyı giriniz");
// const num3 = +prompt("üçüncü sayıyı giriniz");
// let toplam = 0;
// let carpma = 1;
// let enkucuk;

// if (num1 != num2 && num2 != num3) {
//   toplam = num1 + num2 + num3;
//   carpma = num1 * num2 * num3;
//   enkucuk = num1 < num2 ? num1 : num2 < num3 ? num2 : num3;
// } else {
//   alert("Tam Sayiları farklı giriniz");
// }
// alert(toplam);
// alert(carpma);
// alert(enkucuk);
/*Soru-5: Girilen dereceyi fahrenayta veya fahrenaytı dereceye çeviren programı
tasarlayınız. Çevirimin hangi birimden hangi birime olacağı program başında sorulmalıdır*/
// const hot = prompt("Sıcaklık Birimini 🏹 Seçiniz  Derece C Fahrenhayt F");
// let birim = +prompt("istenilen birim miktarını giriniz");

// if (hot == "C") {
//   birim = (birim - 32) / 1.8;
//   console.log(`${birim} "Fahrenhaytdır"`);
// } else if (hot == "F") {
//   birim = birim * 1.8 + 32;
//   console.log(`${birim} "Derecedir"`);
// } else {
//   console.log("Uygun sıcaklık birimi seciniz C/F");
// }

// do {
//   not = prompt("0-100 arasında bir not giriniz:");
// } while (not < 0 || not > 100);
// console.log("Giridiğiniz not 0-100 arasındadır");
// let not = prompt("0-100 arasında bir not giriniz:");

// while (
//   not < 0
//     ? (not = prompt("0-100 arasında bir not giriniz:"))
//     : not < 0 || not > 100
// );
// console.log("Giridiğiniz not 0-100 arasındadır");

let not1;
let i = 1;

while (true) {
  not1 = prompt(i + ".kişinin notunu giriniz");

  not1 = not1.toLowerCase();
  if (not1 == "q") {
    break;
  }
  i++;
  console.log(Number(not1));
}
