export const columns = [
  {
    accessorKey: "Üniversite",
    header: "Üniversite",
  },
  {
    accessorKey: "Akademik Personel",
    header: "Öğr. Gör. Sayısı",
    cell: ({ row }) => row.getValue("Akademik Personel").length,
  },

  {
    accessorKey: "Lisans Programı.burs",
    header: "Burs Durumu",
    cell: ({ row }) => row.original["Lisans Programı"]?.burs || "Veri Yok",
  },
  {
    accessorKey: "Lisans Programı.ingilizce",
    header: "İngilizce",
    cell: ({ row }) =>
      row.original["Lisans Programı"]?.ingilizce ? "İngilizce" : "Türkçe",
  },
  {
    accessorKey: "Lisans Programı.psikolojiDepartmanı",
    header: "Psikoloji Departmanı",
    cell: ({ row }) =>
      row.original["Lisans Programı"]?.psikolojiDepartmanı || "Veri Yok",
  },
  {
    accessorKey: "Akreditasyon",
    header: "Akreditasyon",
  },
  {
    accessorKey: "YKS",
    header: "YKS",
    cell: ({ row }) => {
      const yks = row.original["YKS"]; // Diziye erişim için doğru anahtar kullanımı
      if (yks && yks.length > 0) {
        return `${yks[0].sıra}`;
      } else {
        return "Veri Yok";
      }
    },
  },
  {
    accessorKey: "KPSS.KPSS 1",
    header: "KPSS 1",
    cell: ({ row }) => row.original["KPSS"]?.["KPSS 1"] || "Veri Yok",
  },
  {
    accessorKey: "KPSS.KPSS 2",
    header: "KPSS 2",
    cell: ({ row }) => row.original["KPSS"]?.["KPSS 2"] || "Veri Yok",
  },
];
