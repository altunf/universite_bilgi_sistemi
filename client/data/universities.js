const universities = [
  {
    name: "Abant İzzet Baysal Üniversitesi",
    city: "Bolu",
    isPublic: true,
  },
  {
    name: "Abdullah Gül Üniversitesi",
    city: "Kayseri",
    isPublic: true,
  },
  {
    name: "Acıbadem Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Adana Bilim ve Teknoloji Üniversitesi",
    city: "Adana",
    isPublic: true,
  },
  {
    name: "Adnan Menderes Üniversitesi",
    city: "Aydın",
    isPublic: true,
  },
  {
    name: "Adıyaman Üniversitesi",
    city: "Adıyaman",
    isPublic: true,
  },
  {
    name: "Afyon Kocatepe Üniversitesi",
    city: "Afyonkarahisar",
    isPublic: true,
  },
  {
    name: "Ahi Evran Üniversitesi",
    city: "Kırşehir",
    isPublic: true,
  },
  {
    name: "Akdeniz Üniversitesi",
    city: "Antalya",
    isPublic: true,
  },
  {
    name: "Akev Üniversitesi",
    city: "Antalya",
    isPublic: false,
  },
  {
    name: "Aksaray Üniversitesi",
    city: "Aksaray",
    isPublic: true,
  },
  {
    name: "Alanya Alaaddin Keykubat Üniversitesi",
    city: "Antalya",
    isPublic: true,
  },
  {
    name: "Alanya Hamdullah Emin Paşa Üniversitesi",
    city: "Antalya",
    isPublic: false,
  },
  {
    name: "Amasya Üniversitesi",
    city: "Amasya",
    isPublic: true,
  },
  {
    name: "Anadolu Üniversitesi",
    city: "Eskişehir",
    isPublic: true,
  },
  {
    name: "Anka Teknoloji Üniversitesi",
    city: "Ankara",
    isPublic: false,
  },
  {
    name: "Ankara Sosyal Bilimler Üniversitesi",
    city: "Ankara",
    isPublic: true,
  },
  {
    name: "Ankara Üniversitesi",
    city: "Ankara",
    isPublic: true,
  },
  {
    name: "Ardahan Üniversitesi",
    city: "Ardahan",
    isPublic: true,
  },
  {
    name: "Artvin Çoruh Üniversitesi",
    city: "Artvin",
    isPublic: true,
  },
  {
    name: "Atatürk Üniversitesi",
    city: "Erzurum",
    isPublic: true,
  },
  {
    name: "Atılım Üniversitesi",
    city: "Ankara",
    isPublic: false,
  },
  {
    name: "Avrasya Üniversitesi",
    city: "Trabzon",
    isPublic: false,
  },
  {
    name: "Ağrı İbrahim Çeçen Üniversitesi",
    city: "Ağrı",
    isPublic: true,
  },
  {
    name: "Bahçeşehir Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Balıkesir Üniversitesi",
    city: "Balıkesir",
    isPublic: true,
  },
  {
    name: "Bandırma Onyedi Eylül Üniversitesi",
    city: "Balıkesir",
    isPublic: true,
  },
  {
    name: "Bartın Üniversitesi",
    city: "Bartın",
    isPublic: true,
  },
  {
    name: "Batman Üniversitesi",
    city: "Batman",
    isPublic: true,
  },
  {
    name: "Bayburt Üniversitesi",
    city: "Bayburt",
    isPublic: true,
  },
  {
    name: "Başkent Üniversitesi",
    city: "Ankara",
    isPublic: false,
  },
  {
    name: "Beykent Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Bezmiâlem Vakıf Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Bilecik Şeyh Edebali Üniversitesi",
    city: "Bilecik",
    isPublic: true,
  },
  {
    name: "Bilkent Üniversitesi",
    city: "Ankara",
    isPublic: false,
  },
  {
    name: "Bingöl Üniversitesi",
    city: "Bingöl",
    isPublic: true,
  },
  {
    name: "Biruni Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Bitlis Eren Üniversitesi",
    city: "Bitlis",
    isPublic: true,
  },
  {
    name: "Bozok Üniversitesi",
    city: "Yozgat",
    isPublic: true,
  },
  {
    name: "Boğaziçi Üniversitesi",
    city: "İstanbul",
    isPublic: true,
  },
  {
    name: "Bursa Teknik Üniversitesi",
    city: "Bursa",
    isPublic: true,
  },
  {
    name: "Celal Bayar Üniversitesi",
    city: "Manisa",
    isPublic: true,
  },
  {
    name: "Cumhuriyet Üniversitesi",
    city: "Sivas",
    isPublic: true,
  },
  {
    name: "Çanakkale Onsekiz Mart Üniversitesi",
    city: "Çanakkale",
    isPublic: true,
  },
  {
    name: "Çankaya Üniversitesi",
    city: "Ankara",
    isPublic: false,
  },
  {
    name: "Çankırı Karatekin Üniversitesi",
    city: "Çankırı",
    isPublic: true,
  },
  {
    name: "Çağ Üniversitesi",
    city: "Mersin",
    isPublic: false,
  },
  {
    name: "Çukurova Üniversitesi",
    city: "Adana",
    isPublic: true,
  },
  {
    name: "Deniz Harp Okulu",
    city: "İstanbul",
    isPublic: true,
  },
  {
    name: "Dicle Üniversitesi",
    city: "Diyarbakır",
    isPublic: true,
  },
  {
    name: "Dokuz Eylül Üniversitesi",
    city: "İzmir",
    isPublic: true,
  },
  {
    name: "Doğuş Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Dumlupınar Üniversitesi",
    city: "Kütahya",
    isPublic: true,
  },
  {
    name: "Düzce Üniversitesi",
    city: "Düzce",
    isPublic: true,
  },
  {
    name: "Ege Üniversitesi",
    city: "İzmir",
    isPublic: true,
  },
  {
    name: "Erciyes Üniversitesi",
    city: "Kayseri",
    isPublic: true,
  },
  {
    name: "Erzincan Üniversitesi",
    city: "Erzincan",
    isPublic: true,
  },
  {
    name: "Erzurum Teknik Üniversitesi",
    city: "Erzurum",
    isPublic: true,
  },
  {
    name: "Eskişehir Osmangazi Üniversitesi",
    city: "Eskişehir",
    isPublic: true,
  },
  {
    name: "Fatih Sultan Mehmet Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Fırat Üniversitesi",
    city: "Elazığ",
    isPublic: true,
  },
  {
    name: "Galatasaray Üniversitesi",
    city: "İstanbul",
    isPublic: true,
  },
  {
    name: "Gazi Üniversitesi",
    city: "Ankara",
    isPublic: true,
  },
  {
    name: "Gaziantep Üniversitesi",
    city: "Gaziantep",
    isPublic: true,
  },
  {
    name: "Gaziosmanpaşa Üniversitesi",
    city: "Tokat",
    isPublic: true,
  },
  {
    name: "Gebze Teknik Üniversitesi",
    city: "Kocaeli",
    isPublic: true,
  },
  {
    name: "Gedik Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Giresun Üniversitesi",
    city: "Giresun",
    isPublic: true,
  },
  {
    name: "Gülhane Askeri Tıp Akademisi",
    city: "Ankara",
    isPublic: true,
  },
  {
    name: "Gümüşhane Üniversitesi",
    city: "Gümüşhane",
    isPublic: true,
  },
  {
    name: "Hacettepe Üniversitesi",
    city: "Ankara",
    isPublic: true,
  },
  {
    name: "Hakkari Üniversitesi",
    city: "Hakkari",
    isPublic: true,
  },
  {
    name: "Haliç Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Harran Üniversitesi",
    city: "Şanlıurfa",
    isPublic: true,
  },
  {
    name: "Hasan Kalyoncu Üniversitesi",
    city: "Gaziantep",
    isPublic: false,
  },
  {
    name: "Hitit Üniversitesi",
    city: "Çorum",
    isPublic: true,
  },
  {
    name: "Iğdır Üniversitesi",
    city: "Iğdır",
    isPublic: true,
  },
  {
    name: "İhsan Doğramacı Bilkent Üniversitesi",
    city: "Ankara",
    isPublic: false,
  },
  {
    name: "Isparta Uygulamalı Bilimler Üniversitesi",
    city: "Isparta",
    isPublic: true,
  },
  {
    name: "İnönü Üniversitesi",
    city: "Malatya",
    isPublic: true,
  },
  {
    name: "İskenderun Teknik Üniversitesi",
    city: "Hatay",
    isPublic: true,
  },
  {
    name: "İstanbul Arel Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "İstanbul Aydın Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "İstanbul Bilgi Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "İstanbul Gelişim Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "İstanbul Kent Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "İstanbul Kültür Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "İstanbul Medeniyet Üniversitesi",
    city: "İstanbul",
    isPublic: true,
  },
  {
    name: "İstanbul Medipol Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "İstanbul Sabahattin Zaim Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "İstanbul Şehir Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "İstanbul Teknik Üniversitesi",
    city: "İstanbul",
    isPublic: true,
  },
  {
    name: "İstanbul Ticaret Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "İstanbul Üniversitesi",
    city: "İstanbul",
    isPublic: true,
  },
  {
    name: "İstanbul Üniversitesi-Cerrahpaşa",
    city: "İstanbul",
    isPublic: true,
  },
  {
    name: "İzmir Ekonomi Üniversitesi",
    city: "İzmir",
    isPublic: false,
  },
  {
    name: "İzmir Katip Çelebi Üniversitesi",
    city: "İzmir",
    isPublic: true,
  },
  {
    name: "İzmir Yüksek Teknoloji Enstitüsü",
    city: "İzmir",
    isPublic: true,
  },
  {
    name: "Kadir Has Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Kafkas Üniversitesi",
    city: "Kars",
    isPublic: true,
  },
  {
    name: "Kahramanmaraş Sütçü İmam Üniversitesi",
    city: "Kahramanmaraş",
    isPublic: true,
  },
  {
    name: "Kapadokya Üniversitesi",
    city: "Nevşehir",
    isPublic: false,
  },
  {
    name: "Karabük Üniversitesi",
    city: "Karabük",
    isPublic: true,
  },
  {
    name: "Karadeniz Teknik Üniversitesi",
    city: "Trabzon",
    isPublic: true,
  },
  {
    name: "Karamanoğlu Mehmetbey Üniversitesi",
    city: "Karaman",
    isPublic: true,
  },
  {
    name: "Kastamonu Üniversitesi",
    city: "Kastamonu",
    isPublic: true,
  },
  {
    name: "Kadir Has Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Kocaeli Üniversitesi",
    city: "Kocaeli",
    isPublic: true,
  },
  {
    name: "Koç Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Konya Gıda ve Tarım Üniversitesi",
    city: "Konya",
    isPublic: false,
  },
  {
    name: "Konya Teknik Üniversitesi",
    city: "Konya",
    isPublic: true,
  },
  {
    name: "KTO Karatay Üniversitesi",
    city: "Konya",
    isPublic: false,
  },
  {
    name: "Kütahya Dumlupınar Üniversitesi",
    city: "Kütahya",
    isPublic: true,
  },
  {
    name: "Lokman Hekim Üniversitesi",
    city: "Ankara",
    isPublic: false,
  },
  {
    name: "Malatya Turgut Özal Üniversitesi",
    city: "Malatya",
    isPublic: true,
  },
  {
    name: "Manisa Celal Bayar Üniversitesi",
    city: "Manisa",
    isPublic: true,
  },
  {
    name: "Mardin Artuklu Üniversitesi",
    city: "Mardin",
    isPublic: true,
  },
  {
    name: "Marmara Üniversitesi",
    city: "İstanbul",
    isPublic: true,
  },
  {
    name: "Medeniyet Üniversitesi",
    city: "İstanbul",
    isPublic: true,
  },
  {
    name: "MEF Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Mersin Üniversitesi",
    city: "Mersin",
    isPublic: true,
  },
  {
    name: "Mimar Sinan Güzel Sanatlar Üniversitesi",
    city: "İstanbul",
    isPublic: true,
  },
  {
    name: "Muğla Sıtkı Koçman Üniversitesi",
    city: "Muğla",
    isPublic: true,
  },
  {
    name: "Munzur Üniversitesi",
    city: "Tunceli",
    isPublic: true,
  },
  {
    name: "Mustafa Kemal Üniversitesi",
    city: "Hatay",
    isPublic: true,
  },
  {
    name: "Nişantaşı Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Niğde Ömer Halisdemir Üniversitesi",
    city: "Niğde",
    isPublic: true,
  },
  {
    name: "Necmettin Erbakan Üniversitesi",
    city: "Konya",
    isPublic: true,
  },
  {
    name: "Nevşehir Hacı Bektaş Veli Üniversitesi",
    city: "Nevşehir",
    isPublic: true,
  },
  {
    name: "Nuh Naci Yazgan Üniversitesi",
    city: "Kayseri",
    isPublic: false,
  },
  {
    name: "Ondokuz Mayıs Üniversitesi",
    city: "Samsun",
    isPublic: true,
  },
  {
    name: "Orta Doğu Teknik Üniversitesi",
    city: "Ankara",
    isPublic: true,
  },
  {
    name: "Ordu Üniversitesi",
    city: "Ordu",
    isPublic: true,
  },
  {
    name: "Osmaniye Korkut Ata Üniversitesi",
    city: "Osmaniye",
    isPublic: true,
  },
  {
    name: "Ostim Teknik Üniversitesi",
    city: "Ankara",
    isPublic: false,
  },
  {
    name: "Özyeğin Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Pamukkale Üniversitesi",
    city: "Denizli",
    isPublic: true,
  },
  {
    name: "Piri Reis Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Sakarya Üniversitesi",
    city: "Sakarya",
    isPublic: true,
  },
  {
    name: "Sanko Üniversitesi",
    city: "Gaziantep",
    isPublic: false,
  },
  {
    name: "Selçuk Üniversitesi",
    city: "Konya",
    isPublic: true,
  },
  {
    name: "Siirt Üniversitesi",
    city: "Siirt",
    isPublic: true,
  },
  {
    name: "Sinop Üniversitesi",
    city: "Sinop",
    isPublic: true,
  },
  {
    name: "Sivas Cumhuriyet Üniversitesi",
    city: "Sivas",
    isPublic: true,
  },
  {
    name: "Süleyman Demirel Üniversitesi",
    city: "Isparta",
    isPublic: true,
  },
  {
    name: "Şırnak Üniversitesi",
    city: "Şırnak",
    isPublic: true,
  },
  {
    name: "Tarsus Üniversitesi",
    city: "Mersin",
    isPublic: true,
  },
  {
    name: "Ted Üniversitesi",
    city: "Ankara",
    isPublic: false,
  },
  {
    name: "Tokat Gaziosmanpaşa Üniversitesi",
    city: "Tokat",
    isPublic: true,
  },
  {
    name: "Trabzon Üniversitesi",
    city: "Trabzon",
    isPublic: true,
  },
  {
    name: "Trakya Üniversitesi",
    city: "Edirne",
    isPublic: true,
  },
  {
    name: "Türk-Alman Üniversitesi",
    city: "İstanbul",
    isPublic: true,
  },
  {
    name: "Ufuk Üniversitesi",
    city: "Ankara",
    isPublic: false,
  },
  {
    name: "Uludağ Üniversitesi",
    city: "Bursa",
    isPublic: true,
  },
  {
    name: "Üsküdar Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Uşak Üniversitesi",
    city: "Uşak",
    isPublic: true,
  },
  {
    name: "Van Yüzüncü Yıl Üniversitesi",
    city: "Van",
    isPublic: true,
  },
  {
    name: "Yalova Üniversitesi",
    city: "Yalova",
    isPublic: true,
  },
  {
    name: "Yaşar Üniversitesi",
    city: "İzmir",
    isPublic: false,
  },
  {
    name: "Yeditepe Üniversitesi",
    city: "İstanbul",
    isPublic: false,
  },
  {
    name: "Yıldız Teknik Üniversitesi",
    city: "İstanbul",
    isPublic: true,
  },
  {
    name: "Yozgat Bozok Üniversitesi",
    city: "Yozgat",
    isPublic: true,
  },
  {
    name: "Zonguldak Bülent Ecevit Üniversitesi",
    city: "Zonguldak",
    isPublic: true,
  },
];

export default universities;
