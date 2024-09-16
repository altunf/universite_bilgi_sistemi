export const columns = [
  {
    accessorKey: "university",
    header: "Üniversite",
  },
  {
    accessorKey: "academicStaff",
    header: "Öğr. Gör. Sayısı",
    cell: ({ row }) => row.getValue("academicStaff").length,
  },

  {
    accessorKey: "undergraduate.scholarship",
    header: "Burs Durumu",
    cell: ({ row }) => row.original.undergraduate?.scholarship || "Veri Yok",
  },
  {
    accessorKey: "undergraduate.english",
    header: "Eğitim Dili",
    cell: ({ row }) =>
      row.original.undergraduate?.english ? "İngilizce" : "Türkçe",
  },
  {
    accessorKey: "undergraduate.psychologyDepartment",
    header: "Psikoloji Departmanı",
    cell: ({ row }) =>
      row.original.undergraduate?.psychologyDepartment || "Veri Yok",
  },
  {
    accessorKey: "accreditation",
    header: "Akreditasyon",
  },
  {
    accessorKey: "yks",
    header: "YKS",
    cell: ({ row }) => {
      const yks = row.original.yks;
      if (yks && yks.length > 0) {
        return `${yks[0].sıra}`;
      } else {
        return "Veri Yok";
      }
    },
  },
  {
    accessorKey: "kpss.kpss1",
    header: "KPSS 1",
    cell: ({ row }) => row.original.kpss.kpss1 || "Veri Yok",
  },
  {
    accessorKey: "kpss.kpss2",
    header: "KPSS 2",
    cell: ({ row }) => row.original.kpss.kpss2 || "Veri Yok",
  },
];
