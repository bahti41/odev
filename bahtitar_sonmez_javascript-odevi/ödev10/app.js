"use strict";
// Sipariş bilgilerini içeren obje
const siparis1 = {
    siparisId: 101,
    siparisTarihi: "31.12.2022",
    odemeSekli: "kredi kartı",
    kargoAdresi: "Yahya kaptan mah. Kocaeli İzmit",
    urunler: [
        {
            urunId: 5,
            urunBasligi: "IPhone 13 Pro",
            urunUrl: "http://abc.com/iphone-13-pro",
            urunFiyati: 22000,
        },
        {
            urunId: 6,
            urunBasligi: "IPhone 13 Pro Max",
            urunUrl: "http://abc.com/iphone-13-pro-max",
            urunFiyati: 25000,
        },
    ],
    musteri: {
        musteriId: 12,
    },
    satici: {
        firmaId: 34,
        firmaAdi: "Apple Türkiye",
    },
};

const siparis2 = {
    siparisId: 102,
    siparisTarihi: "30.12.2022",
    odemeSekli: "kredi kartı",
    kargoAdresi: "Yahya kaptan mah. Kocaeli İzmit",
    urunler: [
        {
            urunId: 6,
            urunBasligi: "IPhone 13 Pro Max",
            urunUrl: "http://abc.com/iphone-13-pro-max",
            urunFiyati: 25000,
        },
    ],
    musteri: {
        musteriId: 12,
    },
    satici: {
        firmaId: 34,
        firmaAdi: "Apple Türkiye",
    },
};

// KDV dahil toplam ücreti hesaplayan fonksiyon
const kdvDahilToplamUcretHesapla = (siparis) => {
    const kdvOrani = 0.18;
    const toplamUcret = siparis.urunler.reduce((acc, urun) => acc + urun.urunFiyati, 0);
    const kdvDahilToplamUcret = toplamUcret * (1 + kdvOrani);
    return kdvDahilToplamUcret;
};

// Her bir siparişin kdv dahil toplam ücretini hesapla
const siparis1KdvDahilToplamUcret = kdvDahilToplamUcretHesapla(siparis1);
const siparis2KdvDahilToplamUcret = kdvDahilToplamUcretHesapla(siparis2);

console.log("Sipariş 1 KDV Dahil Toplam Ücret:", siparis1KdvDahilToplamUcret);
console.log("Sipariş 2 KDV Dahil Toplam Ücret:", siparis2KdvDahilToplamUcret);

// Tüm siparişlerin kdv dahil toplam ücretini hesapla
const tumSiparislerKdvDahilToplamUcret = siparis1KdvDahilToplamUcret + siparis2KdvDahilToplamUcret;
console.log("Tüm Siparişlerin KDV Dahil Toplam Ücreti:", tumSiparislerKdvDahilToplamUcret);
