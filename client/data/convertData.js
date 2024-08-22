export function mergeAndConvertData(data) {
  const universityMap = new Map();

  data.forEach((item) => {
    const uniName = item["Üniversite"];
    if (!universityMap.has(uniName)) {
      universityMap.set(uniName, {
        Üniversite: uniName,
        "Lisans Programı": {
          psikolojiDepartmanı: item["Lisans Programı"] ? "var" : "yok",
          ingilizce:
            item["Lisans Programı"] &&
            typeof item["Lisans Programı"] === "string"
              ? item["Lisans Programı"].toLowerCase().includes("ingilizce")
              : false,
          burs: extractBursInfo(item["Lisans Programı"]),
        },
        Akreditasyon: item["Akreditasyon"],
        YKS: [],
        KPSS: {
          "KPSS 1": item["KPSS 1"],
          "KPSS 2": item["KPSS 2"],
        },
        "Akademik Personel": [],
      });
    }

    const university = universityMap.get(uniName);

    // YKS verisini birleştiriyoruz
    const ykSira = item["2022 YKS Sıra"];
    if (ykSira && !university["YKS"].some((yks) => yks["sıra"] === ykSira)) {
      university["YKS"].push({
        yıl: "2022",
        sıra: ykSira,
      });
    }

    // Akademik Personel verisini ekliyoruz
    university["Akademik Personel"].push({
      "Ad-Soyad": item["Ad-Soyad"],
      Ünvan: item["Ünvan"],
      Lisans: {
        Üniversite: item["Lisans Üniversite"],
        Bölüm: item["Lisans Bölüm"],
      },
      "Yüksek Lisans": {
        Üniversite: item["Yüksek Lisans Üniversite"],
        Bölüm: item["Yüksek Lisans Bölüm"],
      },
      Doktora: {
        Üniversite: item["Doktora Üniversite"],
        Bölüm: item["Doktora Bölüm"],
        "Mezuniyet Yılı": item["Doktora/Tıpta Mezuniyet Yılı"],
      },
      "Post-Doktora": item["Post-Doktora"] || "-",
      "Alt Alan": item["Alt Alan"],
      "Anahtar Kelimeler": item["Anahtar Kelimeler"],
      Projeler: {
        Uluslararası: item["Uluslararası Proje"],
        Tübitak: item["Tübitak Proje"],
        BAP: item["BAP Proje"],
        Diğer: item["Diğer Proje"],
      },
      Scopus: {
        "Makale Sayısı": item["Scopus Makale Sayısı"],
        "Atıf Sayısı": item["Scopus Atıf Sayısı"],
        "h-index": item["Scopus h-index"],
        Link: item["Scopus Link"],
      },
      "Düzeltilmiş h-index": item["Düzeltilmiş h-index"],
      "Düzeltilmiş makale sayısı": item["Düzeltilmiş makale sayısı"],
      "Tıpta Uzmanlık Alanı": item["Tıpta Uzmanlık Alanı"] || "-",
      "Mezun Öğrenci Sayısı": {
        "YL (YOKSIS)": item["YL Mezun Öğrenci Sayısı (YOKSIS)"] || "0",
        "DR (YOKSIS)": item["DR Mezun Öğrenci Sayısı (YOKSIS)"] || "0",
        "YL (TEZYOK)": item["YL Mezun Öğrenci Sayısı (TEZYOK)"] || "0",
        "DR (TEZYOK)": item["DR Mezun Öğrenci Sayısı (TEZYOK)"] || "0",
      },
    });
  });

  return Array.from(universityMap.values());
}

// Burs bilgisini çıkarmak için fonksiyon
function extractBursInfo(lisansProgrami) {
  if (typeof lisansProgrami === "string") {
    const bursMatch = lisansProgrami.match(/%[\d]+ İndirimli|burslu/i);
    return bursMatch ? bursMatch[0] : "Yok";
  }
  return "Yok";
}

// Dönüştürülmüş ve birleştirilmiş veriler
const genelFormatData = mergeAndConvertData(data);
