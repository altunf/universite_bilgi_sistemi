function transformData(input) {
  return input.map((entry) => {
    return {
      Üniversite: entry["Üniversite"],
      "Lisans Programı": {
        psikolojiDepartmanı: entry["Lisans Programı"].includes("Psikoloji")
          ? "var"
          : "yok",
        ingilizce: entry["Lisans Programı"].includes("İngilizce"),
      },
      Akreditasyon: entry["Akreditasyon"],
      YKS: [
        {
          yıl: "2022",
          sıra: entry["2022 YKS Sıra"],
        },
      ],
      KPSS: {
        "KPSS 1": entry["KPSS 1"],
        "KPSS 2": entry["KPSS 2"],
      },
      "Akademik Personel": [
        {
          "Ad-Soyad": entry["Ad-Soyad"],
          Ünvan: entry["Ünvan"],
          Lisans: {
            Üniversite: entry["Lisans Üniversite "],
            Bölüm: entry["Lisans Bölüm"],
          },
          "Yüksek Lisans": {
            Üniversite: entry["Yüksek Lisans Üniversite"],
            Bölüm: entry["Yüksek Lisans Bölüm"],
          },
          Doktora: {
            Üniversite: entry["Doktora Üniversite"],
            Bölüm: entry["Doktora Bölüm"],
            "Mezuniyet Yılı": entry["Doktora/Tıpta Mezuniyet Yılı"],
          },
          "Post-Doktora": entry["Post-Doktora"],
          "Alt Alan": entry["Alt Alan"],
          "Anahtar Kelimeler": entry["Anahtar Kelimeler"],
          Projeler: {
            Uluslararası: entry["Uluslararası Proje"],
            Tübitak: entry["Tübitak Proje"],
            BAP: entry["BAP Proje"],
            Diğer: entry["Diğer Proje"],
          },
          Scopus: {
            "Makale Sayısı": entry["Scopus Makale Sayısı"],
            "Atıf Sayısı": entry["Scopus Atıf Sayısı"],
            "h-index": entry["Scopus h-index"],
            Link: entry["Scopus Link"],
          },
          "Düzeltilmiş h-index": entry["Düzeltilmiş h-index"],
          "Düzeltilmiş makale sayısı": entry["Düzeltilmiş makale sayısı"],
          "Mezun Öğrenci Sayısı": {
            "YL (YOKSIS)": entry["YL Mezun Öğrenci Sayısı (YOKSIS)"],
            "DR (YOKSIS)": entry["DR Mezun Öğrenci Sayısı (YOKSIS)"],
            "YL (TEZYOK)": entry["YL Mezun Öğrenci Sayısı (TEZYOK)"],
            "DR (TEZYOK)": entry["DR Mezun Öğrenci Sayısı (TEZYOK)"],
          },
        },
      ],
    };
  });
}

const inputData = [];
const transformedData = transformData(inputData);
console.log(JSON.stringify(transformedData, null, 2));
