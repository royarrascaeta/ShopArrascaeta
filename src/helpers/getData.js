const db = [
  {
    id: 1,
    name: "Epiphone LP Studio LT 2020 Ebony",
    pictureUrl: "gt-elec-epiphone-lespaulstudio-lt2020-ebony.jpg",
    description: "Color: Ebony - Madera: Caoba - Acabado: Satinado - Año: 2020",
    category: "Guitarras Eléctricas",
    price: 55865,
    stock: 8
  },
  {
    id: 12,
    name: "Fender Coronado 1/2 caja Marrón",
    pictureUrl: "gt-elec-fender-coronadomediacaja-marron.jpg",
    description: "Color: Marrón - Madera: Arce",
    category: "Guitarras Eléctricas",
    price: 132449,
    stock: 3
  },
  {
    id: 3,
    name: "Epiphone LP Studio LT 2020 Sunburst",
    pictureUrl: "gt-elec-epiphone-lespaulstudio-lt2020-vintagesunburst.jpg",
    description: "Color: Sunburst - Madera: Caoba - Acabado: Satinado - Año: 2020",
    category: "Guitarras Eléctricas",
    price: 55865,
    stock: 3
  },
  {
    id: 8,
    name: "Telecaster ftl50 - 1950 Blonde",
    pictureUrl: "gt-elec-telecaster-ftl501950-butterscotchblonde.jpg",
    description: "Color: Butterscotch Blonde - Madera: Basswood - Acabado: Laqueado - Año: 2016",
    category: "Guitarras Eléctricas",
    price: 40202,
    stock: 2
  },
  {
    id: 10,
    name: "Epiphone LP Studio LT 2020 Cherry Sunburst",
    pictureUrl: "gt-elec-epiphone-lespaulstudio-lt2020-cherrysunburst.jpg",
    description: "Color: Ebony - Madera: Caoba - Acabado: Satinado - Año: 2020",
    category: "Guitarras Eléctricas",
    price: 55865,
    stock: 2
  },
  {
    id: 6,
    name: "Telecaster ftl50 - 1950 Sunburst",
    pictureUrl: "gt-elec-telecaster-ftl501950-sunburst.jpg",
    description: "Color: Butterscotch Blonde - Madera: Basswood - Acabado: Laqueado - Año: 2016",
    category: "Guitarras Eléctricas",
    price: 40202,
    stock: 4
  },
  {
    id: 7,
    name: "Ibanez JS100 - Joe Satriani HH",
    pictureUrl: "gt-elec-ibanez-js100-joesatrianihh-negro.jpg",
    description: "Color: Negro - Madera: Basswood - Acabado: Laqueado",
    category: "Guitarras Eléctricas",
    price: 197340,
    stock: 3
  },
  {
    id: 14,
    name: "Casio CTX700 - 61 teclas",
    pictureUrl: "kb-casio-ctx700.jpg",
    description: "Color: Negro - Teclas: 61 - Midi: Si",
    category: "Pianos",
    price: 40488,
    stock: 3
  },
  {
    id: 9,
    name: "Yamaha PSREW410 - 76 teclas",
    pictureUrl: "kb-yamaha-psrew410.jpg",
    description: "Color: Negro - Teclas: 76 - Midi: Si",
    category: "Pianos",
    price: 77770,
    stock: 5
  },
  {
    id: 5,
    name: "Sinte Yamaha Reface yc - 37 teclas",
    pictureUrl: "kb-sinte-yamaha-refaceyc.jpg",
    description: "Color: Negro - Teclas: 37 - Tipo: Sintetizador",
    category: "Pianos",
    price: 91254,
    stock: 5
  },
  {
    id: 11,
    name: "Ukelele Gracia - Concierto",
    pictureUrl: "uke-gracia-concierto-marron.jpg",
    description: "Color: Marrón - Tamaño: Concierto",
    category: "Ukeleles",
    price: 14562,
    stock: 13
  },
  {
    id: 2,
    name: "Ukelele Infantil - Soprano",
    pictureUrl: "uke-ukelele-soprano-natural.jpg",
    description: "Color: Natural - Tamaño: Soprano",
    category: "Ukeleles",
    price: 3666,
    stock: 11
  },
  {
    id: 13,
    name: "Guitarlele Bamboo - Natural",
    pictureUrl: "uke-bamboo-natural.jpg",
    description: "Color: Natural - Tamaño: Guitarlele - Cuerdas: 6",
    category: "Ukeleles",
    price: 14387,
    stock: 4
  },
  {
    id: 4,
    name: "Ukelele Ibanez uks10 - Rosewood",
    pictureUrl: "uke-ibanez-uks10-soprano-rosewood.jpg",
    description: "Madera: Caoba - Tamaño: Soprano",
    category: "Ukeleles",
    price: 15985,
    stock: 8
  },
];

export const getData = new Promise((res, rej) => {
    setTimeout(() => {
      res(db);
    }, 2000);
})

export const getItem = new Promise((res, rej) => {
    setTimeout(() => {
      res(db[0]);
    }, 2000);
})