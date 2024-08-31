export const columns = [
  {
    accessorKey: "Ad-Soyad",
    header: "Ad Soyad",
    cell: ({ row }) => row.getValue("Ad-Soyad"),
  },

  {
    accessorKey: "Ünvan",
    header: "Ünvan",
  },
  {
    accessorKey: "Üniversite",
    header: "Üniversite",
  },
  {
    accessorKey: "Alt Alan",
    header: "Alt Alan",
    cell: ({ row }) => row.getValue("Alt Alan"),
  },
  {
    accessorKey: "Anahtar Kelimeler",
    header: "Anahtar Kelimeler",
    cell: ({ row }) => row.getValue("Anahtar Kelimeler"),
  },

  {
    accessorKey: "Lisans.bölüm",
    header: "Lisans Bölüm",
    cell: ({ row }) => row.original["Lisans"]?.bölüm || "Veri Yok",
  },
  {
    accessorKey: "Lisans.üniversite",
    header: "Lisans Üniversite",
    cell: ({ row }) => row.original["Lisans"]?.üniversite || "Veri Yok",
  },

  {
    accessorKey: "Yüksek Lisans.bölüm",
    header: "Yüksek Lisans Bölüm",
    cell: ({ row }) => row.original["Yüksek Lisans"]?.bölüm || "Veri Yok",
  },
  {
    accessorKey: "Yüksek Lisans.üniversite",
    header: "Yüksek Lisans Üniversite",
    cell: ({ row }) => row.original["Yüksek Lisans"]?.üniversite || "Veri Yok",
  },

  {
    accessorKey: "Doktora.bölüm",
    header: "Doktora Bölüm",
    cell: ({ row }) => row.original["Doktora"]?.bölüm || "Veri Yok",
  },
  {
    accessorKey: "Doktora.üniversite",
    header: "Doktora Üniversite",
    cell: ({ row }) => row.original["Doktora"]?.üniversite || "Veri Yok",
  },
  {
    accessorKey: "Doktora.mezuniyet",
    header: "Doktora Mezuniyet Yılı",
    cell: ({ row }) => row.original["Doktora"]["Mezuniyet Yılı"] || "-",
  },
  {
    accessorKey: "Post-Doktora",
    header: "Post Doktora",
  },
  {
    accessorKey: "Tıpta Uzmanlık Alanı",
    header: "Tıpta Uzmanlık Alanı",
  },

  {
    accessorKey: "Düzeltilmiş h-index",
    header: "Düzeltilmiş H-Index",
  },
  {
    accessorKey: "Düzeltilmiş makale sayısı",
    header: "Düzeltilmiş Makale Sayısı",
  },

  {
    accessorKey: "Scopus.h-index",
    header: "Scopus H-Index",
  },
  {
    accessorKey: "Scopus.makale",
    header: "Scopus Makale Sayısı",
    cell: ({ row }) => row.original["Skopus"]["Makale Sayısı"] || "-",
  },
  {
    accessorKey: "Scopus.atıf",
    header: "Scopus Atıf Sayısı",
    cell: ({ row }) => row.original["Skopus"]["Atıf Sayısı"] || "-",
  },
  {
    accessorKey: "Scopus.link",
    header: "Scopus Link",
  },

  {
    accessorKey: "Projeler.bap",
    header: "BAP",
    cell: ({ row }) => row.original["Projeler"]["BAP"] || "-",
  },
  {
    accessorKey: "Projeler.uluslararası",
    header: "Uluslararası",
    cell: ({ row }) => row.original["Projeler"]["Uluslararası"] || "-",
  },
  {
    accessorKey: "Projeler.tübitak",
    header: "TÜBİTAK",
    cell: ({ row }) => row.original["Projeler"]["Tübitak"] || "-",
  },
  {
    accessorKey: "Projeler.diğer",
    header: "Diğer",
    cell: ({ row }) => row.original["Projeler"]["Diğer"] || "-",
  },

  {
    accessorKey: "Mezun Öğrenci Sayısı.yl.tezyok",
    header: "YL (TEZYOK)",
    cell: ({ row }) =>
      row.original["Mezun Öğrenci Sayısı"]["YL (TEZYOK)"] || "-",
  },
  {
    accessorKey: "Mezun Öğrenci Sayısı.yl.yoksis",
    header: "YL (YOKSIS)",
    cell: ({ row }) =>
      row.original["Mezun Öğrenci Sayısı"]["YL (YOKSIS)"] || "-",
  },

  {
    accessorKey: "Mezun Öğrenci Sayısı.dr.tezyok",
    header: "DR (TEZYOK)",
    cell: ({ row }) =>
      row.original["Mezun Öğrenci Sayısı"]["DR (TEZYOK)"] || "-",
  },
  {
    accessorKey: "Mezun Öğrenci Sayısı.dr.yoksis",
    header: "DR (YOKSIS)",
    cell: ({ row }) =>
      row.original["Mezun Öğrenci Sayısı"]["DR (YOKSIS)"] || "-",
  },
];
