"use strict";

// Ödev-8) Verilen url ve ders adı bilgisini kullanarak aşağıdaki işlemleri yapınız.
// url="https://www.wissenakademie.com&quot;;
// dersAdi="Fullstack Web Developer Eğitimi";
// -url kaç karakterlidir?
// -ders adı kaç kelimeden oluşmaktadır?
// -url https ile başlıyor mu?
// -ders adı içinde Eğitimi kelimesi geçiyor mu?
// -url ve ders adını kullanarak aşağıdaki string ifadeyi oluşturun:
// https://www.wissenakademie.com/fullstack-web-gelistirme-egitimi


const url = "https://www.wissenakademie.com";
const dersAdi = "Fullstack Web Developer Eğitimi";

// URL kaç karakterlidir?
const urlKarakterSayisi = url.length;
console.log(`URL ${urlKarakterSayisi} karakterlidir.`);

// Ders adı kaç kelimeden oluşmaktadır?
const dersAdiKelimeler = dersAdi.split(' ').length;
console.log(`Ders adı ${dersAdiKelimeler} kelimeden oluşmaktadır.`);

// URL "https" ile başlıyor mu?
const urlHttpsIleBasliyor = url.startsWith("https");
console.log(`URL "https" ile başlıyor mu? ${urlHttpsIleBasliyor ? 'Evet' : 'Hayır'}.`);

// Ders adı içinde "Eğitimi" kelimesi geçiyor mu?
const iceriyorMu = dersAdi.includes("Eğitimi");
console.log(`Ders adı içinde "Eğitimi" kelimesi geçiyor mu? ${iceriyorMu ? 'Evet' : 'Hayır'}.`);

// URL ve ders adını kullanarak istenen string ifadeyi oluşturun
const olusturulanString = `${url}/${dersAdi.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
console.log(`Oluşturulan String: ${olusturulanString}`);