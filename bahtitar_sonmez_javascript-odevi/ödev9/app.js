"use strict";
// 1. "Elma, Armut, Muz, Çilek" elemanlarına sahip bir dizi oluşturunuz.
const meyveler = ["Elma", "Armut", "Muz", "Çilek"];

// 2. Dizi kaç elemanlıdır?
const elemanSayisi = meyveler.length;
console.log(`Dizi ${elemanSayisi} elemanlıdır.`);


const ilkEleman = meyveler[0];
const sonEleman = meyveler[elemanSayisi - 1];
console.log("Dizinin ilk elemanı:" + ilkEleman, "son elemanı:" + sonEleman);

// 4. "Elma" dizinin bir elemanı mıdır?
const elmaVarMi = meyveler.includes("Elma");
console.log(`"Elma" dizinin bir elemanı mıdır? ${elmaVarMi ? 'Evet' : 'Hayır'}.`);

// 5. "Kiraz" meyvesini listenin sonuna ekleyiniz.
meyveler.push("Kiraz");
console.log(`Listenin son hali: ${meyveler}`);

// 6. Dizinin son 2 elemanını siliniz.
meyveler.splice(elemanSayisi - 2, 2);
console.log(`Son 2 eleman silindikten sonra liste: ${meyveler}`);