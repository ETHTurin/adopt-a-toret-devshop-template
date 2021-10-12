// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const torets = {
  1: {
    name: "Toret #1",
    description: "Strada Comunale Val San Martino angolo Via Pinin Pacot",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/25/DSC_9244_1.jpg",
    properties: { lat: "45.05409999999999", lon: "7.72296" },
  },
  2: {
    name: "Toret #2",
    description: "Via Val della Torre",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/04/14/1428771123417_1.jpg",
    properties: { lat: "45.095195", lon: "7.653643" },
  },
  3: {
    name: "Toret #3",
    description: "Via Druento - Via Garibaldi",
    image: "",
    properties: { lat: "45.111962", lon: "7.643358000000001" },
  },
  4: {
    name: "Toret #4",
    description: "Via Teresio Parino",
    image: "",
    properties: { lat: "45.12885799999999", lon: "7.641348" },
  },
  5: {
    name: "Toret #5",
    description: "Piazza Annunziata - nord",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/06/04/cdv_photo_004.jpg",
    properties: { lat: "45.13439099999999", lon: "7.629117" },
  },
  6: {
    name: "Toret #6",
    description: "Parco della Mandria - Viale Carlo Emanuele II",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/10/TORET_2016_03_20_-1091445679.jpg",
    properties: { lat: "45.142054", lon: "7.610313" },
  },
  7: {
    name: "Toret #7",
    description: "Parco della Mandria - Via Scodeggio",
    image: "",
    properties: { lat: "45.14424000000001", lon: "7.618925000000001" },
  },
  8: {
    name: "Toret #8",
    description: "Via don Luigi Pavesio",
    image: "",
    properties: { lat: "45.133494", lon: "7.627687000000001" },
  },
  9: {
    name: "Toret #9",
    description: "Via Ciriè",
    image: "",
    properties: { lat: "45.15432", lon: "7.65627" },
  },
  10: {
    name: "Toret #10",
    description: "Via Negro",
    image: "",
    properties: { lat: "45.13275", lon: "7.63033333" },
  },
  11: {
    name: "Toret #11",
    description: "Via Quirinio Mascia",
    image: "",
    properties: { lat: "45.132775", lon: "7.626196000000001" },
  },
  12: {
    name: "Toret #12",
    description: "Piazza Annunziata - sud",
    image: "",
    properties: { lat: "45.133983", lon: "7.628879" },
  },
  13: {
    name: "Toret #13",
    description: "Via Italia",
    image: "",
    properties: { lat: "45.154862", lon: "7.658037" },
  },
  14: {
    name: "Toret #14",
    description: "Viale Roma",
    image: "",
    properties: { lat: "45.13186", lon: "7.63622" },
  },
  15: {
    name: "Toret #15",
    description: "Piazza Nenni",
    image: "",
    properties: { lat: "45.11790799999999", lon: "7.651826999999999" },
  },
  16: {
    name: "Toret #16",
    description: "Via Martiri della Liberta",
    image: "",
    properties: { lat: "45.15178", lon: "7.6523" },
  },
  17: {
    name: "Toret #17",
    description: "Piazza Europa",
    image: "",
    properties: { lat: "45.15281", lon: "7.65749" },
  },
  18: {
    name: "Toret #18",
    description: "Via Marzabotto",
    image: "",
    properties: { lat: "45.11316", lon: "7.617580000000001" },
  },
  19: {
    name: "Toret #19",
    description: "Via Gaetano Amati",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/08/26/1409043712522.jpg",
    properties: { lat: "45.12696499999999", lon: "7.640633" },
  },
  20: {
    name: "Toret #20",
    description: "Via Druento - Via Villa Cristina",
    image: "",
    properties: { lat: "45.11538", lon: "7.613870000000001" },
  },
  21: {
    name: "Toret #21",
    description: "Via Vittorio Zanellato",
    image: "",
    properties: { lat: "45.130345", lon: "7.630152" },
  },
  22: {
    name: "Toret #22",
    description: "Via Villa Cristina",
    image: "",
    properties: { lat: "45.11439", lon: "7.614209" },
  },
  23: {
    name: "Toret #23",
    description: "Via Francesco Petrarca",
    image: "",
    properties: { lat: "45.11469", lon: "7.618070000000001" },
  },
  24: {
    name: "Toret #24",
    description: "Via Sansovino - Corso Grosseto",
    image: "",
    properties: { lat: "45.10547200000001", lon: "7.647312" },
  },
  25: {
    name: "Toret #25",
    description: "Via Macchiavelli",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/31/Via_Macchiavelli.jpg",
    properties: { lat: "45.120725", lon: "7.632773000000001" },
  },
  26: {
    name: "Toret #26",
    description: "Via Cavagnolo",
    image: "",
    properties: { lat: "45.113992", lon: "7.704167" },
  },
  28: {
    name: "Toret #28",
    description: "Via Paris - Via Berino",
    image: "",
    properties: { lat: "45.118233", lon: "7.65395" },
  },
  29: {
    name: "Toret #29",
    description: "Via Druento - Via Mosele",
    image: "",
    properties: { lat: "45.112294", lon: "7.638863000000001" },
  },
  30: {
    name: "Toret #30",
    description: "Strada Comunale di Altessano",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/05/11/1429611466005_1.jpg",
    properties: { lat: "45.109927", lon: "7.645171" },
  },
  31: {
    name: "Toret #31",
    description: "Corso Ferrara - Via dei Ciclamini",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/06/05/DSCN0094_1.JPG",
    properties: { lat: "45.10686999999999", lon: "7.631677" },
  },
  32: {
    name: "Toret #32",
    description: "Via Paris - Via Pepe",
    image: "",
    properties: { lat: "45.119403", lon: "7.653327000000001" },
  },
  33: {
    name: "Toret #33",
    description: "Via Berino",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/09/08/1410004828960_1.jpg",
    properties: { lat: "45.11872", lon: "7.656061" },
  },
  34: {
    name: "Toret #34",
    description: "Parco Mario Carrara - Pellerina",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/09/04/IMG_00161.JPG",
    properties: { lat: "45.08882", lon: "7.638031" },
  },
  35: {
    name: "Toret #35",
    description: "Parco di Via Edoardo Perroncito",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/11/cdv_photo_001_1.jpg",
    properties: { lat: "45.07515", lon: "7.607634999999999" },
  },
  36: {
    name: "Toret #36",
    description: "Via caduti di El Alamein",
    image: "",
    properties: { lat: "45.115198", lon: "7.703838" },
  },
  37: {
    name: "Toret #37",
    description: "Corso Grosseto angolo Via Chiesa della Salute",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/08/31/turet_grosseto.jpg",
    properties: { lat: "45.104498", lon: "7.681630000000001" },
  },
  38: {
    name: "Toret #38",
    description: "Via Massari",
    image: "",
    properties: { lat: "45.105926", lon: "7.682563" },
  },
  39: {
    name: "Toret #39",
    description: "Via Vittime Della Shoah",
    image: "",
    properties: { lat: "45.070195", lon: "7.606189" },
  },
  40: {
    name: "Toret #40",
    description: "Via Sospello",
    image: "",
    properties: { lat: "45.102254", lon: "7.686145" },
  },
  41: {
    name: "Toret #41",
    description: "Giardino Don Carlo Gnocchi",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/07/18/toret_giardini_don_gnocchi_1.jpg",
    properties: { lat: "45.102631", lon: "7.673152000000001" },
  },
  42: {
    name: "Toret #42",
    description: "Via Cigna - Parco Sempione",
    image: "",
    properties: { lat: "45.098904", lon: "7.689595" },
  },
  43: {
    name: "Toret #43",
    description: "Via Michele Antonio Vibo",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/10/16/C360_2014-10-05-22-02-55-950_4.jpg",
    properties: { lat: "45.095794", lon: "7.674378" },
  },
  44: {
    name: "Toret #44",
    description: "Via Porpora",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/05/22/1432304637257_1.jpg",
    properties: { lat: "45.101637", lon: "7.695512" },
  },
  45: {
    name: "Toret #45",
    description: "Via Nole",
    image: "",
    properties: { lat: "45.09158999999999", lon: "7.656189" },
  },
  46: {
    name: "Toret #46",
    description: "Piazza Sofia - Bocciofila",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/11/1420128279640.jpg",
    properties: { lat: "45.093276", lon: "7.718085" },
  },
  47: {
    name: "Toret #47",
    description: "Via Chiesa della Salute angolo Via degli Approcci",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/25/2012-11-23_11.14.45.jpg",
    properties: { lat: "45.094844", lon: "7.678580999999999" },
  },
  48: {
    name: "Toret #48",
    description: "Via Porpora",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/17/Toret_-_Via_Porpora_48.jpg",
    properties: { lat: "45.10013099999999", lon: "7.697056" },
  },
  49: {
    name: "Toret #49",
    description: "Piazza Sofia - Corso Taranto",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/DSC_8076.jpg",
    properties: { lat: "45.09429837465714", lon: "7.715332776493659" },
  },
  50: {
    name: "Toret #50",
    description: "Via Vistrorio",
    image: "",
    properties: { lat: "45.108951", lon: "7.701175" },
  },
  51: {
    name: "Toret #51",
    description: "Corso Potenza",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/09/19/Corso_Potenza_.jpg",
    properties: { lat: "45.097155", lon: "7.65609" },
  },
  52: {
    name: "Toret #52",
    description: "Via Stradella - Via Giachino",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/LargoGiachino.jpg",
    properties: { lat: "45.096166", lon: "7.671862" },
  },
  53: {
    name: "Toret #53",
    description: "Via Pergolesi",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/19/Toret_-_Via_Pergolesi_angolo_via_Cravero_1.JPG",
    properties: { lat: "45.093798", lon: "7.711102" },
  },
  54: {
    name: "Toret #54",
    description: "Via Botticelli",
    image: "",
    properties: { lat: "45.096394", lon: "7.714483" },
  },
  56: {
    name: "Toret #56",
    description: "Via Federico Nietzsche",
    image: "",
    properties: { lat: "45.089158", lon: "7.725197000000001" },
  },
  57: {
    name: "Toret #57",
    description: "Via Campanella - Giradino",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/19/campanella_giardino_uff.jpg",
    properties: { lat: "45.08281100000001", lon: "7.632547999999999" },
  },
  58: {
    name: "Toret #58",
    description: "Via Sostegno",
    image: "",
    properties: { lat: "45.077543", lon: "7.617622" },
  },
  59: {
    name: "Toret #59",
    description: "Strada del Meisino",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/14/20121207_111819_Medium.jpg",
    properties: { lat: "45.08848099999999", lon: "7.732152" },
  },
  60: {
    name: "Toret #60",
    description: "Via Campanella",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/20/campanella_uff.jpg",
    properties: { lat: "45.082449", lon: "7.632872" },
  },
  61: {
    name: "Toret #61",
    description: "Parco Mario Carrara - Pellerina",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/11/07-04-2016-11-01.jpg",
    properties: { lat: "45.08672000000001", lon: "7.638783000000001" },
  },
  62: {
    name: "Toret #62",
    description: "Via Lagarina - Via Premuda",
    image: "",
    properties: { lat: "45.07223", lon: "7.605870000000001" },
  },
  63: {
    name: "Toret #63",
    description: "Via Nicomede Bianchi - Via Invorio",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/21/invorio-bianchi_uff.jpg",
    properties: { lat: "45.082155", lon: "7.62701" },
  },
  64: {
    name: "Toret #64",
    description: "Parco Mario Carrara - Pellerina",
    image: "",
    properties: { lat: "45.08617", lon: "7.639947" },
  },
  65: {
    name: "Toret #65",
    description: "Via Salbertrand - Via Valentino Carrera",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/05/torello2_1.BMP",
    properties: { lat: "45.079639", lon: "7.636264" },
  },
  66: {
    name: "Toret #66",
    description: "Via Ceres",
    image: "",
    properties: { lat: "45.082732", lon: "7.653063" },
  },
  67: {
    name: "Toret #67",
    description: "Parco Mario Carrara - Pellerina",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/09/29/cdv_photo_002.jpg",
    properties: { lat: "45.08767900000001", lon: "7.641124" },
  },
  68: {
    name: "Toret #68",
    description: "Via Lagarina - Via Don Michele Rua",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/04/23/toret_via_vallagarina.jpg",
    properties: { lat: "45.07253100000001", lon: "7.612335999999999" },
  },
  69: {
    name: "Toret #69",
    description: "Strada Della Pronda",
    image: "",
    properties: { lat: "45.06547", lon: "7.610480000000001" },
  },
  70: {
    name: "Toret #70",
    description: "Via Asiago",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/01/04/via_asiago_uff_1.jpg",
    properties: { lat: "45.066849", lon: "7.609627000000001" },
  },
  71: {
    name: "Toret #71",
    description: "Corso Peschiera - Via Issiglio",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/19/foto.JPG",
    properties: { lat: "45.06759699999999", lon: "7.641538000000001" },
  },
  72: {
    name: "Toret #72",
    description: "Strada del Lionetto",
    image: "",
    properties: { lat: "45.076204", lon: "7.629227" },
  },
  73: {
    name: "Toret #73",
    description: "Via Issiglio",
    image: "",
    properties: { lat: "45.059506", lon: "7.640785000000001" },
  },
  74: {
    name: "Toret #74",
    description: "Via Col di Lana - Via Asiago",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/04/23/Toret_col_di_lana_1.jpg",
    properties: { lat: "45.06985", lon: "7.617954" },
  },
  75: {
    name: "Toret #75",
    description: "Corso Francia - Piazza Rivoli",
    image: "",
    properties: { lat: "45.075278", lon: "7.644577999999999" },
  },
  76: {
    name: "Toret #76",
    description: "Via Monte Ortigara",
    image: "",
    properties: { lat: "45.06867399999999", lon: "7.626585999999999" },
  },
  77: {
    name: "Toret #77",
    description: "Via San Paolo - Piazza Robilant",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8349.jpg",
    properties: { lat: "45.060884", lon: "7.645660999999999" },
  },
  78: {
    name: "Toret #78",
    description: "Corso Francia angolo Via Pozzo Strada",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/08/02/toret_ok_1.jpg",
    properties: { lat: "45.074579", lon: "7.628735000000001" },
  },
  79: {
    name: "Toret #79",
    description: "Corso Monte Cucco - Corso Peschiera",
    image: "",
    properties: { lat: "45.07126699999999", lon: "7.633941" },
  },
  80: {
    name: "Toret #80",
    description: "Largo Francesco Cigna",
    image: "",
    properties: { lat: "45.087338", lon: "7.682229" },
  },
  81: {
    name: "Toret #81",
    description: "Via Monte Ortigara - Via Tofane",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/09/19/toret_carluccio.JPG",
    properties: { lat: "45.067915", lon: "7.628286" },
  },
  82: {
    name: "Toret #82",
    description: "Via Issiglio",
    image: "",
    properties: { lat: "45.058286", lon: "7.638537" },
  },
  83: {
    name: "Toret #83",
    description: "Via San Donato - Corso Tassoni",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/01/04/marcogil_IMG_2200.JPG",
    properties: { lat: "45.083898", lon: "7.656163" },
  },
  84: {
    name: "Toret #84",
    description: "Corso Svizzera - Via Nicola Fabrizi",
    image: "",
    properties: { lat: "45.080287", lon: "7.650237" },
  },
  85: {
    name: "Toret #85",
    description: "Via Bari angolo Via Dronero",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/07/21/1405756917435_1.jpg",
    properties: { lat: "45.083989", lon: "7.669009" },
  },
  86: {
    name: "Toret #86",
    description: "Corso Cairoli",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/03/24/15516_577382132278915_1145558873_n.jpg",
    properties: { lat: "45.05921600000001", lon: "7.691110999999999" },
  },
  87: {
    name: "Toret #87",
    description: "Via Principe Amedeo - Piazza Carlo Alberto",
    image: "",
    properties: { lat: "45.068236", lon: "7.686286000000001" },
  },
  88: {
    name: "Toret #88",
    description: "Strada del Fortino",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/07/21/1405757811055.jpg",
    properties: { lat: "45.086213", lon: "7.677226000000001" },
  },
  89: {
    name: "Toret #89",
    description: "Corso Svizzera - Via Balme",
    image: "",
    properties: { lat: "45.081057", lon: "7.650776" },
  },
  90: {
    name: "Toret #90",
    description: "Via del Carmine",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/14/via.del.carmine.JPG",
    properties: { lat: "45.075908", lon: "7.674294" },
  },
  91: {
    name: "Toret #91",
    description: "Corso Racconigi - Via Frejus",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/16/IMG_20160514_224534.jpg",
    properties: { lat: "45.07083599999999", lon: "7.646812" },
  },
  92: {
    name: "Toret #92",
    description: "Via Cigna - Via robassomero",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/07/21/1405758341547_1.jpg",
    properties: { lat: "45.08217", lon: "7.67803" },
  },
  93: {
    name: "Toret #93",
    description: "Via Revello",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/01/22/WP_20151110_12_13_31_Pro.jpg",
    properties: { lat: "45.06787", lon: "7.64831" },
  },
  94: {
    name: "Toret #94",
    description: "Via Bologna angolo Via Parma",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/16/parma_1.JPG",
    properties: { lat: "45.080103", lon: "7.690087999999999" },
  },
  95: {
    name: "Toret #95",
    description: "Piazza statuto - Via Carlo Allioni",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/14/DSC_8418.jpg",
    properties: { lat: "45.07623399999999", lon: "7.671162000000001" },
  },
  96: {
    name: "Toret #96",
    description: "Via Giovanni Falcone",
    image: "",
    properties: { lat: "45.070249", lon: "7.660517" },
  },
  97: {
    name: "Toret #97",
    description: "Via Caboto - Largo Re Umberto",
    image:
      "https://ilovetoret.it/up/ima/toret/2012/07/16/Via_Caboto_-_Largo_Re_Umberto.jpg",
    properties: { lat: "45.053582", lon: "7.664704" },
  },
  98: {
    name: "Toret #98",
    description: "Corso Galileo Ferraris angolo Corso Matteotti",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8294.jpg",
    properties: { lat: "45.067318", lon: "7.672032" },
  },
  99: {
    name: "Toret #99",
    description: "Piazza statuto",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/14/DSC_8414.jpg",
    properties: { lat: "45.076035", lon: "7.671026" },
  },
  100: {
    name: "Toret #100",
    description: "Via Porta Palatina",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8281.jpg",
    properties: { lat: "45.072599", lon: "7.682837999999999" },
  },
  101: {
    name: "Toret #101",
    description: "Strada Comunale di Soperga",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/20/DSC_9044.jpg",
    properties: { lat: "45.081075", lon: "7.732169" },
  },
  102: {
    name: "Toret #102",
    description: "Giardino Fausto Coppi",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/04/22/WP_000761.jpg",
    properties: { lat: "45.06910000000001", lon: "7.719115" },
  },
  103: {
    name: "Toret #103",
    description: "Via XX Settembre",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/06/20/19-06-2016-20-33.jpg",
    properties: { lat: "45.073841", lon: "7.685097" },
  },
  104: {
    name: "Toret #104",
    description: "Largo Montebello",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/14/02-03-2016-23-20.jpg",
    properties: { lat: "45.072101", lon: "7.694931" },
  },
  105: {
    name: "Toret #105",
    description: "Corso Re Umberto ",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/07/10/cdv_photo_001.jpg",
    properties: { lat: "45.05017800000001", lon: "7.661031000000001" },
  },
  106: {
    name: "Toret #106",
    description: "Via Giuseppe Bertola",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/11/1405776806836.jpg",
    properties: { lat: "45.069873", lon: "7.681870999999999" },
  },
  107: {
    name: "Toret #107",
    description: "Via Federico Nietzsche",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/28/Toret_Marta.JPG",
    properties: { lat: "45.08762400000001", lon: "7.723199" },
  },
  108: {
    name: "Toret #108",
    description: "Via Vanchiglia angolo Corso San Maurizio",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/09/cdv_photo_006_1.jpg",
    properties: { lat: "45.067168", lon: "7.697307" },
  },
  109: {
    name: "Toret #109",
    description: "Corso Regina angolo Corso Belgio",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/08/02/cdv_photo_002.jpg",
    properties: { lat: "45.070781", lon: "7.701142" },
  },
  110: {
    name: "Toret #110",
    description: "Via Vigone - Corso Ferrucci",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/04/1349035652654.jpg",
    properties: { lat: "45.065692", lon: "7.654925" },
  },
  111: {
    name: "Toret #111",
    description: "Corso Chieri ",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/18/Toret36396-3_1.jpg",
    properties: { lat: "45.069991", lon: "7.728818" },
  },
  112: {
    name: "Toret #112",
    description: "Corso Galileo Ferraris - Corso Monte Lungo",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/22/Corso_Galileo_Ferraris_-_Corso_Monte_Lungo_1.JPG",
    properties: { lat: "45.046256", lon: "7.657154" },
  },
  113: {
    name: "Toret #113",
    description: "Via Mario Pagano",
    image: "",
    properties: { lat: "45.046967", lon: "7.668433" },
  },
  114: {
    name: "Toret #114",
    description: "Corso Rodolfo Montevecchio",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/09/SAM_2052.JPG",
    properties: { lat: "45.064998", lon: "7.661612" },
  },
  115: {
    name: "Toret #115",
    description: "Corso 4 novembre - Piazza D'armi",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/10/01/TORET_PIAZZA_DARMI_cso_4_novembre_light_file_STEFANO_RUFFINI.jpg",
    properties: { lat: "45.04482599999999", lon: "7.651076999999999" },
  },
  116: {
    name: "Toret #116",
    description: "Parco Cavalieri di Vittorio Veneto - Corso Galileo Ferraris",
    image: "",
    properties: { lat: "45.047113", lon: "7.657083000000001" },
  },
  117: {
    name: "Toret #117",
    description: "Piazza D'armi",
    image: "",
    properties: { lat: "45.044536", lon: "7.653917" },
  },
  118: {
    name: "Toret #118",
    description: "Viale Seneca",
    image: "",
    properties: { lat: "45.04552", lon: "7.697005" },
  },
  119: {
    name: "Toret #119",
    description: "Via Frugarolo",
    image: "",
    properties: { lat: "45.04643900000001", lon: "7.666703" },
  },
  120: {
    name: "Toret #120",
    description: "Via Febo - Strada Comunale di San Vito Revigliasco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/04/20121101_164135.jpg",
    properties: { lat: "45.046795", lon: "7.68859" },
  },
  121: {
    name: "Toret #121",
    description: "Via Alfonso Ogliaro - Via Filippo Acciarini - Parco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Ogliaro.jpg",
    properties: { lat: "45.04184600000001", lon: "7.642387" },
  },
  122: {
    name: "Toret #122",
    description: "Corso Turati - Giardino Cesare Valperga di Masino",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/07/18/cdv_photo_001.jpg",
    properties: { lat: "45.049378", lon: "7.664318" },
  },
  123: {
    name: "Toret #123",
    description: "Corso Dante - Via Nizza",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/17/corso_dante_1.JPG",
    properties: { lat: "45.04730099999999", lon: "7.67356" },
  },
  124: {
    name: "Toret #124",
    description: "Corso Chieri angolo s",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/13/cdv_photo_009.jpg",
    properties: { lat: "45.06567699999999", lon: "7.732457999999999" },
  },
  125: {
    name: "Toret #125",
    description: "Piazza Arturo Graf - Parco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/02/DSC_9435_1.jpg",
    properties: { lat: "45.04476900000001", lon: "7.673614" },
  },
  126: {
    name: "Toret #126",
    description: "Strada del Nobile angolo Piazzale Adua",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/25/IMG_1981.JPG",
    properties: { lat: "45.052775", lon: "7.706543999999999" },
  },
  127: {
    name: "Toret #127",
    description: "Via Villa della Regina angolo Corso Alberto Picco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/25/DSC_9229_1.jpg",
    properties: { lat: "45.05963", lon: "7.705" },
  },
  128: {
    name: "Toret #128",
    description: "Viale Marco Porzio Catone",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/01/22/1432572259821.jpg",
    properties: { lat: "45.050314", lon: "7.699768" },
  },
  129: {
    name: "Toret #129",
    description: "Parco Villa Genero - Viale dei Giusti",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/09/cdv_photo_005_1.jpg",
    properties: { lat: "45.056607", lon: "7.710857000000001" },
  },
  130: {
    name: "Toret #130",
    description: "Via Boston - Via Gorizia - Parco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/San_Marino.jpg",
    properties: { lat: "45.04048600000001", lon: "7.640023000000001" },
  },
  131: {
    name: "Toret #131",
    description: "Strada del Nobile - Strada San Vincenzo",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/26/IMG_2094_1.JPG",
    properties: { lat: "45.048363", lon: "7.718075" },
  },
  132: {
    name: "Toret #132",
    description: "Via Pietro Frattini - Corso Enrico Tazzoli - Parco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Lineare3.jpg",
    properties: { lat: "45.035444", lon: "7.626844000000001" },
  },
  133: {
    name: "Toret #133",
    description: "Strada Comunale Santa Margherita",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/25/DSC_9249_1_1.jpg",
    properties: { lat: "45.05430399999999", lon: "7.716016" },
  },
  134: {
    name: "Toret #134",
    description: "Corso Cosenza",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Castelgomberto.jpg",
    properties: { lat: "45.04123100000001", lon: "7.631714" },
  },
  135: {
    name: "Toret #135",
    description: "Parco Rignon - Corso Orbassano - Via Filadelfia",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/22/toret_2_1_1.jpg",
    properties: { lat: "45.04330700000001", lon: "7.636749" },
  },
  136: {
    name: "Toret #136",
    description: "Via Boston",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Bocciofila.jpg",
    properties: { lat: "45.040103", lon: "7.642194" },
  },
  137: {
    name: "Toret #137",
    description: "Via Don Giovanni Grioli angolo Via Giuseppe Vicarelli",
    image: "",
    properties: { lat: "45.036621", lon: "7.636764" },
  },
  138: {
    name: "Toret #138",
    description: "Via Piava - Corso Unione Sovietica",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/11/Plava3.jpg",
    properties: { lat: "45.01650900000001", lon: "7.624939" },
  },
  139: {
    name: "Toret #139",
    description: "Parco Piemonte - Via dei Mughetti",
    image: "",
    properties: { lat: "45.006951", lon: "7.634919" },
  },
  140: {
    name: "Toret #140",
    description: "Via Buenos Aires - Via Gorizia",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Cosenza.jpg",
    properties: { lat: "45.038132", lon: "7.638278" },
  },
  141: {
    name: "Toret #141",
    description: "Via San Marino - Piazza Pitagora - Giardino",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Parco_Mirol.jpg",
    properties: { lat: "45.039709", lon: "7.636711" },
  },
  142: {
    name: "Toret #142",
    description: "Via Aristide Faccioli",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Faccioli.jpg",
    properties: { lat: "45.02179", lon: "7.620498" },
  },
  143: {
    name: "Toret #143",
    description: "Via Plava angolo Via San Michele del Carso",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/11/Toret_Via_Plava.jpg",
    properties: { lat: "45.01714", lon: "7.624024" },
  },
  144: {
    name: "Toret #144",
    description: "Via Piava - Giardino",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Plava5.jpg",
    properties: { lat: "45.016044", lon: "7.625589" },
  },
  145: {
    name: "Toret #145",
    description: "Parco Piemonte",
    image: "",
    properties: { lat: "45.007209", lon: "7.632706000000001" },
  },
  146: {
    name: "Toret #146",
    description: "Via Torrazza Piemonte",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/02/TORET-Stefania-Iudica-Via_Torrazza_1_1.jpg",
    properties: { lat: "45.01671000000001", lon: "7.657199999999999" },
  },
  147: {
    name: "Toret #147",
    description: "Piazzale San Gabriele da Gorizia angolo Via Filadelfia",
    image: "",
    properties: { lat: "45.03881000000001", lon: "7.654069999999999" },
  },
  148: {
    name: "Toret #148",
    description: "Via Pramollo angolo Via Buriasco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Pramollo.jpg",
    properties: { lat: "45.021208", lon: "7.624523999999999" },
  },
  149: {
    name: "Toret #149",
    description: "Parco Cavalieri di Vittorio Veneto - Corso Sebastopoli",
    image: "",
    properties: { lat: "45.04381799999999", lon: "7.650795" },
  },
  150: {
    name: "Toret #150",
    description: "Parco Piemonte - Via 25 Aprile",
    image: "",
    properties: { lat: "45.003008", lon: "7.634014" },
  },
  151: {
    name: "Toret #151",
    description: "Strada Castello di Mirafiori - Strade delle Cacce",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/20/BelaRosin.jpg",
    properties: { lat: "45.010497", lon: "7.637531000000001" },
  },
  152: {
    name: "Toret #152",
    description: "Corso Galileo Ferraris - Piazza D'armi",
    image: "",
    properties: { lat: "45.042857", lon: "7.654164" },
  },
  153: {
    name: "Toret #153",
    description: "Parco Cavalieri di Vittorio Veneto - Corso Galileo Ferraris",
    image: "",
    properties: { lat: "45.04365299999999", lon: "7.655025" },
  },
  154: {
    name: "Toret #154",
    description: "Piazza Tancredi - Via Taggia - Parco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Galimberti1.jpg",
    properties: { lat: "45.03330999999999", lon: "7.655570000000001" },
  },
  155: {
    name: "Toret #155",
    description: "Piazza Tancredi - Parco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Galimberti2.jpg",
    properties: { lat: "45.03346", lon: "7.65363" },
  },
  156: {
    name: "Toret #156",
    description: "Viale Piave - Parco della Rimembranza",
    image: "",
    properties: { lat: "45.03026599999999", lon: "7.709803" },
  },
  157: {
    name: "Toret #157",
    description: "Via Arnaldo da Brescia",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/11/25/IMG172_1.jpg.png",
    properties: { lat: "45.03743", lon: "7.6524" },
  },
  158: {
    name: "Toret #158",
    description: "Parco Giuseppe di Vittorio - Via Passo Buole",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/06/09/Corsica.jpg",
    properties: { lat: "45.026459", lon: "7.649458999999999" },
  },
  159: {
    name: "Toret #159",
    description: "Corso Galileo Galilei - Longo Po",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/14/DSC_8818.jpg",
    properties: { lat: "45.043471", lon: "7.679581" },
  },
  160: {
    name: "Toret #160",
    description: "Via La Loggia - Giardino",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Orologiaio.jpg",
    properties: { lat: "45.032192", lon: "7.651739" },
  },
  161: {
    name: "Toret #161",
    description: "Corso Unita D'Italia - Lungo PO",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/11/DSC_7837.jpg",
    properties: { lat: "45.02574500000001", lon: "7.672219999999999" },
  },
  162: {
    name: "Toret #162",
    description: "Strada Comunale di San Vito Revigliasco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/05/2012-09-27_17.12.55_1.jpg",
    properties: { lat: "45.043078", lon: "7.697033" },
  },
  163: {
    name: "Toret #163",
    description:
      "Strada Comunale Val Salice - Parco Repubbliche Partigiane Piemontesi",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/27/2012-09-27_18.10.06_1_1.jpg",
    properties: { lat: "45.04084600000001", lon: "7.708258" },
  },
  164: {
    name: "Toret #164",
    description: "Piazza Bengasi - Via Nizza",
    image: "",
    properties: { lat: "45.016439", lon: "7.660634999999999" },
  },
  165: {
    name: "Toret #165",
    description: "Strada del Colle - Parco della Rimembranza",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/27/2012-09-27_17.50.36_1_1.jpg",
    properties: { lat: "45.03057699999999", lon: "7.723363999999999" },
  },
  166: {
    name: "Toret #166",
    description: "Viale Piave - Parco della Rimembranza",
    image: "",
    properties: { lat: "45.031627", lon: "7.713889" },
  },
  167: {
    name: "Toret #167",
    description: "Viale Piave - Parco della Rimembranza",
    image: "",
    properties: { lat: "45.031512", lon: "7.717866" },
  },
  168: {
    name: "Toret #168",
    description: "Via Onorato Vigliani angolo Via Tommaso Villa",
    image: "",
    properties: { lat: "45.017409", lon: "7.659018" },
  },
  169: {
    name: "Toret #169",
    description: "Corso Trieste - Lungo PO",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/13/IMG_20130511_212427.JPG",
    properties: { lat: "45.01747900000001", lon: "7.674051" },
  },
  170: {
    name: "Toret #170",
    description: "Via Corrado Corradino angolo Piazza Bengasi ",
    image: "",
    properties: { lat: "45.01721", lon: "7.662240000000001" },
  },
  171: {
    name: "Toret #171",
    description: "Via San Francesco D'assisi",
    image: "",
    properties: { lat: "45.137299", lon: "7.771577" },
  },
  172: {
    name: "Toret #172",
    description: "Viale del Castello",
    image: "",
    properties: { lat: "45.00182300000001", lon: "7.686033" },
  },
  173: {
    name: "Toret #173",
    description: "Via Sestriere - Via Giuseppe Mazzini",
    image: "",
    properties: { lat: "45.00846000000001", lon: "7.65794" },
  },
  174: {
    name: "Toret #174",
    description: "Via Fosse Ardeatine",
    image: "",
    properties: { lat: "45.129448", lon: "7.768166" },
  },
  175: {
    name: "Toret #175",
    description: "Parco Alcide Degasperi",
    image: "",
    properties: { lat: "45.127528", lon: "7.765132" },
  },
  176: {
    name: "Toret #176",
    description: "Parco Cascina Pettiti",
    image: "",
    properties: { lat: "45.115732", lon: "7.768552" },
  },
  177: {
    name: "Toret #177",
    description: "Parco Alcide Degasperi",
    image: "",
    properties: { lat: "45.127202", lon: "7.764849" },
  },
  178: {
    name: "Toret #178",
    description: "Parco Cascina Pettiti",
    image: "",
    properties: { lat: "45.118492", lon: "7.767291" },
  },
  179: {
    name: "Toret #179",
    description: "Parco Cascina Pettiti",
    image: "",
    properties: { lat: "45.11939399999999", lon: "7.767753" },
  },
  180: {
    name: "Toret #180",
    description: "Viale Luigi Enaudi",
    image: "",
    properties: { lat: "45.106541", lon: "7.766825" },
  },
  181: {
    name: "Toret #181",
    description: "Via San Mauro",
    image: "",
    properties: { lat: "45.114494", lon: "7.765402" },
  },
  182: {
    name: "Toret #182",
    description: "Parco Cascina Pettiti",
    image: "",
    properties: { lat: "45.116166", lon: "7.768779" },
  },
  183: {
    name: "Toret #183",
    description: "Piazza Vittorio Veneto Nord",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/09/19/1265705_10200551765620960_1512219669_o_1.jpg",
    properties: { lat: "45.066013", lon: "7.694174" },
  },
  184: {
    name: "Toret #184",
    description: "Via Martiri della Liberta - Piazzale Europa",
    image: "",
    properties: { lat: "45.099084", lon: "7.761467000000001" },
  },
  185: {
    name: "Toret #185",
    description: "Parco del Meisino",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/15/20121207_113240_Medium.jpg",
    properties: { lat: "45.090117", lon: "7.73539" },
  },
  186: {
    name: "Toret #186",
    description: "Basilica di Superga",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/01/21/toret_superga.jpg",
    properties: { lat: "45.081012", lon: "7.767391" },
  },
  187: {
    name: "Toret #187",
    description: "Strada Comunale di Superga",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/26/IMG_2110_1.JPG",
    properties: { lat: "45.078139", lon: "7.771218999999999" },
  },
  188: {
    name: "Toret #188",
    description: "Via Superga",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/26/IMG_2114_1.JPG",
    properties: { lat: "45.076601", lon: "7.780489" },
  },
  189: {
    name: "Toret #189",
    description: "Piazza Vittorio Veneto / Via Eusebio Bava - Nord",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/09/DSC_7643.jpg",
    properties: { lat: "45.064819", lon: "7.696357000000001" },
  },
  190: {
    name: "Toret #190",
    description: "Via dei Colli",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/20/turet_1.jpg",
    properties: { lat: "45.073779", lon: "7.781842" },
  },
  191: {
    name: "Toret #191",
    description: "Corso Chieri - Strada dei Calleri",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/13/cdv_photo_008.jpg",
    properties: { lat: "45.06032600000001", lon: "7.74081" },
  },
  192: {
    name: "Toret #192",
    description: "Via San Francesco d'Assisi",
    image: "",
    properties: { lat: "44.996183", lon: "7.646375999999999" },
  },
  193: {
    name: "Toret #193",
    description: "Corso Chieri - Strada Comunale di Reaglie",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/12/cdv_photo_007.jpg",
    properties: { lat: "45.05882900000001", lon: "7.74398" },
  },
  194: {
    name: "Toret #194",
    description: "Via Mont Cervet - Parco Collina di Superga",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/26/IMG_2105_1.JPG",
    properties: { lat: "45.060019", lon: "7.784249000000001" },
  },
  195: {
    name: "Toret #195",
    description: "Via Saluzzo",
    image: "",
    properties: { lat: "44.993366", lon: "7.664758" },
  },
  196: {
    name: "Toret #196",
    description: "Via Sambuy",
    image: "",
    properties: { lat: "44.95463", lon: "7.780766" },
  },
  197: {
    name: "Toret #197",
    description: "Via Cavour",
    image: "",
    properties: { lat: "44.950545", lon: "7.773517999999999" },
  },
  198: {
    name: "Toret #198",
    description: "Via Saluzzo",
    image: "",
    properties: { lat: "44.991317", lon: "7.662937" },
  },
  199: {
    name: "Toret #199",
    description:
      "Corso Principe Eugenio / Via Santa Chiara / Via Carlo Allioni",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/12/24/10885499_10204571579522761_214334061651391816_n.jpg",
    properties: { lat: "45.078125", lon: "7.672312999999999" },
  },
  200: {
    name: "Toret #200",
    description: "Corso Federico Sclopis",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/01/DSC_7669.jpg",
    properties: { lat: "45.0466", lon: "7.683019" },
  },
  201: {
    name: "Toret #201",
    description: "Via Edoardo Rubino",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Roccafranca1.jpg",
    properties: { lat: "45.042267", lon: "7.624471" },
  },
  202: {
    name: "Toret #202",
    description: "Piazza Vittorio Veneto / Via Eusebio Bava - Sud",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/10/DSC_7868.jpg",
    properties: { lat: "45.064137", lon: "7.695460000000001" },
  },
  203: {
    name: "Toret #203",
    description: "Corso Moncalieri / Ponte Vittorio Emanuele I",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/granmadre.JPG",
    properties: { lat: "45.062748", lon: "7.698042999999999" },
  },
  204: {
    name: "Toret #204",
    description: "Via Santa Maria Mazzarello",
    image: "",
    properties: { lat: "45.062119", lon: "7.624919" },
  },
  205: {
    name: "Toret #205",
    description: "Via Mario Soldati",
    image: "",
    properties: { lat: "45.07304", lon: "7.618469000000001" },
  },
  206: {
    name: "Toret #206",
    description: "Parco Via Edoardo Rubino 1",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Roccafranca4.jpg",
    properties: { lat: "45.042133", lon: "7.625839" },
  },
  207: {
    name: "Toret #207",
    description: "Corso Gaetano Slvemini",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Salvemini2.jpg",
    properties: { lat: "45.04549", lon: "7.624343999999999" },
  },
  208: {
    name: "Toret #208",
    description: "VIA GAIDANO FRONTE VIA DEMARGHERITA",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/17/1.jpg",
    properties: { lat: "45.038364", lon: "7.627891" },
  },
  209: {
    name: "Toret #209",
    description: "Corso Guida Reni",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Giajone2.jpg",
    properties: { lat: "45.04893100000001", lon: "7.629286" },
  },
  210: {
    name: "Toret #210",
    description: "Corso Gaetano Salvemini",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Salvemini1.jpg",
    properties: { lat: "45.045063", lon: "7.625957" },
  },
  211: {
    name: "Toret #211",
    description: "Via Montanaro",
    image: "",
    properties: { lat: "45.089989", lon: "7.693638000000001" },
  },
  212: {
    name: "Toret #212",
    description: "Via Giulio Biglieri",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/01/03/Toretto_via_biglieri_ang._via_nizza.JPG",
    properties: { lat: "45.03447", lon: "7.668221" },
  },
  213: {
    name: "Toret #213",
    description: "VIA CASTELGOMBERTO ANGOLO PIAZZA BASILICATA",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/21/tt_002t_1.jpg",
    properties: { lat: "45.04608901666013", lon: "7.631664534927918" },
  },
  214: {
    name: "Toret #214",
    description: "Corso Orbassano / Via Carlo Alfonso Nallino",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Orbassano.jpg",
    properties: { lat: "45.037029", lon: "7.628487" },
  },
  215: {
    name: "Toret #215",
    description: "Corso Giardino Nicholas Green",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Salvemini_Nave.jpg",
    properties: { lat: "45.043564", lon: "7.627543" },
  },
  216: {
    name: "Toret #216",
    description: "Parco Lineare",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Lineare1.jpg",
    properties: { lat: "45.03463", lon: "7.629857" },
  },
  217: {
    name: "Toret #217",
    description: "CORSO MARONCELLI FR.PALAZZO DEL LAVORO",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/05/16/1399712591453.jpg",
    properties: { lat: "45.01708777596664", lon: "7.665363485918459" },
  },
  218: {
    name: "Toret #218",
    description: "CORSO MARONCELLI ANGOLO VIA GENOVA",
    image:
      "https://ilovetoret.it/up/ima/toret/2012/07/16/CORSO_MARONCELLI_ANGOLO_VIA_GENOVA.jpg",
    properties: { lat: "45.018429", lon: "7.663522" },
  },
  219: {
    name: "Toret #219",
    description: "CORSO SEBASTOPOLI ANGOLO VIA TRIPOLI (MERCATO)",
    image:
      "https://ilovetoret.it/up/ima/toret/2012/07/16/CORSO_SEBASTOPOLI_ANGOLO_VIA_TRIPOLI_MERCATO.jpg",
    properties: { lat: "45.045036", lon: "7.645287" },
  },
  220: {
    name: "Toret #220",
    description: "CORSO SEBASTOPOLI ANGOLO VIA CADORNA (MERCATO)",
    image:
      "https://ilovetoret.it/up/ima/toret/2012/07/16/CORSO_SEBASTOPOLI_ANGOLO_VIA_CADORNA_MERCATO.jpg",
    properties: { lat: "45.04446473213728", lon: "7.647273685260451" },
  },
  221: {
    name: "Toret #221",
    description: "Via Madama Cristina",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/02/DSC_9432_1.jpg",
    properties: { lat: "45.046619", lon: "7.675353" },
  },
  222: {
    name: "Toret #222",
    description: "Piazza Omero",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Benzinaio.jpg",
    properties: { lat: "45.037182", lon: "7.629769" },
  },
  223: {
    name: "Toret #223",
    description: "Piazza Cattaneo",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/15/1_2.jpg",
    properties: { lat: "45.035954", lon: "7.624644" },
  },
  224: {
    name: "Toret #224",
    description: "Via Sandro Botticelli",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DSC_7992.jpg",
    properties: { lat: "45.095325", lon: "7.71568" },
  },
  225: {
    name: "Toret #225",
    description: "Corso Giuseppe Allamano",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Allamano-Reni.jpg",
    properties: { lat: "45.05052899999999", lon: "7.629393000000001" },
  },
  227: {
    name: "Toret #227",
    description: "Superga",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/20/36351.jpg",
    properties: { lat: "45.08116499999999", lon: "7.767685" },
  },
  228: {
    name: "Toret #228",
    description: "Via Giovanni Palatucci",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Salvemini3.jpg",
    properties: { lat: "45.04708500000001", lon: "7.620091" },
  },
  229: {
    name: "Toret #229",
    description: "Strada di San Mauro / Largo Damiano Chiesa",
    image: "",
    properties: { lat: "45.099609", lon: "7.723611" },
  },
  230: {
    name: "Toret #230",
    description: "Parco Lineare 2",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Lineare2.jpg",
    properties: { lat: "45.034782", lon: "7.629637" },
  },
  231: {
    name: "Toret #231",
    description: "Parco giochio di Via Edoardo Perroncito",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/12/23/Toret_parco_giochi_via_Perroncito.jpg",
    properties: { lat: "45.075062", lon: "7.606906" },
  },
  232: {
    name: "Toret #232",
    description: "Corso Orbassano",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/19/1_3.jpg",
    properties: { lat: "45.033764", lon: "7.620383999999999" },
  },
  233: {
    name: "Toret #233",
    description: "Parco Via Edoardo Rubino 2",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Roccafranca3.jpg",
    properties: { lat: "45.04166", lon: "7.624919" },
  },
  234: {
    name: "Toret #234",
    description: "Via Giacomo Balla",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Giajone1.jpg",
    properties: { lat: "45.047867", lon: "7.628146" },
  },
  235: {
    name: "Toret #235",
    description: "Lungo Dora Napoli 48",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/05/toret.jpg",
    properties: { lat: "45.084755", lon: "7.681471000000001" },
  },
  236: {
    name: "Toret #236",
    description: "Strada del Barocchio",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/27/2_1.jpg",
    properties: { lat: "45.051964", lon: "7.622412" },
  },
  237: {
    name: "Toret #237",
    description: "Corso Novara",
    image: "",
    properties: { lat: "45.07951", lon: "7.700902" },
  },
  238: {
    name: "Toret #238",
    description: "Via Tolmina - Parco",
    image: "",
    properties: { lat: "45.05442800000001", lon: "7.642618" },
  },
  239: {
    name: "Toret #239",
    description:
      "Via Fratelli Mario e PierLuigi Passoni / Via Pio Paolo Perazzo",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/11/IMG_20140924_141228.jpg",
    properties: { lat: "45.083099", lon: "7.619123" },
  },
  240: {
    name: "Toret #240",
    description: "Corso Novara",
    image: "",
    properties: { lat: "45.07878899999999", lon: "7.70153" },
  },
  241: {
    name: "Toret #241",
    description: "Corso Bernardino Telesio 82 - Parco gioco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/14/Telesio_82---.jpg",
    properties: { lat: "45.08149000000001", lon: "7.62841" },
  },
  242: {
    name: "Toret #242",
    description: "PIAZZA DERNA S.N. FRONTE CORSO TARANTO (LATO OVEST)",
    image: "",
    properties: { lat: "45.101952", lon: "7.698852" },
  },
  243: {
    name: "Toret #243",
    description: "Piazza Amedeo Peyron",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/14/toret-piazzapeyron_1.jpg",
    properties: { lat: "45.07871999999999", lon: "7.661435" },
  },
  244: {
    name: "Toret #244",
    description: "Lungo Dora Napoli 90",
    image: "",
    properties: { lat: "45.087807", lon: "7.676739999999999" },
  },
  245: {
    name: "Toret #245",
    description: "Via Palestrina / Via Martorelli",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/14/Toret_di_via_Palestrina_angolo_via_Martorelli_2.JPG",
    properties: { lat: "45.09282700000001", lon: "7.693426" },
  },
  246: {
    name: "Toret #246",
    description: "Corso Vercelli angolo Via Desana",
    image: "",
    properties: { lat: "45.0961", lon: "7.691926" },
  },
  247: {
    name: "Toret #247",
    description: "Corso Vercelli 141",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/10/28/cdv_photo_001.jpg",
    properties: { lat: "45.097404", lon: "7.692152" },
  },
  248: {
    name: "Toret #248",
    description: "Parco giocho Sempione",
    image: "",
    properties: { lat: "45.10178800000001", lon: "7.691372000000001" },
  },
  249: {
    name: "Toret #249",
    description: "Via Maddalene / Via Bologna",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/31/Toret_-_Via_Bologna_angolo_via_Maddalene.jpg",
    properties: { lat: "45.09042", lon: "7.71134" },
  },
  250: {
    name: "Toret #250",
    description: "Via Luigi Salvatore Cherubini",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/17/Toret_-_Via_Cherubini.jpg",
    properties: { lat: "45.092949", lon: "7.705058" },
  },
  251: {
    name: "Toret #251",
    description: "Cimitero Monumentale Nord",
    image: "",
    properties: { lat: "45.08391199999999", lon: "7.714202000000001" },
  },
  252: {
    name: "Toret #252",
    description: "Piazza Giovanni Bottesini - Via Amilcare Ponchielli",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/09/pza_bottesini.jpg",
    properties: { lat: "45.088306", lon: "7.698278" },
  },
  253: {
    name: "Toret #253",
    description: "Via alla chiesa",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DSC_7989.jpg",
    properties: { lat: "45.09000799999999", lon: "7.71387" },
  },
  254: {
    name: "Toret #254",
    description: "Via Gottardo / Via Rosa",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DSC_7977.jpg",
    properties: { lat: "45.089184", lon: "7.713183" },
  },
  255: {
    name: "Toret #255",
    description: "Corso Novara",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/01/19/cdv_photo_001.jpg",
    properties: { lat: "45.081139", lon: "7.698963999999999" },
  },
  256: {
    name: "Toret #256",
    description: "Via Leoncavallo / Via Ponchielli",
    image: "",
    properties: { lat: "45.087341", lon: "7.702172000000001" },
  },
  257: {
    name: "Toret #257",
    description: "Parco Colletta",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DSC_7969.jpg",
    properties: { lat: "45.083664", lon: "7.716656" },
  },
  258: {
    name: "Toret #258",
    description: "Corso Novara / Lungo Dora Firenze",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/14/DSC_8990.jpg",
    properties: { lat: "45.075867", lon: "7.703697" },
  },
  259: {
    name: "Toret #259",
    description: "Lungo Dora Pietro Colletta",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DSC_7965.jpg",
    properties: { lat: "45.077599", lon: "7.721565999999999" },
  },
  260: {
    name: "Toret #260",
    description: "LUNGO DORA VOGHERA INCROCIO CORSO BELGIO",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DSC_7953.jpg",
    properties: { lat: "45.073517", lon: "7.715109" },
  },
  261: {
    name: "Toret #261",
    description: "Lungo Po Alessandro Antonelli (lato sud)",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/14/DSC_8852.jpg",
    properties: { lat: "45.07493999999999", lon: "7.726368999999999" },
  },
  262: {
    name: "Toret #262",
    description: "PIAZZA BORROMINI S.N. ANGOLO VIA CASTELNUOVO (MERCATO)",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/04/10/cdv_photo_001.jpg",
    properties: { lat: "45.067207", lon: "7.710047000000001" },
  },
  263: {
    name: "Toret #263",
    description: "Via Bologna / Via Amilcare Ponchielli",
    image: "",
    properties: { lat: "45.086548", lon: "7.703819" },
  },
  264: {
    name: "Toret #264",
    description: "Via Casella / Via Cruto - Parco giochi",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/05/006_1_1.JPG",
    properties: { lat: "45.09082", lon: "7.70464" },
  },
  265: {
    name: "Toret #265",
    description: "Via Enrico Petrella",
    image: "",
    properties: { lat: "45.090862", lon: "7.705775" },
  },
  266: {
    name: "Toret #266",
    description: "Piazza San Carlo NordOvest",
    image:
      "https://ilovetoret.it/up/ima/toret/2012/07/16/Piazza_San_Carlo_NordOuest.jpg",
    properties: { lat: "45.067841", lon: "7.68226" },
  },
  267: {
    name: "Toret #267",
    description: "Via Francesco De Santis / Largo Luca Della Robbia (Parco)",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/01/04/desantis-robbia_parco_uff.jpg",
    properties: { lat: "45.070503", lon: "7.618665" },
  },
  268: {
    name: "Toret #268",
    description: "Via della Rocca",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/25/DSC_9399_1_1.jpg",
    properties: { lat: "45.063179", lon: "7.692433" },
  },
  269: {
    name: "Toret #269",
    description: "Via San Massimo, Parco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/25/VIASANMASSIMO_PARCO_1_1.jpg",
    properties: { lat: "45.062687", lon: "7.687934" },
  },
  270: {
    name: "Toret #270",
    description: "Corso Giuseppe Garibaldi",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/26/cdv_photo_001_1_1.jpg",
    properties: { lat: "45.12010600000001", lon: "7.644194" },
  },
  271: {
    name: "Toret #271",
    description: "Piazza Giuseppe Manno",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/05/11/1429612224548_1.jpg",
    properties: { lat: "45.105438", lon: "7.65554" },
  },
  272: {
    name: "Toret #272",
    description: "Via Madama Cristina / Piazza Govean",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/02/DSC_9452_1.jpg",
    properties: { lat: "45.049171", lon: "7.676796" },
  },
  273: {
    name: "Toret #273",
    description: "Corso orbassano - Parco Rignon",
    image:
      "https://ilovetoret.it/up/ima/toret/2012/07/16/Corso_orbassano_-_Parco_Rignon.jpg",
    properties: { lat: "45.04265599999999", lon: "7.638851" },
  },
  274: {
    name: "Toret #274",
    description:
      "Pizza XVIII Dicembre Martiri della camera del Lavoro 1922 - Porta Susa",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/06/20/28-05-2016-10-32.jpg",
    properties: { lat: "45.074287", lon: "7.668918" },
  },
  275: {
    name: "Toret #275",
    description: "Parco della Pellerina",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/05/11/1399368472997.jpg",
    properties: { lat: "45.090694", lon: "7.636889" },
  },
  276: {
    name: "Toret #276",
    description: "Piazza Giuseppe Manno [FST]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/supermarket.jpg",
    properties: { lat: "45.101776", lon: "7.667145000000001" },
  },
  277: {
    name: "Toret #277",
    description: "Corso Monte Cucco / Monte Ortigara",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/09/16/P1030820.JPG",
    properties: { lat: "45.067291", lon: "7.632159" },
  },
  278: {
    name: "Toret #278",
    description: "Corso Palestro / Via Carlo Boucheron",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/14/1405761184963.jpg",
    properties: { lat: "45.074478", lon: "7.672922" },
  },
  279: {
    name: "Toret #279",
    description: "Corso Ducad'Aosta",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/06/10/Corso_Duca_dAosta_2_34538_1.jpg",
    properties: { lat: "45.060875", lon: "7.666967" },
  },
  280: {
    name: "Toret #280",
    description: "Rotonda Corso Unità d'Italia / Via C. Corrdino (stz benzina)",
    image:
      "https://ilovetoret.it/up/ima/toret/2012/07/17/Rotonda_Corso_Unita_dItalia__Via_C._Corrdino_stz_benzina.jpg",
    properties: { lat: "45.01709", lon: "7.669018" },
  },
  281: {
    name: "Toret #281",
    description: "CORSO UNITA' D'ITALIA S.N. (FRONTE C.T.O.)",
    image:
      "https://ilovetoret.it/up/ima/toret/2012/07/16/CORSO_UNITA_DITALIA_S.N._FRONTE_C.T.O..jpg",
    properties: { lat: "45.02985", lon: "7.67341" },
  },
  282: {
    name: "Toret #282",
    description: "Via Errico Petrella",
    image: "",
    properties: { lat: "45.08910399999999", lon: "7.701476" },
  },
  283: {
    name: "Toret #283",
    description: "Largo Orbassano [N]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/01/22/1443607109895.jpg",
    properties: { lat: "45.052502", lon: "7.655106" },
  },
  284: {
    name: "Toret #284",
    description: "Corso Traiano / Via Sette Comuni",
    image: "",
    properties: { lat: "45.02066799999999", lon: "7.654534000000001" },
  },
  285: {
    name: "Toret #285",
    description: "Corso Unione d'Italia / Campi Tennis",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/03/IMG_2135_1.JPG",
    properties: { lat: "45.033611", lon: "7.676243" },
  },
  286: {
    name: "Toret #286",
    description: "VIA PASSO BUOLE ANG.VIA NIZZA",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/16/Nizza-Passobuole_uff.jpg",
    properties: { lat: "45.021969", lon: "7.663157" },
  },
  287: {
    name: "Toret #287",
    description: "Corso Moncalieri / Ponte Principessa Isabella",
    image: "",
    properties: { lat: "45.044636", lon: "7.68594" },
  },
  288: {
    name: "Toret #288",
    description: "CORSO SAN MAURIZIO (GIARDINI REALI INF.)",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/04/06/1428329359245_1.jpg",
    properties: { lat: "45.07336", lon: "7.6903" },
  },
  289: {
    name: "Toret #289",
    description: "Corso Guglielmo Marconi / Via Madama Cristina",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/foto-6.JPG",
    properties: { lat: "45.055641", lon: "7.68118" },
  },
  290: {
    name: "Toret #290",
    description: "Corso Regio Parco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/09/Toret_Corso_Regio_Parco.jpg",
    properties: { lat: "45.077076", lon: "7.694807" },
  },
  291: {
    name: "Toret #291",
    description: "Corso San Maurizio / Via Gioacchino Rossini",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/02/DSC_7623.jpg",
    properties: { lat: "45.071527", lon: "7.692204" },
  },
  292: {
    name: "Toret #292",
    description: "Via Cardinal Maurizio / Via Asti",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/25/DSC_9235_1.jpg",
    properties: { lat: "45.06258", lon: "7.705337000000001" },
  },
  293: {
    name: "Toret #293",
    description: "Via Giuseppe Mazzini - Via Andrea Provana",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/09/04/cdv_photo_001_1.jpg",
    properties: { lat: "45.061646", lon: "7.687908" },
  },
  294: {
    name: "Toret #294",
    description: "Crimea",
    image: "",
    properties: { lat: "45.053703", lon: "7.689185" },
  },
  295: {
    name: "Toret #295",
    description: "Via Santorre Santarosa / Via Monferrato",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/12/IMG_1997.JPG",
    properties: { lat: "45.06325099999999", lon: "7.700182000000001" },
  },
  296: {
    name: "Toret #296",
    description: "Strada di San Mauro",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/07/21/20140717_131724.jpg",
    properties: { lat: "45.099827", lon: "7.727252" },
  },
  297: {
    name: "Toret #297",
    description: "CORSO CASALE 192 FRONTE CHIESA MADONNA DEL PILONE",
    image:
      "https://ilovetoret.it/up/ima/toret/2012/07/16/CORSO_CASALE_192_FRONTE_CHIESA_MADONNA_DEL_PILONE.jpg",
    properties: { lat: "45.070099", lon: "7.723546999999999" },
  },
  298: {
    name: "Toret #298",
    description: "Via Cesare Balbo",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/14/DSC_7647.jpg",
    properties: { lat: "45.070004", lon: "7.700115" },
  },
  299: {
    name: "Toret #299",
    description: "CORSO BOLZANO S.N. ANGOLO CORSO VITTORIO EMANUELE II°",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8307.jpg",
    properties: { lat: "45.06825599999999", lon: "7.664273" },
  },
  300: {
    name: "Toret #300",
    description: "Via Barletta / Piazza Santa Rita lato Ovest",
    image:
      "https://ilovetoret.it/up/ima/toret/2012/07/16/Via_Barletta__Piazza_Santa_Rita_lato_Ovest.jpg",
    properties: { lat: "45.046528", lon: "7.647216999999999" },
  },
  301: {
    name: "Toret #301",
    description: "Corso Regio Parco / Cimetiere",
    image: "",
    properties: { lat: "45.084202", lon: "7.711063" },
  },
  302: {
    name: "Toret #302",
    description: "Piazzale Duca d'Aosta",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8338.jpg",
    properties: { lat: "45.06198500000001", lon: "7.663659" },
  },
  303: {
    name: "Toret #303",
    description: "Corso Re Umberto angolo Corso Sommeiller",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/03/22/cdv_photo_001_1.jpg",
    properties: { lat: "45.057503", lon: "7.669159999999999" },
  },
  304: {
    name: "Toret #304",
    description: "Via Sant'Agostino / Davanti la chiesa",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/09/04/cdv_photo_001.jpg",
    properties: { lat: "45.075329", lon: "7.680323" },
  },
  305: {
    name: "Toret #305",
    description: "Parco Ruffini - Viale Leonardo Bistolfi / Corso Trapani",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/03/4.jpg",
    properties: { lat: "45.05821600000001", lon: "7.634526999999999" },
  },
  306: {
    name: "Toret #306",
    description: "Parco Ruffini - Corso Lione",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/03/6.jpg",
    properties: { lat: "45.056614", lon: "7.631728000000001" },
  },
  307: {
    name: "Toret #307",
    description: "Corso Vercelli Parco",
    image: "",
    properties: { lat: "45.08424800000001", lon: "7.686980000000001" },
  },
  308: {
    name: "Toret #308",
    description: "Via Tepice / Via Genova",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/21/via_tepice_-_via_genova_foto_Marco_Gilardetti_1.JPG",
    properties: { lat: "45.03923", lon: "7.672134" },
  },
  309: {
    name: "Toret #309",
    description: "Corso Vercelli Parco",
    image: "",
    properties: { lat: "45.084183", lon: "7.686589" },
  },
  310: {
    name: "Toret #310",
    description:
      'Corso Svizzera, "Giardino Dispersi sul fronte russo 1941 - 1943", all`angolo con via Medici',
    image: "",
    properties: { lat: "45.07818999999999", lon: "7.648791" },
  },
  311: {
    name: "Toret #311",
    description: "Via Nizza / Corso Spezia",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/21/via_nizza_-_corso_spezia_311_foto_Marco_Gilardetti_1.JPG",
    properties: { lat: "45.037514", lon: "7.669373999999999" },
  },
  312: {
    name: "Toret #312",
    description: "PIAZZA DERNA ANGOLO CORSO TARANTO (LATO EST)",
    image: "",
    properties: { lat: "45.101467", lon: "7.700005" },
  },
  313: {
    name: "Toret #313",
    description: "Corso Siracusa / Piazza Pitagora",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Pitagora.jpg",
    properties: { lat: "45.039246", lon: "7.634127000000001" },
  },
  314: {
    name: "Toret #314",
    description: "Piazza Giampietro Chironi",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/06/20/TORET_2016_05_20_1951583251.jpg",
    properties: { lat: "45.079624", lon: "7.641811999999999" },
  },
  315: {
    name: "Toret #315",
    description: "Via Giacomo Medici / Via Pietrino Belli",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/17/via_pietrino_belli-1_1.jpg",
    properties: { lat: "45.07961299999999", lon: "7.644921" },
  },
  316: {
    name: "Toret #316",
    description: "Area verde via Zumaglia / Via Pietrino Belli Parco [FOMM]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/12/24/toret_1.jpg",
    properties: { lat: "45.078976", lon: "7.644567" },
  },
  317: {
    name: "Toret #317",
    description:
      "Giardino T Grandi - Corso Filippo Brunelleschi / Via Fratelli Fornaca",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/14/19-02-2016-15-10.jpg",
    properties: { lat: "45.06679500000001", lon: "7.623758" },
  },
  318: {
    name: "Toret #318",
    description: 'Piazza Lorenzo Bernini - Il Tris di "Toret" nord',
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/09/bernini_2.jpg",
    properties: { lat: "45.076443", lon: "7.655525000000001" },
  },
  319: {
    name: "Toret #319",
    description: "Corso Verona / Via Catania",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/14/DSC_9000.jpg",
    properties: { lat: "45.07655", lon: "7.698482" },
  },
  320: {
    name: "Toret #320",
    description: "Lungo Po Armando Diaz",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/22/Torino-20120921-01886_1_1.jpg",
    properties: { lat: "45.05998200000001", lon: "7.692117" },
  },
  321: {
    name: "Toret #321",
    description: "Via Carlo Michele Buscalioni",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/14/DSC_8997.jpg",
    properties: { lat: "45.07634", lon: "7.700947" },
  },
  322: {
    name: "Toret #322",
    description: 'Piazza Lorenzo Bernini - Il Tris di "Toret" nord',
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/09/bernini_1_1.jpg",
    properties: { lat: "45.07646199999999", lon: "7.655576" },
  },
  323: {
    name: "Toret #323",
    description: "Piazza Carlo Emanuele II",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/25/DSC_9406_1.jpg",
    properties: { lat: "45.065838", lon: "7.689127" },
  },
  324: {
    name: "Toret #324",
    description: "Parco del Valentino - Viale Virgilio / Corso Emanuele II",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/26/IMG_2087_1.JPG",
    properties: { lat: "45.05842999999999", lon: "7.690277" },
  },
  325: {
    name: "Toret #325",
    description: "Via Sant'Ottavio",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/11/1405778657950.jpg",
    properties: { lat: "45.068344", lon: "7.694238" },
  },
  326: {
    name: "Toret #326",
    description: "Parco del Valentino - Corso Massimo D'Azeglio",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/20/marcogil_IMG_2184_1.JPG",
    properties: { lat: "45.055553", lon: "7.685438" },
  },
  327: {
    name: "Toret #327",
    description: "Parco del Valentino - Viale Virgilio",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/DSC_7663.jpg",
    properties: { lat: "45.052719", lon: "7.686744" },
  },
  328: {
    name: "Toret #328",
    description: "Corso Francia 303",
    image: "",
    properties: { lat: "45.074562", lon: "7.622626" },
  },
  329: {
    name: "Toret #329",
    description:
      "Parco del Valentino - Corso Massimo D'Azeglio / Corso Vittorio Emanuele II",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/26/IMG_2077_1.JPG",
    properties: { lat: "45.05890300000001", lon: "7.687937999999999" },
  },
  330: {
    name: "Toret #330",
    description: 'Corso Vittorio Emanuele II -  ex carcere "Le Nuove"',
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/08/SAM_2053.JPG",
    properties: { lat: "45.069031", lon: "7.661017" },
  },
  331: {
    name: "Toret #331",
    description: "Corso Castelfidardo / Corso Vittorio Emanuele II",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8316.jpg",
    properties: { lat: "45.06803099999999", lon: "7.663036000000001" },
  },
  332: {
    name: "Toret #332",
    description: "Giardino Nicola Grossa - Corso Vittorio Emanuele II",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/iren-2.jpg",
    properties: { lat: "45.069714", lon: "7.661397000000001" },
  },
  333: {
    name: "Toret #333",
    description: "Corso Stati Uniti / Corso Duca degli Abruzzi",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8332.jpg",
    properties: { lat: "45.06492200000001", lon: "7.665083000000001" },
  },
  334: {
    name: "Toret #334",
    description: "Corso Stati Uniti / Corso Castelfidardo",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8323.jpg",
    properties: { lat: "45.066177", lon: "7.662135000000001" },
  },
  335: {
    name: "Toret #335",
    description: "Parco della Tesoriera - Ingresso Principale Corso Francia",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/02/IMG_4156_1.jpg",
    properties: { lat: "45.075665", lon: "7.638148" },
  },
  336: {
    name: "Toret #336",
    description: "Piazza Adriano",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/01/28/toret_adriano.JPG",
    properties: { lat: "45.070976", lon: "7.654456000000001" },
  },
  337: {
    name: "Toret #337",
    description: "Parco della Tesoriera - Parco giocho - Via Borgosesia",
    image: "",
    properties: { lat: "45.078098", lon: "7.639830999999999" },
  },
  338: {
    name: "Toret #338",
    description: "Corso Bruneleschi 46",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/20/DSCN1898_1.jpg",
    properties: { lat: "45.07089599999999", lon: "7.623032000000001" },
  },
  339: {
    name: "Toret #339",
    description: "Corso Bernardino Telesio 13",
    image: "",
    properties: { lat: "45.07619900000001", lon: "7.624847" },
  },
  340: {
    name: "Toret #340",
    description: "Via Valgioie",
    image: "",
    properties: { lat: "45.076744", lon: "7.627894" },
  },
  341: {
    name: "Toret #341",
    description: "Corso Bruneleschi 13",
    image: "",
    properties: { lat: "45.073322", lon: "7.62358" },
  },
  342: {
    name: "Toret #342",
    description: "Corso Bruneleschi 111",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/02/toret_brunelleschi_111_ufficiale_1.jpg",
    properties: { lat: "45.06582300000001", lon: "7.625538000000001" },
  },
  343: {
    name: "Toret #343",
    description: "Corso Monte Cucco 126",
    image: "",
    properties: { lat: "45.06403", lon: "7.630737000000001" },
  },
  344: {
    name: "Toret #344",
    description: "Impianto Sportivo Girdino Perchiera - Corso Perchiera 364",
    image: "",
    properties: { lat: "45.07366600000001", lon: "7.626877" },
  },
  345: {
    name: "Toret #345",
    description: "Area Verde Campamianto - Corso Peschiera",
    image: "",
    properties: { lat: "45.072903", lon: "7.630608" },
  },
  346: {
    name: "Toret #346",
    description: "Parco Ruffini - Viale Luigi Hugues",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/28/toret_via_Hugues.JPG",
    properties: { lat: "45.059937", lon: "7.631767" },
  },
  347: {
    name: "Toret #347",
    description: "Corso Lepanto",
    image: "",
    properties: { lat: "45.046986", lon: "7.661454999999999" },
  },
  348: {
    name: "Toret #348",
    description: "Piazza Francesco Crispi - Corso Novara / Corso Vercelli",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/09/crispi1_1.jpg",
    properties: { lat: "45.089046", lon: "7.688822" },
  },
  349: {
    name: "Toret #349",
    description: "Via Alfonso Varano",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/14/DSC_8985.jpg",
    properties: { lat: "45.079933", lon: "7.715648000000001" },
  },
  350: {
    name: "Toret #350",
    description: "Parco Ruffini - Corso Carlo Piaggia",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/03/7.jpg",
    properties: { lat: "45.058544", lon: "7.630662" },
  },
  351: {
    name: "Toret #351",
    description: "Parco Ruffini - Corso Luigi D'Albertis",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/03/2.jpg",
    properties: { lat: "45.06031800000001", lon: "7.630343" },
  },
  352: {
    name: "Toret #352",
    description: "Via Tintoretto / Via Tirreno",
    image: "",
    properties: { lat: "45.056458", lon: "7.628499" },
  },
  353: {
    name: "Toret #353",
    description: "VIALE BURDIN FRONTE CORSO TRAPANI (PARCO RUFFINI)",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/03/5.jpg",
    properties: { lat: "45.057278", lon: "7.634138" },
  },
  355: {
    name: "Toret #355",
    description: "Via Milano - Via San Domenico",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/05/IMG_0120cit.JPG",
    properties: { lat: "45.074329", lon: "7.681887" },
  },
  356: {
    name: "Toret #356",
    description: "Corso Vinzaglio",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/04/13/vin20130411_185032_1.jpg",
    properties: { lat: "45.067398", lon: "7.666322" },
  },
  357: {
    name: "Toret #357",
    description: "Piazza Università dei Mastri Minusieri",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/14/1405759950582.jpg",
    properties: { lat: "45.072334", lon: "7.679018" },
  },
  358: {
    name: "Toret #358",
    description: "Piazza Benefica",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2014/06/05/Toret.jpg",
    properties: { lat: "45.07364299999999", lon: "7.662425" },
  },
  359: {
    name: "Toret #359",
    description: "Via Cesare Battisti, Piazza Carlo Alberto",
    image: "",
    properties: { lat: "45.06899300000001", lon: "7.686748" },
  },
  360: {
    name: "Toret #360",
    description: "Piazza Guido Cavalcanti angolo Via Tabacchi",
    image: "",
    properties: { lat: "45.06701999999999", lon: "7.721221" },
  },
  361: {
    name: "Toret #361",
    description: "CORSO CASALE S.N. ANGOLO STRADA BELLARDO",
    image:
      "https://ilovetoret.it/up/ima/toret/2012/07/16/CORSO_CASALE_S.N._ANGOLO_STRADA_BELLARDO.jpg",
    properties: { lat: "45.071854", lon: "7.728193" },
  },
  362: {
    name: "Toret #362",
    description: "Piazza Sofia",
    image: "",
    properties: { lat: "45.094269", lon: "7.716951" },
  },
  363: {
    name: "Toret #363",
    description: "Via Sabaudia",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/01/06/2015-01-04_15.40.50.jpg",
    properties: { lat: "45.07045", lon: "7.582074" },
  },
  364: {
    name: "Toret #364",
    description: "Via Cardinale Gaetano Alimonda",
    image: "",
    properties: { lat: "45.085407", lon: "7.690333" },
  },
  366: {
    name: "Toret #366",
    description: "Corso Giuseppe Siccardi",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/26/IMG_1976_1_1.JPG",
    properties: { lat: "45.07256700000001", lon: "7.675788" },
  },
  367: {
    name: "Toret #367",
    description: "Corso Giulio Cesare",
    image: "",
    properties: { lat: "45.07948700000001", lon: "7.685158000000001" },
  },
  368: {
    name: "Toret #368",
    description: "Corso Galileo Ferraris angolo Via Vespucci",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/21/G._Ferraris-Vespucci_35856_1.jpg",
    properties: { lat: "45.055511", lon: "7.663783" },
  },
  369: {
    name: "Toret #369",
    description: "Via Campiglia - Parco",
    image: "",
    properties: { lat: "45.10240599999999", lon: "7.674296" },
  },
  370: {
    name: "Toret #370",
    description: "Anagrafe centrale / Via della Consolata",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/11/1443088481685.jpg",
    properties: { lat: "45.077595", lon: "7.678997" },
  },
  371: {
    name: "Toret #371",
    description: "Piazza Santa Rita - Via Barletta lato Est",
    image: "",
    properties: { lat: "45.04692800000001", lon: "7.646152" },
  },
  372: {
    name: "Toret #372",
    description: "Piazza Carlo Felice",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/25/PIAZZACARLOFELICE_1.jpg",
    properties: { lat: "45.06376999999999", lon: "7.679981" },
  },
  373: {
    name: "Toret #373",
    description: "Via Osasco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/22/osasco_1.jpg",
    properties: { lat: "45.060986", lon: "7.651331" },
  },
  374: {
    name: "Toret #374",
    description: "Via Muriaglio / Via Di Nanni",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8363.jpg",
    properties: { lat: "45.06414", lon: "7.64911" },
  },
  375: {
    name: "Toret #375",
    description: "Corso Francesco Ferrucci",
    image: "",
    properties: { lat: "45.061161", lon: "7.656468000000001" },
  },
  376: {
    name: "Toret #376",
    description: "Via Paolo Braccini",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8341.jpg",
    properties: { lat: "45.060047", lon: "7.651892" },
  },
  377: {
    name: "Toret #377",
    description: "Corso Racconigi / Via Pollenzo",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/04/14/1428770505537.jpg",
    properties: { lat: "45.063187", lon: "7.645182" },
  },
  378: {
    name: "Toret #378",
    description: "Via Amedeo Modigliani - Parco",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Steno.jpg",
    properties: { lat: "45.02584100000001", lon: "7.642511" },
  },
  379: {
    name: "Toret #379",
    description: "Corso Siracusa / Via Tirreno - Parco",
    image: "",
    properties: { lat: "45.054371", lon: "7.635462999999999" },
  },
  380: {
    name: "Toret #380",
    description: "Corso Racconigi / Corso Peschiera",
    image: "",
    properties: { lat: "45.066643", lon: "7.645175" },
  },
  381: {
    name: "Toret #381",
    description: "Parco Giuseppe di Vittorio",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/25/Parco2.jpg",
    properties: { lat: "45.024418", lon: "7.646798" },
  },
  382: {
    name: "Toret #382",
    description: "Corso Racconigi / Via Frejus",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/19/toret_Cenisia_1_1.JPG",
    properties: { lat: "45.070396", lon: "7.646557" },
  },
  383: {
    name: "Toret #383",
    description: "PIAZZA STAMPALIA (GIARDINO)",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/12/23/DSCN0027_3_1.JPG",
    properties: { lat: "45.112278", lon: "7.658404999999999" },
  },
  384: {
    name: "Toret #384",
    description: "Via Antonio Giuseppe Bertola / Piazza",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/IMG_1967.JPG",
    properties: { lat: "45.071487", lon: "7.676893" },
  },
  385: {
    name: "Toret #385",
    description: "Corso Caio Plinio",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Parco1.jpg",
    properties: { lat: "45.019211", lon: "7.656921" },
  },
  386: {
    name: "Toret #386",
    description: "Piazza Rivoli",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/09/04/Agosto_009.jpg",
    properties: { lat: "45.075294", lon: "7.644584" },
  },
  387: {
    name: "Toret #387",
    description: "Via Antonio Giuseppe Bertola / Piazza",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/25/IMG_1968.JPG",
    properties: { lat: "45.071396", lon: "7.677174" },
  },
  388: {
    name: "Toret #388",
    description: "Via Donato Bachi",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/14/Parco1.jpg",
    properties: { lat: "45.023258", lon: "7.649596000000001" },
  },
  389: {
    name: "Toret #389",
    description: "Corso Moncalieri",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/27/toret_ufficiale_1.jpg",
    properties: { lat: "45.024109", lon: "7.676193" },
  },
  390: {
    name: "Toret #390",
    description: "Corso Caio Plinio / Via Onorato Vigliani",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Parco2.jpg",
    properties: { lat: "45.017986", lon: "7.657099" },
  },
  391: {
    name: "Toret #391",
    description: "Parco Vallette - Area Cani [N]",
    image: "",
    properties: { lat: "45.09947199999999", lon: "7.627632" },
  },
  392: {
    name: "Toret #392",
    description: "Via Emanuele Artom",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/15/Artom_1.jpg",
    properties: { lat: "45.01585800000001", lon: "7.648049" },
  },
  393: {
    name: "Toret #393",
    description: "Via San Secondo / Via Magenta",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/03/3.JPG",
    properties: { lat: "45.062813", lon: "7.675727" },
  },
  394: {
    name: "Toret #394",
    description: "Via Pietro Cossa / Via Vittorio Actis",
    image: "",
    properties: { lat: "45.079277", lon: "7.621476999999999" },
  },
  395: {
    name: "Toret #395",
    description: "Parco della Pellerina",
    image: "",
    properties: { lat: "45.087124", lon: "7.634897" },
  },
  398: {
    name: "Toret #398",
    description: "Via Pietro Cossa - Parco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/02/20/1392879788347_1.jpg",
    properties: { lat: "45.095295", lon: "7.636079" },
  },
  399: {
    name: "Toret #399",
    description: "Via delle Pervinche / Viale dei Mughetti [N]",
    image: "",
    properties: { lat: "45.10342000000001", lon: "7.636069" },
  },
  401: {
    name: "Toret #401",
    description: "Parco Vallette - Area gioco [FLS]",
    image: "",
    properties: { lat: "45.10022", lon: "7.63468" },
  },
  402: {
    name: "Toret #402",
    description: "Piazzale Don G.Pollarolo - Area gioco [N]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/12/17/DSCN9957_Large_1.JPG",
    properties: { lat: "45.103748", lon: "7.63317" },
  },
  403: {
    name: "Toret #403",
    description: "Piazza Don G.Pollarolo [FA]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/11/IMG_20140110_154901.jpg",
    properties: { lat: "45.103504", lon: "7.631567000000001" },
  },
  404: {
    name: "Toret #404",
    description: "Piazza Don G.Pollarolo [FOMM]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/11/IMG_20140110_154332.jpg",
    properties: { lat: "45.103832", lon: "7.631165" },
  },
  405: {
    name: "Toret #405",
    description: "Piazza E.Montale",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/12/17/DSCN9930_1.JPG",
    properties: { lat: "45.10348900000001", lon: "7.63032" },
  },
  408: {
    name: "Toret #408",
    description: "Parco Vallette - Area gioco - Via delle Primule [N]",
    image: "",
    properties: { lat: "45.100147", lon: "7.627399" },
  },
  409: {
    name: "Toret #409",
    description:
      "Corso Monte Lungo - Bocciofila La Baraonda, Piazza Parco d'armi [FST]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/21/IMG_20130518_125017_1_1_1.jpg",
    properties: { lat: "45.0485", lon: "7.656845999999999" },
  },
  410: {
    name: "Toret #410",
    description: "Parco Vallette - Area Cani",
    image: "",
    properties: { lat: "45.099335", lon: "7.627585999999999" },
  },
  411: {
    name: "Toret #411",
    description: "Via delle Primule / Viale dei Mughetti [N]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/01/28/28012013370-a_1.jpg",
    properties: { lat: "45.104279", lon: "7.62484" },
  },
  412: {
    name: "Toret #412",
    description: "Parco Vallette - Area Cani",
    image: "",
    properties: { lat: "45.099339", lon: "7.626942" },
  },
  413: {
    name: "Toret #413",
    description: "Parco Vallette - Area Cani",
    image: "",
    properties: { lat: "45.099358", lon: "7.62627" },
  },
  414: {
    name: "Toret #414",
    description: "Corso Cincinnato / Corso Toscano [N]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/31/1369843380399_1.jpg",
    properties: { lat: "45.100403", lon: "7.644709" },
  },
  415: {
    name: "Toret #415",
    description: "Giardino Felice Cavallotti / Corso Toscano [FLS]",
    image: "",
    properties: { lat: "45.100479", lon: "7.646576" },
  },
  416: {
    name: "Toret #416",
    description: "Corso Lombardia [FOMM]",
    image: "",
    properties: { lat: "45.099438", lon: "7.649275000000001" },
  },
  417: {
    name: "Toret #417",
    description: "Corso Lonbardia 107 / Lucento Calcio [FOMM]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/10/16/IMG-20140929-WA0008.jpg",
    properties: { lat: "45.09661499999999", lon: "7.647187" },
  },
  418: {
    name: "Toret #418",
    description: "Via Terraneo / Via Viarigi - Area gioco [N]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/17/1389785834321.jpg",
    properties: { lat: "45.097462", lon: "7.642063" },
  },
  419: {
    name: "Toret #419",
    description: "Corso Lombardia 105 / Pattinaggio Lombardia [FOMM]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/09/30/IMG-20140929-WA0008.jpg",
    properties: { lat: "45.096359", lon: "7.645153" },
  },
  420: {
    name: "Toret #420",
    description: "Via della Basilica / Via Porta Palatina - nel Parco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/29/PhotoGrid_1348405889310.png",
    properties: { lat: "45.074192", lon: "7.684604" },
  },
  421: {
    name: "Toret #421",
    description: "Corso Cincinato / Via Val della Torre [T]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/31/1369843198391_1.jpg",
    properties: { lat: "45.099239", lon: "7.642460999999999" },
  },
  422: {
    name: "Toret #422",
    description: "Corso Monte Grappa / Via Valgioie",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/16/TORET_2016_05_15_-598589013.jpg",
    properties: { lat: "45.07631700000001", lon: "7.636077" },
  },
  423: {
    name: "Toret #423",
    description: "Corso Cincinnato 130",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/17/IMG_20140115_121650.jpg",
    properties: { lat: "45.09833500000001", lon: "7.641116999999999" },
  },
  424: {
    name: "Toret #424",
    description: "Corso Cincinato / Via Val della Torre",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/28/toret_via_val_della_torre_1.jpg",
    properties: { lat: "45.099236", lon: "7.641807" },
  },
  425: {
    name: "Toret #425",
    description: "Cascina Bianco - Via Parenzo - Area gioco [N]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/02/26/cdv_photo_002.jpg",
    properties: { lat: "45.099403", lon: "7.640082" },
  },
  426: {
    name: "Toret #426",
    description: "Corso Francia / Via Principi d'Acaja",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/09/DSC_0016.jpg",
    properties: { lat: "45.07613799999999", lon: "7.664045" },
  },
  427: {
    name: "Toret #427",
    description: "Via Brione / Via Giacomo Medici",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/04/14/toret_brione_1.jpg",
    properties: { lat: "45.079338", lon: "7.647013" },
  },
  428: {
    name: "Toret #428",
    description: "Cittadella - Corso Galileo Ferraris",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8291.jpg",
    properties: { lat: "45.070942", lon: "7.674032" },
  },
  429: {
    name: "Toret #429",
    description: "Corso Bernardino Telesio / Via Giovanni Servais",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/21/telesio-servais1.jpg",
    properties: { lat: "45.083351", lon: "7.630004" },
  },
  430: {
    name: "Toret #430",
    description: "Via Enrico Dandolo",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DelPrete-Siracusa.jpg",
    properties: { lat: "45.036152", lon: "7.63449" },
  },
  431: {
    name: "Toret #431",
    description: "Corso Unione Sovietica / Corso Cosenza - Parco [FST]",
    image: "",
    properties: { lat: "45.033356", lon: "7.646612999999999" },
  },
  432: {
    name: "Toret #432",
    description: "Corso Unione Sovietica / Corso Cosenza [FST]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Giambone.jpg",
    properties: { lat: "45.03335200000001", lon: "7.646616" },
  },
  433: {
    name: "Toret #433",
    description: "Parco Cavalieri di Vittorio Veneto [FST]",
    image: "",
    properties: { lat: "45.048359", lon: "7.653791" },
  },
  434: {
    name: "Toret #434",
    description: "Corso Monte Lungo [FA]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/22/Monte_Lungo_34260.jpg",
    properties: { lat: "45.04900399999999", lon: "7.655399999999999" },
  },
  435: {
    name: "Toret #435",
    description: "via Stradella [FA]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Ciselpino.jpg",
    properties: { lat: "45.10094800000001", lon: "7.667157999999999" },
  },
  436: {
    name: "Toret #436",
    description: "Corso Monte Lungo [N] Rifornimento Camper",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/21/IMG_20130518_125113.jpg",
    properties: { lat: "45.048611", lon: "7.656352" },
  },
  437: {
    name: "Toret #437",
    description: "Piazza Risorgimento SO",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/17/risorgimento_b_1.JPG",
    properties: { lat: "45.079308", lon: "7.652203" },
  },
  438: {
    name: "Toret #438",
    description: "Vicolo Crocetta - Piazzetta Cassini [N]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/09/SAM_2050_1.JPG",
    properties: { lat: "45.058475", lon: "7.663824" },
  },
  439: {
    name: "Toret #439",
    description: "Giardino P.Coggiola [FOMM]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/05/torello_giardino_coggiola_2.BMP",
    properties: { lat: "45.080299", lon: "7.635666999999999" },
  },
  440: {
    name: "Toret #440",
    description: 'Piazza Lorenzo Bernini SE - Il Tris di "Toret" [N]',
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/03/24/DSC_8387_2_1.jpg",
    properties: { lat: "45.075565", lon: "7.656836" },
  },
  441: {
    name: "Toret #441",
    description: 'Piazza Lorenzo Bernini SE - Il Tris di "Toret" [N]',
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/03/24/DSC_8387.jpg",
    properties: { lat: "45.075569", lon: "7.656800999999999" },
  },
  442: {
    name: "Toret #442",
    description: 'Piazza Lorenzo Bernini SE - Il Tris di "Toret" [N]',
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/03/24/DSC_8387_1_1.jpg",
    properties: { lat: "45.075565", lon: "7.656764000000001" },
  },
  443: {
    name: "Toret #443",
    description: "Via Brosso / Via Lanzo",
    image: "",
    properties: { lat: "45.10881", lon: "7.661266" },
  },
  444: {
    name: "Toret #444",
    description: "Piazza Risorgimento NE",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/17/risorgimento_a_1.JPG",
    properties: { lat: "45.07939100000001", lon: "7.653509" },
  },
  445: {
    name: "Toret #445",
    description: "Via Ettore Stampini / Via Orbetello",
    image: "",
    properties: { lat: "45.106712", lon: "7.66313" },
  },
  446: {
    name: "Toret #446",
    description: "Corso Appio Claudio - Campo Barsket",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/01/23/appio_claudio_basket_uff.jpg",
    properties: { lat: "45.08609", lon: "7.626761" },
  },
  447: {
    name: "Toret #447",
    description: "Via Sostegno",
    image: "",
    properties: { lat: "45.0774", lon: "7.619739" },
  },
  448: {
    name: "Toret #448",
    description: "Via Venaria [N]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/26/ufficiale_1.JPG",
    properties: { lat: "45.110168", lon: "7.659276" },
  },
  449: {
    name: "Toret #449",
    description: "Via Valgioie - Pattinaggio [FOMM]",
    image: "",
    properties: { lat: "45.077152", lon: "7.621619" },
  },
  450: {
    name: "Toret #450",
    description: "Via Caltanissetta - Bocciofila Aurora [N]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/14/SAM_2333.JPG",
    properties: { lat: "45.111042", lon: "7.65923" },
  },
  451: {
    name: "Toret #451",
    description: "via Stradella - il 7 [FOMM]",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/super7.jpg",
    properties: { lat: "45.10057400000001", lon: "7.667497999999999" },
  },
  452: {
    name: "Toret #452",
    description: "via Stradella - il 7 [FOMM]",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/super6.jpg",
    properties: { lat: "45.100559", lon: "7.667473000000001" },
  },
  453: {
    name: "Toret #453",
    description: "via Stradella - il 7 [FOMM]",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/super5.jpg",
    properties: { lat: "45.100536", lon: "7.667461000000001" },
  },
  454: {
    name: "Toret #454",
    description: "via Stradella - il 7 [FOMM]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/super4_1.jpg",
    properties: { lat: "45.10051299999999", lon: "7.667467" },
  },
  455: {
    name: "Toret #455",
    description: "via Stradella - il 2 [FOMM]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Stradella5.jpg",
    properties: { lat: "45.10033399999999", lon: "7.66776" },
  },
  456: {
    name: "Toret #456",
    description: "via Stradella - il 7 [FOMM]",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/super3.jpg",
    properties: { lat: "45.100494", lon: "7.667485999999999" },
  },
  457: {
    name: "Toret #457",
    description: "via Stradella - il 7 [FOMM]",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/super2.jpg",
    properties: { lat: "45.100483", lon: "7.667518000000001" },
  },
  458: {
    name: "Toret #458",
    description: "via Stradella - il 7 [FOMM]",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/super1.jpg",
    properties: { lat: "45.100483", lon: "7.667548" },
  },
  459: {
    name: "Toret #459",
    description: "via Stradella - il 2 [FOMM]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Stradella6_1.jpg",
    properties: { lat: "45.100407", lon: "7.667777" },
  },
  460: {
    name: "Toret #460",
    description: "via Stradella / via Assisi - Nord [FOMM]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Stradella4.jpg",
    properties: { lat: "45.09948299999999", lon: "7.668276" },
  },
  461: {
    name: "Toret #461",
    description: "via Stradella / via Assisi - Sud [FOMM]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Stradella3.jpg",
    properties: { lat: "45.099335", lon: "7.668449" },
  },
  462: {
    name: "Toret #462",
    description: "Piazza Luigi Mattirolo [FOMM]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/03/30/1427625070375_1.jpg",
    properties: { lat: "45.097996", lon: "7.667597" },
  },
  463: {
    name: "Toret #463",
    description: "Via Stradella - Il Bis [FOMM]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Stradella2.jpg",
    properties: { lat: "45.097717", lon: "7.6705" },
  },
  464: {
    name: "Toret #464",
    description: "Via Breglio [N]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Fioraio.jpg",
    properties: { lat: "45.09887299999999", lon: "7.669546" },
  },
  465: {
    name: "Toret #465",
    description: "Via Stradella - Il Bis [FOMM]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/06/09/cdv_photo_002.jpg",
    properties: { lat: "45.09771", lon: "7.670512" },
  },
  466: {
    name: "Toret #466",
    description: "Corso Chieti",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/10/Corso_Chieti_N.jpg",
    properties: { lat: "45.072495", lon: "7.715593" },
  },
  467: {
    name: "Toret #467",
    description: "Piazza Enrico Toti [FST]",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/14/DSC_8857.jpg",
    properties: { lat: "45.072346", lon: "7.716422999999999" },
  },
  468: {
    name: "Toret #468",
    description: "Via Antonio Cecchi / Via Piossasco",
    image: "",
    properties: { lat: "45.08746", lon: "7.680487" },
  },
  469: {
    name: "Toret #469",
    description: "Parco della Pellerina - ingresso Corso Appio Claudio",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/09/29/cdv_photo_001.jpg",
    properties: { lat: "45.08504099999999", lon: "7.643459" },
  },
  470: {
    name: "Toret #470",
    description: "Via Goffredo Mameli / Via Vittorio Andreis [FOMM]",
    image: "",
    properties: { lat: "45.079399", lon: "7.683752" },
  },
  471: {
    name: "Toret #471",
    description: "VIA GIACOMO DINA ANGOLO VIA SANREMO",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Vidari1.jpg",
    properties: { lat: "45.03366198232111", lon: "7.636652176953806" },
  },
  472: {
    name: "Toret #472",
    description: "Via Giacomo Dina",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Vidari2.jpg",
    properties: { lat: "45.03382899999999", lon: "7.635273" },
  },
  473: {
    name: "Toret #473",
    description: "Via Giambattista Balbis / Via San Donato",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/20/toret_via_balbis.jpg",
    properties: { lat: "45.078453", lon: "7.667905999999999" },
  },
  474: {
    name: "Toret #474",
    description: "Piazza Carlo Felice",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/25/PIAZZACARLOFELICE1_2.jpg",
    properties: { lat: "45.063309", lon: "7.67903" },
  },
  475: {
    name: "Toret #475",
    description: "Piazza San Carlo SudEst",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/03/4.JPG",
    properties: { lat: "45.06757", lon: "7.682981" },
  },
  476: {
    name: "Toret #476",
    description: "Via Oddino Morgari / Via Belfiore",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/02/DSC_9453_1.jpg",
    properties: { lat: "45.05421100000001", lon: "7.678121" },
  },
  477: {
    name: "Toret #477",
    description: "VENARIA REALE - Via 20 Settembre / Via Andrea Mensa",
    image: "",
    properties: { lat: "45.134663", lon: "7.627241" },
  },
  478: {
    name: "Toret #478",
    description: "VENARIA REALE - PIAZZA B.ATZEI",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/04/08/Turet_Venaria.jpg",
    properties: { lat: "45.128914", lon: "7.638614999999999" },
  },
  479: {
    name: "Toret #479",
    description: "Piazza Carlo Montanari, 139",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Montanari.jpg",
    properties: { lat: "45.039139", lon: "7.643046" },
  },
  480: {
    name: "Toret #480",
    description: "VIA BEAUMONT E VIA AVIGLIANA",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/07/18/1405499176998.jpg",
    properties: { lat: "45.07214078434698", lon: "7.663209468027386" },
  },
  481: {
    name: "Toret #481",
    description: "Lungo Po Alessandro Antonelli (lato nord)",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DSC_7962.jpg",
    properties: { lat: "45.075779", lon: "7.726452" },
  },
  482: {
    name: "Toret #482",
    description: "Piazza delle bande nere - Via Carlo Della Porta",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/20/DSC_9027.jpg",
    properties: { lat: "45.07994859761268", lon: "7.733402705425247" },
  },
  483: {
    name: "Toret #483",
    description: "STRADA MONGRENO - ANGOLO VIA BRIGHENTI",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/20/DSC_9014.jpg",
    properties: { lat: "45.07848667280998", lon: "7.737323898365176" },
  },
  484: {
    name: "Toret #484",
    description: "STRADA MONGRENO FR.CIVICO 64 (GIARDINO)",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/20/DSC_9021.jpg",
    properties: { lat: "45.07775559022006", lon: "7.738247007354824" },
  },
  485: {
    name: "Toret #485",
    description: "STRADA MONGRENO 343 (mongreno)",
    image: "https://ilovetoret.it/up/ima/toret/2012/01/19/toret01.jpg",
    properties: { lat: "45.06270270975637", lon: "7.752883269551605" },
  },
  486: {
    name: "Toret #486",
    description: "VIA GIARDINO GAETANO (PIAZZALE MONTE CAPPUCCINI)",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/19/IMG_1995.JPG",
    properties: { lat: "45.05989164498756", lon: "7.69756187266422" },
  },
  487: {
    name: "Toret #487",
    description: "VIA SOSPELLO ANGOLO VIA ROCCAVIONE",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/09/04/IMG_20140725_193611.jpg",
    properties: { lat: "45.10272499295363", lon: "7.676965678930527" },
  },
  488: {
    name: "Toret #488",
    description: "LARGO LANCIA FRONTE VIA ISSIGLIO",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/22/Lancia-Issiglio_33566_1.jpg",
    properties: { lat: "45.06147666022409", lon: "7.639607285259884" },
  },
  489: {
    name: "Toret #489",
    description: "Piazza Rebaudengo 11",
    image: "",
    properties: { lat: "45.10298693930088", lon: "7.694748039087658" },
  },
  490: {
    name: "Toret #490",
    description: "Piazza Rebaudengo Ang. Via Botticelli",
    image: "",
    properties: { lat: "45.10333396030391", lon: "7.695554862853735" },
  },
  491: {
    name: "Toret #491",
    description: "Strada comunale da Bertolla all'Abbadia di Stura, 72-88",
    image: "",
    properties: { lat: "45.10582714928371", lon: "7.735580555533382" },
  },
  492: {
    name: "Toret #492",
    description: "CORSO TELESIO TRA VIA ASINARI DI BERNEZZO E VIA PACCHIOTTI",
    image: "",
    properties: { lat: "45.07894125448576", lon: "7.626677970152658" },
  },
  493: {
    name: "Toret #493",
    description: "PIAZZA DERNA (AREA GIOCHI)",
    image: "",
    properties: { lat: "45.10242197829735", lon: "7.698993637839859" },
  },
  494: {
    name: "Toret #494",
    description: "LUNGO PO MACCHIAVELLI S.N. ANGOLO VIA CESARE BALBO",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/15/Immag0111_2.jpg",
    properties: { lat: "45.06767079919001", lon: "7.70365473101241" },
  },
  495: {
    name: "Toret #495",
    description: "CORSO CASALE S.N. FRONTE VIA CASTIGLIONE (VELODROMO)",
    image:
      "https://ilovetoret.it/up/ima/toret/2012/07/16/CORSO_CASALE_S.N._FRONTE_VIA_CASTIGLIONE_VELODROMO.jpg",
    properties: { lat: "45.06881586419656", lon: "7.717493979168026" },
  },
  496: {
    name: "Toret #496",
    description: "VIA PAVESE FRONTE 18 (MERCATO)",
    image: "",
    properties: { lat: "45.01750017319523", lon: "7.631536617107582" },
  },
  497: {
    name: "Toret #497",
    description: "VIA SAN REMO FR. VIA VICARELLI",
    image:
      "https://ilovetoret.it/up/ima/toret/2012/07/16/VIA_SAN_REMO_FR._VIA_VICARELLI.jpg",
    properties: { lat: "45.03590104523627", lon: "7.638965428953299" },
  },
  498: {
    name: "Toret #498",
    description: "CORSO SEBASTOPOLI FR.CIV.143 ANGOLO CORSA AGNELLI (MERCATO)",
    image: "",
    properties: { lat: "45.04387998491135", lon: "7.649142582278414" },
  },
  499: {
    name: "Toret #499",
    description: "Parco della Mandria - Via Scodeggio",
    image: "",
    properties: { lat: "45.15220599999999", lon: "7.616217999999999" },
  },
  500: {
    name: "Toret #500",
    description: "CORSO CASALE S.N. ANGOLO STRADA MONGRENO",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/20/DSC_9006.jpg",
    properties: { lat: "45.07855482694327", lon: "7.732819430290176" },
  },
  501: {
    name: "Toret #501",
    description: "Parco della Mandria - Viale Carlo Emanuele II",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/06/20/15-06-2016-17-23.jpg",
    properties: { lat: "45.143731", lon: "7.605644000000001" },
  },
  502: {
    name: "Toret #502",
    description: "CORSO SAN MAURIZIO 8 ANGOLO VIA ROSSINI (FRONTE SCUOLA)",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/19/DSC_7626_1_1.jpg",
    properties: { lat: "45.071308", lon: "7.692735" },
  },
  503: {
    name: "Toret #503",
    description: "Via Po, 3-11",
    image: "",
    properties: { lat: "45.0698555", lon: "7.6879498555" },
  },
  505: {
    name: "Toret #505",
    description: "Corso Casale, 66",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/DSC_7650.jpg",
    properties: { lat: "45.06703723", lon: "7.707229659" },
  },
  509: {
    name: "Toret #509",
    description: "Via A. L. Cauchy",
    image: "",
    properties: { lat: "45.01750397", lon: "7.645629301" },
  },
  511: {
    name: "Toret #511",
    description: "Corso Lione, 2-30",
    image: "",
    properties: { lat: "45.05923638", lon: "7.6560719" },
  },
  512: {
    name: "Toret #512",
    description: "Via Vittoria",
    image: "",
    properties: { lat: "45.09499734", lon: "7.676906651" },
  },
  514: {
    name: "Toret #514",
    description: "Corso Moncalieri, 1-17",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/DSC_7660.jpg",
    properties: { lat: "45.06106404", lon: "7.696467378" },
  },
  518: {
    name: "Toret #518",
    description: "Via Nuova",
    image: "",
    properties: { lat: "45.03058886", lon: "7.68540104" },
  },
  522: {
    name: "Toret #522",
    description: "Piazza Solferino, 1",
    image: "",
    properties: { lat: "45.06972012", lon: "7.677714162" },
  },
  525: {
    name: "Toret #525",
    description: "Via Pietro Francesco Guala, 140",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Guala2.jpg",
    properties: { lat: "45.02111266", lon: "7.641423374" },
  },
  526: {
    name: "Toret #526",
    description: "Via Martino Spanzotti, 2-6",
    image: "",
    properties: { lat: "45.07175009", lon: "7.64392856" },
  },
  527: {
    name: "Toret #527",
    description: "Piazza Hermada",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/02/Foto2086.jpg",
    properties: { lat: "45.06414099", lon: "7.711445288" },
  },
  528: {
    name: "Toret #528",
    description: "Corso Monterotondo",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/14/cdv_photo_002.jpg",
    properties: { lat: "45.03944498", lon: "7.681964156" },
  },
  529: {
    name: "Toret #529",
    description: "Via Pietro Mascagni",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/19/NO_Toret_-_Via_Mascagni_1.JPG",
    properties: { lat: "45.09631307", lon: "7.708876613" },
  },
  530: {
    name: "Toret #530",
    description: "Via Luigi Capuana, 4-6",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/stupinigi045.jpg",
    properties: { lat: "45.01281393", lon: "7.634923166" },
  },
  534: {
    name: "Toret #534",
    description: "Via Padre Francesco Denza, 11-19",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/10/10102012262_1.jpg",
    properties: { lat: "45.08602464", lon: "7.69123076" },
  },
  538: {
    name: "Toret #538",
    description: "Via Paolo Veronese, 269",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/09/13/Toret_Giardino_Via_Veronese.jpg",
    properties: { lat: "45.11067698", lon: "7.666149418" },
  },
  539: {
    name: "Toret #539",
    description: "Via Terni, 31-45",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/05/11/1429612517575_1.jpg",
    properties: { lat: "45.10229605", lon: "7.66014573" },
  },
  540: {
    name: "Toret #540",
    description: "Viale Virgilio",
    image: "",
    properties: { lat: "45.04982486", lon: "7.684550625" },
  },
  541: {
    name: "Toret #541",
    description: "Via Errico Giachino, 32-36",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/GiachinoGiardini.jpg",
    properties: { lat: "45.09205107", lon: "7.67527266" },
  },
  542: {
    name: "Toret #542",
    description: "Via Saorgio",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/26/_DSC9385.jpg",
    properties: { lat: "45.10304535", lon: "7.669984907" },
  },
  548: {
    name: "Toret #548",
    description: "Lungodora Savona, 36-48",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/17/2013-12-24_13.14.54.jpg",
    properties: { lat: "45.07620225", lon: "7.690631861" },
  },
  550: {
    name: "Toret #550",
    description: "Via Imperia",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Imperia_da_Aldo.jpg",
    properties: { lat: "45.02009274", lon: "7.636340589" },
  },
  551: {
    name: "Toret #551",
    description: "Via Cesare Pavese, 2-18",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/17/Pavese_n.2.jpg",
    properties: { lat: "45.01759532", lon: "7.630964743" },
  },
  553: {
    name: "Toret #553",
    description: "Corso Grosseto, 321",
    image: "",
    properties: { lat: "45.10595454", lon: "7.655756385" },
  },
  558: {
    name: "Toret #558",
    description: "Corso Principe Oddone, 92",
    image: "",
    properties: { lat: "45.08955195", lon: "7.677625361" },
  },
  559: {
    name: "Toret #559",
    description: "Viale Stefano Turr",
    image: "",
    properties: { lat: "45.04871229", lon: "7.68513944" },
  },
  560: {
    name: "Toret #560",
    description: "Corso Giovanni Agnelli, 18D",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/10/31/Toret_cso_Agnelli_18.jpg",
    properties: { lat: "45.04243175", lon: "7.648292483" },
  },
  561: {
    name: "Toret #561",
    description: "Via Gaetano Mosca, 2-10",
    image: "",
    properties: { lat: "45.10188679", lon: "7.677638755" },
  },
  566: {
    name: "Toret #566",
    description: "Via Thures, 36",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/03/30/IMG-20150329-WA0031_1.jpg",
    properties: { lat: "45.07155591", lon: "7.605587703" },
  },
  568: {
    name: "Toret #568",
    description: "Strada Arrivore, 46",
    image: "",
    properties: { lat: "45.10001189", lon: "7.71580972" },
  },
  570: {
    name: "Toret #570",
    description: "Via Gottardo, 37-61",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/01/22/1433082483710_1.jpg",
    properties: { lat: "45.09998472", lon: "7.692197966" },
  },
  573: {
    name: "Toret #573",
    description: "Via Pola, 38",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/MonteSeiBusi.jpg",
    properties: { lat: "45.01627504", lon: "7.621211775" },
  },
  575: {
    name: "Toret #575",
    description: "Strada Comunale Val San Martino, 83-95",
    image: "",
    properties: { lat: "45.05718034", lon: "7.720534446" },
  },
  576: {
    name: "Toret #576",
    description: "Corso Pietro Maroncelli",
    image: "",
    properties: { lat: "45.01715627", lon: "7.666968762" },
  },
  579: {
    name: "Toret #579",
    description: "Via Fiesole",
    image: "",
    properties: { lat: "45.10401143", lon: "7.650231247" },
  },
  583: {
    name: "Toret #583",
    description: "Lungodora P. Colletta",
    image: "",
    properties: { lat: "45.08377147", lon: "7.720124383" },
  },
  584: {
    name: "Toret #584",
    description: "Corso Francia",
    image: "",
    properties: { lat: "45.07575202", lon: "7.655792404" },
  },
  585: {
    name: "Toret #585",
    description: "Via Malta, 45-51",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/04/17/Via_Malta_45-51_001_1.jpg",
    properties: { lat: "45.05682451", lon: "7.646589163" },
  },
  590: {
    name: "Toret #590",
    description: "Corso Grosseto",
    image: "",
    properties: { lat: "45.10677218", lon: "7.642749297" },
  },
  592: {
    name: "Toret #592",
    description: "Via Garzigliana",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/10/DSC_7852.jpg",
    properties: { lat: "45.02080378", lon: "7.668373778" },
  },
  594: {
    name: "Toret #594",
    description: "Via Monfalcone, 100-108",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/02/24/DSC_0580_bis.jpg",
    properties: { lat: "45.05175293", lon: "7.637731464" },
  },
  595: {
    name: "Toret #595",
    description: "Via Timoteo Riboli, 6-10",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Riboli2.jpg",
    properties: { lat: "45.01510609", lon: "7.635273783" },
  },
  596: {
    name: "Toret #596",
    description: "Strada delle Vallette, 10-44",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/07/03/1372273551330_1.jpg",
    properties: { lat: "45.10505729", lon: "7.64283158" },
  },
  597: {
    name: "Toret #597",
    description: "Via Olivero Pier Domenico",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Bossoli.jpg",
    properties: { lat: "45.0290509", lon: "7.653350024" },
  },
  599: {
    name: "Toret #599",
    description: "Strada Comunale di San Vito Revigliasco, 396",
    image: "",
    properties: { lat: "45.03610517", lon: "7.712465933" },
  },
  601: {
    name: "Toret #601",
    description: "Viale Falchera",
    image: "",
    properties: { lat: "45.1267517", lon: "7.708888638" },
  },
  604: {
    name: "Toret #604",
    description: "Via degli Stampatori, 1-3",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/26/IMG_1970_1.JPG",
    properties: { lat: "45.07280753", lon: "7.678671944" },
  },
  610: {
    name: "Toret #610",
    description: "Via Prospero Richelmy, 27-35",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/20/MOC_0048_-_Version_2_1.jpg",
    properties: { lat: "45.03087037", lon: "7.672947665" },
  },
  611: {
    name: "Toret #611",
    description: "Via Roma",
    image: "",
    properties: { lat: "45.06699374", lon: "7.681975213" },
  },
  613: {
    name: "Toret #613",
    description: "Corso Castelfidardo, 53-59",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/15/IMG_20121012_130458.jpg",
    properties: { lat: "45.06193613", lon: "7.65887862" },
  },
  614: {
    name: "Toret #614",
    description: "Corso Guglielmo Marconi, 5",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/04/Corso_Marconi_5_uff.jpg",
    properties: { lat: "45.05709", lon: "7.677606" },
  },
  615: {
    name: "Toret #615",
    description: "Corso Generale Giuseppe Govone, 11",
    image: "",
    properties: { lat: "45.06137432", lon: "7.664852317" },
  },
  616: {
    name: "Toret #616",
    description: "Via Pier Carlo Boggio, 2-18",
    image: "",
    properties: { lat: "45.06899215", lon: "7.658747344" },
  },
  618: {
    name: "Toret #618",
    description: "Via Pollenzo",
    image: "",
    properties: { lat: "45.06230717", lon: "7.642374977" },
  },
  620: {
    name: "Toret #620",
    description: "Corso Unione Sovietica, 189-207",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/11/12088305_874216222664113_3571420192630616217_n.jpg",
    properties: { lat: "45.03699749", lon: "7.651609675" },
  },
  623: {
    name: "Toret #623",
    description: "Piazza della Repubblica, 16A",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/14/DSC_8941.jpg",
    properties: { lat: "45.07733321", lon: "7.684707176" },
  },
  625: {
    name: "Toret #625",
    description: "Corso Adriatico",
    image: "",
    properties: { lat: "45.05215426", lon: "7.652562068" },
  },
  628: {
    name: "Toret #628",
    description: "Corso Cesare Correnti, 58",
    image: "",
    properties: { lat: "45.05087045", lon: "7.633442036" },
  },
  629: {
    name: "Toret #629",
    description: "Via Calabria, 36-44",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/04/14/1428770779490_1.jpg",
    properties: { lat: "45.09149933", lon: "7.651003607" },
  },
  632: {
    name: "Toret #632",
    description: "Corso Francesco Ferrucci, 29-41",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8377.jpg",
    properties: { lat: "45.06483941", lon: "7.655746354" },
  },
  635: {
    name: "Toret #635",
    description: "Corso Giulio Cesare, 130",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/14/Toret_-_Largo_Giulio_Cesare_1.jpg",
    properties: { lat: "45.09414201", lon: "7.695271365" },
  },
  636: {
    name: "Toret #636",
    description: "Via Francesco Rismondo, 57",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/16/Rismondo_-_Fango.jpg",
    properties: { lat: "45.0130361", lon: "7.651571919" },
  },
  637: {
    name: "Toret #637",
    description: "Via Giovanni Roveda, 29",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/15/Roveda2.jpg",
    properties: { lat: "45.01962868", lon: "7.606278968" },
  },
  640: {
    name: "Toret #640",
    description: "Via Ozieri, 16",
    image: "",
    properties: { lat: "45.06262193", lon: "7.618832917" },
  },
  642: {
    name: "Toret #642",
    description: "Corso Massimo D'Azeglio, 12",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/03/1.JPG",
    properties: { lat: "45.05704724", lon: "7.686776177" },
  },
  643: {
    name: "Toret #643",
    description: "Via Ivrea, 2-4",
    image: "",
    properties: { lat: "45.1133722", lon: "7.706462452" },
  },
  649: {
    name: "Toret #649",
    description: "Via Plava, 66",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Plava3.jpg",
    properties: { lat: "45.01872365", lon: "7.620068219" },
  },
  653: {
    name: "Toret #653",
    description: "Piazza Bozzolo Camillo",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/03/IMG_2125_1.JPG",
    properties: { lat: "45.03710094", lon: "7.670753346" },
  },
  654: {
    name: "Toret #654",
    description: "Via Masserano, 4",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/07/21/1405756156971_1.jpg",
    properties: { lat: "45.08074529", lon: "7.672939402" },
  },
  655: {
    name: "Toret #655",
    description: "Strade delle Cacce",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Strada_delle_Cacce.jpg",
    properties: { lat: "45.01809166", lon: "7.639124553" },
  },
  656: {
    name: "Toret #656",
    description: "Strada Venaria, 145",
    image: "",
    properties: { lat: "45.11381423", lon: "7.655438444" },
  },
  659: {
    name: "Toret #659",
    description: "Via Sandro Botticelli, 171-197",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DSC_7996.jpg",
    properties: { lat: "45.09808674", lon: "7.711498283" },
  },
  662: {
    name: "Toret #662",
    description: "Via Ilarione Petitti, 36",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/02/DSC_9446_1.jpg",
    properties: { lat: "45.04576897", lon: "7.676466008" },
  },
  663: {
    name: "Toret #663",
    description: "Via Monastir, 35-45",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Monastir.jpg",
    properties: { lat: "45.01420995", lon: "7.654289466" },
  },
  664: {
    name: "Toret #664",
    description: "Corso Vinzaglio, 17-19",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8298.jpg",
    properties: { lat: "45.06985091", lon: "7.668327619" },
  },
  665: {
    name: "Toret #665",
    description: "Corso Gaetano Scirea",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/04/04/Corso_Gaetano_Scirea_001.jpg",
    properties: { lat: "45.10812916", lon: "7.637760367" },
  },
  667: {
    name: "Toret #667",
    description: "Piazza Castello, 169-213",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8271.jpg",
    properties: { lat: "45.07137571", lon: "7.685582439" },
  },
  669: {
    name: "Toret #669",
    description: "Via Amedeo Modigliani",
    image: "",
    properties: { lat: "45.04161123", lon: "7.619036249" },
  },
  672: {
    name: "Toret #672",
    description: "Corso Unità D'Italia",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/24/cdv_photo_001_1.jpg",
    properties: { lat: "45.02540939", lon: "7.670842499" },
  },
  673: {
    name: "Toret #673",
    description: "Via Reggio, 7-9",
    image: "",
    properties: { lat: "45.07507872", lon: "7.694947224" },
  },
  674: {
    name: "Toret #674",
    description: "Via Vincenzo Troya, 14-18",
    image: "",
    properties: { lat: "45.10636269", lon: "7.698673211" },
  },
  675: {
    name: "Toret #675",
    description: "Via San Secondo, 27-29",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/05/11/image_1.jpg",
    properties: { lat: "45.0592607", lon: "7.673652857" },
  },
  676: {
    name: "Toret #676",
    description: "Lungodora Savona, 30-34",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/10/20150930_170752.jpg",
    properties: { lat: "45.07696976", lon: "7.690222106" },
  },
  678: {
    name: "Toret #678",
    description: "Via Stradella, 203-215",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/stradellaUltimo.jpg",
    properties: { lat: "45.10236245", lon: "7.666008333" },
  },
  679: {
    name: "Toret #679",
    description: "Via Paolo Gaidano, 96",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Roccafranca2.jpg",
    properties: { lat: "45.04190614", lon: "7.622948878" },
  },
  682: {
    name: "Toret #682",
    description: "Via Alessandro Fleming, 10",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Fleming_-_Cacce.jpg",
    properties: { lat: "45.01655119", lon: "7.637041101" },
  },
  684: {
    name: "Toret #684",
    description: "Via Bernardino Luini, 25",
    image: "",
    properties: { lat: "45.09670719", lon: "7.668459981" },
  },
  685: {
    name: "Toret #685",
    description: "Via Luigi Cibrario",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/01/04/marcogil_IMG_2208.JPG",
    properties: { lat: "45.0767535", lon: "7.669427663" },
  },
  689: {
    name: "Toret #689",
    description: "Piazza Desiderato Chiaves, 8",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DSC_7958.jpg",
    properties: { lat: "45.07137044", lon: "7.719224081" },
  },
  691: {
    name: "Toret #691",
    description: "Corso Grosseto, 216-224",
    image: "",
    properties: { lat: "45.10545313", lon: "7.66661547" },
  },
  692: {
    name: "Toret #692",
    description: "Piazzale Volgograd, 60-104",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/13/WP_000799_ufficiale.jpg",
    properties: { lat: "45.12924802", lon: "7.713705812" },
  },
  693: {
    name: "Toret #693",
    description: "Via V. Scialoja A. E, 20",
    image: "",
    properties: { lat: "45.10688194", lon: "7.689091898" },
  },
  694: {
    name: "Toret #694",
    description: "Via dei Gladioli, 15",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/06/05/IMG_20140518_180939.jpg",
    properties: { lat: "45.10070495", lon: "7.635894257" },
  },
  696: {
    name: "Toret #696",
    description: "Corso Taranto, 174",
    image: "",
    properties: { lat: "45.09630627", lon: "7.711034189" },
  },
  697: {
    name: "Toret #697",
    description: "Via Monte Rosa, 150-156",
    image: "",
    properties: { lat: "45.09891041", lon: "7.700833853" },
  },
  701: {
    name: "Toret #701",
    description: "Via Giovanni Servais, 170-176",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/03/toret_zazu_1.JPG",
    properties: { lat: "45.08523623", lon: "7.619808822" },
  },
  702: {
    name: "Toret #702",
    description: "Piazza Bonghi Ruggero, 2-8",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/05/02/Brasko_-_The_fashion_toret.jpg",
    properties: { lat: "45.10154135", lon: "7.670246082" },
  },
  703: {
    name: "Toret #703",
    description: "Corso Taranto, 68-80",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DSC_8050.jpg",
    properties: { lat: "45.09978988", lon: "7.703645503" },
  },
  709: {
    name: "Toret #709",
    description: "Piazza Pasquale Villari, 12",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/05/11/1429442688641_1.jpg",
    properties: { lat: "45.10011331", lon: "7.663561091" },
  },
  711: {
    name: "Toret #711",
    description: "Strada Castello di Mirafiori, 350",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/17/Zingari_1.jpg",
    properties: { lat: "45.00940132", lon: "7.648778871" },
  },
  712: {
    name: "Toret #712",
    description: "Via Giovanni Palatucci, 29",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/BeppeViola.jpg",
    properties: { lat: "45.04843379", lon: "7.621262549" },
  },
  714: {
    name: "Toret #714",
    description: "Corso Cesare Correnti, 37-65",
    image: "",
    properties: { lat: "45.05201865", lon: "7.63258822" },
  },
  716: {
    name: "Toret #716",
    description: "Via Antonio Fontanesi, 4-8",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DSC_7948.jpg",
    properties: { lat: "45.07408039", lon: "7.709935059" },
  },
  717: {
    name: "Toret #717",
    description: "Via Ventimiglia, 98",
    image: "",
    properties: { lat: "45.02707484", lon: "7.669602285" },
  },
  718: {
    name: "Toret #718",
    description: "Corso Belgio, 129-135",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/11/12-02-2016-09-16.jpg",
    properties: { lat: "45.07463171", lon: "7.721165068" },
  },
  719: {
    name: "Toret #719",
    description: "Via Giuseppe Macherione, 178",
    image: "",
    properties: { lat: "45.12003467", lon: "7.657633363" },
  },
  721: {
    name: "Toret #721",
    description: "Strada della Commenda, 7-11",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/05/11/1429525857597_1.jpg",
    properties: { lat: "45.09633494", lon: "7.654606957" },
  },
  722: {
    name: "Toret #722",
    description: "Strada Comunale Val Pattonera, 46",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2013/02/14/toret.JPG",
    properties: { lat: "45.03368532", lon: "7.689241225" },
  },
  724: {
    name: "Toret #724",
    description: "Viale dei Partigiani",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/14/29-03-2016-5-16_PM.jpg",
    properties: { lat: "45.07201194", lon: "7.691172694" },
  },
  728: {
    name: "Toret #728",
    description: "Corso Lione, 58-62",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/21/Lione_52_46455.jpg",
    properties: { lat: "45.05706938", lon: "7.654380587" },
  },
  730: {
    name: "Toret #730",
    description: "Via Celeste Negarville, 18",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Negarville2.jpg",
    properties: { lat: "45.0197356", lon: "7.61171401" },
  },
  731: {
    name: "Toret #731",
    description: "Strada Comunale di Altessano, 117-123",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/05/11/1429611869313_1.jpg",
    properties: { lat: "45.10787228", lon: "7.644992987" },
  },
  732: {
    name: "Toret #732",
    description: "Via Giovanni Pacini, 18-22",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/03/15/torello.jpg",
    properties: { lat: "45.08667918", lon: "7.699120244" },
  },
  733: {
    name: "Toret #733",
    description: "Corso Quintino Sella, 85-89",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/25/DSC_9253_1.jpg",
    properties: { lat: "45.06508523", lon: "7.714340202" },
  },
  734: {
    name: "Toret #734",
    description: "Via Vittorio Amedeo Gioanetti",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/14/DSC_8842.jpg",
    properties: { lat: "45.06126109", lon: "7.697714094" },
  },
  739: {
    name: "Toret #739",
    description: "Via Cesare Pavese, 20-26",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/17/Pavese2_1.jpg",
    properties: { lat: "45.01714483", lon: "7.632139921" },
  },
  742: {
    name: "Toret #742",
    description: "Corso Mediterraneo",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/21/Mediterraneo_44983_1.jpg",
    properties: { lat: "45.06081281", lon: "7.657584614" },
  },
  744: {
    name: "Toret #744",
    description: "Via Nizza, 124",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/03/IMG_2156_1.JPG",
    properties: { lat: "45.04239148", lon: "7.670884654" },
  },
  745: {
    name: "Toret #745",
    description: "Corso Moncalieri, 80",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/14/DSC_8836.jpg",
    properties: { lat: "45.05325881", lon: "7.689872429" },
  },
  749: {
    name: "Toret #749",
    description: "Via Plava, 117-119",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Plava1.jpg",
    properties: { lat: "45.01977111", lon: "7.614577612" },
  },
  751: {
    name: "Toret #751",
    description: "Via Sant'Antonino, 59-69",
    image: "",
    properties: { lat: "45.07354728", lon: "7.630942524" },
  },
  759: {
    name: "Toret #759",
    description: "Corso Venezia, 65",
    image: "",
    properties: { lat: "45.09808148", lon: "7.685056574" },
  },
  762: {
    name: "Toret #762",
    description: "Piazza Guido Gozzano, 4",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/09/cdv_photo_001_1.jpg",
    properties: { lat: "45.06571464", lon: "7.71191407" },
  },
  763: {
    name: "Toret #763",
    description: "Corso Potenza, 99",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/04/06/1428081986382_1.jpg",
    properties: { lat: "45.09633018", lon: "7.657206817" },
  },
  771: {
    name: "Toret #771",
    description: "Corso Racconigi, 112-120",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/01/22/cdv_photo_001_1_1.jpg",
    properties: { lat: "45.06461151", lon: "7.644974864" },
  },
  772: {
    name: "Toret #772",
    description: "Via Exilles, 1-19",
    image: "",
    properties: { lat: "45.07565925", lon: "7.631213368" },
  },
  773: {
    name: "Toret #773",
    description: "Via Somalia, 2-10",
    image: "",
    properties: { lat: "45.00893875", lon: "7.655477943" },
  },
  774: {
    name: "Toret #774",
    description: "Piazza Adriano, 14",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/12/09/1415445161419.jpg",
    properties: { lat: "45.0720323", lon: "7.654800445" },
  },
  775: {
    name: "Toret #775",
    description: "Via delle Querce, 65",
    image: "",
    properties: { lat: "45.12879824", lon: "7.713484873" },
  },
  776: {
    name: "Toret #776",
    description: "Strada del Portone, 27",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DelPortone.jpg",
    properties: { lat: "45.03293792", lon: "7.611184718" },
  },
  777: {
    name: "Toret #777",
    description: "Via Chambery, 31",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/01/04/chambery_31_uff.jpg",
    properties: { lat: "45.06909949", lon: "7.621012037" },
  },
  781: {
    name: "Toret #781",
    description: "Via V. Scialoja A. E, 20",
    image: "",
    properties: { lat: "45.10588775", lon: "7.689558102" },
  },
  782: {
    name: "Toret #782",
    description: "Via Agostino Bertani, 55-63",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/03/DSC_0556_bis.jpg",
    properties: { lat: "45.03338379", lon: "7.604720057" },
  },
  783: {
    name: "Toret #783",
    description: "Via Cercenasco, 6",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/GualaGiochi.jpg",
    properties: { lat: "45.0236998", lon: "7.640043621" },
  },
  784: {
    name: "Toret #784",
    description: "Viale Falchera, 53-59",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/13/WP_000792_ufficiale.jpg",
    properties: { lat: "45.12528017", lon: "7.708940411" },
  },
  787: {
    name: "Toret #787",
    description: "p.zza C.Freguglia",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/12/14/toret_cavoretto.jpg",
    properties: { lat: "45.02944189", lon: "7.687899366" },
  },
  789: {
    name: "Toret #789",
    description: "Corso Regina Margherita, 68",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/28/DSC_7521_4_1.jpg",
    properties: { lat: "45.07252371", lon: "7.697179128" },
  },
  792: {
    name: "Toret #792",
    description: "Via Narzole, 4",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/18/marcogil_IMG_2179_2.JPG",
    properties: { lat: "45.03498335", lon: "7.666913948" },
  },
  794: {
    name: "Toret #794",
    description: "Via Eritrea, 1-13",
    image: "",
    properties: { lat: "45.07333929", lon: "7.615183509" },
  },
  795: {
    name: "Toret #795",
    description: "Corso Sebastopoli, 33",
    image: "",
    properties: { lat: "45.03961396", lon: "7.661571753" },
  },
  796: {
    name: "Toret #796",
    description: "Via Piobesi, 17",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Guala3.jpg",
    properties: { lat: "45.02093311", lon: "7.64308409" },
  },
  797: {
    name: "Toret #797",
    description: "Largo Re Umberto, 114-118",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/04/11/GiardinoSilvioGeuna.jpg",
    properties: { lat: "45.05244048", lon: "7.66370147" },
  },
  798: {
    name: "Toret #798",
    description: "Corso Tassoni Alessandro, 33-43",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/17/corso_tassoni_1.JPG",
    properties: { lat: "45.08116459", lon: "7.655650788" },
  },
  799: {
    name: "Toret #799",
    description: "Via Giovanni Verga, 20",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/11/Verga1.jpg",
    properties: { lat: "45.01241793", lon: "7.633379908" },
  },
  804: {
    name: "Toret #804",
    description: "Via Piazza Cavour",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/11/25-03-2016-13-47.jpg",
    properties: { lat: "45.06320387", lon: "7.688878029" },
  },
  806: {
    name: "Toret #806",
    description: "Via Assisi, 21-25",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Luini.jpg",
    properties: { lat: "45.09682486", lon: "7.667820901" },
  },
  807: {
    name: "Toret #807",
    description: "Piazza della Repubblica, 1",
    image: "",
    properties: { lat: "45.07567753", lon: "7.682551253" },
  },
  808: {
    name: "Toret #808",
    description: "Via Lucca, 1-13",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/31/toret1.jpg",
    properties: { lat: "45.10247533", lon: "7.654556359" },
  },
  810: {
    name: "Toret #810",
    description: "Corso Potenza, 179B",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/10/20/1413390811537.jpg",
    properties: { lat: "45.10419303", lon: "7.662255805" },
  },
  812: {
    name: "Toret #812",
    description: "Corso Svizzera, 4-16",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2013/01/18/foto10.jpg",
    properties: { lat: "45.07623684", lon: "7.648708302" },
  },
  815: {
    name: "Toret #815",
    description: "Via Giovanni Pacini, 18-22",
    image: "",
    properties: { lat: "45.08671154", lon: "7.699092355" },
  },
  818: {
    name: "Toret #818",
    description: "Via Gaetano Ettore Giardino",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/DSC_7799.jpg",
    properties: { lat: "45.05911864", lon: "7.698885112" },
  },
  819: {
    name: "Toret #819",
    description: "Via Palmiro Togliatti, 31-35",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Togliatti.jpg",
    properties: { lat: "45.01596495", lon: "7.633017317" },
  },
  820: {
    name: "Toret #820",
    description: "Corso Appio Claudio, 158-160",
    image: "",
    properties: { lat: "45.08633476", lon: "7.634898949" },
  },
  821: {
    name: "Toret #821",
    description: "Via Volvera, 17A",
    image: "",
    properties: { lat: "45.06337881", lon: "7.648030956" },
  },
  824: {
    name: "Toret #824",
    description: "Via Ludovico Bellardi, 119",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/01/21/bellardi_119_uff.jpg",
    properties: { lat: "45.0843863", lon: "7.627723608" },
  },
  828: {
    name: "Toret #828",
    description: "Viale XXV Aprile, 2",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/11/04/1383490546245.jpg",
    properties: { lat: "45.03435875", lon: "7.684922159" },
  },
  829: {
    name: "Toret #829",
    description: "Via Ricaldone, 26",
    image: "",
    properties: { lat: "45.05166013", lon: "7.645622458" },
  },
  830: {
    name: "Toret #830",
    description: "Corso XI Febbraio 1929, 24-30",
    image: "",
    properties: { lat: "45.07847816", lon: "7.688457589" },
  },
  834: {
    name: "Toret #834",
    description: "Via Rosalba Carriera, 1-19",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/04/29/1397755875404.jpg",
    properties: { lat: "45.06911657", lon: "7.629341717" },
  },
  839: {
    name: "Toret #839",
    description: "Corso Novara",
    image: "",
    properties: { lat: "45.07837972", lon: "7.700416383" },
  },
  841: {
    name: "Toret #841",
    description: "Corso Casale, 327",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/20/DSC_9038.jpg",
    properties: { lat: "45.08155854", lon: "7.73021144" },
  },
  844: {
    name: "Toret #844",
    description: "Corso Taranto, 42",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DSC_8046.jpg",
    properties: { lat: "45.10091001", lon: "7.700910756" },
  },
  845: {
    name: "Toret #845",
    description: "Corso Carlo Luigi Farini, 1-9",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/09/cdv_photo_002_1.jpg",
    properties: { lat: "45.07067272", lon: "7.703513897" },
  },
  848: {
    name: "Toret #848",
    description: "Via Nizza, 157-167",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/03/IMG_2159_1.JPG",
    properties: { lat: "45.04231609", lon: "7.671408552" },
  },
  849: {
    name: "Toret #849",
    description: "Via Osasco, 66-80",
    image: "",
    properties: { lat: "45.05769545", lon: "7.649038584" },
  },
  852: {
    name: "Toret #852",
    description: "Via Bernardo de Canal, 45-47",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DArborea.jpg",
    properties: { lat: "45.03460935", lon: "7.639471569" },
  },
  857: {
    name: "Toret #857",
    description: "Strada Scarafiotti, 29-31",
    image: "",
    properties: { lat: "45.10213059", lon: "7.731290963" },
  },
  858: {
    name: "Toret #858",
    description: "Corso Cincinnato, 242-254",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/09/29/1411637690220.jpg",
    properties: { lat: "45.10464079", lon: "7.653444627" },
  },
  859: {
    name: "Toret #859",
    description: "Piazza Generale Robilant, 10",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8352.jpg",
    properties: { lat: "45.06072666", lon: "7.644761716" },
  },
  860: {
    name: "Toret #860",
    description: "Via Rovereto",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/26/toretOsoppo1_1.jpg",
    properties: { lat: "45.05301412", lon: "7.638905792" },
  },
  861: {
    name: "Toret #861",
    description: "Corso Francesco Ferrucci, 59-61",
    image: "",
    properties: { lat: "45.06960417", lon: "7.656022321" },
  },
  862: {
    name: "Toret #862",
    description: "Via Leonardo Da Vinci",
    image: "",
    properties: { lat: "45.04451764", lon: "7.668685411" },
  },
  863: {
    name: "Toret #863",
    description: "Via Paolo Braccini, 63",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/11/04/1383563452726_1.jpg",
    properties: { lat: "45.06012214", lon: "7.64966447" },
  },
  865: {
    name: "Toret #865",
    description: "Viale dei Partigiani",
    image: "",
    properties: { lat: "45.07163936", lon: "7.68729914" },
  },
  869: {
    name: "Toret #869",
    description: "Piazza Bengasi, 23",
    image: "",
    properties: { lat: "45.0173716", lon: "7.660932135" },
  },
  871: {
    name: "Toret #871",
    description: "Via delle Betulle",
    image: "",
    properties: { lat: "45.12464564", lon: "7.707499722" },
  },
  874: {
    name: "Toret #874",
    description: "Via Gubbio, 45-67",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/12/14/GUBBIO_1_1.jpg",
    properties: { lat: "45.09661114", lon: "7.665229925" },
  },
  878: {
    name: "Toret #878",
    description: "Corso IV Novembre, 40",
    image: "",
    properties: { lat: "45.04761559", lon: "7.654353215" },
  },
  879: {
    name: "Toret #879",
    description: "Via Celeste Negarville, 26-30",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/11/Negarville1.jpg",
    properties: { lat: "45.01848032", lon: "7.610864566" },
  },
  882: {
    name: "Toret #882",
    description: "Strada Comunale Val San Martino, 18-26",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/25/DSC_9238_1_1.jpg",
    properties: { lat: "45.06340105", lon: "7.714527212" },
  },
  887: {
    name: "Toret #887",
    description: "Viale dei Mughetti, 20",
    image: "",
    properties: { lat: "45.10325355", lon: "7.629676568" },
  },
  891: {
    name: "Toret #891",
    description: "Via Susa, 13-19",
    image: "",
    properties: { lat: "45.07359872", lon: "7.661644283" },
  },
  893: {
    name: "Toret #893",
    description: "Piazza della Repubblica, 10",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/07/03/20130622_092353_1.jpg",
    properties: { lat: "45.07625985", lon: "7.684636272" },
  },
  899: {
    name: "Toret #899",
    description: "Via Campiglia, 26",
    image: "",
    properties: { lat: "45.10244139", lon: "7.673671459" },
  },
  900: {
    name: "Toret #900",
    description: "Via Martiniana, 1-5",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8358.jpg",
    properties: { lat: "45.06337429", lon: "7.64795559" },
  },
  904: {
    name: "Toret #904",
    description: "Via Giovanni Pastrone, 2-4",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/19/Toret_-_Via_Pastrone_1.JPG",
    properties: { lat: "45.09462411", lon: "7.703010465" },
  },
  908: {
    name: "Toret #908",
    description: "Via Castelgomberto, 103-121",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Boston.jpg",
    properties: { lat: "45.04338781", lon: "7.631917312" },
  },
  911: {
    name: "Toret #911",
    description: "Via Challant, 10-28",
    image: "",
    properties: { lat: "45.06115658", lon: "7.619534771" },
  },
  913: {
    name: "Toret #913",
    description: "Via Carema, 4",
    image: "",
    properties: { lat: "45.11364646", lon: "7.705865362" },
  },
  916: {
    name: "Toret #916",
    description: "Corso Moncalieri, 416-420",
    image: "",
    properties: { lat: "45.02517302", lon: "7.675003195" },
  },
  921: {
    name: "Toret #921",
    description: "Via Paesana, 2-22",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8369.jpg",
    properties: { lat: "45.06282595", lon: "7.652953749" },
  },
  924: {
    name: "Toret #924",
    description: "Via Modesto Panetti",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Colonnetti_Sisport.jpg",
    properties: { lat: "45.01456125", lon: "7.644728987" },
  },
  929: {
    name: "Toret #929",
    description: "Via Francesco Saverio Nitti",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Nitti1.jpg",
    properties: { lat: "45.04396968", lon: "7.621532709" },
  },
  930: {
    name: "Toret #930",
    description: "Strada del Meisino",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/13/20121207_114516_Medium.jpg",
    properties: { lat: "45.08738149", lon: "7.731042902" },
  },
  932: {
    name: "Toret #932",
    description: "Via Barbera Gaspare, 40-50",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Barbera_Lamapadari.jpg",
    properties: { lat: "45.01845819", lon: "7.635932021" },
  },
  934: {
    name: "Toret #934",
    description: "Corso Unione Sovietica, 93-111",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/12/2012-12-09_16.24.10_1.jpg",
    properties: { lat: "45.04433869", lon: "7.659846297" },
  },
  935: {
    name: "Toret #935",
    description: "Corso F Lazzari Detto Bramante",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/02/DSC_9410_1.jpg",
    properties: { lat: "45.0418786", lon: "7.676257841" },
  },
  936: {
    name: "Toret #936",
    description: "Via Adelaide Ristori, 2-8",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/31/Toret_-_Via_Ristori.jpg",
    properties: { lat: "45.08583369", lon: "7.702616209" },
  },
  937: {
    name: "Toret #937",
    description: "Via delle Verbene, 2-10",
    image: "",
    properties: { lat: "45.1044018", lon: "7.632153361" },
  },
  938: {
    name: "Toret #938",
    description: "Via Nuova",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/25/ToretViaNuova_1_1.jpg",
    properties: { lat: "45.0307106", lon: "7.6848105" },
  },
  939: {
    name: "Toret #939",
    description: "Corso Vinzaglio, 2-4",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/09/04/cdv_photo_002.jpg",
    properties: { lat: "45.07276119", lon: "7.669915049" },
  },
  940: {
    name: "Toret #940",
    description: "Viale Innocenzo Contini, 39",
    image: "",
    properties: { lat: "45.05664232", lon: "7.708297385" },
  },
  943: {
    name: "Toret #943",
    description: "Via Traves, 9-15",
    image: "",
    properties: { lat: "45.10934355", lon: "7.6290063" },
  },
  944: {
    name: "Toret #944",
    description: "Via degli Abeti",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/13/WP_000781_ufficiale.jpg",
    properties: { lat: "45.12984392", lon: "7.710458119" },
  },
  946: {
    name: "Toret #946",
    description: "Via Reggio, 1-5",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/05/corso_reggio2.JPG",
    properties: { lat: "45.07442542", lon: "7.694400324" },
  },
  947: {
    name: "Toret #947",
    description: "Corso Grosseto",
    image: "",
    properties: { lat: "45.10685258", lon: "7.641161655" },
  },
  951: {
    name: "Toret #951",
    description: "Piazza dei Donatore di Sangue",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/19/Toret_-_Piazza_Donatori_Sangue_1.JPG",
    properties: { lat: "45.09654313", lon: "7.700648626" },
  },
  952: {
    name: "Toret #952",
    description: "Via Baltimora, 154-160",
    image: "",
    properties: { lat: "45.04831252", lon: "7.632132822" },
  },
  953: {
    name: "Toret #953",
    description: "Corso XI Febbraio 1929, 12-22",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/04/12/cdv_photo_003_1.jpg",
    properties: { lat: "45.07732945", lon: "7.687649557" },
  },
  955: {
    name: "Toret #955",
    description: "Via Maddalene, 50-52",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/DSC_8080.jpg",
    properties: { lat: "45.09061421713079", lon: "7.714740882192185" },
  },
  956: {
    name: "Toret #956",
    description: "Corso Canonico G. Allamano",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Allamano.jpg",
    properties: { lat: "45.05052919", lon: "7.622253108" },
  },
  958: {
    name: "Toret #958",
    description: "Via Timoteo Riboli, 2-16",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Riboli1.jpg",
    properties: { lat: "45.01443708", lon: "7.635560249" },
  },
  962: {
    name: "Toret #962",
    description: "Corso Spezia, 54",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/20/2012-11-12_12.31.43ter_1.jpg",
    properties: { lat: "45.036337", lon: "7.673899129" },
  },
  964: {
    name: "Toret #964",
    description: "Corso Luigi Settembrini, 209-223",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Settembrini.jpg",
    properties: { lat: "45.03061749", lon: "7.614572916" },
  },
  966: {
    name: "Toret #966",
    description: "Via Luigi Capuana, 4-6",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Capuana_966_1.jpg",
    properties: { lat: "45.01343638", lon: "7.635351148" },
  },
  967: {
    name: "Toret #967",
    description: "Corso Appio Claudio, 156",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/11/07-04-2016-11-09.jpg",
    properties: { lat: "45.08543884", lon: "7.635457148" },
  },
  968: {
    name: "Toret #968",
    description: "Via Carlo Cipolla, 2-6",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/14/1429526776806_1.jpg",
    properties: { lat: "45.09746553", lon: "7.654682363" },
  },
  969: {
    name: "Toret #969",
    description: "Via Rivalta, 51-57",
    image: "",
    properties: { lat: "45.05770537", lon: "7.648248893" },
  },
  972: {
    name: "Toret #972",
    description: "Via V. Scialoja A. E, 20",
    image: "",
    properties: { lat: "45.10747165", lon: "7.690457459" },
  },
  974: {
    name: "Toret #974",
    description: "Via Guido Guinicelli, 1-11",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/18/20121112_113739_2.jpg",
    properties: { lat: "45.06595954", lon: "7.722203732" },
  },
  977: {
    name: "Toret #977",
    description: "Corso Racconigi, 218",
    image: "",
    properties: { lat: "45.05556005", lon: "7.64855752" },
  },
  979: {
    name: "Toret #979",
    description: "Via Zuretti",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/03/IMG_2131_1.JPG",
    properties: { lat: "45.03517284", lon: "7.674932521" },
  },
  980: {
    name: "Toret #980",
    description: "Via Edoardo Rubino, 56-80",
    image: "",
    properties: { lat: "45.04069492", lon: "7.621947575" },
  },
  981: {
    name: "Toret #981",
    description: "Corso Taranto, 67-69",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DSC_8053.jpg",
    properties: { lat: "45.09862923", lon: "7.706336957" },
  },
  985: {
    name: "Toret #985",
    description: "Via Brenta, 17",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/12/14/BRENTA_1.jpg",
    properties: { lat: "45.10143247", lon: "7.686906602" },
  },
  990: {
    name: "Toret #990",
    description: "Via Emanuele Artom, 81-95",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Artom2.jpg",
    properties: { lat: "45.01091185", lon: "7.649800014" },
  },
  991: {
    name: "Toret #991",
    description: "Viale Virgilio",
    image: "",
    properties: { lat: "45.05763881", lon: "7.688700965" },
  },
  997: {
    name: "Toret #997",
    description: "Via V. Scialoja A. E, 22-24",
    image: "",
    properties: { lat: "45.10605417", lon: "7.69210712" },
  },
  998: {
    name: "Toret #998",
    description: "Via Damiano Chiesa, 45-47",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/07/21/20140716_133205.jpg",
    properties: { lat: "45.10065425", lon: "7.729301142" },
  },
  1001: {
    name: "Toret #1001",
    description: "Strada di Lanzo, 79-95",
    image: "",
    properties: { lat: "45.11230699", lon: "7.659555714" },
  },
  1003: {
    name: "Toret #1003",
    description: "Largo Bologna, 133",
    image: "",
    properties: { lat: "45.08678893", lon: "7.704699849" },
  },
  1004: {
    name: "Toret #1004",
    description: "Via Giovanni Roveda, 2-8",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/19/Roveda_1.jpg",
    properties: { lat: "45.02013271", lon: "7.610349527" },
  },
  1005: {
    name: "Toret #1005",
    description: "Via Lomellina, 1-3",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/25/DSC_9263_1_1.jpg",
    properties: { lat: "45.06759559", lon: "7.716105712" },
  },
  1006: {
    name: "Toret #1006",
    description: "Strada Comunale di Altessano, 131",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/05/11/1429611034825.jpg",
    properties: { lat: "45.11097446", lon: "7.645149391" },
  },
  1007: {
    name: "Toret #1007",
    description: "Strada del Cimitero di Sassi, 1",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/20/DSC_9030.jpg",
    properties: { lat: "45.08081833", lon: "7.72965279" },
  },
  1011: {
    name: "Toret #1011",
    description: "Via Pola, 38",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Monteponi2.jpg",
    properties: { lat: "45.01616844", lon: "7.621187429" },
  },
  1012: {
    name: "Toret #1012",
    description: "Via Scipio Slataper",
    image: "",
    properties: { lat: "45.09787324", lon: "7.654844577" },
  },
  1014: {
    name: "Toret #1014",
    description: "Lungopo Armando Diaz",
    image: "",
    properties: { lat: "45.06132278", lon: "7.693894709" },
  },
  1016: {
    name: "Toret #1016",
    description: "Corso Appio Claudio, 9",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/01/04/marcogil_IMG_2195.JPG",
    properties: { lat: "45.08419823", lon: "7.655064788" },
  },
  1017: {
    name: "Toret #1017",
    description: "Corso Trapani, 162",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2014/01/03/3.jpg",
    properties: { lat: "45.06103339", lon: "7.634364675" },
  },
  1018: {
    name: "Toret #1018",
    description: "Via Plava, 91-93",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Plava2.jpg",
    properties: { lat: "45.01890362", lon: "7.618678962" },
  },
  1021: {
    name: "Toret #1021",
    description: "Via Fiesole",
    image: "",
    properties: { lat: "45.10427063", lon: "7.650675783" },
  },
  1025: {
    name: "Toret #1025",
    description: "Corso Casale Parco - via Felice Romani",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/DSC_7653.jpg",
    properties: { lat: "45.06464848", lon: "7.701164993" },
  },
  1026: {
    name: "Toret #1026",
    description: "Via Monte Asolone, 7",
    image: "",
    properties: { lat: "45.06828643", lon: "7.635353951" },
  },
  1028: {
    name: "Toret #1028",
    description: "Piazza della Repubblica, 2",
    image: "",
    properties: { lat: "45.07547582", lon: "7.68315429" },
  },
  1030: {
    name: "Toret #1030",
    description: "Via Sospello, 184-192",
    image: "",
    properties: { lat: "45.10320354", lon: "7.683331133" },
  },
  1031: {
    name: "Toret #1031",
    description: "Via Rocco Scotellaro",
    image: "",
    properties: { lat: "45.10688202", lon: "7.702231964" },
  },
  1033: {
    name: "Toret #1033",
    description: "Via Lesna, 60",
    image: "",
    properties: { lat: "45.05481541", lon: "7.62626246" },
  },
  1034: {
    name: "Toret #1034",
    description: "Via Santa Chiara, 28",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/07/21/1405759229925_1.jpg",
    properties: { lat: "45.07584315", lon: "7.679006086" },
  },
  1035: {
    name: "Toret #1035",
    description: "Corso Cincinnato, 188-192",
    image: "",
    properties: { lat: "45.10185865", lon: "7.647946483" },
  },
  1036: {
    name: "Toret #1036",
    description: "Corso Duca degli Abruzzi, 45-47",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/03/28/cdv_photo_001_1.jpg",
    properties: { lat: "45.058716", lon: "7.660361415" },
  },
  1037: {
    name: "Toret #1037",
    description: "Corso Casale - P.zza G. Modena",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/20/DSC_9051.jpg",
    properties: { lat: "45.08023224", lon: "7.730956398" },
  },
  1039: {
    name: "Toret #1039",
    description: "Corso Giovanni Lanza, 76-78",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/17/DSC_7813.jpg",
    properties: { lat: "45.0546258", lon: "7.694862168" },
  },
  1040: {
    name: "Toret #1040",
    description: "Corso Racconigi, 65-77",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/11/20121003_171354.jpg",
    properties: { lat: "45.06861615", lon: "7.645967316" },
  },
  1041: {
    name: "Toret #1041",
    description: "Via Giovanni Cimabue, 2-8",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Cimabue.jpg",
    properties: { lat: "45.03972196", lon: "7.618670796" },
  },
  1042: {
    name: "Toret #1042",
    description: "Corso Vercelli, 435-451",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/01/07/2015-01-05_17.15.27_1.jpg",
    properties: { lat: "45.11783076", lon: "7.706239243" },
  },
  1045: {
    name: "Toret #1045",
    description: "Corso Peschiera, 171",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/27/Corso_peschiera_171_1.jpg",
    properties: { lat: "45.06443702", lon: "7.649772939" },
  },
  1047: {
    name: "Toret #1047",
    description: "Strada del Fortino, 32",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/07/21/1405757988149_1.jpg",
    properties: { lat: "45.08552759", lon: "7.678239475" },
  },
  1049: {
    name: "Toret #1049",
    description: "Piazza Santa Giulia, 2-8",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2014/04/29/toret.JPG",
    properties: { lat: "45.06942519", lon: "7.699423924" },
  },
  1051: {
    name: "Toret #1051",
    description: "Piazzale Volgograd, 60-90",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/13/WP_000795_ufficiale.jpg",
    properties: { lat: "45.13040839", lon: "7.713001165" },
  },
  1053: {
    name: "Toret #1053",
    description: "Strada di Lanzo, 30-34",
    image: "",
    properties: { lat: "45.11017517", lon: "7.661913381" },
  },
  1054: {
    name: "Toret #1054",
    description: "Via Sempione, 164-170",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/17/Toret_-_Via_Sempione_-_Giardini_Imparato.jpg",
    properties: { lat: "45.09588507", lon: "7.699490146" },
  },
  1055: {
    name: "Toret #1055",
    description: "Via Pianezza, 72",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/01/22/1434010342197.jpg",
    properties: { lat: "45.09338462", lon: "7.652092787" },
  },
  1056: {
    name: "Toret #1056",
    description: "Via Pietro Francesco Guala, 140",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/17/Guala1.jpg",
    properties: { lat: "45.02151407", lon: "7.641198232" },
  },
  1057: {
    name: "Toret #1057",
    description: "Corso Sicilia, 50",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/22/0287.Turet_1.jpg",
    properties: { lat: "45.03906297", lon: "7.680508414" },
  },
  1058: {
    name: "Toret #1058",
    description: "Via Isonzo, 80",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/02/24/1393168007105.jpg",
    properties: { lat: "45.05852251", lon: "7.637253019" },
  },
  1059: {
    name: "Toret #1059",
    description: "Piazza Ottorino Respighi, 9",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/14/Toret_di_piazza_Respighi_1.JPG",
    properties: { lat: "45.09263671", lon: "7.703301244" },
  },
  1061: {
    name: "Toret #1061",
    description: "Via Domenico Coggiola, 18-20",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Coggiola.jpg",
    properties: { lat: "45.01315185", lon: "7.630368618" },
  },
  1062: {
    name: "Toret #1062",
    description: "Via Bernardino Luini, 7-23",
    image: "",
    properties: { lat: "45.09661545", lon: "7.668968187" },
  },
  1066: {
    name: "Toret #1066",
    description: "Via Caluso, 8",
    image: "",
    properties: { lat: "45.10572556", lon: "7.667049436" },
  },
  1067: {
    name: "Toret #1067",
    description: "Corso Francia, 325-329",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/04/08/2014-04-03_16.22.50.jpg",
    properties: { lat: "45.07360409", lon: "7.616191392" },
  },
  1068: {
    name: "Toret #1068",
    description: "Corso Belgio, 109-127",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/13/cdv_photo_010.jpg",
    properties: { lat: "45.07445823", lon: "7.720055169" },
  },
  1069: {
    name: "Toret #1069",
    description: "Via Orvieto",
    image: "",
    properties: { lat: "45.0934334", lon: "7.670677191" },
  },
  1073: {
    name: "Toret #1073",
    description: "Corso Giulio Cesare, 27",
    image: "",
    properties: { lat: "45.08275047", lon: "7.687396053" },
  },
  1075: {
    name: "Toret #1075",
    description: "Piazza Sauro Nazario, 8-12",
    image: "",
    properties: { lat: "45.10129762", lon: "7.655745733" },
  },
  1077: {
    name: "Toret #1077",
    description: "Viale Virgilio",
    image: "",
    properties: { lat: "45.0493525", lon: "7.685218861" },
  },
  1080: {
    name: "Toret #1080",
    description: "Corso Belgio, 67-73",
    image: "",
    properties: { lat: "45.07288495", lon: "7.711934353" },
  },
  1082: {
    name: "Toret #1082",
    description: "Via Caserta, 17-19",
    image: "",
    properties: { lat: "45.0834675", lon: "7.671094676" },
  },
  1084: {
    name: "Toret #1084",
    description: "Via Pietro Mascagni",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/19/Toret_-_Via_Mascagni_1.JPG",
    properties: { lat: "45.09724128", lon: "7.706869814" },
  },
  1086: {
    name: "Toret #1086",
    description: "Via Erasmo da Rotterdam",
    image: "",
    properties: { lat: "45.03928267", lon: "7.659467699" },
  },
  1089: {
    name: "Toret #1089",
    description: "Strada Arrivore, 46",
    image: "",
    properties: { lat: "45.09969744", lon: "7.716167814" },
  },
  1091: {
    name: "Toret #1091",
    description: "Corso Brianza, 23",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/02/10/2014-02-01_11.43.55.jpg",
    properties: { lat: "45.07274113", lon: "7.719048885" },
  },
  1092: {
    name: "Toret #1092",
    description: "Corso Cadore, 12-20",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/25/toretto.jpg",
    properties: { lat: "45.0758378", lon: "7.722785412" },
  },
  1095: {
    name: "Toret #1095",
    description: "Via degli Ulivi, 2-6",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/13/WP_000790_ufficiale.jpg",
    properties: { lat: "45.12953171", lon: "7.705832974" },
  },
  1097: {
    name: "Toret #1097",
    description: "Corso San Maurizio, 11-13",
    image: "",
    properties: { lat: "45.07298226", lon: "7.691819011" },
  },
  1100: {
    name: "Toret #1100",
    description: "Corso Lione, 40",
    image: "",
    properties: { lat: "45.05685216", lon: "7.654685155" },
  },
  1104: {
    name: "Toret #1104",
    description: "Corso Unità D'Italia",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/03/IMG_2133_1.JPG",
    properties: { lat: "45.03484447", lon: "7.675717057" },
  },
  1105: {
    name: "Toret #1105",
    description: "Via Monteponi, 2-30",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Monteponi1.jpg",
    properties: { lat: "45.01476517", lon: "7.625039305" },
  },
  1108: {
    name: "Toret #1108",
    description: "Piazza Dante Livio Bianco/Giovanni XXIII",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Redentore.jpg",
    properties: { lat: "45.035496", lon: "7.635121" },
  },
  1112: {
    name: "Toret #1112",
    description: "Ponte Sassi",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/20/DSC_9046.jpg",
    properties: { lat: "45.07555902", lon: "7.730072116" },
  },
  1114: {
    name: "Toret #1114",
    description: "Via Fratelli Garrone, 72-74",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/10/DeMaistre_1.jpg",
    properties: { lat: "45.01266916", lon: "7.649598844" },
  },
  1121: {
    name: "Toret #1121",
    description: "Via Lodovico Antonio Muratori, 28",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/02/DSC_9418_1.jpg",
    properties: { lat: "45.04457657", lon: "7.669238797" },
  },
  1125: {
    name: "Toret #1125",
    description: "Via Lodovico Antonio Muratori",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/02/DSC_9426_2.jpg",
    properties: { lat: "45.04700656", lon: "7.670535662" },
  },
  1128: {
    name: "Toret #1128",
    description: "Via Principessa Clotilde, 40-48",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/03/28/2013-03-24-13-07-04.jpg",
    properties: { lat: "45.08218989", lon: "7.664534705" },
  },
  1131: {
    name: "Toret #1131",
    description: "Via Fratelli de Maistre, 2-8",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Vigliani.jpg",
    properties: { lat: "45.01723268", lon: "7.653827018" },
  },
  1132: {
    name: "Toret #1132",
    description: "Via degli Stampatori, 1-3",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/07/IMG_1972.JPG",
    properties: { lat: "45.07274899", lon: "7.678654237" },
  },
  1133: {
    name: "Toret #1133",
    description: "Corso Carlo Luigi Farini",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/08/02/cdv_photo_001.jpg",
    properties: { lat: "45.07162481", lon: "7.702784015" },
  },
  1135: {
    name: "Toret #1135",
    description: "Corso IV Novembre, 40",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/21/IMG_20130518_125512_1.jpg",
    properties: { lat: "45.04809117", lon: "7.652790837" },
  },
  1136: {
    name: "Toret #1136",
    description: "Via Generale Luigi Damiano, 1-11",
    image: "",
    properties: { lat: "45.08586075", lon: "7.684078055" },
  },
  1137: {
    name: "Toret #1137",
    description: "Via Verolengo, 198",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/04/14/1428772060788_1.jpg",
    properties: { lat: "45.09485291", lon: "7.650115206" },
  },
  1138: {
    name: "Toret #1138",
    description: "Via Giovanni Cena, 23",
    image: "",
    properties: { lat: "45.10894598", lon: "7.70249229" },
  },
  1139: {
    name: "Toret #1139",
    description: "Via Prospero Richelmy, 27-35",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/05/11/20150425095157.jpg",
    properties: { lat: "45.0316571", lon: "7.672380814" },
  },
  1141: {
    name: "Toret #1141",
    description: "Via dei Gladioli, 9-13",
    image: "",
    properties: { lat: "45.10155275", lon: "7.635798689" },
  },
  1143: {
    name: "Toret #1143",
    description: "Via Mombasiglio, 84-100",
    image: "",
    properties: { lat: "45.05076139", lon: "7.639217795" },
  },
  1145: {
    name: "Toret #1145",
    description: "Via Leonardo Da Vinci",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/02/DSC_9414_1.jpg",
    properties: { lat: "45.04444851", lon: "7.668014811" },
  },
  1147: {
    name: "Toret #1147",
    description: "Via San Bernardino",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/01/22/1438724179717.jpg",
    properties: { lat: "45.06219615", lon: "7.647385388" },
  },
  1150: {
    name: "Toret #1150",
    description: "Viale dei Partigiani",
    image: "",
    properties: { lat: "45.07210569", lon: "7.688086881" },
  },
  1152: {
    name: "Toret #1152",
    description: "Via Germagnano",
    image: "",
    properties: { lat: "45.11668228", lon: "7.69218293" },
  },
  1153: {
    name: "Toret #1153",
    description: "Via delle Betulle, 2",
    image: "",
    properties: { lat: "45.12498039", lon: "7.707649448" },
  },
  1154: {
    name: "Toret #1154",
    description: "Viale Carlo Ceppi",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/17/Immagine_033.jpg",
    properties: { lat: "45.05036175", lon: "7.683724829" },
  },
  1155: {
    name: "Toret #1155",
    description: "Via Gottardo, 273",
    image: "",
    properties: { lat: "45.09134169", lon: "7.712195187" },
  },
  1157: {
    name: "Toret #1157",
    description: "Largo Orbassano",
    image: "",
    properties: { lat: "45.05186073", lon: "7.655663484" },
  },
  1163: {
    name: "Toret #1163",
    description: "Via Ippolito Nievo",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/14/DSC_8846.jpg",
    properties: { lat: "45.07684879", lon: "7.710966231" },
  },
  1164: {
    name: "Toret #1164",
    description: "Via Biscaretti di Ruffia",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/BiscarettiDiRuffia.jpg",
    properties: { lat: "45.02014776", lon: "7.629598115" },
  },
  1169: {
    name: "Toret #1169",
    description: "Strada del Meisino, 85",
    image: "",
    properties: { lat: "45.08915993", lon: "7.733785712" },
  },
  1174: {
    name: "Toret #1174",
    description: "Corso Bernardino Telesio, 28",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/12/14/cdv_photo_001_1.jpg",
    properties: { lat: "45.07738858", lon: "7.625865535" },
  },
  1177: {
    name: "Toret #1177",
    description: "Corso Re Umberto, 85",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/01/22/IMG_20151026_152951-1200x1622.jpg",
    properties: { lat: "45.05519385", lon: "7.667762867" },
  },
  1178: {
    name: "Toret #1178",
    description: "Corso Francia, 12-18",
    image: "",
    properties: { lat: "45.07652822", lon: "7.665558759" },
  },
  1180: {
    name: "Toret #1180",
    description: "Strada delle Vallette, 9-41",
    image: "",
    properties: { lat: "45.10433369", lon: "7.641319566" },
  },
  1181: {
    name: "Toret #1181",
    description: "Corso Peschiera, 264-276",
    image: "",
    properties: { lat: "45.06995494", lon: "7.63617258" },
  },
  1185: {
    name: "Toret #1185",
    description: "Corso Lecce, 62",
    image: "",
    properties: { lat: "45.08048162", lon: "7.647147332" },
  },
  1190: {
    name: "Toret #1190",
    description: "Via del Ridotto, 2-12",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/25/2012-11-23_11.21.19.jpg",
    properties: { lat: "45.09272654", lon: "7.678957798" },
  },
  1191: {
    name: "Toret #1191",
    description: "Via Buriasco, 5-9",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Buriasco.jpg",
    properties: { lat: "45.02180363", lon: "7.622106101" },
  },
  1192: {
    name: "Toret #1192",
    description: "Via Paolo Sacchi, 3-5",
    image: "",
    properties: { lat: "45.06183474", lon: "7.677284449" },
  },
  1195: {
    name: "Toret #1195",
    description: "Via Alassio, 10-18",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/18/Alassio_uff.jpg",
    properties: { lat: "45.03948563", lon: "7.668085575" },
  },
  1196: {
    name: "Toret #1196",
    description: "Via Nizza, 81",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/01/21/Marcogil_IMG_2235.JPG",
    properties: { lat: "45.05119444", lon: "7.674903406" },
  },
  1199: {
    name: "Toret #1199",
    description: "Strada Comunale di Bertolla, 48-52",
    image: "",
    properties: { lat: "45.09996119", lon: "7.743743264" },
  },
  1200: {
    name: "Toret #1200",
    description: "Via Maria Ausiliatrice, 32",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/07/21/1405755892118.jpg",
    properties: { lat: "45.08058178", lon: "7.675656698" },
  },
  1202: {
    name: "Toret #1202",
    description: "Via Camillo Riccio, 76",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/17/Riccio.jpg",
    properties: { lat: "45.01587127", lon: "7.617903367" },
  },
  1205: {
    name: "Toret #1205",
    description: "Corso Taranto, 136-142",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DSC_8066.jpg",
    properties: { lat: "45.09705501", lon: "7.709333492" },
  },
  1206: {
    name: "Toret #1206",
    description: "Strada San Mauro, 82-90",
    image: "",
    properties: { lat: "45.10049568", lon: "7.733045946" },
  },
  1207: {
    name: "Toret #1207",
    description: "Corso Giovanni Agnelli, 106-124",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Buenos_Aires.jpg",
    properties: { lat: "45.03619808", lon: "7.643845644" },
  },
  1208: {
    name: "Toret #1208",
    description: "Corso Racconigi, 17-23",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/04/10/2013-04-07_18-23-57_4041-HDR.jpg",
    properties: { lat: "45.07304361", lon: "7.647698682" },
  },
  1209: {
    name: "Toret #1209",
    description: "Corso Giulio Cesare, 354-358",
    image: "",
    properties: { lat: "45.10967585", lon: "7.70538017" },
  },
  1211: {
    name: "Toret #1211",
    description: "Corso Giacomo Matteotti, 51",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/06/DSC_8300.jpg",
    properties: { lat: "45.06922754", lon: "7.666406931" },
  },
  1214: {
    name: "Toret #1214",
    description: "Via Chambery, 45-49",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/01/04/chambery_45-49_uff.jpg",
    properties: { lat: "45.0690549", lon: "7.617770307" },
  },
  1216: {
    name: "Toret #1216",
    description: "Corso Francesco Guerrazzi",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/05/11/cdv_photo_001.jpg",
    properties: { lat: "45.09114258", lon: "7.719020586" },
  },
  1218: {
    name: "Toret #1218",
    description: "Corso Potenza",
    image: "",
    properties: { lat: "45.1049799", lon: "7.662581758" },
  },
  1220: {
    name: "Toret #1220",
    description: "Via Spalato",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/21/Spalato_44041.jpg",
    properties: { lat: "45.06125228", lon: "7.653877515" },
  },
  1221: {
    name: "Toret #1221",
    description: "Via Vittorio Avondo",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/03/19/Toret_-_Via_Avondo_1.JPG",
    properties: { lat: "45.09617315", lon: "7.720852921" },
  },
  1222: {
    name: "Toret #1222",
    description: "Via Santhià, 12",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/14/pza_foroni_1.jpg",
    properties: { lat: "45.08960307", lon: "7.69597518" },
  },
  1223: {
    name: "Toret #1223",
    description: "Via Paolo Bentivoglio, 5",
    image: "",
    properties: { lat: "45.08392228", lon: "7.615840048" },
  },
  1224: {
    name: "Toret #1224",
    description: "Via Paolo Gaidano, 164",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/14/DSCN0752_300x400.jpg",
    properties: { lat: "45.04316513", lon: "7.620184069" },
  },
  1226: {
    name: "Toret #1226",
    description: "Via Alessandro Fleming, 24-26",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/17/Fleming.jpg",
    properties: { lat: "45.01623868", lon: "7.635777998" },
  },
  1229: {
    name: "Toret #1229",
    description: "Piazza Statuto, 11-15",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/02/14/IMG_2257.JPG",
    properties: { lat: "45.07636566", lon: "7.670419491" },
  },
  1230: {
    name: "Toret #1230",
    description: "Strada Comunale di San Vito Revigliasco, 460-464",
    image: "",
    properties: { lat: "45.03196893", lon: "7.710970481" },
  },
  1234: {
    name: "Toret #1234",
    description: "Via degli Abeti, 13",
    image: "",
    properties: { lat: "45.13077225", lon: "7.708992329" },
  },
  1236: {
    name: "Toret #1236",
    description: "Corso Molise, 57-69",
    image: "",
    properties: { lat: "45.10404313", lon: "7.637999693" },
  },
  1237: {
    name: "Toret #1237",
    description: "Via Nicola Porpora, 47-61",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/02/05/cdv_photo_001_1.jpg",
    properties: { lat: "45.09754152", lon: "7.699583308" },
  },
  1242: {
    name: "Toret #1242",
    description: "Via Carlo Pinchia",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/Pinchia.jpg",
    properties: { lat: "45.03766265", lon: "7.624911467" },
  },
  1246: {
    name: "Toret #1246",
    description: "Via Musine, 21-25",
    image: "",
    properties: { lat: "45.08163263", lon: "7.651336928" },
  },
  1249: {
    name: "Toret #1249",
    description: "Via Sant'Ottavio, 7-11",
    image: "",
    properties: { lat: "45.06783884", lon: "7.693798074" },
  },
  1250: {
    name: "Toret #1250",
    description: "Via Giorgio Ghedini, 8-12",
    image: "",
    properties: { lat: "45.09004021", lon: "7.708018492" },
  },
  1251: {
    name: "Toret #1251",
    description: "Strada Eremo, 116",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/26/IMG_2099_1.JPG",
    properties: { lat: "45.03860741", lon: "7.735956766" },
  },
  1252: {
    name: "Toret #1252",
    description: "Viale Augusto Monti",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/ParchettoSteno.jpg",
    properties: { lat: "45.0246376", lon: "7.648533776" },
  },
  1253: {
    name: "Toret #1253",
    description: "Via Sommariva",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/08/DSC_7843.jpg",
    properties: { lat: "45.02241383", lon: "7.669037197" },
  },
  1254: {
    name: "Toret #1254",
    description: "Via Giovanni Bovetti, 12-14",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Bovetti_Murales.jpg",
    properties: { lat: "45.01370808", lon: "7.636551069" },
  },
  1256: {
    name: "Toret #1256",
    description: "Via Don Giovanni Grioli, 39-41",
    image: "",
    properties: { lat: "45.03477589", lon: "7.63543736" },
  },
  1257: {
    name: "Toret #1257",
    description: "Viale Virgilio",
    image: "",
    properties: { lat: "45.05698124", lon: "7.689571997" },
  },
  1258: {
    name: "Toret #1258",
    description: "Strada di Lanzo, 200",
    image: "",
    properties: { lat: "45.12029545", lon: "7.656424346" },
  },
  1262: {
    name: "Toret #1262",
    description: "Via Giuseppe Baretti",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/02/27/1361980318109_1.jpg",
    properties: { lat: "45.0582349", lon: "7.678490844" },
  },
  1263: {
    name: "Toret #1263",
    description: "Via Francesco Millio, 36-58",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/01/22/22-01-2016-10-50_1.jpg",
    properties: { lat: "45.05931738", lon: "7.648195145" },
  },
  1264: {
    name: "Toret #1264",
    description: "Via Giovanni Verga, 10",
    image: "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Verga.jpg",
    properties: { lat: "45.01228568", lon: "7.634966051" },
  },
  1266: {
    name: "Toret #1266",
    description: "Via Chiesa della Salute, 115-131",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/09/22/Toret_1.JPG",
    properties: { lat: "45.10273242", lon: "7.681053142" },
  },
  1267: {
    name: "Toret #1267",
    description: "Via Verolengo, 92-120",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/04/11/1428684269240_1.jpg",
    properties: { lat: "45.09547512", lon: "7.660785959" },
  },
  1270: {
    name: "Toret #1270",
    description: "Via Giuseppe Tartini, 45-51",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/24/DSC_8061.jpg",
    properties: { lat: "45.097892", lon: "7.706011857" },
  },
  1271: {
    name: "Toret #1271",
    description: "Via Bagnasco, 1-11",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/21/tt_005t_1.jpg",
    properties: { lat: "45.0558675", lon: "7.650979443" },
  },
  1277: {
    name: "Toret #1277",
    description: "Strada Comunale di Altessano, 127-129",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/05/11/1429611602987_1.jpg",
    properties: { lat: "45.10928608", lon: "7.645062361" },
  },
  1278: {
    name: "Toret #1278",
    description: "Via Annastasio Germonio, 16-20",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/06/Toret_Germonio.png",
    properties: { lat: "45.07222624", lon: "7.610842512" },
  },
  1280: {
    name: "Toret #1280",
    description: "Corso Massimo D'Azeglio, 84-98",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/12/02/DSC_9439_1.jpg",
    properties: { lat: "45.04485995", lon: "7.677620617" },
  },
  1282: {
    name: "Toret #1282",
    description: "Via Rodolfo Morandi, 2-4",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/22/Morandi.jpg",
    properties: { lat: "45.01475267", lon: "7.631423384" },
  },
  1283: {
    name: "Toret #1283",
    description: "Corso Svizzera, 62-70",
    image: "",
    properties: { lat: "45.08255988", lon: "7.651313451" },
  },
  1285: {
    name: "Toret #1285",
    description: "Via Arvier, 1-9",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/04/08/2014-04-06_14.37.49.jpg",
    properties: { lat: "45.07028267", lon: "7.632175852" },
  },
  1291: {
    name: "Toret #1291",
    description: "Via Celeste Negarville, 2-4",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/10/13/Negarville3.jpg",
    properties: { lat: "45.0210049", lon: "7.612636893" },
  },
  1292: {
    name: "Toret #1292",
    description: "Via Arcangelo Corelli, 40",
    image: "",
    properties: { lat: "45.09562916", lon: "7.709325973" },
  },
  1293: {
    name: "Toret #1293",
    description: "Via Giacomo Balla, 9-13",
    image: "",
    properties: { lat: "45.0484547", lon: "7.627666846" },
  },
  1295: {
    name: "Toret #1295",
    description: "Via Volvera, 9-15",
    image: "",
    properties: { lat: "45.06317556", lon: "7.648208846" },
  },
  1304: {
    name: "Toret #1304",
    description: "Via Martino Anglesio, 36",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/09/04/20140901_133238_1.jpg",
    properties: { lat: "45.10423695", lon: "7.732034769" },
  },
  1309: {
    name: "Toret #1309",
    description: "Via Villa Glori, 12",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/09/22/100B4104_1_1.JPG",
    properties: { lat: "45.03726361", lon: "7.679747837" },
  },
  1313: {
    name: "Toret #1313",
    description: "Corso Vittorio Emanuele II, 171-187",
    image: "",
    properties: { lat: "45.07288214", lon: "7.649958809" },
  },
  1315: {
    name: "Toret #1315",
    description: "Corso Turati Filippo, 33-39",
    image: "",
    properties: { lat: "45.05133019", lon: "7.667458048" },
  },
  1316: {
    name: "Toret #1316",
    description: "Via L. Delleani, 12-16",
    image: "",
    properties: { lat: "45.06760344", lon: "7.635832965" },
  },
  1317: {
    name: "Toret #1317",
    description: "Via delle Betulle",
    image: "",
    properties: { lat: "45.12470362", lon: "7.70694428" },
  },
  1318: {
    name: "Toret #1318",
    description: "via Trieste",
    image: "",
    properties: { lat: "45.100003", lon: "7.753478" },
  },
  1319: {
    name: "Toret #1319",
    description: "Piazza Don Delpiano",
    image:
      "https://ilovetoret.it/up/ima/toret/2013/10/30/66d2621ac1f20aea5cf3227c40c10d1e.jpg",
    properties: { lat: "45.0543143", lon: "7.6536105" },
  },
  1320: {
    name: "Toret #1320",
    description: "Via Torino - Caselle Torinese",
    image: "",
    properties: { lat: "45.174522", lon: "7.6486950" },
  },
  1321: {
    name: "Toret #1321",
    description: "parco salvo d'acquisto, venaria reale",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/09/04/1409043017182.jpg",
    properties: { lat: "45.1210115", lon: "7.6286513" },
  },
  1322: {
    name: "Toret #1322",
    description: "Via del Colli",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/26/IMG_2102_1.JPG",
    properties: { lat: "45.060973", lon: "7.776967" },
  },
  1323: {
    name: "Toret #1323",
    description: 'Piazza Lorenzo Bernini - Il Tris di "Toret" nord',
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2012/11/09/bernini_3.jpg",
    properties: { lat: "45.07649", lon: "7.655630" },
  },
  1324: {
    name: "Toret #1324",
    description: "Corso Giacomo Puccini",
    image: "",
    properties: { lat: "45.11702777", lon: "7.62477777" },
  },
  1325: {
    name: "Toret #1325",
    description: "Corso Giacomo Matteotti angolo Via Don Giovanni Sapino",
    image: "",
    properties: { lat: "45.12997222", lon: "7.62230555" },
  },
  1326: {
    name: "Toret #1326",
    description: "Piazza Montelungo",
    image: "",
    properties: { lat: "45.12722222", lon: "7.62963888" },
  },
  1327: {
    name: "Toret #1327",
    description: "Piazza dei Dolori (Sanremo)",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/13/2013-01-05_09-54-08_HDR.jpg",
    properties: { lat: "43.8184277", lon: "7.774965000000066" },
  },
  1328: {
    name: "Toret #1328",
    description: "Via Vado 9",
    image: "",
    properties: { lat: "45.0308722", lon: "7.6679689" },
  },
  1329: {
    name: "Toret #1329",
    description: "Via Mongrando/Via Oropa/Via Varallo",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/10/17-02-2016-14-15.jpg",
    properties: { lat: "45.070637190332505", lon: "7.708939653967263" },
  },
  1330: {
    name: "Toret #1330",
    description: "Via Giuseppe Mazzini angolo Via Guglielmo Marconi",
    image: "",
    properties: { lat: "45.09342861170324", lon: "7.523299524289996" },
  },
  1332: {
    name: "Toret #1332",
    description: "Via vittorio Scodeggio",
    image: "",
    properties: { lat: "45.1411875", lon: "7.621469" },
  },
  1333: {
    name: "Toret #1333",
    description: "Via Monferrato",
    image: "",
    properties: { lat: "45.0660362", lon: "7.7065894" },
  },
  1334: {
    name: "Toret #1334",
    description: "Giardini Silvio Geuna",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/04/16/GiardinoSilvioGeuna.jpg",
    properties: { lat: "45.0528", lon: "7.66404999" },
  },
  1335: {
    name: "Toret #1335",
    description: "Lungo Dora Siena, 100/A - Campus Luigi Enaudi",
    image:
      "https://ilovetoret.it/up/ima/toret/2013/04/17/cdv_photo_001_2_1.jpg",
    properties: { lat: "45.07372811675582", lon: "7.699408299351587" },
  },
  1336: {
    name: "Toret #1336",
    description: "Parco Gustavo Colonnetti",
    image: "",
    properties: { lat: "45.011429707024504", lon: "7.648660631872872" },
  },
  1337: {
    name: "Toret #1337",
    description: "Piazza Primo Maggio",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/05/13/cdv_photo_011.jpg",
    properties: { lat: "44.98579428427906", lon: "7.740754923348277" },
  },
  1338: {
    name: "Toret #1338",
    description: "via Buridani angolo via Mensa",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2014/05/02/IMG_3371.JPG",
    properties: { lat: " 45.132937", lon: "7.632371" },
  },
  1339: {
    name: "Toret #1339",
    description: "via Bruno Buozzi",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/09/12/Venaria.jpg",
    properties: { lat: "45.125504", lon: "7.642732" },
  },
  1340: {
    name: "Toret #1340",
    description: "Parco III Reggimento Alpini",
    image: "",
    properties: { lat: " 45.130352", lon: "7.633944" },
  },
  1341: {
    name: "Toret #1341",
    description: "Parco III Reggimento Alpini",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2013/06/04/cdv_photo_002.jpg",
    properties: { lat: " 45.130352", lon: "7.633944" },
  },
  1342: {
    name: "Toret #1342",
    description: "via Alfonso Varano parco Colletta",
    image: "",
    properties: { lat: "45.08219160873176", lon: "7.718493708319892" },
  },
  1343: {
    name: "Toret #1343",
    description: "via Norberto Rosa",
    image: "",
    properties: { lat: "45.08915368669862", lon: "7.712322351406555" },
  },
  1344: {
    name: "Toret #1344",
    description: "Corso Cadore, 2-8",
    image: "",
    properties: { lat: "45.07633981572074", lon: "7.722165641192844" },
  },
  1345: {
    name: "Toret #1345",
    description: "via Mongrando, 50",
    image: "",
    properties: { lat: "45.07435397744705", lon: "7.706313521001641" },
  },
  1346: {
    name: "Toret #1346",
    description: "Via Ravello 36-40",
    image: "",
    properties: { lat: "45.06787837473112", lon: "7.648476712151656" },
  },
  1348: {
    name: "Toret #1348",
    description: "Piazza della Repubblica, 12",
    image: "",
    properties: { lat: "45.07684222892399", lon: "7.685149088509087" },
  },
  1350: {
    name: "Toret #1350",
    description: "Piazza dei Dolori - Rivolte San Sebastiano",
    image: "",
    properties: { lat: "43.818518", lon: "7.774954" },
  },
  1351: {
    name: "Toret #1351",
    description: "Parco Dora aree Vitali e Mortare",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/01/22/cdv_photo_001_1.jpg",
    properties: { lat: "45.0908235039817", lon: "7.668114715829323" },
  },
  1352: {
    name: "Toret #1352",
    description: "Parco Dora area Valdocco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/01/22/1438621160687_1.jpg",
    properties: { lat: "45.08864309054327", lon: "7.673409978041651" },
  },
  1353: {
    name: "Toret #1353",
    description: "Parco Dora aree Vitali e Mortare NORD",
    image: "https://ilovetoret.it/up/ima/toret/2014/09/22/1411405867483_1.jpg",
    properties: { lat: "45.09318994177693", lon: "7.667977858473151" },
  },
  1354: {
    name: "Toret #1354",
    description: "Via Enrico Giachino angolo Via Gramegna",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2015/01/06/cdv_photo_001.jpg",
    properties: { lat: "45.09320974888494", lon: "7.674098539644163" },
  },
  1355: {
    name: "Toret #1355",
    description: "Via Francesco Corradi ",
    image: "https://ilovetoret.it/up/ima/toret/2015/03/26/IMG_4452.JPG",
    properties: { lat: "43.8158835", lon: "7.7739587" },
  },
  1356: {
    name: "Toret #1356",
    description: "Viale Mattioli",
    image: "https://ilovetoret.it/up/ima/toret/2015/04/11/1428754449367_1.jpg",
    properties: { lat: "45.0526961", lon: "7.6841169" },
  },
  1357: {
    name: "Toret #1357",
    description: "C.so Enrico Gamba",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/01/22/Toret_1.jpg",
    properties: { lat: "45.0844928", lon: "7.6722711" },
  },
  1358: {
    name: "Toret #1358",
    description: "Via Vittorio Andreis, 18/16s",
    image: "",
    properties: { lat: "45.080609 ", lon: "7.68356" },
  },
  1359: {
    name: "Toret #1359",
    description: "via Torino - Piazza Della Chiesa",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/01/22/TORET_2016_01_08_-1766166618_1.jpg",
    properties: { lat: "45.1781135", lon: "7.8425195" },
  },
  1361: {
    name: "Toret #1361",
    description: "Salone del Libro",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2016/05/14/13-05-2016-11-06.jpg",
    properties: { lat: "45.0297649", lon: "7.6620002" },
  },
  1362: {
    name: "Toret #1362",
    description: "Via L. Ariosto, 36 bis",
    image: "https://ilovetoret.it/up/ima/toret/2016/06/05/IMG_6853.JPG",
    properties: { lat: "45.136766", lon: "7.779937" },
  },
  1363: {
    name: "Toret #1363",
    description: "Vivier, Bardonecchia",
    image:
      "https://ilovetoret.it/up/ima/toret/2017/05/19/toret-bardonecchia.jpg",
    properties: { lat: "45.070833", lon: "6.701889" },
  },
  1364: {
    name: "Toret #1364",
    description: "Via Pietro Cossa 293 / Parco",
    image:
      "https://ilovetoret.it/up/ima/toret/ufficiale/2017/08/07/toret_via_cossa.jpg",
    properties: { lat: "45.096472", lon: "7.628167" },
  },
  1365: {
    name: "Toret #1365",
    description: "Campo da Bocce di Bonzo",
    image: "",
    properties: { lat: "45.367664", lon: "7.305971" },
  },
};

export default async function handler(req, res) {
  res.status(200).json(torets);
}
