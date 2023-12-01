"use strict";

let sayilar = [1, 5, 7, 15, 3, 25, 12, 24];
let kareler = sayilar.map(x => x ** 2);
console.log("1. Sayıların Kareleri:", kareler);


let besinKatlari = sayilar.filter(x => x % 5 === 0);
console.log("2. 5'in Katları:", besinKatlari);

// 3. sayilar dizisindeki çift sayıların toplamını bulunuz.
let ciftler = sayilar.filter(x => x % 2 === 0);
let toplamCiftler = ciftler.reduce((acc, curr) => acc + curr, 0);
console.log("3. Çift Sayıların Toplamı:", toplamCiftler);


let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23", "samsung s20"];
let buyukHarfUrunler = urunler.map(urun => urun.toUpperCase());
console.log("4. Ürünler (Büyük Harf):", buyukHarfUrunler);


let samsungUrunSayisi = urunler.filter(urun => urun.toLowerCase().includes("samsung")).length;
console.log("5. Samsung Ürün Sayısı:", samsungUrunSayisi);